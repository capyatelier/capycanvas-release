// SPDX-License-Identifier: MIT OR Apache-2.0
// Host packaging only; compilation and PWA generation belong to capycanvas.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { inventory, readJson, root, sha256, verify } from "./verify.mjs";

const config = readJson(join(root, "release/source.json"));
const args = process.argv.slice(2);
const browserTests = args.includes("--browser-tests");
const positional = args.filter((arg) => arg !== "--browser-tests");
assert.ok(positional.length <= 1 && !positional.some((arg) => arg.startsWith("--")), "Usage: node release/build.mjs [../draw] [--browser-tests]");
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
  const archive = run("git", ["-C", source, "archive", "--format=tar", config.commit], { stdio: ["ignore", "pipe", "inherit"], maxBuffer: 32 * 1024 * 1024 });
  run("tar", ["-xf", "-", "-C", snapshot], { input: archive, stdio: ["pipe", "inherit", "inherit"] });
  const options = { cwd: snapshot, env: { ...process.env, CARGO_TARGET_DIR: join(snapshot, "target"), LAYER_WASM_BINDGEN: bindgen, LAYER_CARGO_ABOUT: about, LAYER_RESVG: resvg } };
  run(deny, ["--manifest-path", join(snapshot, "Cargo.toml"), "--locked", "--config", join(root, "release/deny.toml"), "check", "licenses", "sources"], options);
  const tree = capture("cargo", ["tree", "--locked", "-p", "layer-web", "--target", "wasm32-unknown-unknown", "--edges", "normal,build", "--prefix", "none", "--format", "{p}|{l}"], options);
  const dependencies = [...new Map(tree.split("\n").map((line) => {
    const [pkg, rawLicense] = line.split("|");
    const [name, version] = pkg.split(" ");
    const license = rawLicense.replace(/ \(\*\)$/, "");
    assert.ok(license && !/\b(?:A|L)?GPL\b/i.test(license), `GPL-family or missing license: ${line}`);
    assert.ok(!/^(?:gtk|gdk|glib|gio|pango|cairo|libadwaita|wayland|layer-linux)(?:$|[-\d])/.test(name), `Native dependency in web graph: ${name}`);
    return [name + version, { name, version: version.slice(1), license }];
  })).values()].sort((a, b) => a.name.localeCompare(b.name, "en"));
  run("node", ["--test", "apps/layer-web/run.test.mjs", "apps/layer-web/package.test.mjs"], options);
  run("node", ["apps/layer-web/package.mjs"], options);
  if (browserTests) {
    run("node", ["apps/layer-web/test.mjs", "--package"], options);
    run("node", ["apps/layer-web/test.mjs", "--package", "--gpu-startup"], options);
    run("node", ["apps/layer-web/test.mjs", "--package", "--preferences"], options);
  }
  const site = join(work, "doc");
  cpSync(join(snapshot, "dist/capycanvas"), site, { recursive: true });
  const workerVersion = readFileSync(join(site, ".capy-package"), "utf8").trim();
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
    checks: { licenses: "passed", sources: "passed", upstreamUnitTests: "passed", upstreamBrowserTests: browserTests ? "passed" : "not run" },
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
