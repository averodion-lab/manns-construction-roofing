# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing and lead-generation website for **Manns Construction & Roofing**. The site exists to get **phone calls and quote requests**. Every page should make calling and requesting a quote obvious. See `README.md` for the full sitemap and feature list.

## Stack & Commands

- **Astro** (static output), plain CSS with design tokens. No UI framework, and Astro is the only dependency. Ask before adding dependencies.
- `npm run dev` starts the dev server at http://localhost:4321
- `npm run build` writes the static site to `dist/`
- `npm run preview` serves the built site
- `npm run deploy` publishes to GitHub Pages (`gh-pages` branch) at https://averodion-lab.github.io/manns-construction-roofing/
- Always use root-relative links (`/quote`) in source. The GitHub Pages build adds the `/manns-construction-roofing` prefix in `astro.config.mjs`.

## Code Map

| Path | Purpose |
|---|---|
| `src/data/site.ts` | Business facts, nav, quote dropdown options. **Single source of truth.** |
| `src/data/services.ts` | All service-page content (23 routes) + homepage service categories |
| `src/data/projects.ts` | Portfolio entries (currently representative placeholders) |
| `src/data/images.ts` | Central image map (Unsplash placeholders). Swap `src` for real photos here. |
| `src/data/icons.ts` | Inline SVG icon paths |
| `src/pages/[slug].astro` | Shared template for every service page, driven by `services.ts` |
| `src/pages/*.astro` | Home, about, services, projects, contact, quote, 404 |
| `src/components/` | Header (nav + mobile drawer), Footer, PageHero, CtaBand, SectionBg, ServiceCard, Faq, QuoteForm, ContactForm |
| `src/scripts/forms.ts` | Form validation, photo upload previews, submission |
| `src/styles/global.css` | Design tokens (`:root`) and all styles |

To add a service page, add an entry to `SERVICES`. The route is generated automatically.

## Forms

Forms POST `multipart/form-data` (including photos) to `PUBLIC_FORM_ENDPOINT` (see `.env.example`). With no endpoint set, **dev** simulates success and logs the payload to the console. **Production** shows an error that asks the visitor to call. The endpoint provider is still undecided, so ask the user before picking one.

## Business Facts (single source of truth)

| Field | Value |
|---|---|
| Name | Manns Construction & Roofing |
| Phone (display) | 912-246-9486 |
| Phone (link) | `tel:+19122469486` |
| Status | Licensed & Insured |
| Address / service area | **Not provided yet.** Do not invent one. |

- Keep business info in one shared config/constant and import it everywhere. Never hardcode the phone number in multiple places.
- Every visible phone number must be a tap-to-call `tel:` link.
- Always write the name exactly as **Manns Construction & Roofing** (no apostrophe).

## Hard Rules

1. **No insurance or legal guarantees.** Never say claims "will be approved," "insurance pays for your roof," "free roof," etc. Approved phrasing: *"We can help document damage and guide you through the restoration process."*
2. **Equipment services are limited to what the owner confirmed:** skid steer, excavator, mulching, land clearing, tree removal, limbs off roofs, demolition, and cleanup. Do not add other equipment or capabilities without confirmation.
3. **No fabricated facts.** Do not invent years in business, project counts, reviews, testimonials, certifications, awards, team names, or addresses. Use clearly marked placeholders (e.g. `TODO: owner to provide`) instead.
4. **Stock images are placeholders.** Structure image references so they're easy to replace with real project photos later (central image map or consistent naming). Always include meaningful `alt` text.
5. **Mobile first.** No horizontal scroll, tap targets ≥ 44px, sticky mobile call button, hamburger nav, readable base font size (≥ 16px).

## Navigation

`Home · About · Services · Roofing · Construction · Storm Damage · Projects · Inspections · Contact · Get a Quote`

"Get a Quote" is styled as a primary button. On mobile, the menu includes a prominent **CALL NOW — 912-246-9486** button.

## Routes

`/` `/about` `/services` `/roofing` `/roof-repair` `/roof-replacement` `/roof-inspections` `/siding` `/gutters` `/construction` `/home-additions` `/remodeling` `/kitchen-bathroom-remodeling` `/painting` `/flooring` `/decks` `/pole-barns` `/concrete` `/driveways` `/storm-damage` `/insurance-restoration` `/inspections` `/equipment-services` `/land-clearing` `/tree-removal` `/demolition` `/projects` `/contact` `/quote`

Use these exact slugs (they're SEO-relevant).

## Page Templates

**Service pages** share one template / be data-driven. Each one needs:
hero image → title → description → what's included → benefits → project photos → before/after (optional) → FAQ → CTA section with **Get a Quote** + **Call Now**.

Page-specific CTAs:

| Page | CTA |
|---|---|
| Roofing | NEED ROOFING WORK? GET YOUR FREE QUOTE |
| Siding | GET A SIDING QUOTE |
| Gutters | REQUEST GUTTER SERVICE |
| Construction | TALK TO US ABOUT YOUR PROJECT |
| Storm Damage | REQUEST A STORM INSPECTION / CALL 912-246-9486 |
| Insurance Restoration | SCHEDULE AN INSPECTION |
| Inspections | SCHEDULE AN INSPECTION |
| About | TALK TO MANNS CONSTRUCTION & ROOFING |

**Storm Damage** page headline: *"STORM DAMAGE? WE CAN HELP."* with a 5-step process: Contact Us → Schedule an Inspection → Document the Damage → Discuss Restoration → Restoration.

**Projects** page: filterable grid (Roofing, Siding, Gutters, Construction, Decks, Pole Barns, Concrete, Storm Damage) with a lightbox. Projects should be data-driven (title, category, description, images, optional before/after).

## Approved CTA Labels

GET A FREE QUOTE · REQUEST A QUOTE · CALL NOW · 912-246-9486 · SCHEDULE AN INSPECTION · REQUEST STORM INSPECTION · CONTACT US · VIEW OUR SERVICES · VIEW OUR PROJECTS · LEARN MORE · START YOUR PROJECT

Reuse these instead of inventing new button text.

## Forms

**Quote form (`/quote`)**
- First Name, Last Name, Phone, Email, Address
- Service dropdown: defined in `QUOTE_SERVICES` in `src/data/site.ts` (PDR list plus the added remodeling, tree, land, and demolition services)
- "Tell us about your project" textarea
- Photo upload (multiple images; validate type and size)
- Preferred contact: Phone / Email / Text
- Submit: **REQUEST MY FREE QUOTE**
- Success: *"Thank you! Your request has been received. Manns Construction & Roofing will contact you as soon as possible."*

**Contact form (`/contact`)**: Name, Phone, Email, Service, Message.

Both forms have client-side validation, accessible labels, inline errors, and a honeypot field (`company_website`).

## Design

- Professional construction look: trust, strength, quality, local service. Avoid generic template aesthetics.
- Large hero photography, strong typography, modern cards, subtle shadows, smooth but restrained animations (respect `prefers-reduced-motion`).
- Brand colors and logo are **not yet provided**. The current look is a placeholder identity: charcoal `--ink`, limestone `--paper`, copper `--copper` accent; fonts are Big Shoulders Display (headings), Barlow (body), and IBM Plex Mono (labels). Change these via the tokens in `global.css`.
- Signature details to keep consistent: clipped-corner buttons, roof-pitch (`.gable`) section edges, dark sections either photo-backed (`.has-photo` + `<SectionBg img=…>`) or a copper-glow gradient (`.dark-glow`), mono eyebrow labels.
- Use `--copper` for text on light backgrounds (AA contrast with white) and `--copper-hi` only on dark backgrounds.

## Quality Bar

- Semantic HTML, one `<h1>` per page, accessible contrast (WCAG AA), keyboard-navigable menu and lightbox.
- Per-page `<title>` and meta description; LocalBusiness / RoofingContractor JSON-LD once the address is known.
- Optimized, lazy-loaded, responsive images.
- Verify layouts at phone (~375px), tablet (~768px), and desktop (~1440px) widths before calling UI work done. Check for horizontal overflow, including the header at common laptop widths (1280–1512px). The full nav shows from 1360px, and below that the header shows a phone number and a hamburger menu.
- `SITE.placeholderPhotos` in `site.ts` shows a "representative examples" notice on /projects. Set it to `false` once real photos replace the stock ones.

## Pending From Owner

Address and service area, logo and brand colors, real photos, reviews, company history/experience, and form delivery destination (email/CRM).
