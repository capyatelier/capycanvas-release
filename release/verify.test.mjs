// SPDX-License-Identifier: MIT OR Apache-2.0
import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { inventory, readJson, root, sha256, verify, verifyRuntime } from "./verify.mjs";

const config = readJson(join(root, "release/source.json"));
const original = readJson(join(root, "release/manifest.json"));
function fixture(t) {
  const directory = mkdtempSync(join(tmpdir(), "capy-release-test-"));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  cpSync(join(root, "doc"), directory, { recursive: true });
  return { directory, record: structuredClone(original) };
}

test("committed package passes all deployment gates", () => {
  assert.match(verify(join(root, "doc"), original, config), /Wasm and notices verified/);
});
test("tampered runtime fails before deployment", (t) => {
  const { directory, record } = fixture(t);
  const wasm = Object.keys(record.files).find((path) => path.endsWith(".wasm"));
  writeFileSync(join(directory, wasm), "wrong release");
  assert.throws(() => verify(directory, record, config), /recorded inventory/);
});
test("a stale precache fails even if the file inventory was updated", (t) => {
  const { directory, record } = fixture(t);
  writeFileSync(join(directory, "index.html"), readFileSync(join(directory, "index.html"), "utf8") + "\n<!-- changed -->");
  record.files = inventory(directory);
  assert.throws(() => verify(directory, record, config), /Precache mismatch/);
});
test("worker-only changes require a fresh cache version", (t) => {
  const { directory, record } = fixture(t);
  writeFileSync(join(directory, "sw.js"), readFileSync(join(directory, "sw.js"), "utf8") + "\n// changed\n");
  record.files = inventory(directory);
  assert.throws(() => verify(directory, record, config), /Invalid worker version/);
});
test("symlinks cannot enter the deployment artifact", (t) => {
  const { directory, record } = fixture(t);
  symlinkSync("index.html", join(directory, "alias.html"));
  assert.throws(() => verify(directory, record, config), /Not a regular file/);
});
test("package must match the reviewed source commit", () => {
  assert.throws(() => verify(join(root, "doc"), original, { ...config, commit: sha256("other").slice(0, 40) }), /reviewed source pin/);
});

test("changed asset bytes require a new filename even with a refreshed inventory", (t) => {
  const { directory, record } = fixture(t);
  const app = Object.keys(record.files).find((path) => /\/app\.[a-f0-9]{20}\.js$/.test(path));
  assert.ok(app, "Expected fingerprinted app");
  writeFileSync(join(directory, app), readFileSync(join(directory, app), "utf8") + "\n// changed");
  assert.throws(() => verifyRuntime(directory, inventory(directory)), /Asset filename hash mismatch/);
});
test("the stable Apple icon must match its fingerprinted asset", (t) => {
  const { directory } = fixture(t);
  writeFileSync(join(directory, "apple-touch-icon.png"), "stale icon");
  assert.throws(() => verifyRuntime(directory, inventory(directory)), /Apple icon alias mismatch/);
});
