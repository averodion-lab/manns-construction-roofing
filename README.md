# Manns Construction & Roofing — Website

A modern, mobile-first website for **Manns Construction & Roofing**, a licensed and insured roofing, construction, and exterior services company.

- **Phone:** [912-246-9486](tel:+19122469486)
- **Status:** Licensed & Insured
- **Primary goal:** Generate qualified leads: phone calls, quote requests, and service inquiries.

---

## Project Goals

1. Generate new roofing and construction leads.
2. Make it easy to request a free quote.
3. Make it easy to call the company (tap-to-call everywhere).
4. Clearly explain every major service offered, not just roofing.
5. Build trust through licensing/insurance, project photos, reviews, and company info.
6. Inform visitors about storm damage and insurance restoration.
7. Present a professional online presence that reflects the quality of the work.
8. Work well on phones, tablets, laptops, and large desktop monitors.
9. Offer a way to contact the company from every part of the site.

## Design Direction

The site should feel **trustworthy, strong, professional, and local**, with a construction and home-improvement look that stays modern and easy to navigate. It should not look like a generic template.

- Large hero images and high-quality roofing/construction photography
- Strong typography, clean sections, modern cards, subtle shadows
- Professional icons and smooth, subtle animations and transitions
- Before/after project photography
- Prominent, consistent call-to-action buttons

Stock photography is acceptable as **placeholder content** until real Manns project photos are supplied.

## Sitemap

### Main navigation

`Home` · `About` · `Services` · `Roofing` · `Construction` · `Storm Damage` · `Projects` · `Inspections` · `Contact` · **`Get a Quote`**

On mobile: hamburger menu plus a highly visible **CALL NOW — 912-246-9486** button.

### Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/roofing` | Roofing (key page) |
| `/roof-repair` | Roof Repair |
| `/roof-replacement` | Roof Replacement |
| `/roof-inspections` | Roof Inspections |
| `/siding` | Siding |
| `/gutters` | Gutters |
| `/construction` | Construction (key page) |
| `/home-additions` | Home Additions |
| `/remodeling` | Remodeling |
| `/decks` | Decks |
| `/pole-barns` | Pole Barns |
| `/concrete` | Concrete |
| `/driveways` | Driveways |
| `/storm-damage` | Storm Damage landing page |
| `/insurance-restoration` | Insurance Restoration |
| `/inspections` | Inspections |
| `/equipment-services` | Equipment Services *(details pending owner confirmation)* |
| `/projects` | Projects / Portfolio |
| `/contact` | Contact |
| `/quote` | Get a Quote |

## Key Features

### Homepage
- **Hero:** large background image, headline *"Quality Roofing & Construction You Can Count On"*, buttons **Get a Free Quote**, **Call 912-246-9486**, and **Explore Our Services**.
- **Trust bar:** Licensed & Insured · Quality Work · Professional Service · Free Estimates · Storm Damage Assistance.
- **Services grid:** cards (image, name, short description, *Learn More*) for Roofing, Siding, Gutters, Construction, Concrete & Driveways, Storm Damage, Inspections & Insurance, and Equipment Services.

### Service pages
Each service page includes: hero image, title, description, what's included, benefits, example project photos, before/after (when available), FAQ, CTA section, plus **Get a Quote** and **Call Now** buttons.

### Storm Damage process
1. Contact Us → 2. Schedule an Inspection → 3. Document the Damage → 4. Discuss Restoration → 5. Restoration

### Projects / Portfolio
Filterable image grid by category (Roofing, Siding, Gutters, Construction, Decks, Pole Barns, Concrete, Storm Damage). Each project has an image, title, category, short description, and optional before/after photos. Clicking opens a lightbox gallery.

### Quote Request Form
- **Customer info:** First name, last name, phone, email, address
- **Service needed (dropdown):** Roofing, Roof Repair, Roof Replacement, Siding, Gutters, Construction, Remodeling, Deck, Pole Barn, Concrete, Driveway, Storm Damage, Inspection, Insurance Restoration, Other
- **Project details:** "Tell us about your project" message box
- **Photo upload** (project/damage photos)
- **Preferred contact method:** Phone / Email / Text
- **Submit:** *Request My Free Quote*
- **Success message:** *"Thank you! Your request has been received. Manns Construction & Roofing will contact you as soon as possible."*

### Contact Page
Company name, phone, contact form (name, phone, email, service, message), **Call Now** and **Get a Quote** buttons. Address, Google Map, and service area will be added once provided.

## Mobile Requirements

- Fully responsive: iPhone, Android, tablets, laptops, desktops, large monitors
- Large readable text and easy-to-tap buttons
- Sticky call button on mobile
- Hamburger navigation
- Fast-loading, properly sized images
- Properly sized forms
- No horizontal scrolling

## Content & Compliance Notes

- **No insurance guarantees.** Never promise claim approval or make legal/insurance guarantees. Use language like *"We can help document damage and guide you through the restoration process."*
- **Equipment services** must be confirmed with the owner before specific claims are published.
- Stock photos are placeholders and should be swapped for real project photos.

## Open Items

- [x] Tech stack (Astro, static)
- [ ] Hosting and domain (then set `site` in `astro.config.mjs`)
- [ ] Form submission endpoint (`PUBLIC_FORM_ENDPOINT`) — must accept file uploads
- [ ] Business address, Google Maps embed, and service area
- [ ] Confirmed list of equipment services
- [ ] Logo and brand colors
- [ ] Real project, team, and before/after photos
- [ ] Customer reviews/testimonials
- [ ] Company history and experience details for the About page
- [ ] Remainder of PDR (section 20 onward was cut off)

## Getting Started

Built with [Astro](https://astro.build) as a fully static site. Requires Node 18+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the build locally
```

### Configuration

Copy `.env.example` to `.env` and set `PUBLIC_FORM_ENDPOINT` to a URL that accepts `multipart/form-data` POSTs (for example Formspree, Basin, Getform, or a custom handler). Until it's set, forms simulate success in dev. In production they show a "please call us" message.

### Editing content

- Business info (phone, address, service area): `src/data/site.ts`
- Service pages: `src/data/services.ts`
- Projects gallery: `src/data/projects.ts`
- Photos: `src/data/images.ts` (put real photos in `public/images/` and point the entries there)

### Deploying

**Live site:** https://averodion-lab.github.io/manns-construction-roofing/

The site is hosted on GitHub Pages from the `gh-pages` branch. To publish changes:

```bash
git push          # save source changes to main
npm run deploy    # build for GitHub Pages and publish to gh-pages
```

`npm run deploy` builds with `GITHUB_PAGES=1`, which serves the site from the `/manns-construction-roofing/` subpath and prefixes internal links automatically. When moving to a custom domain, update `site`/`base` in `astro.config.mjs`. Because `dist/` is plain static files, it can also be deployed to Netlify, Vercel, Cloudflare Pages, or any web host.
