# Web-release audits

## Update: source 9a1235e — long-press dragging and workspace motion

Reviewed `9a1235ee6998a4a16edcda48ed306484bf94cd90` against `1bd5172`
and confirmed it was pushed to source main. Web changes improve long-press
dragging across targets, drag cursors and shared workspace motion. The new
native workspace persistence crate and its SQLite-related dependencies are
outside the PWA graph; the recorded web dependency inventory is unchanged.

Packaging scripts, branding terms and toolchain versions are unchanged.
Locked license/source checks passed, with no new GPL/LGPL runtime inputs
identified. The build, upstream packaging/launcher checks and artifact
verification passed, producing 180 files and 178 precache entries. Browser
tests remain skipped per the owner's instruction and are recorded as not run.

## Update: source 1bd5172 — columns and drawer dragging

Reviewed `1bd5172fa0e72517e69bc767ac9e52d12a71a71a` against `a7c048c`
and confirmed it was pushed to source main. Changes refine shared column and
tile customization and add collapsed-column drawer dragging on the web.
Dependency manifests, lockfile, packaging scripts, branding terms and toolchain
versions are unchanged. Locked license/source checks passed, with no new
GPL/LGPL runtime inputs identified.

The build, upstream packaging/launcher checks and artifact verification passed,
producing 180 files and 178 precache entries. Browser tests remain skipped per
the owner's instruction and are recorded as not run. Uncommitted source work
is excluded by packaging the pinned, pushed commit.

## Update: source a7c048c — web panels, documents and workspace

Reviewed `a7c048c4db13185563fe010ef21209123a08be98` against `75c72f8`
and fetched the latest pushed upstream commit for packaging. Web changes add
document handling, editor panels, workspace chrome and system status modules
to the explicit fingerprint graph. Shared changes include bounded GPU document
replay and column expansion refinements.

The web crate directly adds serde_json and enables the renderer's PNG feature;
both dependencies were already in the web graph. External dependency versions,
branding terms and release toolchain versions are unchanged. Native Windows
additions remain outside the PWA target. Locked license/source checks passed,
with no new GPL/LGPL runtime inputs identified. The build, upstream packaging/
launcher checks and artifact verification passed, producing 180 files and
178 precache entries. Browser tests remain skipped per the owner's instruction
and are recorded as not run.

## Update: source 75c72f8 — watercolor and web input updates

Reviewed `75c72f847c4610795038b065ee50261290104166` against `1e27123`
and confirmed it was pushed to source main. Changes include watercolor pigment
and wet-field refinements, shared tool/document infrastructure, and web pointer
and startup updates. New interface icons retain the existing project terms.
Native Apple and Android host additions are outside this PWA's target graph.

The shared core now directly uses flate2 with its Rust backend, and the GPU
renderer directly uses crc32fast; both were already web dependencies. External
dependency versions, packaging scripts, branding terms and toolchain versions
are unchanged. Locked license/source checks passed, with no new GPL/LGPL
runtime inputs identified. The build, upstream packaging/launcher checks and
artifact verification passed, producing 176 files and 174 precache entries.
Browser tests remain skipped per the owner's instruction and are recorded
as not run.

## Update: source 1e27123 — WebGPU startup and shared tools

Reviewed `1e27123f4d1c42f2b14c4222949e006c8a310c4e` against `71cefee`
and confirmed it was pushed to source main. Changes include explicit WebGPU
background bindings and startup error recovery, shared Hand/Eyedropper tools,
and workspace, navigator, color and drawer infrastructure. New interface icons
retain the existing project asset terms.

Dependency manifests, lockfile, packaging scripts, branding terms and toolchain
versions are unchanged. Locked license/source checks passed, with no new
GPL/LGPL runtime inputs identified. The build, upstream packaging/launcher
checks and artifact verification passed, producing 159 files and 157 precache
entries. Browser tests remain skipped per the owner's instruction and are
recorded as not run. Uncommitted source work is excluded by packaging the
pinned, pushed commit.

## Update: source 71cefee — runtime filter resources

Reviewed `71cefee4c6f713f3056d8a228d27e526d0622619` against `69e5e7a`
and confirmed it was pushed to source main. Changes load filter definitions
from manifests, prepare shared lookup storage in WGSL, and validate runtime
filter packages across hosts. The PWA includes the first-party filter manifest
and three WGSL resources as fingerprinted, integrity-checked precache assets.
The source build also embeds these resources as a startup fallback.

The shared core adds serde_json, already present in the web graph; no external
dependency versions, license terms or toolchain versions changed. Locked
license/source checks passed, with no new GPL/LGPL runtime inputs identified.
The build, upstream packaging/launcher checks and artifact verification passed,
producing 145 files and 143 precache entries. Browser tests remain skipped per
the owner's instruction and are recorded as not run. Untracked source files
are excluded by packaging the pinned commit.

## Update: source 69e5e7a — GPU filters and web filter picker

Reviewed `69e5e7a47cab6a0fbb0a7fc143dae380a53e9b5e` against `af8f2db`
and confirmed it was pushed to source main. Changes add forty WGSL filters,
cached filter previews, incremental GPU image passes, clipping backdrops and
the web filter picker. The source documents original shader implementations
and explicitly excludes code/assets from its non-permissive inspiration
references. New first-party `effects.js` joins the package fingerprint graph.

The web graph now includes Naga, PNG encoding, web-time and their dependencies.
All added graph entries offer permissive licenses; locked license/source gates
passed. The libm clarification was checked against its original LICENSE.txt:
the library is MIT-licensed and its complete contributor notices are retained.
No GPL/LGPL runtime inputs were identified in the reviewed build. Toolchain
versions and branding terms are unchanged.

The build, upstream packaging/launcher checks and artifact verification passed,
producing 141 files and 139 precache entries. Browser tests remain skipped per
the owner's instruction and are recorded as not run. Uncommitted source work
is excluded by packaging the pinned, pushed commit.

## Update: source af8f2db — layers, shortcuts and docking

Reviewed `af8f2dbf2fcae79075c59304a0650d7c21b0c38f` against `9c857dc`.
The source commit was confirmed pushed to upstream main before packaging.
Changes add the web layers UI, shared layer selection/reference controls, GPU
masks and thumbnails, shortcut hints, docking tabs and workspace toolbar
management. The packager adds first-party `layers.js` to its explicit asset
fingerprint graph. New interface icons retain the project's existing permissive
terms; branding terms are unchanged.

Dependency manifests, lockfile and toolchain versions are unchanged. Locked
license/source checks passed, with no new GPL/LGPL runtime inputs identified.
The build, upstream packaging/launcher checks and artifact verification passed,
producing 125 files and 123 precache entries. Browser tests remain skipped per
the owner's instruction and are recorded as not run. Untracked source files
are excluded by packaging the pinned commit.

## Update: source 9c857dc — workspace, settings and Zen icons

Reviewed `9c857dc0fcefacd87c536338ff32f5e1ccc68c5c` against `3e1d3df`.
Changes refine workspace management, group-level tab display styles, settings
typography and spacing, and shared Zen controls. Four owner-supplied Zen marks
replace the previous mark; the updated branding scope is preserved at the
repository root and in the package. The upstream packager uses the new default
mark and file input for icon rendering.

Dependency manifests, lockfile and toolchain versions are unchanged. Locked
license/source checks passed, with no new GPL/LGPL runtime inputs identified.
The build, upstream packaging/launcher checks and artifact verification passed,
producing 108 files and 106 precache entries. Browser tests remain skipped per
the owner's instruction and are recorded as not run. The untracked source
`._.DS_Store` is excluded by packaging the pinned commit.

## Update: source 3e1d3df — numeric controls and preferences

Reviewed `3e1d3dffdab2f12aba06d9707b27e1be1cff89eb` against `bce1bb6`.
Web changes include touch-first numeric controls, shared expression and slider
policy, wider preferences and type-to-search, plus renderer and cursor updates.
The packager includes the new first-party `numeric.js` in its fingerprint graph
and preserves the updated third-party notices.

The new web dependency `fasteval` 0.2.4 is MIT-licensed; its original notice is
included in the package. The new Android frontend and its platform dependencies
are outside the resolved web graph. Locked license/source checks and artifact
verification passed; no GPL/LGPL inputs were identified in the reviewed web
build. Toolchain versions and branding terms are unchanged.

The build and upstream packaging/launcher checks passed, producing 105 files
and 103 precache entries. Browser tests were skipped at the owner's explicit
request and are recorded as not run. Packaging uses the committed source;
the untracked `._.DS_Store` in the source checkout is excluded.

## Update: source bce1bb6 — panel customization and drawers

Reviewed `bce1bb6330e6c43db6e4b75e91706e780af2fd0e` against `3ef0eca`.
Changes add shared panel customization, live configuration previews, panel
expansion, clipped ribbon layout and refined drawer toggles, transitions and
shadows. The web packager adds the first-party `customization.js` module to its
explicit fingerprint graph and package inventory, alongside two interface icons
covered by the existing project terms.

Dependency manifests, lockfile, toolchain and license terms are unchanged.
Locked license/source checks passed; no new GPL/LGPL runtime inputs were
identified. The build, upstream packaging/launcher checks and artifact-integrity
gates passed, producing 102 files and 100 precache entries. Browser tests were
skipped at the owner's explicit request and are recorded as not run in the
release manifest.

## Update: source 3ef0eca — menu, typography and theme refinements

Reviewed `3ef0eca94f628a1ece050e8d72489b9dcc60eaa4` against `9632cc1`.
Changes group shared menus into sections, use consistent 11pt UI typography,
remove the panel font-size preference while preserving other saved settings,
and label the theme toggle Dark Mode with its effective theme reflected.

The shared UI crate promotes its existing `serde_json` dev dependency to a
runtime dependency for settings migration. It was already part of the web
dependency graph; the lockfile, toolchain, web packager and asset licenses are
unchanged. Locked license/source checks passed, with no new GPL/LGPL runtime
inputs identified.

The build, upstream packaging/launcher checks and artifact-integrity gates
passed. The package contains 99 files and 97 precache entries. Browser tests
were skipped at the owner's explicit request; the release manifest records
them as not run.

## Update: source 9632cc1 — preferences and signed pointer IDs

Reviewed `9632cc1477ac9aa735bd6fc662d93c76acb1bbe8` against `f562c9f`.
Changes add shared preference search, multi-binding shortcut editing, configurable
panel typography and original cursor-mode icons. Signed DOM pointer IDs now
preserve their bits at the unsigned Rust input boundary. The prediction horizon
limit increases from 50ms to 64ms. Native UI and packaging changes are outside
this PWA's build target.

Dependencies, lockfile, web packaging and toolchain are unchanged. The branding
scope now explicitly includes icons generated for GTK as well as the PWA; the
current notice is preserved both at repository root and in the package. No new
GPL/LGPL runtime inputs or third-party artwork were identified.

Browser validation was unreliable on this machine: local Vulkan presentation
failed and alternate configurations produced intermittent input/ink assertions.
The owner confirmed the Vulkan driver is in a bad state and explicitly directed
publication without further tests. This release therefore does not claim a
complete reliable browser-validation pass; the manifest records browser tests
as not run for the final packaging command. The 75 shared UI/engine Rust tests
passed before that instruction. License and artifact-integrity gates remain in
the normal packaging process.

## Update: source f562c9f — asset fingerprints and iPad fixes

Reviewed `f562c9f5cb230f102f10ae0f188c5b4d16668340` against `f179b58`.
The upstream packager now fingerprints each asset after rewriting its dependency
URLs. This covers JS, CSS, Wasm and artwork, with changed dependency hashes
propagating into consumers. The service worker retains its integrity-checked,
deferred update behavior. Apple receives opaque 180px icon artwork at both a
fingerprinted URL and a stable `apple-touch-icon.png` alias with a query hash.

Runtime changes prevent sticky touch hover and selectable/draggable cursor
artwork, preserve mouse/pen hover after touch, and add shared About links.
Native About-link changes are outside the PWA artifact. No dependencies,
toolchain versions, license terms or third-party assets were added; no new
GPL/LGPL inputs were identified. The release verifier was adapted to validate
individual filename hashes and the Apple alias without weakening the precache
or previous-release checks.

Validation passed: locked license/source checks, 18 upstream packaging/launcher
tests, eight hosting-verifier tests, all three packaged Chrome suites (PWA,
GPU startup and preferences), and the shared Rust About-link test. Upgrade tests
verify that changed JS/CSS actually execute with HTTP caching enabled and then
work offline. Touch checks cover both themes and touch-to-mouse/pen switching;
icon checks cover opaque Apple corners, the stable URL and offline retrieval.
This is browser automation, not a physical iPad Home Screen installation test.
The release contains 94 files and 92 precache entries.

## Update: source f179b58 — fullscreen

Reviewed `f179b589238fc6b1142904d809fd0ec12747a5c0` against `ee35c09`.
This release adds a browser fullscreen toggle beside Settings, with enter/exit
icons, unavailable-API handling and error recovery. It also includes updated
platform browser-support and Linux GPU troubleshooting help.

The two new SVG icons are original project assets under the existing permissive
terms, as documented in the source icon bank. Cargo dependencies, lockfile,
build/packaging scripts, license policy and toolchain are unchanged. No new
GPL/LGPL inputs were identified in the reviewed changes.

The locked license/source gate, 15 upstream unit tests and both Chrome package
suites passed. Fullscreen checks exercised real entry/exit, external exits,
rejected requests, unavailable API, Settings access and GPU ink after resize.
Offline drawing, safe updates and GPU startup/help checks also passed. This
release contains 93 files and 91 precache entries, recorded with exact hashes
in `release/manifest.json`.

## Update: source ee35c09

Reviewed source commit `ee35c09d8d88f992878f95720d9a0bf1d15c3726` against the
initial `46010d5` release. Changes cover platform-specific GPU startup help,
structured adapter/device/renderer failure diagnostics, theme metadata and
Dark Reader opt-out, plus rounded mid-gray app icons and a dedicated 32px
favicon. The existing project mark is retained; no new third-party assets,
dependencies or license terms were introduced.

Cargo.lock, Cargo manifests, build.sh, about.toml and the pinned toolchain are
unchanged. The independent locked license/source gate passed again; the
reviewed changes introduce no GPL/LGPL runtime inputs. The package still uses
the upstream build process and preserves its service-worker integrity hashes.

Validation passed: 15 upstream unit tests, both Chrome package suites (offline
drawing, icon pixels, safe updates and 17 startup/help scenarios), and the host
integrity checks. Browser identity overrides test help routing, not actual
Safari/Firefox/mobile GPU implementations. This release contains 91 files and
89 precache entries; exact dependency and artifact hashes are recorded in
`release/manifest.json`.

## Initial web-release audit — 2026-09-07

**Result: no GPL/LGPL code identified in the reviewed PWA build inputs or web
dependency graph. The initial web release may proceed.** This conclusion applies
to source commit `46010d54cd5f9a30b66a977f9fe64f19c307e493` and the toolchain pinned
in `release/source.json`. It does not cover native application distribution or
future dependency/source/toolchain changes.

## Evidence and scope

Reviewed the source workspace manifests and lockfile; `apps/layer-web/build.sh`,
`package.mjs`, `about.toml` and service worker; Rust/WGSL/JS and runtime asset
inventory; source publication/provenance notes; and installed Rust standard
library sources and copyright inventory. The generated
[`release/manifest.json`](release/manifest.json) records source/lockfile identity,
all 59 packages in the web normal/build graph (53 external and six project
crates), tool versions, Wasm imports and the SHA-256 of every published file.

`cargo-deny 0.20.2` passed the license/source policy over the complete locked
workspace, including build/dev dependencies and all target platforms. This
broader check covers 201 external locked Rust packages. The web graph was
separately resolved with:

```bash
cargo tree --locked -p layer-web --target wasm32-unknown-unknown --edges normal,build --prefix none --format '{p}|{l}'
```

The graph contains MIT/Apache alternatives, Unicode-3.0 and Zlib terms; no
GPL-family license expression. `unicode-ident` requires Unicode-3.0 in addition
to its MIT/Apache option. The packager ships original selected notices, including
build-time crates, and retains project attribution and branding terms.

| Area | Finding |
| --- | --- |
| Wasm compilation | `cargo build --locked --profile web-release -p layer-web --target wasm32-unknown-unknown`; no workspace/native build |
| Native libraries | GTK/libadwaita have LGPL obligations, but `layer-linux`, GTK, GLib, Cairo, Pango and Wayland do not occur in the web graph or published runtime |
| Bindings and UI | Matching `wasm-bindgen 0.2.128` generates web JS/Wasm; first-party JS/CSS copied directly, no npm bundler, CDN runtime or vendored UI toolkit |
| Rust runtime | Rust 1.96.0 standard-library code is MIT OR Apache-2.0; compiler-builtins also carries MIT and Apache-2.0 WITH LLVM-exception terms. Full installed notices are retained |
| Shaders and artwork | Project WGSL/brush masks/previews and generic SVGs; MIT Oklab adaptation attributed to Björn Ottosson; capybara mark under separate branding terms |
| Artifact boundary | One web Wasm module, JS, CSS, icons/previews, manifest, worker and notices; no native library, Rust source tree, executable build tools or node_modules |

`wasm32-unknown-unknown` uses Rust's LLVM/Wasm tooling and does not import a host
operating system's C/GTK runtime. The generated Wasm imports only functions from
the matching `./layer_web_bg.js` bindings. Import inspection supports the artifact
boundary; absence of imports alone is not proof against statically linked code,
which is why dependency and source review are included.
[Rust target documentation](https://doc.rust-lang.org/stable/rustc/platform-support/wasm32-unknown-unknown.html)

## Findings that need explanation

**GPL text in the toolchain notice file is not a linked GPL component.** The
15.4 MB `rust-toolchain-notices.html` is the installed toolchain's complete
copyright document. Its GPL-only entries include `src/gcc`, GCC test fixtures,
`gccjit` and `gccjit_sys` (the last two explicitly marked “In libstd: No”). These
are outside the default LLVM-based Wasm build. Other entries offer permissive
alternatives to GPL/LGPL, such as `r-efi` and `self_cell`, and concern other
targets/tools. Rust's Wasm allocator is `dlmalloc`; the toolchain's `unwind`
source selects Wasm support rather than its Linux `gcc_s` branch. The notices
file intentionally includes more than the linked graph; keep it intact.

**A missing notice is already a hard packaging failure.** `profiling 1.0.18`
omits its license text from the crate archive. Source `about.toml` retrieves the
MIT notice at the crate's recorded upstream revision and checks SHA-256
`c8167fdeeed46d3f244d3f85c5bf998ce889343691c32be2c61a8bc4b5c08333`.
An offline cargo-about invocation can return a placeholder even with `--fail`;
the source packager's additional `dependencyNotices` check rejects it. Network
access is therefore required for that notice unless the tool can retrieve a
verified cached copy. Do not suppress the check or substitute generic MIT text.

**Native LGPL is outside this release.** The full Cargo check audits Rust crate
licenses, not linked system libraries. A native GTK/libadwaita package needs a
separate binary distribution audit and LGPL compliance work. The target-specific
web graph and curated package boundary are what exclude those libraries here.

**Branding remains separately licensed.** This is a package of unmodified
official source. Preserve `BRANDING.md`, the brand SVG notice and all generated
app-icon terms. Normal packaging is allowed by those terms. Modified public
applications must follow the source branding policy.

## Packaging and release controls

The upstream packager already locks dependencies, strips debug data, remaps
private paths, renders its own icons, groups matching runtime files under a
content hash and validates original license notices. Its worker hashes every
precached file, rejects incomplete/mismatched updates and waits for existing
tabs to close. The host wrapper preserves those bytes and adds only CNAME
metadata outside the precache. No application build logic was duplicated here.

The hosting wrapper exports a pinned source commit into its own temporary build
directory; records dependency and artifact inventories; validates every precache
hash; and leaves a previous release intact if build/test gates fail. Its independent
permissive policy prevents a changed source `deny.toml` from silently loosening
the release check. Compiler flags and tool versions are constrained. An official
toolchain, reviewed Cargo configuration and trusted build tools remain inputs to
the audit; the wrapper is not a hermetic supply-chain attestation.

The Pages workflow publishes only the reviewed committed `doc/`, with content
verification before upload and separate deployment permissions. Official Actions
are pinned at the workflow level; nested dependencies of those actions remain
upstream-managed. No source checkout or application compilation happens on CI.

## Initial release validation

The clean build passed the upstream launcher/packaging unit suite and both real
Chrome package suites. Browser checks passed installability and offline cold
Wasm startup with real GPU drawing/previews at `/` and `/nested/capy/`, failed
update recovery, deferred activation, cache-scope isolation, and missing-API,
missing-adapter, device-failure and pending-startup UI/retry cases. These tests
used a disposable Chrome profile, not an installed OS PWA.

The final host package has 90 files, 88 integrity-checked precache entries and
one Wasm module. Hosting verification additionally checks the runtime directory's
content hash, source/tool pins, original notice coverage and artifact inventory.
Failure tests cover tampered runtime, stale precaches, worker-only changes,
symlinks and a mismatched source pin.

## Future release gate and path forward

For every changed source pin, review the source/asset diff and repeat these
checks. Toolchain changes require a fresh standard-library/toolchain notice
review: Cargo metadata does not enumerate precompiled standard-library internals.
Retain all required notices even when a dependency passes the license allowlist.

If GPL/LGPL enters the web runtime, **stop publication**. Find its introducing
dependency/feature, disable an unused native feature or replace it with a
reviewed permissive implementation, then rebuild and re-audit. If it is essential,
obtain a suitable alternative license or deliberately adopt and satisfy the
applicable distribution obligations before release. Do not delete license text,
raise the allowlist or assume the application's MIT option relicenses a dependency.

This is an evidence-based build/provenance audit, not proof of authorship of
every line. First-party asset provenance relies on the source's recorded author
declarations. Device-specific PWA installation and browser storage eviction
remain separate from license and packaging checks.
