# Morocco Event Caterers

Multilingual event-caterer directory for **Khénifra, Fès and Meknès, Morocco**.

Live path: `https://yopisimoni.github.io/morocco-event-caterers/`

## What is included

- English, Arabic (RTL), French and Spanish UI
- Search by business name / area
- City filters for Khénifra, Fès and Meknès
- 25 initial event-caterer / wedding-service listings
- Direct phone and Google Maps actions where details were available
- Community review modal and rating display
- SEO title, description, canonical URL and Schema.org ItemList markup
- Mobile responsive layout
- Moderated Supabase review schema
- Browser-only review fallback until the dedicated Supabase project is connected

## Review architecture

`config.js` intentionally contains no backend credentials yet.

For production reviews:

1. Create a dedicated Supabase project for this directory.
2. Run `supabase/reviews.sql` in that project.
3. Confirm RLS/security advisors.
4. Put only the project's public URL and **publishable** key in `config.js`.
5. Never place a `service_role` or secret key in this repository.

Public users can read only `approved` reviews and submit only `pending` reviews. They receive no browser permissions to update or delete rows.

## Listing policy

The directory does not import third-party star ratings or reviews as its own rating. A business starts as `New` until this site's own approved community reviews exist.

Business contact information was researched from current public listings in September 2026. Always confirm details directly before booking.

### Main research sources

- Google/local business listings surfaced for Khénifra, Fès and Meknès
- https://traiteur-meknes-mounirs.com/
- https://touchedeviefes.com/
- https://www.chhiouatefes.com/
- https://www.telecontact.ma/annonceur/lux-atlas-events/9045462/khenifra.php
- https://www.telecontact.ma/annonceur/deguste/3360577/khenifra.php
- https://www.africabizinfo.com/fr-MA/traiteur-el-moutaouakil-0660-389807
- https://www.mescadeaux.ma/annuaire/4-fes/11-mariage/11301363000-trouver-un-traiteur

## Next SEO expansion

The next iteration should generate a permanent page for every caterer and dedicated city landing pages, for example:

- `/morocco-event-caterers/khenifra/`
- `/morocco-event-caterers/fes/`
- `/morocco-event-caterers/meknes/`
- `/morocco-event-caterers/fes/doreve-events/`

That will give Google stronger pages for searches combining caterer names, city names, wedding catering and event catering terms.
