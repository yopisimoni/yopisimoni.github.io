# MarocVows

**MarocVows** is a multilingual Morocco wedding discovery platform starting with **Khénifra, Fès and Meknès**.

Current pilot: `https://yopisimoni.github.io/morocco-event-caterers/`
Owned brand domain: `https://www.marocvows.com/`

## Product direction

MarocVows is not meant to be a generic wedding directory. The goal is a trusted local guide where couples — especially Moroccan families planning from abroad — can discover wedding professionals, compare useful local information, contact providers directly and later contribute genuine community experiences.

The first live category is **wedding/event catering**. Future categories can include venues, photographers/video, décor/flowers, Neggafa, music/DJ, beauty, cakes and planners.

## Current pilot

- English, Arabic (RTL), French and Spanish
- Khénifra, Fès and Meknès first
- 25 initial catering/event listings
- Premium editorial wedding presentation
- Search by business name / area
- City filter
- Sorting prepared for top rated, most reviewed and A–Z
- Direct phone and Google Maps actions
- Providers begin as `New` — no invented ratings
- Quick community-review UX prepared: star rating + fast experience highlights + optional short note
- Passwordless email account flow prepared
- Auth-gated review, photo and report actions prepared
- Mobile responsive layout
- Privacy, Terms, Community Guidelines, About and Contact pages in four languages
- SEO title/description/canonical/Schema.org architecture

## Community trust model

Guests can browse, search, sort, read approved reviews and contact providers without an account.

An account is required to:

- rate a provider
- write a review/comment
- upload a wedding photo
- report incorrect or inappropriate information

Community submissions are **pending by default** and require moderation before publication.

Rankings are based on approved on-site star ratings and review counts. Paid promotion must never silently alter star scores or community ranking.

MarocVows does not copy third-party reviews and present them as its own. A provider starts as `New` until this platform has approved community feedback.

## Review experience principle

The review flow should feel comfortable and take roughly 30 seconds:

1. choose an overall star rating;
2. tap quick experience highlights such as great food, professional staff, punctuality, communication, value or areas to improve;
3. optionally add one short detail that would help the next family.

No essay is required. Only genuine first-hand experiences should be submitted.

## Production backend

A dedicated Supabase project named `morocco-wedding-guide` is provisioned in **Paris, France (`eu-west-3`)**.

The production schema includes:

- authenticated-only review submissions
- one review per account/provider
- public read access only for approved reviews
- moderated photo metadata
- private image storage with RLS
- authenticated private reports
- no browser permission to self-approve community content

Security advisor currently reports no security lints. The frontend intentionally keeps community data collection gated until the operator/privacy contact, CNDP formalities and Auth redirect configuration are complete.

Never place a `service_role`, secret key or privileged credential in this public repository.

## Domain architecture

`www.marocvows.com` should be the canonical public domain once deployment is isolated.

Do **not** attach MarocVows directly to the existing `yopisimoni.github.io` user-site root because that repository also serves the owner's developer portfolio and other project sites. The clean production setup is a dedicated public repository/site for MarocVows, then connect `www.marocvows.com` to that site and redirect the apex `marocvows.com` to `www.marocvows.com`.

See `DOMAIN_LAUNCH.md` for the safe migration plan.

## Expansion strategy

Do **not** publish empty city pages purely for SEO. Expand only after a city has enough genuine local listings to make its page useful.

### Live pilot

- Khénifra
- Fès
- Meknès

### National roadmap

1. Casablanca
2. Rabat
3. Marrakech
4. Tanger
5. Agadir
6. Oujda
7. Tétouan
8. Kénitra
9. El Jadida
10. additional cities once research coverage is strong enough

## SEO architecture

After the branded domain is live, move toward clean permanent routes such as:

- `https://www.marocvows.com/khenifra/`
- `https://www.marocvows.com/fes/`
- `https://www.marocvows.com/meknes/`
- `https://www.marocvows.com/fes/doreve-events/`

Each provider profile should eventually include its own photos, city/service area, services, languages, contact methods, approved community rating, approved reviews, report action and last-verified date.

## Differentiation

MarocVows should compete on:

- diaspora-first multilingual experience
- excellent city-level usefulness
- transparent on-site review ranking
- fast, comfortable feedback UX
- moderated user photos and reports
- strong local coverage beyond only the largest destination cities
- clean provider profiles and direct contact
- no fake ratings or invented verification badges

## Listing policy

Business contact information was researched from public sources in September 2026. Details can change; users should confirm directly before booking.

Initial research sources included official provider websites, public local business listings, Telecontact, AfricaBizInfo and MesCadeaux directories.
