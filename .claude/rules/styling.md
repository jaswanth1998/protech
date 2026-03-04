---
globs: src/**/*.{jsx,css}
---

# Styling Rules

## Tailwind v4 (CSS-based config)

Theme variables are defined in `src/styles/index.css` via `@theme {}`. NOT in a `tailwind.config.js` file.

## Color Palette

| Name | CSS Variable | Tailwind Class | Hex | Usage |
|---|---|---|---|---|
| Primary Green | `--color-primary` | `bg-primary`, `text-primary` | #39e991 | CTAs, accents, links, highlights |
| Primary Light | `--color-primary-light` | `bg-primary-light` | #6ffcb3 | Hover states |
| Primary Dark | `--color-primary-dark` | `bg-primary-dark` | #2bb86e | Active/pressed states |
| Primary Muted | `--color-primary-muted` | `bg-primary-muted` | #39e99120 | Subtle background tints |
| Slate | `--color-slate` | `text-slate` | #718096 | Muted text, captions |
| Navy | `--color-navy` | `bg-navy` | #2d3748 | Primary dark background |
| Navy Light | `--color-navy-light` | `bg-navy-light` | #4a5568 | Secondary text on dark |
| Navy Dark | `--color-navy-dark` | `bg-navy-dark` | #1a202c | Deepest backgrounds |

### Color Rules

- **NEVER** use `text-primary` (#39e991) on white/light backgrounds — contrast ratio is only 1.8:1 (fails WCAG)
- On light backgrounds, use `text-primary-dark` (#2bb86e) for green text, or limit green to non-text elements (borders, backgrounds, icons)
- Primary green is safe on dark backgrounds (navy, navy-dark): 6.2:1 and 8.5:1 ratios

## Typography

| Role | Font | Tailwind Variable | Weights |
|---|---|---|---|
| Headings | Poppins | `font-heading` | 600, 700 |
| Body | Inter | `font-body` | 400, 500, 600 |
| Mono / Code | JetBrains Mono | `font-mono` | 400 |

### Type Scale

| Element | Tailwind | Weight | Line Height |
|---|---|---|---|
| h1 | `text-5xl` (mobile: `text-4xl`) | 700 | 1.1 |
| h2 | `text-4xl` (mobile: `text-3xl`) | 700 | 1.2 |
| h3 | `text-3xl` | 600 | 1.25 |
| h4 | `text-2xl` | 600 | 1.3 |
| h5 | `text-xl` | 600 | 1.4 |
| Body | `text-base` | 400 | 1.6 |
| Body Large | `text-lg` | 400 | 1.6 |
| Small | `text-sm` | 400 | 1.5 |
| Overline/Tagline | `text-sm tracking-[0.15em] uppercase` | 600 | 1.3 |

## Spacing

Section rhythm: `py-16 md:py-20 lg:py-24`

Common patterns:
- Card padding: `p-5` (mobile), `p-6` (desktop)
- Element gaps: `gap-6`
- Between-section margins: `mt-10` (mobile), `mt-12` (tablet), `mt-16` (desktop)

## Layout

- Max width: `max-w-7xl` (1280px) with `mx-auto px-4 sm:px-6 lg:px-8`
- Grid: 12-column via `grid grid-cols-12 gap-6`
- Common column spans:
  - Full: `col-span-12`
  - Half: `col-span-12 md:col-span-6`
  - Third: `col-span-12 md:col-span-6 lg:col-span-4`
  - Quarter: `col-span-12 sm:col-span-6 lg:col-span-3`

## Cards

Base card: `bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300`

Service card: `bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300`

Dark card: `bg-navy rounded-xl shadow-md overflow-hidden border border-navy-light/30`

## Shadows

| Token | Usage |
|---|---|
| `shadow-sm` | Inputs |
| `shadow-md` | Cards at rest |
| `shadow-lg` | Cards on hover |
| `shadow-xl` | Modals, elevated cards |

## Border Radius

| Token | Usage |
|---|---|
| `rounded-lg` (8px) | Buttons, inputs |
| `rounded-xl` (12px) | Cards |
| `rounded-2xl` (16px) | Large cards, hero elements |
| `rounded-full` | Avatars, pill badges |

## Responsive Design

Mobile-first. Base styles = mobile. Use breakpoint prefixes to scale up:

| Prefix | Min Width | Target |
|---|---|---|
| (none) | 0px | Mobile |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

## Buttons

All: `font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`

| Variant | Classes |
|---|---|
| Primary | `bg-primary text-navy-dark hover:bg-primary-light active:bg-primary-dark focus:ring-primary` |
| Secondary | `bg-navy text-white hover:bg-navy-light active:bg-navy-dark focus:ring-navy` |
| Outline | `border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-navy-dark focus:ring-primary` |
| Ghost | `text-primary bg-transparent hover:bg-primary/10 focus:ring-primary` |
| White | `bg-white text-navy-dark hover:bg-gray-100 active:bg-gray-200 focus:ring-white` |
