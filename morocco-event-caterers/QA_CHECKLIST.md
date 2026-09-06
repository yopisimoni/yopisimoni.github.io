# Morocco Wedding Guide — Production QA Checklist

## Before buying / connecting a domain

- [ ] Dedicated Supabase project connected
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
- [ ] RLS security advisor has no unresolved critical findings
- [ ] No service-role or secret keys in public source
- [ ] Arabic RTL checked on mobile and desktop
- [ ] English / French / Spanish copy checked end-to-end
- [ ] Search and city filtering checked on mobile
- [ ] Contact and map links verified for every listing
- [ ] Decorative inspiration photos are never labelled as vendor portfolio work
- [ ] Sitemap / robots / canonical updated to final domain
- [ ] Open Graph image hosted under our control before launch
- [ ] Privacy policy, terms, community rules and content/photo rights policy published
- [ ] Provider correction / removal process published

## Pilot acceptance criteria

Keep Khénifra, Fès and Meknès as the public pilot until:

1. At least 80% of listings have a working contact method.
2. Each city has enough useful listings to avoid thin pages.
3. Real users can create accounts and submit moderated feedback.
4. We have a repeatable way to verify listings and handle corrections.
5. Search, ranking and review moderation have been tested with real sample data.

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
