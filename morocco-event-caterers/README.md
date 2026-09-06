# Morocco Wedding Guide

A multilingual wedding discovery platform starting with **Khénifra, Fès and Meknès, Morocco**.

Live path: `https://yopisimoni.github.io/morocco-event-caterers/`

## Product direction

This project is no longer just a caterer list. The long-term product is a Morocco wedding guide where couples — especially families planning from abroad — can discover local wedding professionals, compare them, contact them directly and contribute trustworthy feedback.

The first live category is **wedding/event catering**. Future categories can include venues, photographers/video, décor/flowers, Neggafa, music/DJ, beauty, cakes and planners.

## Current live pilot

- English, Arabic (RTL), French and Spanish
- Khénifra, Fès and Meknès live first
- 25 initial catering/event listings
- Premium editorial wedding presentation
- Search by business name / area
- City filter
- Sorting prepared for top rated, most reviewed and A–Z
- Direct phone and Google Maps actions
- Community ratings/reviews UI
- Quick passwordless account flow prepared
- Auth-gated review/comment, photo upload and report actions
- Mobile responsive layout
- SEO title, description, canonical URL and Schema.org structured data

## Community trust rules

Guests can browse, search, sort, read approved reviews and contact providers without an account.

An account is required to:

- rate a provider
- write a review/comment
- upload a wedding photo
- report incorrect or inappropriate information

Community submissions are **pending by default** and require moderation before publication.

Rankings are based on approved community star ratings and review counts. Paid placement must never silently change the star score or community ranking.

The project does not copy third-party reviews and present them as its own. A business starts as `New` until this platform has approved community feedback.

## Production backend

`config.js` intentionally contains no production credentials yet.

The prepared `supabase/reviews.sql` schema includes:

- authenticated-only review submissions
- one review per account/provider
- public read access only for approved reviews
- moderated photo metadata
- private image storage with RLS
- authenticated reports
- no browser permissions to self-approve, update or delete community records

To activate production accounts and contributions:

1. Create a dedicated Supabase project for Morocco Wedding Guide.
2. Run `supabase/reviews.sql`.
3. Run Supabase security/performance advisors and fix any findings.
4. Configure the project Site URL / redirect URLs for GitHub Pages and later the final domain.
5. Add only the public project URL and **publishable** key to `config.js`.
6. Never put a `service_role`, secret key or privileged credential in this public repository.

## Expansion strategy

Do **not** create empty city SEO pages. Expand only when a city has enough genuine local listings to make the page useful.

### Live pilot

- Khénifra
- Fès
- Meknès

### National roadmap

- Casablanca
- Rabat
- Marrakech
- Tanger
- Agadir
- Oujda
- Tétouan
- Kénitra
- El Jadida
- additional cities only after research coverage is strong enough

Recommended rollout after the pilot proves useful:

1. Casablanca
2. Rabat
3. Marrakech
4. Tanger
5. Agadir
6. Oujda
7. Tétouan
8. Kénitra
9. El Jadida

## SEO architecture

When profiles are ready, create permanent indexable routes such as:

- `/morocco-event-caterers/khenifra/`
- `/morocco-event-caterers/fes/`
- `/morocco-event-caterers/meknes/`
- `/morocco-event-caterers/fes/doreve-events/`

After the final domain is purchased, migrate these to clean branded routes while preserving redirects and canonicals.

Each provider profile should eventually include its own photos, city/service area, services, languages, contact methods, approved community rating, approved reviews, report action and last-verified date.

## Market reality

There are already Morocco wedding directories and marketplaces. This project therefore should not compete as a generic list alone. Its differentiation should be:

- diaspora-first multilingual experience
- highly usable city pages
- transparent on-site review ranking
- moderated user photos and reports
- strong local coverage beyond only the largest destination cities
- clean provider profiles and direct contact
- no fake ratings or invented verification badges

## Listing policy

Business contact information was researched from current public listings in September 2026. Details can change; users should confirm directly before booking.

Main initial research sources included official provider websites, public local business listings, Telecontact, AfricaBizInfo and MesCadeaux directories.
