# Morocco Wedding Guide — Production QA Checklist

## Completed in the public pilot

- [x] English, Arabic (RTL), French and Spanish homepage support
- [x] Multilingual About page
- [x] Multilingual Privacy Policy
- [x] Multilingual Terms of Use
- [x] Multilingual Community Guidelines / review rules
- [x] Multilingual Contact & provider-correction page
- [x] Legal/trust links exposed in the homepage footer
- [x] Sitemap includes trust/legal pages
- [x] No fake ratings; providers start as `New`
- [x] Ranking design uses approved on-site reviews rather than copied third-party scores
- [x] Guest browsing remains available without account
- [x] Account gate prepared for reviews, ratings, photos and reports
- [x] Decorative inspiration photography is not labelled as vendor portfolio work
- [x] No service-role or privileged secret is present in frontend configuration

## Mandatory before enabling production accounts / personal-data collection

- [ ] Publish the final legal identity of the data controller/operator
- [ ] Publish a monitored privacy/contact email address
- [ ] Complete the appropriate CNDP notification for personal-data processing under Morocco Law 09-08
- [ ] If personal data is hosted/stored outside Morocco, complete the required CNDP cross-border transfer procedure before transfer
- [ ] Record the CNDP declaration/authorisation references in the Privacy Policy where applicable
- [ ] Review processor contracts / data-processing terms for Supabase and any other personal-data processor
- [ ] Confirm production data-hosting region and document it
- [ ] Do not add non-essential personal-data cookies before required information/consent and CNDP cookie formalities are ready
- [ ] If analytics is added, implement consent before non-essential tracking and document provider/purpose/retention
- [ ] Define and test a process for access, correction, objection and deletion/erasure requests where applicable
- [ ] Define moderation retention periods and make backend retention match the published Privacy Policy

## Backend / security before launch

- [ ] Create a dedicated Supabase project for Morocco Wedding Guide
- [ ] Apply and review `supabase/reviews.sql`
- [ ] Magic-link sign in tested on desktop and mobile
- [ ] GitHub Pages URL added to Supabase Auth redirect URLs
- [ ] Final domain added to Supabase Auth redirect URLs after purchase
- [ ] Review submission requires authenticated user
- [ ] One review per account/provider enforced
- [ ] Review moderation tested: pending → approved → visible
- [ ] Star average and review count update only from approved reviews
- [ ] Sort by top rated / most reviewed / A–Z tested
- [ ] Photo upload accepts only JPEG/PNG/WebP and max 8 MB
- [ ] Photo moderation tested before any public display
- [ ] Report submission tested and not publicly readable
- [ ] Supabase RLS/security advisor has no unresolved critical findings
- [ ] No service-role or secret keys in public source
- [ ] Rate limiting / abuse controls tested for auth, reviews, reports and uploads

## Content / UX before branded-domain launch

- [ ] Arabic RTL checked on desktop and representative mobile widths
- [ ] English / French / Spanish copy checked end-to-end by fluent reviewers
- [ ] Search, sort and city filters tested on mobile and desktop
- [ ] Contact and map links verified for every listing
- [ ] At least 80% of live listings have a working direct contact method
- [ ] Provider correction/removal workflow tested
- [ ] Open Graph image hosted under our control instead of relying on a third-party image URL
- [ ] Prefer self-hosted decorative photography or document third-party media delivery in privacy disclosures
- [ ] Accessibility pass: keyboard navigation, focus states, labels, contrast and modal behaviour
- [ ] Performance pass: compress/self-host images and check Core Web Vitals
- [ ] Sitemap, robots, canonical, Open Graph URLs and structured data updated to final domain
- [ ] 301 redirects prepared if the GitHub Pages paths change after domain migration
- [ ] Custom domain uses HTTPS successfully

## Pilot acceptance criteria

Keep Khénifra, Fès and Meknès as the public pilot until:

1. At least 80% of listings have a working contact method.
2. Each city has enough useful listings to avoid thin pages.
3. Real users can create accounts and submit moderated feedback.
4. We have a repeatable way to verify listings and handle corrections.
5. Search, ranking and review moderation have been tested with real sample data.
6. Privacy/CNDP launch gates above are complete before personal-data features are switched on.

## National expansion order

After the pilot passes QA:

1. Casablanca
2. Rabat
3. Marrakech
4. Tanger
5. Agadir
6. Oujda
7. Tétouan
8. Kénitra
9. El Jadida

Do not publish an empty city page only for SEO. Research first, then publish.
