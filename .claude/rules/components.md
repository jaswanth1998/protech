---
globs: src/components/**/*.jsx
---

# Component Rules

## Architecture Principles

1. **Single Responsibility** — Each component does one thing. A `ServiceCard` renders a card; it does NOT fetch data.
2. **Composition over Configuration** — Prefer `<Card><CardHeader /><CardBody /></Card>` over `<Card headerText="..." bodyText="..." />`.
3. **Container/Presentational Split** — Components in `src/components/` are presentational (receive props, render UI). Pages are containers (data, routing).
4. **No Prop Drilling Beyond 2 Levels** — Use React Context if data must pass through 3+ layers.
5. **Custom Hooks for Reuse** — Any logic used by 2+ components goes to `src/hooks/`.

## Semantic HTML First

Use semantic elements before `<div>`:
- `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<figure>`, `<address>`

## Component File Template

```jsx
import PropTypes from 'prop-types'; // if using PropTypes

function ComponentName({ prop1, prop2 }) {
  return (
    // JSX
  );
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
};

export default ComponentName;
```

## UI Components (`src/components/ui/`)

### Button
- Variants: `primary`, `secondary`, `outline`, `ghost`, `white`
- Sizes: `sm` (36px min-h), `md` (44px min-h), `lg` (52px min-h)
- If `href` provided, render as `<a>` instead of `<button>`
- All buttons: `font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`

### Container
- Default: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Supports `as` prop for polymorphic element (section, div, article)

### SectionHeading
- Props: `title`, `subtitle`, `align` (center|left), `light` (boolean for dark backgrounds)
- Green accent line below heading

### Input / Textarea / Select
- Always pair with `<label>` element (never placeholder-only)
- Border: `border border-gray-300 rounded-lg px-4 py-3`
- Focus: `border-primary ring-2 ring-primary/20 outline-none`
- Error: `border-error ring-2 ring-error/20` with `<p role="alert">` for error message
- Error messages use `aria-live="polite"`

### Badge
- Variants: `green`, `navy`, `gray`
- Sizes: `sm`, `md`

## Layout Components (`src/components/layout/`)

### Header
- Sticky after scroll past hero
- Desktop: Logo + nav links + Services dropdown + "Get a Quote" button
- Mobile: Hamburger → full-screen overlay slide from right
- Active page: green underline/highlight via `useLocation()`
- `aria-expanded` on mobile toggle, focus trap in mobile menu

### Footer
- 4-column: Logo+tagline | Quick Links | Services | Get In Touch
- Copyright bar at bottom

### Layout wrapper
- Composes: `<Header />` + `<main id="main-content">{children}</main>` + `<Footer />`
- Includes `<ScrollToTop />` component

## Shared Components (`src/components/shared/`)

### ServiceCard
- Props: `icon`, `title`, `description`, `slug`, `variant` (grid|compact)
- Classes: `bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- Links to `/services/[slug]`

### CTABanner
- Props: `headline`, `subtitle`, `primaryCTA`, `secondaryCTA`, `variant` (dark|green)
- Full-width, appears above footer on every page except Contact

### StatCounter
- Animate counting on scroll into view (Intersection Observer)
- Props: `value`, `label`, `suffix`, `prefix`

### TeamCard
- Props: `name`, `title`, `photo`, `bio`, `linkedIn`
- Expandable bio: hover on desktop, tap on mobile

### ProcessStep
- Props: `steps[]` — array of `{ step, title, description }`
- Connected by lines, numbered circles

## Icon Usage

- Library: Lucide icons via `react-icons/lu`
- Sizes: 20px inline, 24px buttons, 40-48px feature cards, 64px hero features
- Color: inherit text color or `text-primary` for accented
- Stroke width: 1.5px default
