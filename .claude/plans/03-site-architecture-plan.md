---
name: "Site Architecture Plan"
description: "Defines the sitemap (13 routes), desktop/mobile/footer navigation structure, CTA strategy across all pages, URL conventions, and user flow paths for the Pro-Tech website."
status: "completed"
completed_items:
  - "Verified router matches sitemap (13 routes: /, /about, /services, 8 service detail via :slug, /industries, /contact)"
  - "Created src/data/navigation.js (navLinks with Services dropdown children, footerLinks, ctaButton)"
  - "Created src/data/company.js (name, tagline, address, phone, email, hours, social, mission, vision — PLACEHOLDER content)"
  - "Created src/data/services.js (8 service stubs with slug, name, icon, tagline, shortDescription, relatedIndustries, relatedServices)"
  - "Created src/pages/NotFound/NotFound.jsx (404 page with back-to-home link)"
  - "Added catch-all (*) route to src/router.jsx for NotFound page"
  - "Verified ESLint passes (0 errors) and production build succeeds"
notes:
  went_well:
    - "Router was already correctly configured for all 13 routes from plan 01"
    - "All new files pass lint and build cleanly"
    - "NotFound page code-splits correctly (0.90 kB chunk)"
  went_wrong: []
  blockers: []
---

# 03 — Site Architecture Plan

## Sitemap

```
/                                   Home
/about                              About Us
/services                           Services (listing page)
/services/network-infrastructure    Service Detail: Network Infrastructure
/services/structured-cabling        Service Detail: Structured Cabling & Fiber
/services/wifi-wireless             Service Detail: Wi-Fi & Wireless Solutions
/services/voip-unified-comms        Service Detail: VoIP & Unified Communications
/services/cctv-security             Service Detail: CCTV & Physical Security
/services/managed-it-support        Service Detail: Managed IT & Field Services
/services/cloud-hybrid-cloud        Service Detail: Cloud & Hybrid Cloud
/services/project-management        Service Detail: Project Management & Deployment
/industries                         Industries We Serve
/contact                            Contact Us
```

**Total routes**: 13 (1 Home + 1 About + 1 Services listing + 8 Service details + 1 Industries + 1 Contact)

### Future-Ready Routes (not in v1)

```
/projects                           Case Studies / Projects (Phase 2)
/blog                               Blog / Insights (Phase 2)
/careers                            Careers (Phase 3)
```

---

## Navigation Structure

### Desktop Header

```
[Logo]  Home   About   Services ▼   Industries   Contact   [ Get a Quote ]
                          |
                     Dropdown:
                       Network Infrastructure
                       Structured Cabling & Fiber
                       Wi-Fi & Wireless
                       VoIP & Unified Comms
                       CCTV & Physical Security
                       Managed IT & Field Services
                       Cloud & Hybrid Cloud
                       Project Management
                       ─────────────────────
                       View All Services →
```

- Logo links to `/`
- "Services" has a dropdown on hover/click
- "Get a Quote" is a prominent primary button linking to `/contact`
- Active page indicated by green underline/highlight
- Header becomes sticky after scrolling past hero section

### Mobile Navigation

- Hamburger icon (three lines) top-right
- Full-screen overlay slide-in from right
- Services has an expandable accordion (tap to reveal sub-items)
- "Get a Quote" button pinned at bottom of mobile menu
- Close button (X) top-right
- Body scroll locked when menu is open
- `aria-expanded` and focus trap for accessibility

### Footer Navigation

```
+-------------------------------------------------------------------+
| [Logo]        Quick Links      Services            Get In Touch    |
|               Home             Network Infra       123 Street Name |
| Tagline       About Us         Cabling & Fiber     City, Province  |
|               Services         Wi-Fi               Phone: xxx      |
|               Industries       VoIP                Email: xxx      |
|               Contact          CCTV Security                       |
|                                Managed IT          [Social Icons]  |
|                                Cloud               LinkedIn        |
|                                Project Mgmt        Twitter         |
+-------------------------------------------------------------------+
| © 2026 Pro-Tech IT Consulting. All rights reserved.               |
+-------------------------------------------------------------------+
```

---

## CTA Strategy

| Location | CTA Text | Type | Links To |
|---|---|---|---|
| Header (persistent) | "Get a Quote" | Primary Button | `/contact` |
| Hero section | "Explore Our Services" | Primary Button | `/services` |
| Hero section | "Contact Us" | Outline Button | `/contact` |
| Services listing | "Learn More" (per card) | Ghost/Link | `/services/[slug]` |
| Service detail bottom | "Request This Service" | Primary Button | `/contact?service=[slug]` |
| About page bottom | "Let's Work Together" | Primary Banner CTA | `/contact` |
| Industries bottom | "Discuss Your Industry Needs" | Primary Banner CTA | `/contact` |
| Every page (pre-footer) | "Ready to Get Started?" banner | Full-width CTA Section | `/contact` |
| Mobile menu bottom | "Get a Quote" | Primary Button | `/contact` |

**CTA Design Pattern**: A reusable `<CTABanner>` component with dark background, headline, subtext, and 1-2 buttons appears above the footer on every page (except Contact).

---

## URL Structure

- All URLs are lowercase, kebab-case
- Service detail URLs nested under `/services/` for clear hierarchy
- No trailing slashes
- Service slugs derived from service names via `slugify()` utility
- React Router uses `useParams()` to match `:serviceSlug` and look up service data from `src/data/services.js`

---

## User Flow Paths

### Primary Conversion Path
```
Home → Services → Service Detail → Contact (with pre-selected service)
```

### Trust-Building Path
```
Home → About (team, values, certifications) → Contact
```

### Industry-Specific Path
```
Home → Industries → (relevant services linked) → Service Detail → Contact
```

### Direct Path
```
Any Page → Header "Get a Quote" CTA → Contact
```
