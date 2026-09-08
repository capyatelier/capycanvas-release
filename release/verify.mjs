// SPDX-License-Identifier: MIT OR Apache-2.0
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { lstatSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const sha256 = (bytes, encoding = "hex") => createHash("sha256").update(bytes).digest(encoding);
export const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));

export function filesIn(directory, prefix = "") {
  assert.ok(lstatSync(directory).isDirectory(), "Package root must be a real directory");
  return readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "en")).flatMap((entry) => {
    const path = prefix + entry.name;
    if (entry.isDirectory()) return filesIn(join(directory, entry.name), path + "/");
    assert.ok(entry.isFile(), `Not a regular file: ${path}`);
    return [path];
  });
}

export function inventory(directory) {
  return Object.fromEntries(filesIn(directory).map((path) => {
    const bytes = readFileSync(join(directory, path));
    return [path, { bytes: bytes.length, sha256: sha256(bytes) }];
  }));
}

export function verifyRuntime(directory, files) {
  const assets = Object.keys(files).filter((path) => path.startsWith("assets/"));
  assert.ok(assets.length, "Missing runtime assets");
  const legacy = assets[0].match(/^assets\/([a-f0-9]{20})\//);
  if (legacy) {
    // Retain verification of the previous release during replacement/rollback.
    const prefix = `assets/${legacy[1]}/`, hash = createHash("sha256");
    assert.ok(assets.every((path) => path.startsWith(prefix)), "Mixed runtime layouts");
    for (const path of filesIn(join(directory, prefix)))
      hash.update(path + "\0").update(readFileSync(join(directory, prefix, path)));
    assert.equal(hash.digest("hex").slice(0, 20), legacy[1], "Runtime directory hash mismatch");
  } else {
    for (const path of assets) {
      const fingerprint = path.match(/\.([a-f0-9]{20})\.[a-z0-9]+$/)?.[1];
      assert.ok(fingerprint, `Missing asset filename fingerprint: ${path}`);
      assert.equal(sha256(readFileSync(join(directory, path))).slice(0, 20), fingerprint, `Asset filename hash mismatch: ${path}`);
    }
    const apple = assets.filter((path) => /^assets\/icon-180\.[a-f0-9]{20}\.png$/.test(path));
    assert.equal(apple.length, 1, "Missing fingerprinted Apple icon");
    assert.deepEqual(readFileSync(join(directory, "apple-touch-icon.png")), readFileSync(join(directory, apple[0])), "Apple icon alias mismatch");
    const html = readFileSync(join(directory, "index.html"), "utf8");
    const iconUrl = html.match(/<link rel="apple-touch-icon"[^>]*href="([^"]+)"/)?.[1];
    assert.equal(iconUrl, `./apple-touch-icon.png?v=${sha256(readFileSync(join(directory, apple[0]))).slice(0, 20)}`, "Apple icon query fingerprint mismatch");
  }
}

export function verify(directory, record, config) {
  assert.equal(record.source.commit, config.commit, "Release must match the reviewed source pin");
  assert.equal(record.source.repository, config.repository);
  assert.equal(record.domain, config.domain);
  assert.equal(record.target, "wasm32-unknown-unknown");
  assert.equal(record.profile, "web-release");
  for (const gate of ["licenses", "sources", "upstreamUnitTests"]) assert.equal(record.checks[gate], "passed", `Missing release gate: ${gate}`);
  assert.ok(record.tools.rustc.startsWith(`rustc ${config.rust} `));
  for (const tool of ["wasmBindgen", "cargoAbout", "cargoDeny", "resvg"]) assert.equal(record.tools[tool], config[tool], `Unreviewed ${tool}`);
  assert.deepEqual(inventory(directory), record.files, "Package differs from its recorded inventory");
  const read = (path) => readFileSync(join(directory, path), "utf8");
  assert.equal(read("CNAME"), config.domain + "\n");
  assert.equal(read(".nojekyll"), "");
  const worker = read("sw.js");
  const version = JSON.parse(worker.match(/^const VERSION = (.+);$/m)?.[1] || "null");
  const precache = JSON.parse(worker.match(/^const FILES = (.+);$/m)?.[1] || "null");
  assert.ok(Array.isArray(precache), "Missing precache");
  assert.equal(version, record.workerVersion);
  const template = worker.replace(/^const VERSION = .+;$/m, 'const VERSION = "__CAPY_VERSION__";')
    .replace(/^const FILES = .+;$/m, "const FILES = __CAPY_FILES__;");
  assert.equal(sha256(template + "\0" + JSON.stringify(precache)), version, "Invalid worker version");
  // CNAME is hosting metadata added after packaging; it is never an app resource.
  assert.deepEqual(precache.map((file) => file.path).sort(), Object.keys(record.files).filter((path) => !["sw.js", "CNAME"].includes(path)).sort());
  for (const file of precache)
    assert.equal(file.integrity, "sha256-" + sha256(readFileSync(join(directory, file.path)), "base64"), `Precache mismatch: ${file.path}`);

  const manifest = JSON.parse(read("manifest.webmanifest"));
  for (const key of ["id", "scope", "start_url"]) assert.equal(manifest[key], "./");
  assert.equal(manifest.display, "standalone");
  assert.deepEqual(manifest.icons.map((icon) => icon.sizes), ["192x192", "512x512"]);
  for (const icon of manifest.icons) assert.ok(record.files[icon.src], `Missing icon ${icon.src}`);
  assert.match(read("index.html"), /serviceWorker\.register\("\.\/sw\.js"/);
  for (const name of ["LICENSE", "LICENSE-MIT", "LICENSE-APACHE", "BRANDING.md", "THIRD_PARTY_NOTICES.md", "licenses.html", "dependency-licenses.html", "rust-toolchain-notices.html"])
    assert.ok(record.files[name]?.bytes > 0, `Missing notice: ${name}`);
  for (const dependency of record.dependencies.filter((item) => !item.name.startsWith("layer-")))
    assert.ok(read("dependency-licenses.html").includes(`<li>${dependency.name} ${dependency.version}</li>`), `Missing dependency notice: ${dependency.name}`);

  const wasm = Object.keys(record.files).filter((path) => path.endsWith(".wasm"));
  assert.equal(wasm.length, 1, "Expected only the web application's Wasm");
  verifyRuntime(directory, record.files);
  const module = new WebAssembly.Module(readFileSync(join(directory, wasm[0])));
  assert.deepEqual(WebAssembly.Module.imports(module), record.wasmImports);
  assert.ok(record.wasmImports.every((item) => item.module === "./layer_web_bg.js" && item.kind === "function"), "Unexpected non-JS Wasm imports");
  for (const path of Object.keys(record.files)) {
    assert.ok(!/\.(?:rs|toml|map|d\.ts|so|a|rlib|exe)$/.test(path), `Unexpected build/source artifact: ${path}`);
    if (path.startsWith("assets/")) {
      const text = readFileSync(join(directory, path)).toString("latin1");
      assert.ok(!/\/(?:home|Users)\/[^\s/]+|[A-Z]:\\Users\\|-----BEGIN (?:\w+ )?PRIVATE KEY-----/.test(text), `Private path/key in ${path}`);
    }
  }
  return `${Object.keys(record.files).length} files; ${precache.length} precache entries; Wasm and notices verified`;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(verify(join(root, "doc"), readJson(join(root, "release/manifest.json")), readJson(join(root, "release/source.json"))));
}
