# Connect editor.capycanvas.art

Porkbun remains the registrar; Cloudflare hosts DNS; GitHub Pages serves the PWA
and its HTTPS certificate. No Cloudflare Pages project is needed.

The first inspection on 2026-09-07 found Porkbun nameservers and
`editor.capycanvas.art` resolving to the Porkbun parking service. Follow the
Cloudflare delegation step if that is still the case.

## 1. Put DNS on Cloudflare

Add **capycanvas.art** to your Cloudflare account and choose a plan (Free is
sufficient for DNS). Review imported DNS records and preserve any existing
website, mail, MX and TXT records. Cloudflare will assign two nameservers; use
the exact pair shown for this zone. [Cloudflare full setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)

At Porkbun, open **Account → Domain Management → capycanvas.art → Details →
Nameservers → edit**. Replace the existing nameservers with that Cloudflare pair,
one per line, and save/confirm. This is the registrar's nameserver setting, not
an NS record in the old DNS zone. Wait until Cloudflare reports the zone Active;
nameserver propagation can take up to 48 hours. [Porkbun instructions](https://kb.porkbun.com/article/22-how-to-change-nameservers)

If DNSSEC is enabled at Porkbun, remove the old DS record/disable DNSSEC before
switching nameservers. After Cloudflare is active, you can enable DNSSEC there
and add Cloudflare's supplied DS values at Porkbun. A stale DS record can prevent
the new DNS zone from resolving. [Cloudflare DNSSEC](https://developers.cloudflare.com/dns/dnssec/)

Once delegated, edit application DNS records in Cloudflare. Porkbun's separate
DNS editor no longer controls the domain's authoritative answers.

## 2. Verify the domain with the GitHub organization

In **capyatelier organization Settings → Pages → Add a domain**, enter
`capycanvas.art`. GitHub supplies a TXT record, normally named
`_github-pages-challenge-capyatelier` within this Cloudflare zone. Copy the exact
name and value GitHub gives you into Cloudflare DNS, then click **Verify** in
GitHub. Keep the TXT record. Verification of the apex also covers the immediate
`editor` subdomain. This belongs to the organization that owns the repository.
[GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

## 3. Enable the repository's Pages workflow

Open [capycanvas-release → Settings → Pages](https://github.com/capyatelier/capycanvas-release/settings/pages).
Under **Build and deployment → Source**, select **GitHub Actions**. The committed
`Deploy PWA to GitHub Pages` workflow publishes `doc/` on pushes to `main`; it can
also be run from **Actions → Deploy PWA to GitHub Pages → Run workflow**.
If the initial push ran before Pages was enabled, rerun it after this setting.
[GitHub workflow setup](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

In the same Pages settings, save **editor.capycanvas.art** as the **Custom domain**
before pointing the DNS record at GitHub. The included `doc/CNAME` records our
intent, but GitHub ignores CNAME files for custom Actions deployments: this
setting is required. [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## 4. Add the Cloudflare record

In Cloudflare → **capycanvas.art → DNS → Records**, replace the existing parking
record for `editor` with:

| Type | Name | Target | Proxy status | TTL |
| --- | --- | --- | --- | --- |
| CNAME | `editor` | `capyatelier.github.io` | **DNS only** (gray cloud) | Auto |

The target is the organization's GitHub Pages hostname, with no protocol,
repository name or `/doc` path. Remove conflicting A/AAAA/CNAME records at the
exact `editor` name. The apex and other subdomains can keep their own services.
[GitHub subdomain DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Use DNS only so requests go directly to GitHub Pages. This avoids adding proxy
caching or response transformations to the PWA's integrity-checked resources;
it also leaves GitHub's domain/certificate checks straightforward. The gray
cloud means Cloudflare handles DNS but does not proxy HTTP traffic.
[Cloudflare proxy status](https://developers.cloudflare.com/dns/proxy-status/)

## 5. Finish HTTPS and verify

Wait for GitHub's DNS check and certificate provisioning. In repository
**Settings → Pages**, enable **Enforce HTTPS** when available (GitHub says this
can take up to 24 hours). Then open **https://editor.capycanvas.art/**.
[GitHub HTTPS guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

```bash
dig +short NS capycanvas.art
dig +short CNAME editor.capycanvas.art
curl -I https://editor.capycanvas.art/
curl -I https://editor.capycanvas.art/manifest.webmanifest
```

Expect the assigned Cloudflare nameservers, `capyatelier.github.io.` as the
CNAME answer, and successful HTTPS responses after provisioning. Check the
workflow's deployment job is green. In Chrome/Edge with supported hardware,
load online, install/open the app, then verify it opens offline. Closing an
existing app tab allows a waiting update to activate; save any artwork first.

For a parking page, check delegation and the exact `editor` record. For a GitHub
404, check the successful deployment and custom-domain setting. For TLS failures,
keep DNS only enabled and allow certificate provisioning to finish. If you have
restrictive CAA records, check GitHub's certificate guidance before changing them.
