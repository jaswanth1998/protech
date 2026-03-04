# General Project Rules — Pro-Tech IT Consulting

## Tech Stack

- React 19 + Vite 7 + Tailwind CSS v4 (CSS-based config)
- React Router DOM v7 with `basename: '/protech'`
- Framer Motion for animations
- react-helmet-async for SEO
- React Hook Form + Zod for forms
- React Icons (Lucide via `react-icons/lu`)

## File Naming

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase `.jsx` | `ServiceCard.jsx` |
| Hooks | camelCase with `use` prefix `.js` | `useScrollToTop.js` |
| Utilities | camelCase `.js` | `slugify.js` |
| Data files | camelCase `.js` | `services.js` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_SERVICES_PER_ROW` |
| Route paths | kebab-case | `/services/managed-it-support` |
| Image files | kebab-case | `hero-network-bg.webp` |

## Folder Locations

| Type | Path |
|---|---|
| UI components (Button, Input, Badge) | `src/components/ui/` |
| Layout components (Header, Footer, Container) | `src/components/layout/` |
| Shared components (ServiceCard, CTABanner) | `src/components/shared/` |
| Page components | `src/pages/{PageName}/{PageName}.jsx` |
| Custom hooks | `src/hooks/` |
| Static data | `src/data/` |
| Utilities | `src/utils/` |
| Global styles | `src/styles/index.css` |
| Images | `src/assets/images/` |

## Module Format

- All files use ES modules (`import`/`export`), never CommonJS
- Use `export default` for components and pages
- Use named exports for data files, utilities, and hooks

## Code Quality

- Prettier: printWidth 100, singleQuote, trailingComma all, semi, tabWidth 2
- ESLint flat config with react, react-hooks, jsx-a11y plugins
- No `console.log` — use `console.warn` or `console.error` only
- Unused variables prefixed with `_`

## Placeholder Content

Mark all placeholder content with `// PLACEHOLDER` comments so it can be easily replaced with real client content later.

## Path Alias

Use `@/` alias for imports from `src/`:
```js
import Button from '@/components/ui/Button';
```

## Git Commits

Conventional Commits format: `feat:`, `fix:`, `style:`, `docs:`, `chore:`
