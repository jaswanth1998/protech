---
globs: src/pages/**/*.jsx
---

# Page Component Rules

## Page Structure

Every page component:
1. Wraps content in the `<Layout>` component (Header + Footer)
2. Uses `<SEO>` or `<Helmet>` for page-specific title and meta description
3. Uses `<main id="main-content">` as the content wrapper
4. Ends with a `<CTABanner />` (except Contact page)

## Page Titles (for SEO)

| Page | Title |
|---|---|
| Home | Pro-Tech IT Consulting — Your Reliable Service Partner |
| About | About Pro-Tech IT Consulting · Meet Our Expert Team |
| Services | IT Services & Solutions · Pro-Tech IT Consulting |
| Service Detail | {Service Name} · Pro-Tech IT Consulting |
| Industries | Industries We Serve · Pro-Tech IT Consulting |
| Contact | Contact Pro-Tech IT Consulting · Get a Quote |

## Page Template

```jsx
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

function PageName() {
  return (
    <Layout>
      <Helmet>
        <title>Page Title — Pro-Tech IT Consulting</title>
        <meta name="description" content="..." />
      </Helmet>
      {/* Page sections */}
    </Layout>
  );
}

export default PageName;
```

## Pages Are Containers

- Pages import data from `src/data/` files
- Pages pass data as props to presentational components
- Pages handle routing logic (useParams, useSearchParams, useLocation)
- Pages do NOT contain complex UI rendering — delegate to components

## Page Sections

All pages follow consistent section rhythm with alternating backgrounds:
- Sections use `py-16 md:py-20 lg:py-24` for vertical padding
- Alternate between white (`bg-white`) and light gray (`bg-gray-50`) backgrounds
- Dark sections use `bg-navy` or `bg-navy-dark`

## Lazy Loading

All pages are lazy-loaded via `React.lazy()` in `src/router.jsx`. Do NOT add new pages without updating the router.

## Service Detail Page

- Uses `useParams()` to get `:slug`
- Looks up service from `src/data/services.js`
- If slug not found, render `<NotFound />`
- CTA links to `/contact?service=[slug]`

## Contact Page

- Form uses React Hook Form + Zod
- Pre-selects service dropdown from `?service=` query param
- Submit to Formspree / EmailJS (static site, no backend)
