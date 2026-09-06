# MarocVows — Domain Launch Plan

Owned domain: **www.marocvows.com** / **marocvows.com**

## Production architecture

MarocVows should live in its **own public GitHub repository / GitHub Pages site** before the custom domain is attached.

Do not attach `www.marocvows.com` directly to the existing `yopisimoni.github.io` user-site root. That repository also serves the developer portfolio and other project folders, so using it as the MarocVows custom-domain root would mix unrelated projects.

Recommended production repo name: `marocvows`

The contents of the current `morocco-event-caterers/` folder should become the **root** of that dedicated repository.

## Safe order of operations

1. Create a new public repository named `marocvows` under the `yopisimoni` account.
2. Copy the current MarocVows site files from `morocco-event-caterers/` into the root of the new repository.
3. Enable GitHub Pages for that repository.
4. Verify ownership of `marocvows.com` in GitHub before adding DNS records when possible.
5. In the MarocVows repository Pages settings, configure `www.marocvows.com` as the custom domain.
6. At the DNS provider, configure:
   - `www` as a `CNAME` pointing to `yopisimoni.github.io`
   - apex/root `@` using the GitHub Pages apex records or the provider's supported `ALIAS`/`ANAME` option.
7. Avoid wildcard DNS records such as `*.marocvows.com`.
8. Enable / verify HTTPS once GitHub provisions the certificate.
9. Configure `marocvows.com` to redirect to `www.marocvows.com` (GitHub can automatically redirect between apex and `www` when both DNS sides are configured correctly).
10. Update all canonical URLs, Open Graph URLs, sitemap URLs and structured-data URLs from the GitHub pilot path to `https://www.marocvows.com/`.
11. Add both the pilot URL (temporarily) and final MarocVows URL to Supabase Auth allowed redirect URLs during migration.
12. After the final domain is stable, remove obsolete pilot redirect URLs if no longer needed.

## GitHub Pages DNS values

Use the values shown in current GitHub Pages documentation at launch time. As of the September 2026 launch audit, GitHub documents these IPv4 apex addresses:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

GitHub also documents IPv6 values and supports `ALIAS`/`ANAME` where the DNS provider supports them.

For `www.marocvows.com`, GitHub recommends a CNAME target of the account's Pages host: `yopisimoni.github.io`.

Always re-check GitHub Pages documentation before editing DNS because infrastructure guidance can change.

## Domain cutover checklist

- [ ] Dedicated `marocvows` repository exists
- [ ] Site files are at repository root
- [ ] GitHub Pages is publishing from the intended source
- [ ] Domain ownership verified in GitHub
- [ ] `www.marocvows.com` added in Pages settings
- [ ] `www` CNAME configured
- [ ] apex/root DNS configured
- [ ] No conflicting A/AAAA/CNAME records
- [ ] No wildcard DNS record
- [ ] HTTPS certificate active
- [ ] `https://www.marocvows.com/` loads MarocVows homepage
- [ ] `https://marocvows.com/` redirects to `https://www.marocvows.com/`
- [ ] Canonical URLs changed to final domain
- [ ] Sitemap changed to final domain
- [ ] robots.txt sitemap location changed to final domain
- [ ] Open Graph URL/image hosted under MarocVows control
- [ ] Supabase Auth Site URL / redirect URLs include final domain
- [ ] Magic-link login tested from final domain on mobile and desktop

## Do not launch community submissions until

- the operator/data-controller identity is published;
- a monitored MarocVows privacy/contact email exists;
- the applicable CNDP steps are completed;
- Supabase Auth redirect URLs are configured;
- sign-in, review moderation, photo moderation and reporting are tested end-to-end.

The public directory itself can remain browsable while these community-data features stay gated.
