---
name: "Implementation Sequence Plan"
description: "10-phase execution roadmap: Phase 0 (Project Init) through Phase 9 (Deploy & Launch). Each phase lists tasks, files created/modified, dependencies, and milestones. Includes dependency graph and execution notes."
status: "not_started"
completed_items: []
notes:
  went_well: []
  went_wrong: []
  blockers: []
---

# 08 — Implementation Sequence Plan

## Phase 0: Project Initialization

**Dependencies**: None

### Tasks

| Task | Files Created/Modified |
|---|---|
| Initialize Vite + React project (`npm create vite@latest`) | `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx` |
| Install dependencies: `react-router-dom`, `react-helmet-async`, `react-icons`, `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod` | `package.json`, `package-lock.json` |
| Install dev dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `eslint`, `prettier`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `husky`, `lint-staged` | `package.json` |
| Configure Tailwind (`tailwind.config.js`, `postcss.config.js`) | `tailwind.config.js`, `postcss.config.js` |
| Configure ESLint and Prettier | `.eslintrc.cjs`, `.prettierrc` |
| Set up Husky pre-commit hook | `.husky/pre-commit` |
| Configure custom Tailwind theme (colors, fonts, spacing from style guide) | `tailwind.config.js` |
| Set up folder structure (`src/components/{ui,layout,shared}`, `src/pages/`, `src/hooks/`, `src/data/`, `src/utils/`, `src/styles/`) | All directories |
| Add Google Fonts link (Inter, Poppins) to `index.html` | `index.html` |
| Create `src/styles/index.css` with Tailwind directives and global resets | `src/styles/index.css` |
| Copy logo from `Assests/` to `src/assets/` | `src/assets/logo.svg` |
| Create `public/favicon.ico`, `public/robots.txt`, `public/404.html` | `public/` files |
| Create `.nvmrc` | `.nvmrc` |
| Set up GitHub Actions workflow | `.github/workflows/deploy.yml` |
| Create `.gitignore` | `.gitignore` |
| Update `CLAUDE.md` with new project structure | `CLAUDE.md` |

**Milestone**: `npm run dev` serves a blank page with correct Tailwind setup. `npm run lint` passes. `npm run build` succeeds.

---

## Phase 1: Design System & UI Components

**Dependencies**: Phase 0

### Tasks

| Task | Files Created |
|---|---|
| Build `Button` component with all variants and sizes | `src/components/ui/Button.jsx` |
| Build `Container` component | `src/components/ui/Container.jsx` |
| Build `SectionHeading` component | `src/components/ui/SectionHeading.jsx` |
| Build `Input` form component | `src/components/ui/Input.jsx` |
| Build `Textarea` form component | `src/components/ui/Textarea.jsx` |
| Build `Select` form component | `src/components/ui/Select.jsx` |
| Build `Badge` component | `src/components/ui/Badge.jsx` |
| Build `Icon` wrapper component | `src/components/ui/Icon.jsx` |
| Create `ui/index.js` barrel export | `src/components/ui/index.js` |

**Milestone**: All atomic UI components built, tested visually, and exported.

---

## Phase 2: Layout Components

**Dependencies**: Phase 1

### Tasks

| Task | Files Created |
|---|---|
| Build `Header` with desktop navigation | `src/components/layout/Header.jsx` |
| Build `NavDropdown` for Services menu | `src/components/layout/NavDropdown.jsx` |
| Build `MobileMenu` with hamburger toggle | `src/components/layout/MobileMenu.jsx` |
| Build `Footer` with all columns | `src/components/layout/Footer.jsx` |
| Build `Layout` wrapper component | `src/components/layout/Layout.jsx` |
| Build `SkipToContent` accessibility link | `src/components/layout/SkipToContent.jsx` |
| Build `ScrollToTop` route-change handler | `src/components/layout/ScrollToTop.jsx` |
| Set up `router.jsx` with React Router v6, lazy imports | `src/router.jsx` |
| Create `navigation.js` data file | `src/data/navigation.js` |
| Create `company.js` data file | `src/data/company.js` |
| Create barrel export | `src/components/layout/index.js` |

**Milestone**: Full layout shell functional. Every route renders `<Header> + <main> + <Footer>`. Mobile menu works. Services dropdown works. Navigation highlights active page.

---

## Phase 3: Shared Components

**Dependencies**: Phase 1, Phase 2

### Tasks

| Task | Files Created |
|---|---|
| Build `Hero` component (home variant) | `src/components/shared/Hero.jsx` |
| Build `PageHero` component (inner pages) | `src/components/shared/PageHero.jsx` |
| Build `Breadcrumb` component | `src/components/shared/Breadcrumb.jsx` |
| Build `ServiceCard` component | `src/components/shared/ServiceCard.jsx` |
| Build `FeatureCard` component | `src/components/shared/FeatureCard.jsx` |
| Build `IndustryBadge` component | `src/components/shared/IndustryBadge.jsx` |
| Build `IndustryCard` component | `src/components/shared/IndustryCard.jsx` |
| Build `TeamCard` component | `src/components/shared/TeamCard.jsx` |
| Build `StatCounter` with animation | `src/components/shared/StatCounter.jsx` |
| Build `CTABanner` component | `src/components/shared/CTABanner.jsx` |
| Build `LogoStrip` component | `src/components/shared/LogoStrip.jsx` |
| Build `ProcessStep` component | `src/components/shared/ProcessStep.jsx` |
| Build `SEO` helmet wrapper | `src/components/shared/SEO.jsx` |
| Build `LoadingSpinner` for Suspense | `src/components/shared/LoadingSpinner.jsx` |
| Build `NotFound` 404 page | `src/components/shared/NotFound.jsx` |
| Create barrel export | `src/components/shared/index.js` |
| Create custom hooks: `useScrollAnimation`, `useMediaQuery` | `src/hooks/useScrollAnimation.js`, `src/hooks/useMediaQuery.js` |

**Milestone**: All shared components built and rendering correctly in isolation. Ready to compose into pages.

---

## Phase 4: Data Layer

**Dependencies**: Phase 3 (for content structure understanding)

### Tasks

| Task | Files Created |
|---|---|
| Create `services.js` with all 8 services data | `src/data/services.js` |
| Create `industries.js` with all 6 industries | `src/data/industries.js` |
| Create `team.js` with placeholder team data | `src/data/team.js` |
| Create `stats.js` with stat numbers | `src/data/stats.js` |
| Create `slugify.js` utility | `src/utils/slugify.js` |
| Source or create placeholder images | `src/assets/images/` |

**Milestone**: All static data files complete with placeholder content. Services can be looked up by slug.

---

## Phase 5: Page Assembly — Home & About

**Dependencies**: Phases 2, 3, 4

### Tasks

| Task | Files Created |
|---|---|
| Build Home page composing all sections | `src/pages/Home/Home.jsx` |
| Build About page with all sections | `src/pages/About/About.jsx` |
| Add SEO meta tags for both pages | Within page components |
| Add scroll animations (staggered fade-in) | Via `useScrollAnimation` hook |
| Test responsive layout at all breakpoints | — |
| Test keyboard navigation and screen reader | — |

**Milestone**: Home and About pages fully functional, responsive, and accessible.

---

## Phase 6: Page Assembly — Services

**Dependencies**: Phases 3, 4

### Tasks

| Task | Files Created |
|---|---|
| Build Services listing page | `src/pages/Services/Services.jsx` |
| Build ServiceDetail template page | `src/pages/ServiceDetail/ServiceDetail.jsx` |
| Wire up dynamic routing (`useParams` + data lookup) | Within ServiceDetail |
| Handle 404 for unknown service slugs | Within ServiceDetail |
| Test all 8 service detail pages | — |

**Milestone**: Services listing and all 8 detail pages render correctly from data.

---

## Phase 7: Page Assembly — Industries & Contact

**Dependencies**: Phases 3, 4

### Tasks

| Task | Files Created |
|---|---|
| Build Industries page | `src/pages/Industries/Industries.jsx` |
| Build Contact page with form | `src/pages/Contact/Contact.jsx` |
| Build `ContactForm` with React Hook Form + Zod | `src/components/shared/ContactForm.jsx` |
| Build `ContactInfoCard` | `src/components/shared/ContactInfoCard.jsx` |
| Add form submission integration (Formspree or EmailJS) | Within ContactForm |
| Handle `?service=` query param for pre-selection | Within Contact page |
| Add Google Maps embed or static map | Within Contact page |
| Test form validation, submission, and success state | — |

**Milestone**: All pages complete. Full site navigable.

---

## Phase 8: Polish, Performance & Accessibility Audit

**Dependencies**: Phases 5, 6, 7

### Tasks

| Task | Files Modified |
|---|---|
| Run Lighthouse audit; fix any issues below targets | Various |
| Verify all images have `alt` text | All pages |
| Add `loading="lazy"` to below-fold images | Various |
| Test keyboard navigation on all pages | — |
| Test with screen reader (VoiceOver) | — |
| Verify color contrast compliance | Various |
| Add `prefers-reduced-motion` checks to animations | Animation components |
| Optimize and convert images to WebP | `src/assets/images/` |
| Verify route-based code splitting is working | `router.jsx` |
| Create `sitemap.xml` | `public/sitemap.xml` |
| Update `robots.txt` | `public/robots.txt` |
| Final responsive testing at all breakpoints | — |
| Cross-browser testing (Chrome, Firefox, Safari, Edge) | — |

**Milestone**: Lighthouse scores at or above targets. Full accessibility compliance. Production-ready.

---

## Phase 9: Deployment & Launch

**Dependencies**: Phase 8

### Tasks

| Task | Action |
|---|---|
| Final review of all pages | Manual walkthrough |
| Initialize git repo and push to GitHub | `git init`, `git remote add`, `git push` |
| Verify deploy succeeds | Check Actions tab |
| Test all routes via deployed URL | Direct URL access for SPA routing |
| Verify 404.html redirect works | Navigate directly to `/services/network-infrastructure` |
| Optional: configure custom domain | Add CNAME, update DNS |
| Update `README.md` with live URL | — |
| Update `CLAUDE.md` with final project structure | — |

**Milestone**: Site live and accessible at GitHub Pages URL.

---

## Dependency Graph

```
Phase 0 (Init)
  └── Phase 1 (UI Components)
        ├── Phase 2 (Layout)
        │     └── Phase 3 (Shared Components)
        │           └── Phase 4 (Data Layer)
        │                 ├── Phase 5 (Home + About)
        │                 ├── Phase 6 (Services)
        │                 └── Phase 7 (Industries + Contact)
        │                       └── Phase 8 (Polish)
        │                             └── Phase 9 (Deploy)
        └── Phase 3 (also depends on Phase 1 directly)
```

---

## Execution Notes

- Each phase is independently executable and testable
- Phases 5, 6, and 7 can run in parallel once phases 2-4 are done
- Phase 8 should happen after all pages are built
- We will execute **one phase at a time** after user approval
- Each phase will be a separate conversation turn with explicit start/finish
