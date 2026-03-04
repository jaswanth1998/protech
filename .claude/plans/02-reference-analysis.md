---
name: "Reference Website Analysis"
description: "Competitive analysis of 3 reference IT consulting websites (TeckLinx, Connectra Technologies, Hanatech Inc). Extracts patterns to adopt and avoid, and synthesizes recommendations for Pro-Tech's site structure, navigation, CTAs, trust signals, and visual design."
status: "completed"
completed_items:
  - "Analyzed TeckLinx (tecklinx.com) — navigation, hero, services, trust signals, strengths/weaknesses"
  - "Analyzed Connectra Technologies (connectratechnologies.com) — navigation, services taxonomy, trust signals, content strategy"
  - "Analyzed Hanatech Inc (hanatechinc.com) — navigation, dark theme, service cards, CTA patterns"
  - "Created Patterns to Adopt table (10 patterns)"
  - "Created Patterns to Avoid table (8 anti-patterns)"
  - "Created Synthesis / Recommended Approach table"
notes:
  went_well:
    - "All 3 reference sites were successfully analyzed for structure and UX patterns"
    - "Clear differentiation between what to adopt vs avoid"
  went_wrong: []
  blockers: []
---

# 02 — Reference Website Analysis

## Site 1: TeckLinx (tecklinx.com)

### Navigation
- 4 top-level items: Home, Services (dropdown), About Us, Contact Us
- Services dropdown: Network Infrastructure, Onsite Support, Fiber Installation, Alarm Systems, CCTV, Digital Signage, VoIP, WiFi
- Simple, flat structure — no mega menus

### Pages/Routes
- Home, About Us, Contact Us (3 accessible pages)
- Services dropdown links return 404 — no dedicated service detail pages

### Hero Pattern
- Full-width background image with 60% opacity overlay
- Large headline + supporting text + single "Contact Us" CTA

### Service Categorization
- 4-column grid of service cards (icon + title + description + "Learn More")
- 8 services presented with consistent styling

### Trust Signals
- 5 leadership team profiles with photos and experience (25+ years CEO, etc.)
- Dual offices (Calgary AB + Tampa FL)
- Mission/Vision statements, 5 core values
- **Missing**: No partner logos, no certifications, no testimonials, no statistics, no client logos

### CTA Patterns
- "Contact Us" repeated everywhere — single CTA type
- "Learn More" buttons on service cards (soft CTA)

### Industries
- 7 industries as interactive button grid: Industrial, Banking & Finance, Infrastructure, Healthcare, Education, Government, Retail

### Visual Design
- Navy blue primary (#1F2C73), white backgrounds
- Clean sans-serif typography, grid-based layouts, card-based components

### Strengths
- Clear value proposition, simple navigation
- Service breadth communication via card grid
- Leadership visibility, dual-location credibility
- Consistent CTA strategy

### Weaknesses
- No service detail pages (404s)
- No content marketing (blog, case studies, resources)
- No external trust signals (certs, testimonials, stats)
- Single CTA type, no industry-specific messaging
- No FAQ or pricing info

---

## Site 2: Connectra Technologies (connectratechnologies.com)

### Navigation
- 7 top-level items with Industries, Solutions, and Services as separate categories
- 3-tier taxonomy: Solutions (strategic) → Services (execution) → Industries (verticals)

### Pages/Routes
- 15+ distinct pages: Who We Are, 5 industry verticals, 7+ solution pages, 8 service pages, Blog, eBooks, Case Studies, Career, Contact

### Hero Pattern
- Large banner with tagline
- Three feature blocks below (SD-WAN, Cloud, Network Solutions)
- Product-centric messaging

### Service Categorization
- 7 Solutions, 8 Services across separate menu sections
- Potential confusion between "Solutions" and "Services"

### Trust Signals
- 18+ partner logos (Juniper, Cisco, Dell, VMware, Google, Fortinet, HPE, etc.)
- 4.2/5 stars from 56 reviews
- 3 customer testimonials with names/companies
- **Broken**: Statistics counters all showing 0

### CTA Patterns
- Multi-channel: Phone (888-731-5210), Email, Forms
- Phone number in header, hero, and footer
- "Read More" buttons for progressive disclosure
- Download CTAs for eBooks and calculators (lead generation)

### Industries
- 5 explicit verticals with dedicated landing pages: Retail, Professional Services, Manufacturing IT, Quick Service Restaurants, Banking/Financial

### Content Sections
- Blog, eBooks, Case Studies, "Why Choose Us" tabs
- Rich content strategy with downloadable assets

### Visual Design
- Professional palette: black buttons, white backgrounds
- Standard business aesthetic, responsive grid layout

### Strengths
- Comprehensive service taxonomy
- Strong partner ecosystem (18+ logos)
- Industry-specific landing pages
- Rich content library
- Multiple contact methods

### Weaknesses
- Broken stats counters (all 0) — critical credibility issue
- Navigation overload (7 top-level items)
- Limited testimonials (only 3)
- Confusion between "Solutions" vs "Services"

---

## Site 3: Hanatech Inc (hanatechinc.com)

### Navigation
- Expandable mega-menu structure
- Managed IT Services as dropdown with sub-items
- Starlink as dedicated offering
- Simpler structure with About Us and News

### Pages/Routes
- 10-12 pages: Homepage, 6 service detail pages, Starlink, About, News archive, Contact

### Hero Pattern
- Dual messaging: "Securing Systems. Supporting Teams. Simplifying IT." + "Your Trusted Partner in Seamless IT Excellence"
- Brand tagline: "bring Smart IT to life"
- Fixed "Book a Demo" CTA (persistent)

### Service Categorization
- 6 integrated core services: Business Continuity, Network Security, Hybrid Cloud, Managed IT Support, Remote Monitoring, Home Edition
- Icon-based visual organization, consistent card treatment

### Trust Signals
- Business partners: Bell, Cisco, Dell, Microsoft
- Academic partnerships: NSCC, Saint Mary's University, Dalhousie University (unique)
- Canadian identity, North America coverage
- **Missing**: No testimonials, no reviews, no statistics

### CTA Patterns
- Fixed "Book a Demo" button (persistent, always visible)
- "Learn More" links under service cards
- Simple, focused conversion goal

### Visual Design
- Dark theme: #10161b (navy/black background)
- Gradient blue accents (rgba(0, 150, 214))
- White/light gray text on dark backgrounds
- Modern, high-contrast aesthetic
- 70-character max-width for text readability

### Strengths
- Clean, modern visual identity (dark theme)
- Simpler, more scannable navigation
- Fixed CTA maintains conversion focus
- Academic partnerships (unique credibility angle)
- Service cards with icon imagery

### Weaknesses
- No customer testimonials or reviews
- Sparse blog content (only 2 articles)
- No case studies or proof points
- No industry segmentation
- Limited differentiation messaging

---

## Patterns to Adopt

| Pattern | Source | How We'll Use It |
|---|---|---|
| Service card grid with icons | TeckLinx | 2x4 grid on services page + home page overview |
| Industry-specific pages | Connectra | Dedicated industries page with per-vertical cards |
| Fixed/persistent header CTA | Hanatech | "Get a Quote" button always visible in header |
| Partner logo strip | Connectra | Horizontal logo section on home + about pages |
| Dark theme aesthetic | Hanatech | Dark navy backgrounds for hero, header, footer, alternating sections |
| Leadership team visibility | TeckLinx | Team cards on about page with photos/bios |
| Multi-channel contact | Connectra | Phone + email + form + social links |
| Dual hero messaging | Hanatech | Functional headline + aspirational subtitle |
| Content library | Connectra | Future: blog + case studies section (v2) |
| Mega menu for services | Hanatech | Services dropdown listing all 8 services |

## Patterns to Avoid

| Anti-Pattern | Source | What We'll Do Instead |
|---|---|---|
| Broken/fake statistics | Connectra | Only show real stats or omit until client provides data |
| No service detail pages | TeckLinx | Every service gets a dedicated detail page |
| Single CTA type | TeckLinx | Varied CTAs: "Get a Quote", "Learn More", "Request This Service" |
| Navigation overload | Connectra | Max 5-6 top-level items |
| No testimonials | All three | Placeholder testimonial section, client provides real ones |
| Sparse blog | Hanatech | Plan for content section in v2, not v1 |
| Solutions vs Services confusion | Connectra | Single "Services" category, clear naming |
| No industry customization | TeckLinx | Industry cards linking relevant services |

---

## Synthesis — Our Recommended Approach

| Element | Recommendation | Inspiration |
|---|---|---|
| Navigation | 5 items + Services dropdown + CTA button | Hanatech structure |
| Hero | Dual messaging (functional + aspirational) with 2 CTAs | Hanatech hero |
| Service taxonomy | Flat list of 8 services with dedicated detail pages | Connectra depth + TeckLinx clarity |
| Industries | Dedicated page with 6 industry cards | Connectra if multi-vertical |
| Trust signals | Partner logos (8-12) + stats section + placeholder testimonials | Combined best |
| CTAs | Persistent "Get a Quote" + varied per-page CTAs | Hanatech primary CTA |
| Visual identity | Dark navy theme with green accents | Hanatech aesthetic + Pro-Tech brand |
| Contact | Multi-channel: form + phone + email + address + map | Connectra approach |
| Content | v1: static pages only. v2: blog + case studies | Connectra content strategy |
