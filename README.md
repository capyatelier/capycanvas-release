# Capy Canvas PWA releases

Built releases of [Capy Canvas](https://github.com/capyatelier/capycanvas) for
**https://editor.capycanvas.art/**. This repository owns hosting and final release
layout. Application code, compilation, icons, license harvesting and PWA generation
live in the source repository, normally checked out alongside this one as `../draw`.

The upstream remote is `git@github.com:capyatelier/capycanvas-release.git` (`origin`),
with releases on `main`.

| Path | Purpose |
| --- | --- |
| `doc/` | Complete committed static PWA, including Wasm and license notices |
| `release/` | Packaging, verification, license policy and pinned source/tools |
| `release/manifest.json` | Source revision, lockfile hash, dependency inventory, checks, Wasm imports and every published file's SHA-256 |
| `.github/workflows/pages.yml` | Verify the committed package and deploy `doc/` |
| [AUDIT.md](AUDIT.md) | Initial GPL/LGPL and build-process audit, scope and follow-up policy |
| [HOSTING.md](HOSTING.md) | GitHub Pages, Porkbun and Cloudflare setup |

GitHub Pages' branch publishing supports `/` or `/docs`, not `/doc`. The included
Actions workflow uploads **the contents of `doc/`** as the site root; select
**GitHub Actions** in repository Settings → Pages. No Rust compilation or access
to the source repository is needed in deployment CI. [GitHub documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Build a release

Install Git, Bash, tar, Node.js 22+ and the versions recorded in
[`release/source.json`](release/source.json). The initial release uses Rust 1.96.0:

```bash
rustup toolchain install 1.96.0 --profile minimal --component rust-docs --component rust-src --target wasm32-unknown-unknown
export RUSTUP_TOOLCHAIN=1.96.0
cargo install wasm-bindgen-cli --version 0.2.128 --locked
cargo install cargo-about --version 0.9.2 --features cli --locked
cargo install cargo-deny --version 0.20.2 --locked
cargo install resvg --version 0.48.1 --locked
node release/build.mjs ../draw
```

Tools can be on `PATH` or in Cargo's bin directory. Optional executable overrides:
`LAYER_WASM_BINDGEN`, `LAYER_CARGO_ABOUT`, `CAPY_CARGO_DENY`, `LAYER_RESVG`.
Dependency downloads and the pinned upstream `profiling` license require network
access. The build verifies tool versions and rejects extra Rust compiler flags.
Use a normal unmodified official Rust toolchain and no custom Cargo configuration
that substitutes dependencies or adds linker inputs.

The wrapper exports exactly the pinned source commit with `git archive` into an
ignored temporary directory here. It never compiles the source worktree or copies
an old `../draw/dist` bundle. Uncommitted source edits and a newer source HEAD do
not enter the release. All application build work calls the exported source's
`apps/layer-web/package.mjs`, which calls its `build.sh`.

Before compilation, the wrapper runs this repository's independent permissive
license policy against the entire locked Rust workspace and rejects GPL-family
or native UI dependencies in the web graph. It runs the upstream packaging unit
tests. Before replacing `doc/`, it checks the generated notices, single Wasm
module, imports, package inventory, manifest and every precache integrity hash.
An existing package must match its recorded manifest before it can be replaced.
Normal build/test failures preserve the previous release; temporary builds are
removed. Replacement rolls back ordinary I/O errors, but is not a crash-proof
transaction across the directory and manifest. Run only one release build at a time.

The sole hosting addition is `doc/CNAME`. The source packager's local ownership
marker is removed. All precached files and `sw.js` are copied byte-for-byte;
`CNAME` is outside the precache and does not affect the app. Actions deployments
still require the custom domain in GitHub's Pages settings.

For the full browser suite, use Chrome with a working Wayland session and hardware
WebGPU (the harness uses a disposable browser profile):

```bash
node release/build.mjs ../draw --browser-tests
node --test release/verify.test.mjs
node release/verify.mjs
python3 -m http.server 4174 --bind 127.0.0.1 --directory doc
```

The browser option checks offline startup, drawing, installation metadata,
updates, scope isolation and GPU startup failure recovery using the upstream harness.
The package can run at the domain root or a repository subpath. Drawing requires
hardware WebGPU and HTTPS (localhost is allowed). Offline app availability is
not artwork autosave: drawings are currently in memory, and closing/reloading
loses them. Applied preferences persist separately.

## Update and publish

1. Commit application changes in the source repository. Update the full source
   commit in `release/source.json`; review dependencies, assets, toolchain changes
   and the checklist in `AUDIT.md`. Do not merely change the pin to bypass a gate.
2. Run the release build and checks above. Keep the entire generated `doc/` and
   `release/manifest.json` together in a commit. Never hand-edit cached files.
3. Review the diff, commit and push to `origin main`. The Pages workflow verifies
   the committed bytes and uploads only `doc/`, then deploys the complete artifact.
4. Check the Actions run and visit the HTTPS site. Existing app tabs keep their
   current version until closed; this prevents updates interrupting a drawing.

```bash
git add doc release AUDIT.md
git commit -m "Release Capy Canvas PWA from <source revision>"
git push origin main
```

To roll back, revert the release commit (including its pin and manifest), verify,
and push. GitHub deploys the restored package. Do not force-push release history.

## License

Original release scripts and documentation: [MIT](LICENSE-MIT) OR
[Apache-2.0](LICENSE-APACHE). The application has the same software license choice,
with separate [branding terms](BRANDING.md). The full dependency/toolchain notices
are shipped in [`doc/licenses.html`](doc/licenses.html). The branding scope's
source path maps to `doc/assets/<content-hash>/icons/layer-zen-symbolic.svg` and the
generated app-icon PNGs in this distribution.
