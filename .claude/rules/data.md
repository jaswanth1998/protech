---
globs: src/data/**/*.js
---

# Data File Rules

## Location

All static data lives in `src/data/`. Each file exports arrays or objects.

## Data Files

| File | Export | Description |
|---|---|---|
| `services.js` | `export const services = [...]` | Array of 8 service objects |
| `industries.js` | `export const industries = [...]` | Array of 6 industry objects |
| `team.js` | `export const team = [...]` | Array of team member objects |
| `stats.js` | `export const stats = {...}` | Stats/impact numbers |
| `company.js` | `export const company = {...}` | Company info (address, phone, email, hours, social) |
| `navigation.js` | `export const navLinks = [...]` | Navigation structure, footer links |

## Service Object Schema

```js
{
  slug: 'network-infrastructure',       // kebab-case, matches route
  name: 'Network Infrastructure',       // Display name
  tagline: 'Short tagline',             // One-liner for hero
  icon: 'LuNetwork',                    // Lucide icon name from react-icons/lu
  shortDescription: '...',              // 2-3 sentences for card
  description: '...',                   // Full content for detail page
  features: [                           // 3-6 items
    { icon: 'LuServer', title: '...', description: '...' }
  ],
  approach: [                           // 4 steps
    { step: 1, title: 'Assess', description: '...' }
  ],
  relatedIndustries: ['healthcare', 'finance'],  // industry slugs
  relatedServices: ['structured-cabling'],        // service slugs
}
```

## The 8 Services

| Slug | Name | Icon |
|---|---|---|
| `network-infrastructure` | Network Infrastructure | `LuNetwork` |
| `structured-cabling` | Structured Cabling & Fiber | `LuCable` |
| `wifi-wireless` | Wi-Fi & Wireless Solutions | `LuWifi` |
| `voip-unified-comms` | VoIP & Unified Communications | `LuPhone` |
| `cctv-security` | CCTV & Physical Security | `LuShield` |
| `managed-it-support` | Managed IT & Field Services | `LuHeadset` |
| `cloud-hybrid-cloud` | Cloud & Hybrid Cloud | `LuCloud` |
| `project-management` | Project Management & Deployment | `LuClipboardList` |

## Industry Object Schema

```js
{
  slug: 'healthcare',
  name: 'Healthcare',
  icon: 'LuHeart',
  description: '3-4 sentences',
  services: ['network-infrastructure', 'cctv-security'],  // related service slugs
}
```

## The 6 Industries

| Slug | Name | Icon |
|---|---|---|
| `healthcare` | Healthcare | `LuHeart` |
| `finance` | Finance & Banking | `LuLandmark` |
| `education` | Education | `LuGraduationCap` |
| `government` | Government | `LuBuilding` |
| `retail` | Retail | `LuShoppingCart` |
| `industrial` | Industrial / Manufacturing | `LuFactory` |

## Team Member Schema

```js
{
  name: 'John Smith',
  title: 'Head of Infrastructure',
  photo: '/images/avatar-placeholder.svg',   // placeholder initially
  bio: '2-3 sentence biography',
  linkedIn: 'https://linkedin.com/in/...',
}
```

## Company Schema

```js
{
  name: 'Pro-Tech IT Consulting',
  tagline: 'Your Reliable Service Partner',
  address: { street, city, province, postal },
  phone: '+1-XXX-XXX-XXXX',
  email: 'contact@protech.com',
  businessHours: { weekday: '9:00 AM - 5:00 PM', weekend: 'Closed' },
  social: { linkedIn: '...', twitter: '...' },
  mission: '...',
  vision: '...',
}
```

## Rules

- Use named exports (not default exports)
- Mark placeholder content with `// PLACEHOLDER` comments
- Service slugs must match route paths in `src/router.jsx`
- Industry `services` arrays reference service slugs
- All icon names must be valid Lucide icon names from `react-icons/lu`
