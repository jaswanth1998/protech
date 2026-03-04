---
name: "Project Rules & Engineering Standards"
description: "Defines the tech stack, code quality standards, folder structure, naming conventions, component architecture, accessibility, performance targets, responsive approach, and git workflow for the Pro-Tech website."
status: "completed"
completed_items:
  - "npm init and all dependency installation (React 19, Vite 7, Tailwind v4, ESLint 9, etc.)"
  - "Full folder structure created (src/components/{ui,layout,shared}, src/pages/*, src/hooks, src/data, src/utils, src/styles, public/)"
  - "Configuration files: vite.config.js, eslint.config.js (flat config), .prettierrc, postcss.config.js"
  - "Base app files: index.html, main.jsx, App.jsx, router.jsx, styles/index.css with Tailwind v4 @theme"
  - "All 6 placeholder page components with react-helmet-async SEO"
  - "Router with lazy loading, code splitting, and /protech basename"
  - "Public files: 404.html (SPA redirect), robots.txt, sitemap.xml, favicon.svg"
  - ".gitignore configured"
  - "Husky + lint-staged pre-commit hook"
  - "npm scripts: dev, build, preview, lint, format, format:check"
  - "Skip-to-content accessibility link in index.html"
  - "Reduced-motion CSS media query"
  - "Google Fonts (Inter + Poppins) preloaded"
notes:
  went_well:
    - "Latest package versions installed smoothly (React 19, Vite 7, Tailwind v4)"
    - "Build output gzipped at ~97KB, well under 150KB target"
    - "Dev server starts in <200ms"
    - "ESLint, Prettier, and Vite build all pass cleanly"
  went_wrong:
    - "@eslint/js v10 incompatible with ESLint v9 — resolved by pinning @eslint/js@^9"
  blockers: []
---

# 00 — Project Rules & Engineering Standards

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | React 18+ | Component-driven, large ecosystem |
| Build Tool | Vite 5+ | Fast HMR, native ESM, superior DX over CRA |
| Routing | React Router v6 | Standard for multi-page React SPAs, data loaders |
| Styling | Tailwind CSS v3 | Utility-first, rapid prototyping, small production CSS via purge |
| Icons | React Icons (react-icons) | Tree-shakeable, includes Lucide/Heroicons/FontAwesome |
| Forms | React Hook Form + Zod | Lightweight validation, zero re-renders |
| Animations | Framer Motion | Declarative, accessible motion |
| SEO | react-helmet-async | Per-page meta/title/OG tags |
| Deployment | GitHub Pages via GitHub Actions | Free hosting, automated CI/CD |
| Package Manager | npm (lockfile committed) | Consistency across environments |

---

## Code Quality Standards

### Linting and Formatting

```
ESLint: eslint + eslint-plugin-react + eslint-plugin-react-hooks + eslint-plugin-jsx-a11y
Prettier: printWidth 100, singleQuote true, trailingComma all, semi true, tabWidth 2
```

All files must pass `npm run lint` and `npm run format:check` before merge. A pre-commit hook (via Husky + lint-staged) enforces this.

### Folder Structure

```
protech/
  Assests/                        # Existing brand assets (keep as-is)
  src/
    assets/
      images/                     # Optimized PNGs, JPGs, WebPs
      icons/                      # Custom SVG icons (if any)
      logo.svg                    # Copied from Assests/
    components/
      ui/                         # Atomic design tokens: Button, Input, Badge, etc.
      layout/                     # Header, Footer, Container, Section
      shared/                     # ServiceCard, TeamCard, StatCounter, CTABanner, etc.
    pages/
      Home/
        Home.jsx
      About/
        About.jsx
      Services/
        Services.jsx
      ServiceDetail/
        ServiceDetail.jsx
      Industries/
        Industries.jsx
      Contact/
        Contact.jsx
    hooks/                        # Custom hooks: useScrollToTop, useMediaQuery, etc.
    data/                         # Static JSON data: services.js, industries.js, team.js
    utils/                        # Helper functions: formatPhone, slugify, etc.
    styles/
      index.css                   # Tailwind directives + global resets
    App.jsx
    main.jsx
    router.jsx                    # Centralized route config
  public/
    favicon.ico
    og-image.png
    robots.txt
    sitemap.xml
    404.html                      # SPA redirect for GitHub Pages
  index.html
  tailwind.config.js
  postcss.config.js
  vite.config.js
  .eslintrc.cjs
  .prettierrc
  package.json
  README.md
```

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `ServiceCard.jsx` |
| Hooks | camelCase with `use` prefix | `useScrollToTop.js` |
| Utilities | camelCase | `slugify.js` |
| Data files | camelCase | `services.js` |
| CSS classes | Tailwind utilities | `bg-primary text-white` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_SERVICES_PER_ROW` |
| Route paths | kebab-case | `/services/managed-it-support` |
| Image files | kebab-case | `hero-network-bg.webp` |

---

## Component Architecture Principles

1. **Single Responsibility**: Each component does one thing. A `ServiceCard` renders a card; it does not fetch data.
2. **Composition over Configuration**: Prefer `<Card><CardHeader /><CardBody /></Card>` over `<Card headerText="..." bodyText="..." />`.
3. **Props Interface Clarity**: Every component documents its props via JSDoc or PropTypes. No anonymous object spreading.
4. **Container/Presentational Split**: Pages are containers (data, routing). Components in `components/` are presentational (receive props, render UI).
5. **Custom Hooks for Reuse**: Any logic used by 2+ components becomes a hook in `src/hooks/`.
6. **No Prop Drilling Beyond 2 Levels**: If data must pass through more than 2 component layers, use React Context or restructure.
7. **Semantic HTML First**: Use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<figure>`, `<address>` before reaching for `<div>`.

---

## Accessibility (WCAG 2.1 AA)

- All images have meaningful `alt` text (decorative images use `alt=""` and `aria-hidden="true"`)
- Color contrast ratio minimum 4.5:1 for normal text, 3:1 for large text
- All interactive elements are keyboard-focusable with visible focus indicators
- Skip-to-content link as first focusable element
- ARIA landmarks on all major sections
- Form inputs have associated `<label>` elements (not just placeholder text)
- Error messages are announced via `aria-live="polite"`
- Mobile hamburger menu is keyboard-operable with `aria-expanded`
- Reduced-motion media query respected for all animations (`prefers-reduced-motion`)
- Page titles update on route change via `react-helmet-async`

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | >= 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Total Bundle Size (gzipped) | < 150 KB |

**Performance strategies:**
- Route-based code splitting via `React.lazy()` + `Suspense`
- Images served in WebP with `<picture>` fallbacks
- SVG icons inlined or sprite-sheeted
- Tailwind CSS purged in production (automatic with v3+)
- Font subsetting (only Latin characters for Inter/Poppins)
- `loading="lazy"` on below-fold images
- Preload critical assets in `index.html`

---

## Responsive Approach

Mobile-first. All base styles target mobile (320px+). Breakpoints scale up:

| Breakpoint | Tailwind Prefix | Min Width | Target |
|---|---|---|---|
| Default | (none) | 0px | Mobile phones |
| sm | `sm:` | 640px | Large phones / small tablets |
| md | `md:` | 768px | Tablets |
| lg | `lg:` | 1024px | Laptops |
| xl | `xl:` | 1280px | Desktops |
| 2xl | `2xl:` | 1536px | Large desktops |

Max content width: `1280px` (centered with `mx-auto`).

---

## Git Workflow

- **Branch naming**: `feature/<short-description>`, `fix/<short-description>`, `docs/<short-description>`
- **Commit messages**: Conventional Commits format
  - `feat: add ServiceCard component`
  - `fix: correct mobile nav z-index`
  - `style: adjust hero section spacing`
  - `docs: update README with setup instructions`
  - `chore: configure ESLint and Prettier`
- **PR process**: Feature branch into `main`. All PRs must pass CI (lint + build).
- **No direct commits to `main`**.
