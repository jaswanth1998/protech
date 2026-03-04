---
name: "Component Build Plan"
description: "Full React component inventory: 8 UI components, 7 layout components, 15 shared components, and page-specific components. Includes props, variants, composition patterns, component hierarchy tree, and build order dependencies."
status: "completed"
completed_items:
  - "Built 8 UI components: Button (5 variants, 3 sizes, link/button polymorphism), Container (polymorphic as prop), SectionHeading (align, light variants, green accent line), Input, Textarea, Select (all with label + error + aria support), Badge (3 variants, 2 sizes), Icon (37 Lucide icons mapped, 4 sizes)"
  - "Built 3 custom hooks: useScrollToTop (route-change scroll), useScrollAnimation (Intersection Observer), useMediaQuery (responsive breakpoints)"
  - "Built 7 layout components: Header (sticky, desktop nav, services dropdown, mobile hamburger, CTA button), Footer (4-column with links, contact info, social icons, copyright), Layout (Header + children + Footer + ScrollToTop + SkipToContent), ScrollToTop, SkipToContent, MobileMenu (full-screen overlay, focus trap, body scroll lock, services accordion), NavDropdown (keyboard navigable, click-outside close)"
  - "Built 15 shared components: Hero (animated title/subtitle/CTAs), PageHero (breadcrumbs), Breadcrumb, ServiceCard (grid/compact variants, hover lift animation), FeatureCard (icon + title + desc), IndustryBadge, IndustryCard (with service links), TeamCard (expandable bio, LinkedIn), StatCounter (animated counting on scroll, reduced motion support), CTABanner (dark/green variants), LogoStrip, ProcessStep (connected numbered circles), ContactForm (React Hook Form + Zod validation, success state), ContactInfoCard, MapEmbed (placeholder)"
  - "Built 2 utility shared components: SEO (Helmet wrapper with OG tags), LoadingSpinner (Suspense fallback)"
  - "Updated router to use LayoutWrapper with Outlet pattern — all routes wrapped in Layout"
  - "Refactored all 6 pages + NotFound to use new components (SEO, PageHero, CTABanner, ServiceCard, etc.)"
  - "All files pass ESLint (0 errors, 113 warnings — all prop-types warnings)"
  - "Production build succeeds: 104 KB gzipped main bundle (under 150 KB target)"
notes:
  went_well:
    - "Clean separation: UI → Layout → Shared → Pages build order worked well"
    - "Icon component maps 37 Lucide icons by string name for data-driven rendering"
    - "All animations respect prefers-reduced-motion via useReducedMotion hook"
    - "ContactForm integrates React Hook Form + Zod cleanly with UI components"
    - "Router LayoutWrapper pattern keeps Layout code out of individual pages"
    - "Code splitting works well — shared components chunk independently"
  went_wrong:
    - "ESLint react-hooks/set-state-in-effect rule caught 3 issues (StatCounter, MobileMenu, useMediaQuery) — fixed by restructuring"
    - "jsx-a11y caught non-native interactive element in NavDropdown — fixed with role=none"
  blockers: []
---

# 05 — Component Build Plan

## Component Inventory

### UI Components (`src/components/ui/`)

| Component | Props | Variants | Notes |
|---|---|---|---|
| `Button` | `children`, `variant`, `size`, `href`, `onClick`, `type`, `disabled`, `className`, `icon`, `iconPosition` | primary, secondary, outline, ghost, white / sm, md, lg | Renders `<a>` if `href` provided, `<button>` otherwise. Icon support left/right. |
| `SectionHeading` | `title`, `subtitle`, `align`, `light` | center (default), left / light (white text on dark) | Reusable section title + optional subtitle. Green accent line below. |
| `Badge` | `children`, `variant`, `size` | green, navy, gray / sm, md | Small labels/tags. |
| `Input` | `label`, `name`, `type`, `placeholder`, `error`, `required`, `...rest` | text, email, tel | Wraps `<label>` + `<input>` + error message. |
| `Textarea` | `label`, `name`, `placeholder`, `error`, `required`, `rows` | — | Same pattern as Input. |
| `Select` | `label`, `name`, `options[]`, `placeholder`, `error`, `required` | — | Custom-styled select dropdown. |
| `Container` | `children`, `className`, `as` | — | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Polymorphic via `as` prop. |
| `Icon` | `name`, `size`, `className` | — | Wrapper around react-icons for consistent sizing. |

---

### Layout Components (`src/components/layout/`)

| Component | Props | Notes |
|---|---|---|
| `Header` | — | Sticky header with logo, nav links, mobile hamburger, CTA button. Manages dropdown + mobile menu state internally. |
| `Footer` | — | Four-column footer: logo, quick links, services links, contact info, social icons, copyright. |
| `Layout` | `children` | Wraps every page: `<Header />` + `<main>{children}</main>` + `<Footer />`. Includes `<ScrollToTop />`. |
| `ScrollToTop` | — | Calls `window.scrollTo(0,0)` on route change via `useLocation()`. |
| `SkipToContent` | — | Hidden link "Skip to main content" visible on focus. |
| `MobileMenu` | `isOpen`, `onClose` | Slide-in overlay. Focus trap. `aria-expanded`. Body scroll lock. |
| `NavDropdown` | `label`, `items[]`, `isOpen`, `onToggle` | Services dropdown. Keyboard navigable. |

---

### Shared Components (`src/components/shared/`)

| Component | Props | Variants | Notes |
|---|---|---|---|
| `Hero` | `title`, `subtitle`, `primaryCTA`, `secondaryCTA`, `backgroundVariant` | home (tall, animated), page (short, breadcrumb) | Home hero is unique; page heroes are shorter with breadcrumb. |
| `PageHero` | `title`, `subtitle`, `breadcrumbs[]` | — | Simpler variant for inner pages. Array of `{ label, to }`. |
| `Breadcrumb` | `items[]` | — | `Home > Services > Network Infrastructure`. Last item is plain text. |
| `ServiceCard` | `icon`, `title`, `description`, `slug`, `variant` | grid (services page), compact (home page) | Links to `/services/[slug]`. Hover lift. Green top border. |
| `FeatureCard` | `icon`, `title`, `description` | — | Used in "Why Choose Us", service detail features. |
| `IndustryBadge` | `icon`, `name`, `slug` | — | Small clickable badge for industry display. |
| `IndustryCard` | `icon`, `name`, `description`, `services[]` | — | Larger card for industries page. |
| `TeamCard` | `name`, `title`, `photo`, `bio`, `linkedIn` | — | Photo, name, title. Expandable bio. |
| `StatCounter` | `value`, `label`, `suffix`, `prefix` | — | Animated counting number (Intersection Observer trigger). |
| `CTABanner` | `headline`, `subtitle`, `primaryCTA`, `secondaryCTA`, `variant` | dark (navy bg), green (green accent bg) | Full-width conversion banner. Every page except Contact. |
| `LogoStrip` | `logos[]`, `title` | static, marquee | Partner/client logos. Array of `{ src, alt, url }`. |
| `ProcessStep` | `steps[]` | horizontal (desktop), vertical (mobile) | Numbered steps with icons, connected by lines. |
| `ContactForm` | `preselectedService` | — | Full form with validation. React Hook Form + Zod. |
| `ContactInfoCard` | `icon`, `title`, `details[]` | — | Address, phone, email, hours cards. |
| `MapEmbed` | `address`, `lat`, `lng` | — | Google Maps iframe or static image. |
| `SEO` | `title`, `description`, `canonicalUrl`, `ogImage` | — | `react-helmet-async` wrapper. Per-page SEO. |
| `LoadingSpinner` | `size` | — | Suspense fallback. |
| `NotFound` | — | — | 404 page component. |

---

### Page-Specific Components

| Page | Components |
|---|---|
| Home | Uses all shared components; no page-specific ones needed. |
| About | `MissionVisionCard` (could reuse `FeatureCard`) and `ValueCard`. |
| Services | No unique components; uses `ServiceCard` grid. |
| ServiceDetail | `RelatedServices` (wrapper filtering 3 `ServiceCard`s). |
| Industries | No unique components; uses `IndustryCard` grid. |
| Contact | No unique beyond `ContactForm` (listed as shared). |

---

## Component Hierarchy

```
<App>
  <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <SkipToContent />
        <Header>
          <Container>
            <Logo />
            <NavLinks>
              <NavDropdown />        ← Services dropdown
            </NavLinks>
            <Button />               ← "Get a Quote" CTA
            <HamburgerButton />
          </Container>
          <MobileMenu>
            <NavLinks />
            <ServicesAccordion />
            <Button />
          </MobileMenu>
        </Header>

        <main id="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer>
          <Container>
            <FooterLogo />
            <FooterLinkColumn /> (x3)
            <SocialIcons />
            <Copyright />
          </Container>
        </Footer>
      </Layout>
      <ScrollToTop />
    </BrowserRouter>
  </HelmetProvider>
</App>
```

---

## Component Composition Patterns

**Pattern 1: Polymorphic Container**
```jsx
<Container as="section" className="py-16">
  {/* Content */}
</Container>
```

**Pattern 2: Compound Section**
```jsx
<Section background="dark" padding="lg">
  <SectionHeading title="Our Services" subtitle="..." light />
  <Grid cols={4}>
    {services.map(s => <ServiceCard key={s.slug} {...s} />)}
  </Grid>
</Section>
```

**Pattern 3: Data-Driven Service Detail**
```jsx
const { slug } = useParams();
const service = services.find(s => s.slug === slug);
if (!service) return <NotFound />;
return (
  <>
    <SEO title={service.name} description={service.tagline} />
    <PageHero title={service.name} subtitle={service.tagline} breadcrumbs={[...]} />
    <ContentSection content={service.description} highlights={service.highlights} />
    <FeaturesGrid features={service.features} />
  </>
);
```

---

## Build Order (dependencies)

1. **UI components** first (Button, Input, Container, SectionHeading) — no dependencies
2. **Layout components** (Header, Footer, Layout) — depends on UI
3. **Shared components** (Hero, ServiceCard, CTABanner, etc.) — depends on UI
4. **Pages** — compose from layout + shared components
