// SPDX-License-Identifier: MIT OR Apache-2.0
// Host packaging only; compilation and PWA generation belong to capycanvas.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { inventory, readJson, root, sha256, verify } from "./verify.mjs";

const config = readJson(join(root, "release/source.json"));
const args = process.argv.slice(2);
const browserTests = args.includes("--browser-tests");
const skipTests = args.includes("--skip-tests");
const positional = args.filter((arg) => !["--browser-tests", "--skip-tests"].includes(arg));
assert.ok(!skipTests || !browserTests, "--skip-tests cannot be combined with --browser-tests");
assert.ok(positional.length <= 1 && !positional.some((arg) => arg.startsWith("--")), "Usage: node release/build.mjs [../draw] [--browser-tests|--skip-tests]");
const source = resolve(positional[0] || join(root, "../draw"));
const run = (cmd, args, options = {}) => execFileSync(cmd, args, { cwd: root, stdio: "inherit", ...options });
const capture = (cmd, args, options = {}) => run(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"], maxBuffer: 32 * 1024 * 1024, ...options }).trim();
function tool(name, override, version) {
  for (const command of override ? [override] : [name, join(process.env.CARGO_HOME || join(homedir(), ".cargo"), "bin", name)]) {
    try {
      const actual = capture(command, ["--version"], { stdio: ["ignore", "pipe", "ignore"] });
      assert.ok(actual === version || actual.endsWith(" " + version), `Need ${name} ${version}, got ${actual}`);
      return command;
    } catch (error) { if (override || error.code === "ERR_ASSERTION") throw error; }
  }
  throw new Error(`Install ${name} ${version}; see README.md`);
}
assert.match(config.commit, /^[a-f0-9]{40}$/);
assert.equal(capture("git", ["-C", source, "rev-parse", `${config.commit}^{commit}`]), config.commit);
assert.ok(!process.env.RUSTFLAGS && !process.env.CARGO_ENCODED_RUSTFLAGS, "Release builds require default audited Rust flags");
const rustVersion = capture("rustc", ["--version"]);
assert.ok(rustVersion.startsWith(`rustc ${config.rust} `), `Use audited Rust ${config.rust}; got ${rustVersion}`);
assert.ok(Number(process.versions.node.split(".")[0]) >= 22, "Node.js 22+ required");
const bindgen = tool("wasm-bindgen", process.env.LAYER_WASM_BINDGEN, config.wasmBindgen);
const about = tool("cargo-about", process.env.LAYER_CARGO_ABOUT, config.cargoAbout);
const deny = tool("cargo-deny", process.env.CAPY_CARGO_DENY, config.cargoDeny);
const resvg = tool("resvg", process.env.LAYER_RESVG, config.resvg);
const output = join(root, "doc"), manifestPath = join(root, "release/manifest.json");
const escapeHtml = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
if (existsSync(output)) {
  assert.ok(existsSync(manifestPath), "Refusing to replace an unowned doc directory");
  const previous = readJson(manifestPath);
  verify(output, previous, { ...config, ...previous.tools, rust: previous.tools.rustc.split(" ")[1], commit: previous.source.commit, domain: previous.domain });
}
mkdirSync(join(root, ".release-work"), { recursive: true });
const work = mkdtempSync(join(root, ".release-work/build-"));
try {
  const snapshot = join(work, "source");
  mkdirSync(snapshot);
  // Export the reviewed commit, never a dirty worktree or stale dist directory.
  const archive = run("git", ["-C", source, "archive", "--format=tar", config.commit], { stdio: ["ignore", "pipe", "inherit"], maxBuffer: 256 * 1024 * 1024 });
  run("tar", ["-xf", "-", "-C", snapshot], { input: archive, stdio: ["pipe", "inherit", "inherit"] });
  const options = { cwd: snapshot, env: { ...process.env, CARGO_TARGET_DIR: join(snapshot, "target"), LAYER_WASM_BINDGEN: bindgen, LAYER_CARGO_ABOUT: about, LAYER_RESVG: resvg } };
  run(deny, ["--manifest-path", join(snapshot, "Cargo.toml"), "--locked", "--config", join(root, "release/deny.toml"), "check", "licenses", "sources"], options);
  const tree = capture("cargo", ["tree", "--locked", "-p", "layer-web", "--target", "wasm32-unknown-unknown", "--edges", "normal", "--prefix", "none", "--format", "{p}|{l}"], options);
  const dependencies = [...new Map(tree.split("\n").map((line) => {
    const [pkg, rawLicense] = line.split("|");
    const [name, version] = pkg.split(" ");
    const license = rawLicense.replace(/ \(\*\)$/, "");
    assert.ok(license && !/\b(?:A|L)?GPL\b/i.test(license), `GPL-family or missing license: ${line}`);
    assert.ok(!/^(?:gtk|gdk|glib|gio|pango|cairo|libadwaita|wayland|layer-linux)(?:$|[-\d])/.test(name), `Native dependency in web graph: ${name}`);
    return [name + version, { name, version: version.slice(1), license }];
  })).values()].sort((a, b) => a.name.localeCompare(b.name, "en"));
  if (!skipTests) run("node", ["--test", "apps/layer-web/run.test.mjs", "apps/layer-web/package.test.mjs"], options);
  run("node", ["apps/layer-web/package.mjs"], options);
  if (browserTests) {
    run("node", ["apps/layer-web/test.mjs", "--package"], options);
    run("node", ["apps/layer-web/test.mjs", "--package", "--gpu-startup"], options);
    run("node", ["apps/layer-web/test.mjs", "--package", "--preferences"], options);
  }
  const site = join(work, "doc");
  cpSync(join(snapshot, "dist/capycanvas"), site, { recursive: true });
  let notices = readFileSync(join(site, "dependency-licenses.html"), "utf8");
  // cargo-about omits patched crates because Cargo reports them as local
  // sources. Preserve their shipped license texts in the published notice.
  for (const entry of readdirSync(join(snapshot, "vendor"), { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const vendor = join(snapshot, "vendor", entry.name);
    const cargo = readFileSync(join(vendor, "Cargo.toml"), "utf8");
    const name = cargo.match(/^name\s*=\s*"([^"]+)"/m)?.[1];
    const version = cargo.match(/^version\s*=\s*"([^"]+)"/m)?.[1];
    if (!name || !version || !dependencies.some((dependency) => dependency.name === name && dependency.version === version)) continue;
    if (notices.includes(`<li>${name} ${version}</li>`)) continue;
    const licenses = ["LICENSE", "LICENSE.txt", "LICENSE-MIT", "LICENSE-APACHE", "LICENSE.MIT", "LICENSE.APACHE", "COPYING"].filter((path) => existsSync(join(vendor, path)));
    assert.ok(licenses.length, `Missing vendor license notice: ${name}`);
    notices += `\n<section><h2>${escapeHtml(name)}</h2><ul><li>${escapeHtml(name)} ${escapeHtml(version)}</li></ul><pre>${escapeHtml(licenses.map((path) => readFileSync(join(vendor, path), "utf8")).join("\n\n"))}</pre></section>\n`;
  }
  // Zune crates declare their licenses but omit the text from their crate
  // archives. Use the upstream 0.4.21-jpeg tag, pinned by this SHA-256, as
  // their original shared license notice.
  const zune = readFileSync(join(root, "release/notices/zune-image-0.4.21-jpeg-LICENSE.md"), "utf8");
  assert.equal(sha256(zune), "7f3a1f49123d3cdc27e9484ea62d1e64f685ee2b141e1fb2e2627189e7e5466b", "Unexpected Zune upstream license notice");
  const zuneDependencies = dependencies.filter((dependency) => dependency.name.startsWith("zune-") && !notices.includes(`<li>${dependency.name} ${dependency.version}</li>`));
  if (zuneDependencies.length)
    notices += `\n<section><h2>zune-image upstream license notice</h2><ul>${zuneDependencies.map((dependency) => `<li>${dependency.name} ${dependency.version}</li>`).join("")}</ul><pre>${escapeHtml(zune)}</pre></section>\n`;
  writeFileSync(join(site, "dependency-licenses.html"), notices);
  const workerTemplate = readFileSync(join(snapshot, "apps/layer-web/sw.js"), "utf8");
  const precache = Object.keys(inventory(site)).filter((path) => !["sw.js", ".capy-package", "CNAME"].includes(path)).map((path) => ({
    path, integrity: "sha256-" + sha256(readFileSync(join(site, path)), "base64"),
  }));
  const workerVersion = sha256(workerTemplate + "\0" + JSON.stringify(precache));
  writeFileSync(join(site, "sw.js"), workerTemplate.replace('"__CAPY_VERSION__"', JSON.stringify(workerVersion)).replace("__CAPY_FILES__", JSON.stringify(precache)));
  writeFileSync(join(site, ".capy-package"), workerVersion + "\n");
  rmSync(join(site, ".capy-package"));
  writeFileSync(join(site, "CNAME"), config.domain + "\n");
  const files = inventory(site);
  const wasmPath = Object.keys(files).find((path) => path.endsWith(".wasm"));
  const record = {
    schemaVersion: 1,
    source: { repository: config.repository, commit: config.commit, cargoLockSha256: sha256(readFileSync(join(snapshot, "Cargo.lock"))) },
    domain: config.domain,
    target: "wasm32-unknown-unknown",
    profile: "web-release",
    tools: { rustc: rustVersion, node: process.version, wasmBindgen: config.wasmBindgen, cargoAbout: config.cargoAbout, cargoDeny: config.cargoDeny, resvg: config.resvg },
    checks: { licenses: "passed", sources: "passed", upstreamUnitTests: skipTests ? "not run" : "passed", upstreamBrowserTests: browserTests ? "passed" : "not run" },
    workerVersion, dependencies,
    wasmImports: WebAssembly.Module.imports(new WebAssembly.Module(readFileSync(join(site, wasmPath)))),
    files,
  };
  console.log(verify(site, record, config));
  writeFileSync(join(work, "manifest.json"), JSON.stringify(record, null, 2) + "\n");
  // All gates finish before replacing a release. Roll back ordinary I/O errors.
  const oldDoc = join(work, "previous-doc"), oldManifest = join(work, "previous-manifest.json");
  if (existsSync(output)) renameSync(output, oldDoc);
  try {
    if (existsSync(manifestPath)) renameSync(manifestPath, oldManifest);
    renameSync(site, output);
    renameSync(join(work, "manifest.json"), manifestPath);
  } catch (error) {
    if (existsSync(output)) rmSync(output, { recursive: true });
    if (existsSync(oldDoc)) renameSync(oldDoc, output);
    if (existsSync(oldManifest)) renameSync(oldManifest, manifestPath);
    throw error;
  }
  console.log(`Packaged ${config.commit} into doc/`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
