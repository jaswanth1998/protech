---
name: "Page-by-Page Sections Plan"
description: "Detailed section-by-section breakdown for every page: Home (8 sections), About (8 sections), Services listing (5 sections), Service Detail template (8 sections, x8 services), Industries (5 sections), and Contact (4 sections). Includes components, CTAs, and UX notes per section."
status: "completed"
completed_items:
  - "Created src/data/industries.js — 6 industries with slug, name, icon, description, related services"
  - "Created src/data/team.js — 4 placeholder team members with name, title, photo, bio, linkedIn"
  - "Created src/data/stats.js — 4 impact stats (500+ projects, 15+ years, 200+ clients, 24/7 support)"
  - "Scaffolded Home page — 7 sections: Hero, Trusted By, Services Overview, Why Choose Us, Industries, Stats, CTA Banner"
  - "Scaffolded About page — 7 sections: PageHero, Our Story, Mission & Vision, Core Values, Team, Certifications, CTA Banner"
  - "Scaffolded Services page — 4 sections: PageHero, Services Grid (x8), Our Process (4 steps), CTA Banner"
  - "Scaffolded ServiceDetail page — 7 sections: PageHero w/ breadcrumb, Overview, Key Features, Approach, Related Industries, Related Services, CTA Banner + NotFound fallback"
  - "Scaffolded Industries page — 4 sections: PageHero, Industries Grid (x6) with service links, Cross-Industry Strip, CTA Banner"
  - "Scaffolded Contact page — 3 sections: PageHero, Contact Form + Info Cards (2-col), Map placeholder + ?service= param handling"
  - "All pages pass ESLint (0 errors) and production build succeeds"
notes:
  went_well:
    - "All 6 pages scaffolded with section comments mapping back to plan spec"
    - "Data files properly import into pages — services, industries, team, stats, company"
    - "ServiceDetail correctly wires up useParams + data lookup + NotFound fallback"
    - "Contact page reads ?service= query param for pre-selection"
    - "Code splitting works well — each page has its own chunk with data dependencies"
  went_wrong: []
  blockers: []
---

# 04 — Page-by-Page Sections Plan

## Page: Home (`/`)

**Purpose**: First impression. Establish credibility, communicate value proposition, direct visitors to services or contact.

### Sections (top to bottom)

| # | Section | Description | Key Components | CTA |
|---|---|---|---|---|
| 1 | **Hero** | Full-width dark navy background with subtle geometric pattern. Large heading: "Your Reliable Service Partner". Subheading describing IT consulting expertise. Two buttons. | `<Hero>` | "Explore Our Services" (primary), "Contact Us" (outline) |
| 2 | **Trusted By / Partners** | Horizontal logo strip of partner/client logos ("Technologies We Work With": Cisco, Dell, Microsoft, etc.). Auto-scrolling marquee or static grid. | `<LogoStrip>` | None (trust signal) |
| 3 | **Services Overview** | Section heading: "Our Services". 2x4 or 3x3 grid of service cards, each with icon, title, one-line description, and "Learn More" link. | `<SectionHeading>`, `<ServiceCard>` (x8) | "Learn More" link per card, "View All Services" at bottom |
| 4 | **Why Choose Us** | 3-4 column grid of differentiators: Experienced Team, 24/7 Support, Certified Professionals, Client-First Approach. Icon + heading + short text per item. | `<SectionHeading>`, `<FeatureCard>` (x4) | None |
| 5 | **Industries We Serve** | Horizontal scroll or grid of industry badges/cards: Healthcare, Finance, Education, Retail, Government, Industrial. | `<SectionHeading>`, `<IndustryBadge>` (x6) | "See All Industries" link |
| 6 | **Stats / Impact** | Counter section with animated numbers: "X+ Projects Completed", "X+ Years Experience", "X+ Clients Served", "24/7 Support". Dark background. | `<StatCounter>` (x4) | None |
| 7 | **CTA Banner** | Full-width green-accent banner. "Ready to Transform Your IT Infrastructure?" with "Get a Quote" button. | `<CTABanner>` | "Get a Quote" |
| 8 | **Footer** | Standard footer (see architecture plan). | `<Footer>` | Social links, contact info |

**UX Notes**:
- Hero uses a subtle animated gradient or particle effect (optional, respect `prefers-reduced-motion`)
- Stat counters animate when scrolled into view (Intersection Observer)
- Services grid animates in with staggered fade-up

---

## Page: About Us (`/about`)

**Purpose**: Build trust and credibility. Humanize the company. Show mission, values, and team.

### Sections

| # | Section | Description | Key Components | CTA |
|---|---|---|---|---|
| 1 | **Page Hero** | Shorter hero with page title "About Us" and breadcrumb. Dark navy background. | `<PageHero>` | None |
| 2 | **Our Story** | Two-column layout. Left: company narrative text (founding story, mission). Right: office/team image or geometric illustration. | `<ContentSection>` | None |
| 3 | **Mission & Vision** | Two side-by-side cards with mission statement and vision statement. Green accent borders. | `<MissionVisionCard>` (x2) | None |
| 4 | **Core Values** | 4-column grid of values: Integrity, Innovation, Reliability, Client Focus. Icon + title + description. | `<SectionHeading>`, `<ValueCard>` (x4) | None |
| 5 | **Our Team** | Team member cards in a grid: photo, name, title, brief bio, LinkedIn link. | `<SectionHeading>`, `<TeamCard>` (xN) | None |
| 6 | **Certifications & Partners** | Logo grid of technology partners and certification badges. | `<LogoStrip>` | None |
| 7 | **CTA Banner** | "Let's Work Together" banner. | `<CTABanner>` | "Contact Us" |
| 8 | **Footer** | Standard footer. | `<Footer>` | — |

**UX Notes**:
- Team cards flip or expand on hover to reveal bio (desktop) or tap-to-expand (mobile)
- Use placeholder team photos initially (silhouette avatars)

---

## Page: Services Listing (`/services`)

**Purpose**: Showcase all services at a glance. Drive visitors to individual service detail pages.

### Sections

| # | Section | Description | Key Components | CTA |
|---|---|---|---|---|
| 1 | **Page Hero** | "Our Services" title, subtitle: "Comprehensive IT solutions tailored to your business needs." | `<PageHero>` | None |
| 2 | **Services Grid** | 2x4 responsive grid of service cards. Each card: icon (48px), service name, 2-3 sentence description, "Learn More" arrow link. Cards have green top border and hover lift effect. | `<ServiceCard>` (x8) | "Learn More" per card |
| 3 | **Our Process** | 4-step horizontal process: Assess → Plan → Implement → Support. Numbered circles connected by lines. | `<ProcessStep>` (x4) | None |
| 4 | **CTA Banner** | "Need a Custom Solution?" | `<CTABanner>` | "Talk to Our Experts" |
| 5 | **Footer** | Standard footer. | `<Footer>` | — |

---

## Page: Service Detail (`/services/:serviceSlug`) — Template

**Purpose**: Deep-dive into a specific service. Educate the visitor. Convert to inquiry.

**Used for all 8 services** — data-driven from `src/data/services.js`.

### Sections

| # | Section | Description | Key Components | CTA |
|---|---|---|---|---|
| 1 | **Page Hero** | Service name as h1. Short tagline. Breadcrumb: Home > Services > [Service Name]. | `<PageHero>` | None |
| 2 | **Service Overview** | Two-column: Left: detailed description (3-4 paragraphs). Right: key highlights list (checkmark items) or feature image. | `<ContentSection>` | None |
| 3 | **Key Features** | 3-column grid of feature cards. Icon + title + description for specific capabilities. | `<SectionHeading>`, `<FeatureCard>` (x3-6) | None |
| 4 | **Our Approach** | Numbered steps or timeline showing how Pro-Tech delivers this service. | `<ProcessStep>` or `<Timeline>` | None |
| 5 | **Related Industries** | Horizontal badges showing which industries benefit from this service. | `<IndustryBadge>` | None |
| 6 | **Related Services** | 2-3 cards linking to complementary services. | `<ServiceCard>` (x3) | "Learn More" links |
| 7 | **CTA Banner** | "Ready to Get Started with [Service Name]?" | `<CTABanner>` | "Request This Service" → `/contact?service=[slug]` |
| 8 | **Footer** | Standard footer. | `<Footer>` | — |

**UX Notes**:
- All 8 services use this shared template (`ServiceDetail.jsx`)
- Data driven from `src/data/services.js` — each service has: `slug`, `name`, `tagline`, `icon`, `description`, `features[]`, `approach[]`, `relatedIndustries[]`, `relatedServices[]`
- If slug not found, render `<NotFound />`

### The 8 Services

| # | Service Name | Slug | Icon (Lucide) |
|---|---|---|---|
| 1 | Network Infrastructure | `network-infrastructure` | `LuNetwork` |
| 2 | Structured Cabling & Fiber | `structured-cabling` | `LuCable` |
| 3 | Wi-Fi & Wireless Solutions | `wifi-wireless` | `LuWifi` |
| 4 | VoIP & Unified Communications | `voip-unified-comms` | `LuPhone` |
| 5 | CCTV & Physical Security | `cctv-security` | `LuShield` |
| 6 | Managed IT & Field Services | `managed-it-support` | `LuHeadset` |
| 7 | Cloud & Hybrid Cloud | `cloud-hybrid-cloud` | `LuCloud` |
| 8 | Project Management & Deployment | `project-management` | `LuClipboardList` |

---

## Page: Industries (`/industries`)

**Purpose**: Show industry expertise. Build trust with prospects from specific verticals.

### Sections

| # | Section | Description | Key Components | CTA |
|---|---|---|---|---|
| 1 | **Page Hero** | "Industries We Serve". Subtitle about cross-sector experience. | `<PageHero>` | None |
| 2 | **Industries Grid** | Large cards (2-column on desktop) for each industry. Card includes: icon, name, 3-4 sentence description, list of relevant services. | `<IndustryCard>` (x6) | None |
| 3 | **Cross-Industry Strip** | Horizontal feature strip: "Every industry benefits from our core strengths: Certified Professionals, 24/7 Support, Scalable Solutions". | `<FeatureStrip>` | None |
| 4 | **CTA Banner** | "Discuss Your Industry-Specific Needs" | `<CTABanner>` | "Get In Touch" |
| 5 | **Footer** | Standard footer. | `<Footer>` | — |

### The 6 Industries

| # | Industry | Icon (Lucide) | Relevant Services |
|---|---|---|---|
| 1 | Healthcare | `LuHeart` | Network Infra, CCTV, Managed IT, Cloud |
| 2 | Finance & Banking | `LuLandmark` | Network Infra, CCTV, VoIP, Cloud |
| 3 | Education | `LuGraduationCap` | Wi-Fi, Cabling, VoIP, Managed IT |
| 4 | Government | `LuBuilding` | Network Infra, CCTV, Cabling, Cloud |
| 5 | Retail | `LuShoppingCart` | Wi-Fi, VoIP, CCTV, Managed IT |
| 6 | Industrial / Manufacturing | `LuFactory` | Network Infra, Cabling, CCTV, Project Mgmt |

---

## Page: Contact (`/contact`)

**Purpose**: Convert visitor to lead. Provide multiple contact channels.

### Sections

| # | Section | Description | Key Components | CTA |
|---|---|---|---|---|
| 1 | **Page Hero** | "Get In Touch". Subtitle: "Let's discuss how we can support your IT needs." | `<PageHero>` | None |
| 2 | **Contact Content** | Two-column layout. Left: Contact form (Name, Email, Phone, Company, Service Interest dropdown, Message, Submit). Right: Contact info cards (Address, Phone, Email, Business Hours). | `<ContactForm>`, `<ContactInfoCard>` (x4) | "Send Message" submit |
| 3 | **Map** | Embedded Google Map or static map image showing office location. | `<MapEmbed>` | None |
| 4 | **Footer** | Standard footer (no CTA banner — the page itself is the conversion point). | `<Footer>` | — |

**UX Notes**:
- Form uses React Hook Form with Zod validation
- Service dropdown pre-selects if `?service=` query param is present (from service detail CTAs)
- Success state: form replaced with thank-you message and confirmation
- For static site without backend: use Formspree, Netlify Forms, or EmailJS
- All fields have proper labels, error messages, and focus management
