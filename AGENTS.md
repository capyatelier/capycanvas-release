# Deployment instructions

This repository hosts the built Capy Canvas PWA at
https://editor.capycanvas.art/. The editor runs the latest published release of
`capyatelier/capycanvas`, built on GitHub when someone runs the deploy workflow,
never on a workstation, and served by Cloudflare.

- `.github/workflows/deploy.yml` builds the chosen source commit with
  `release/build.mjs`, which runs the license policy, notice and package checks,
  commits `doc/`, `release/manifest.json` and the pinned `release/source.json`,
  then runs `release/cloudflare/deploy.mjs`, which verifies the committed package
  and publishes `doc/` to Cloudflare ([HOSTING.md](HOSTING.md)).
- A request to "deploy" means running that workflow and confirming the live site:

  ```bash
  gh workflow run deploy.yml --repo capyatelier/capycanvas-release -f ref=v1.1.0
  ```

  `ref` must be a published release tag; the workflow refuses branches, commits,
  drafts and pre-releases. Deploying an earlier release tag rolls back. A run whose commit is already
  built redeploys the committed package.
- Never build, hand-edit or commit `doc/` locally; local builds (README) only
  test changes to `release/`.
- Hosting and packaging scripts belong in `release/`; application build logic
  belongs in the source repository. The deploy takes the Rust version from the
  source repository's release workflow. Change the other tool pins in
  `release/source.json` only together with a deploy, because
  `release/cloudflare/deploy.mjs` checks the committed package against them,
  and never to get past a failed gate.
- Never force-push.

## Verify the live site

After the Cloudflare deploy succeeds, compare the live index with the deployed
release's recorded SHA-256:

```bash
python3 - <<'PY'
import hashlib
import json
import urllib.request

with open('release/manifest.json') as file:
    manifest = json.load(file)
request = urllib.request.Request(
    'https://editor.capycanvas.art/',
    headers={'Cache-Control': 'no-cache', 'User-Agent': 'capycanvas-release-check'},
)
with urllib.request.urlopen(request, timeout=30) as response:
    assert response.status == 200, response.status
    body = response.read()
assert hashlib.sha256(body).hexdigest() == manifest['files']['index.html']['sha256'], \
    'Live site does not match this release'
print('HTTPS 200; live index matches release')
PY
```

If the live index is stale right after deploying, retry after a short wait.
