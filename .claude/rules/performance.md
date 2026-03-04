---
globs: src/**/*.{jsx,js,css}
---

# Performance & SEO Rules

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
| Bundle Size (gzipped) | < 150 KB |

## Code Splitting

- All pages are lazy-loaded via `React.lazy()` in `src/router.jsx`
- Add new pages to router with `lazy(() => import('./pages/NewPage/NewPage'))`
- Suspense fallback: loading spinner component

## Images

- Serve in WebP format with `<picture>` fallbacks for older browsers
- Use `loading="lazy"` on all below-fold images
- Set explicit `width` and `height` attributes to prevent CLS
- Store optimized images in `src/assets/images/`
- Name images in kebab-case: `hero-network-bg.webp`

## Icons

- Use Lucide icons via `react-icons/lu` (tree-shakeable)
- Import individual icons, never the entire library:
  ```js
  import { LuNetwork, LuWifi } from 'react-icons/lu';
  ```

## Fonts

- Inter (body) and Poppins (headings) loaded via Google Fonts
- Preconnect hints already in `index.html`
- `display=swap` for non-blocking font load
- Subset to Latin characters only

## SEO

Every page must include via react-helmet-async:
- `<title>` — unique per page
- `<meta name="description">` — unique per page, 150-160 chars
- Canonical URL where appropriate

## CSS

- Tailwind v4 purges unused CSS automatically in production
- Avoid custom CSS when a Tailwind utility exists
- Custom styles go in `src/styles/index.css` under the `@theme` block

## Bundle Optimization

- Named imports only (for tree-shaking): `import { motion } from 'framer-motion'`
- No barrel files (`index.js` re-exporting everything) — import directly from component files
- Avoid importing large libraries in components that are in the critical path
