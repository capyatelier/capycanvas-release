# Deployment instructions

This repository hosts the built CapyCanvas PWA at
https://editor.capycanvas.art/. A request such as "deploy" means complete the
workflow below, including pushing and monitoring until the site is live.
The request authorizes the build, release commit, and push; do not ask for
another confirmation unless a new problem actually requires user input.

## Repository layout and standing preferences

- Application source: `../capycanvas`, remote
  `git@github.com:capyatelier/capycanvas.git`, branch `main`. The old `../draw`
  path is obsolete. Its local checkout can be far behind `origin/main`.
- Release repository: `git@github.com:capyatelier/capycanvas-release.git`,
  remote `origin`, branch `main`.
- `release/source.json` pins the full source commit, domain, and tool versions.
  `release/build.mjs` exports that commit with `git archive`, delegates the
  application build to the exported source's `apps/layer-web/package.mjs`, and
  packages the result into `doc/` with `release/manifest.json`.
- Hosting/packaging scripts belong in `release/`. Application build logic
  belongs in the source repository. Never copy an old source `dist/` bundle
  or hand-edit generated assets, hashes, or the service worker.
- **Skip all unit and browser tests for routine deployments**, per the user's
  standing instruction. Always pass `--skip-tests`; do not add `--browser-tests`
  or separately run test suites. Full-test examples in `README.md` are opt-in
  when the user requests them. The workstation's Vulkan driver has been unreliable.
- Keep the existing license/source gates and package verification. These are
  part of producing the release, and `--skip-tests` leaves them enabled.
- Run one release build at a time. Preserve unrelated local changes in both
  repositories. Do not reset or update the source worktree to deploy it.

## 1. Fetch and select the source

Run commands from this repository's root. Check both worktrees first:

```bash
git status --short --branch
git -C ../capycanvas status --short --branch
cat release/source.json
GIT_SSH_COMMAND='ssh -F /dev/null -o BatchMode=yes' \
  git -C ../capycanvas fetch origin +refs/heads/main:refs/remotes/origin/main
git -C ../capycanvas rev-parse origin/main
```

Use the freshly fetched `origin/main`, not the source checkout's `HEAD`.
Source history has previously been rewritten; the explicit fetch refspec
accepts that change to the remote-tracking ref without changing the worktree.
Do not force-push the release repository.

If this source SHA is already packaged, avoid an unnecessary build or empty
commit. Confirm the existing release's Pages run and live-site hash instead.
If the user says a source push is still pending, recheck for that push before
building. Review relevant dependency, asset, toolchain, and packaging changes
when present; see `AUDIT.md` for the license policy.

Pin the selected full SHA while preserving the other settings:

```bash
python3 - <<'PY'
import json
import subprocess
from pathlib import Path

path = Path('release/source.json')
config = json.loads(path.read_text())
config['commit'] = subprocess.check_output(
    ['git', '-C', '../capycanvas', 'rev-parse', 'origin/main'], text=True
).strip()
path.write_text(json.dumps(config, indent=2) + '\n')
PY
```

## 2. Build and package

Use the versions pinned in `release/source.json`. On the existing workstation,
extra release tools are installed in `/tmp/capy-audit-tools/bin`:

```bash
PATH=/tmp/capy-audit-tools/bin:$PATH \
  node release/build.mjs ../capycanvas --skip-tests
```

That temporary tools directory is a workstation convenience, not a repository
dependency. If it is missing, use the pinned tools on `PATH` or in Cargo's bin
directory; installation instructions and executable overrides are in `README.md`.
Do not change tool pins just to get past a failed check.

The build needs network access for dependencies/notices and may need sandbox
permission to run tools. Use the available tool permission mechanism when
required. Keep logs in `/tmp` if redirecting output, check the actual exit
status, and monitor any running session to completion. Give brief progress
updates during long builds and deployment waits.

Continue only after a successful exit and the final `Packaged <SHA> into doc/`
message. The wrapper verifies the Wasm, notices, inventory, and precache hashes.
Both test statuses should remain `not run` in the generated manifest.
For a GPL/LGPL or missing-notice failure, investigate and fix the cause before
publishing; do not bypass the gate. The existing vendored/Zune notice handling
is already implemented in the wrapper and `release/notices/`.

## 3. Commit and push

Review the generated diff and stage the complete package, manifest, and pin
together. Stage unrelated files only when they are part of the requested work.

```bash
git diff --stat
git add doc release/manifest.json release/source.json
git diff --cached --check
```

Commit as `Deploy editor source <short-source-SHA>`, using the SHA in
`release/source.json`, then push:

```bash
source_short="$(python3 -c 'import json; print(json.load(open("release/source.json"))["commit"][:7])')"
git commit -m "Deploy editor source $source_short"
GIT_SSH_COMMAND='ssh -F /dev/null -o BatchMode=yes' git push origin main
git rev-parse HEAD
```

Wait for push success. If the remote advanced, fetch and reconcile the release
changes without overwriting someone else's work or force-pushing.

## 4. Monitor Pages and verify the live site

`.github/workflows/pages.yml` verifies the committed package, uploads `doc/`,
and deploys it through GitHub Actions. It does not rebuild the application.
Select the run for the exact pushed release commit, rather than assuming the
newest listed run belongs to this deployment:

```bash
gh run list --repo capyatelier/capycanvas-release --workflow pages.yml \
  --commit "$(git rev-parse HEAD)" --limit 5 \
  --json databaseId,headSha,status,conclusion
gh run watch RUN_ID --repo capyatelier/capycanvas-release \
  --interval 10 --exit-status
```

Replace `RUN_ID` with the matching run's `databaseId`. If the run has not
appeared yet, recheck. Monitor through completion, polling
the tool session in short intervals so progress updates remain possible. A
queued/running workflow or a successful push alone is not a completed deploy.
Inspect failed run logs and resolve the failure before reporting success.

After Pages succeeds, verify HTTPS and compare the live index against this
release's recorded SHA-256:

```bash
python3 - <<'PY'
import hashlib
import json
import urllib.request

with open('release/manifest.json') as file:
    manifest = json.load(file)
request = urllib.request.Request(
    'https://editor.capycanvas.art/', headers={'Cache-Control': 'no-cache'}
)
with urllib.request.urlopen(request, timeout=30) as response:
    assert response.status == 200, response.status
    body = response.read()
assert hashlib.sha256(body).hexdigest() == manifest['files']['index.html']['sha256'], \
    'Live site does not match this release'
print('HTTPS 200; live index matches release')
PY
```

If the live index is stale immediately after deployment, retry after a short
wait; investigate persistent mismatches rather than claiming success. This is
an HTTP/artifact check, not a browser test.

Finish with a concise report containing the source SHA, release commit,
Pages success, live-site verification, and that tests were skipped. For an
unchanged source, say it was already deployed and verified. Keep monitoring
until done; do not end the turn merely because the build or deployment started.
