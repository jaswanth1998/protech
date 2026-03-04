---
name: "Content Requirements Plan"
description: "Catalogs all content needed for the site: client-provided (C), placeholder (P), and generated (G) items. Covers global content, per-page content, data architecture (6 JS data files), service object schema, and placeholder content strategy."
status: "completed"
completed_items:
  - "Audited all 6 data files for existing content"
  - "Populated services.js — full description (3-4 paragraphs) for all 8 services"
  - "Populated services.js — features (5 items each with icon/title/description) for all 8 services"
  - "Populated services.js — approach (4-step process) for all 8 services"
  - "Verified navigation.js, company.js, stats.js, team.js, industries.js already complete with placeholder content"
  - "All placeholder content marked with // PLACEHOLDER comments"
  - "Production build verified — 104 KB gzipped, under 150 KB target"
notes:
  went_well:
    - "All 6 data files were already created and structured correctly from plan 05"
    - "Only services.js had empty fields (description, features, approach)"
    - "Build size stayed well within budget even with full service content"
  went_wrong: []
  blockers:
    - "Client-provided content (C items) still needed: real company address, phone, email, social URLs, team photos/bios, stats numbers, partner logos, Google Maps embed, form submission endpoint"
---

# 06 — Content Requirements Plan

## Content Status Legend

- **C** = Client must provide
- **P** = Can use placeholder initially
- **G** = Can be generated/written by developer

---

## Global / Sitewide Content

| Content Item | Status | Notes |
|---|---|---|
| Company legal name | C | For copyright footer |
| Office address(es) | C | For contact page and footer |
| Phone number(s) | C | For contact and footer |
| Email address(es) | C | General and support email |
| Business hours | C | For contact page |
| Social media URLs | C | LinkedIn, Twitter/X at minimum |
| Partner/client logos | C | Cisco, Dell, Microsoft, etc. Need permission or use official partner badges |
| Google Maps embed code or coordinates | C | For contact page map |
| Favicon | G | Generate from logo |
| OG image | G | Generate from logo + brand colors |

---

## Home Page

| Content Item | Status | Notes |
|---|---|---|
| Hero headline | G | "Your Reliable Service Partner" (from brand) |
| Hero subheading | G | 1-2 sentences about IT consulting |
| Service summaries (x8) | G | 1-2 sentences per service; can draft from common IT descriptions |
| "Why Choose Us" differentiators (x4) | P/G | Title + 2-3 sentences each. Draft with common IT value props. |
| Stats numbers | C | Projects completed, years experience, clients served, etc. |
| Industry list | G | Generic industry categories |

---

## About Page

| Content Item | Status | Notes |
|---|---|---|
| Company story / history | C | Founding story, journey, milestones |
| Mission statement | C | Core mission — client must approve |
| Vision statement | C | Long-term vision — client must approve |
| Core values (x4) | C/G | Can draft, client approves |
| Team member names | C | Names, titles |
| Team member photos | C | Professional headshots (or use placeholder silhouettes) |
| Team member bios | C/P | 2-3 sentences each. Can draft if client provides bullet points. |
| Certification badges | C | Official partner/cert images |

---

## Services Page + 8 Detail Pages

| Content Item | Status | Notes |
|---|---|---|
| Service name (x8) | G | Already defined in architecture |
| Service tagline (x8) | G | One-line descriptor per service |
| Service icon (x8) | G | Selected from Lucide icon set |
| Short description (x8) | G | 2-3 sentences for card display |
| Full description (x8) | G/C | 3-4 paragraphs per service. Draft technical descriptions; client reviews for accuracy. |
| Key features/capabilities (x8) | G/C | 3-6 bullet features per service |
| Delivery approach (x8) | G | Generic 4-step process customized per service |
| Related industries mapping (x8) | G | Which industries each service serves |
| Related services mapping (x8) | G | Cross-links between complementary services |

---

## Industries Page

| Content Item | Status | Notes |
|---|---|---|
| Industry names (x6) | G | Healthcare, Finance, Education, Government, Retail, Industrial |
| Industry descriptions (x6) | G/C | 3-4 sentences per industry. How Pro-Tech serves that vertical. |
| Industry icons (x6) | G | From Lucide icon set |
| Industry-to-service mapping (x6) | G | Which services are relevant per industry |

---

## Contact Page

| Content Item | Status | Notes |
|---|---|---|
| Form fields | G | Name, Email, Phone, Company, Service Interest, Message |
| Form submission endpoint | C | Formspree ID, or alternative service credentials |
| Thank-you message | G | Confirmation message after form submit |

---

## Content Delivery Format

The client should provide content in any of these formats:
- Google Doc or Word document
- Spreadsheet (for structured data like team members)
- Email with text content
- Brand guideline PDF (if exists beyond the visiting card)

---

## Data Architecture

All text content stored in `src/data/` as JavaScript modules for easy maintenance:

| File | Contains |
|---|---|
| `src/data/services.js` | Array of 8 service objects with all fields |
| `src/data/industries.js` | Array of 6 industry objects |
| `src/data/team.js` | Array of team member objects |
| `src/data/stats.js` | Object with stat numbers |
| `src/data/company.js` | Company info: address, phone, email, hours, social |
| `src/data/navigation.js` | Nav structure, footer links |

### Service Object Schema

```js
{
  slug: 'network-infrastructure',
  name: 'Network Infrastructure',
  tagline: 'Build a robust foundation for your business connectivity',
  icon: 'LuNetwork',
  shortDescription: '2-3 sentences for card display',
  description: 'Full HTML/text content for detail page',
  features: [
    { icon: 'LuServer', title: 'Feature Name', description: '...' },
    // 3-6 items
  ],
  approach: [
    { step: 1, title: 'Assess', description: '...' },
    // 4 steps
  ],
  relatedIndustries: ['healthcare', 'finance', 'government', 'industrial'],
  relatedServices: ['structured-cabling', 'wifi-wireless', 'cloud-hybrid-cloud'],
}
```

---

## Placeholder Content Strategy

For initial development, placeholder content will be used for:
- Team member photos → silhouette avatar SVGs
- Partner logos → generic tech company placeholder badges
- Stats numbers → realistic placeholder numbers (e.g., "500+ Projects", "15+ Years")
- Testimonials → lorem ipsum quotes with fictional names (clearly marked as placeholder)
- Company story → generic IT consulting founding narrative

All placeholder content will be clearly marked with `// PLACEHOLDER` comments in data files so client-provided content can easily replace it.
