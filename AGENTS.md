# Deployment instructions

This repository hosts the built Capy Canvas PWA at
https://editor.capycanvas.art/. Deployments come from published releases of
`capyatelier/capycanvas` and are built on GitHub, never on a workstation.

- `.github/workflows/deploy.yml` checks every hour for a newer published
  release. It builds that release's commit with `release/build.mjs`, which runs
  the license policy, notice and package checks, commits `doc/`,
  `release/manifest.json` and the pinned `release/source.json`, and starts
  `pages.yml`, which verifies the committed package and publishes `doc/`.
- A request to "deploy" means running that workflow, then confirming the Pages
  run and the live site:

  ```bash
  gh workflow run deploy.yml --repo capyatelier/capycanvas-release
  gh workflow run deploy.yml --repo capyatelier/capycanvas-release -f tag=v1.0.2
  ```

  The first deploys the latest published release; the second deploys a
  specific release, which is also how to roll back.
- To ship source changes, publish a release in `capyatelier/capycanvas`. Never
  build, hand-edit or commit `doc/` locally; local builds (README) only test
  changes to `release/`.
- Hosting and packaging scripts belong in `release/`; application build logic
  belongs in the source repository. Change a tool pin in `release/source.json`
  only together with a deploy, because `pages.yml` checks the committed package
  against it, and never to get past a failed gate.
- Never force-push.

## Verify the live site

After the Pages run succeeds, compare the live index with the deployed
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

If the live index is stale right after deploying, retry after a short wait.
