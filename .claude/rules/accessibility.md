---
globs: src/**/*.jsx
---

# Accessibility Rules (WCAG 2.1 AA)

## Required on ALL Components

1. **Semantic HTML first** — Use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<figure>`, `<address>` before `<div>`
2. **Images** — All `<img>` must have `alt` text. Decorative images: `alt="" aria-hidden="true"`
3. **Color contrast** — Minimum 4.5:1 for normal text, 3:1 for large text
4. **NEVER use `text-primary` (#39e991) on white/light backgrounds** — fails contrast (1.8:1)
5. **Keyboard focus** — All interactive elements must have visible focus indicators (`focus:ring-2`)
6. **Minimum touch target** — Buttons and interactive elements: 44px minimum height/width

## Forms

- Every `<input>` / `<textarea>` / `<select>` must have an associated `<label>` element (via `htmlFor`)
- Never rely on placeholder text alone for labels
- Error messages use `<p role="alert">` or `aria-live="polite"`
- Required fields indicated with `required` attribute

## Navigation

- Skip-to-content link as first focusable element (already in `index.html`)
- Skip link targets `#main-content`
- Mobile menu: `aria-expanded` attribute on hamburger toggle
- Mobile menu: focus trap (keyboard focus stays inside open menu)
- Mobile menu: body scroll locked when open
- Active nav link indicated visually AND programmatically

## Animations

- ALL animations MUST respect `prefers-reduced-motion: reduce`
- Framer Motion: use `useReducedMotion()` hook to disable/minimize animations
- CSS: `@media (prefers-reduced-motion: reduce)` already in global styles

## ARIA Landmarks

- `<header>` for site header
- `<nav>` for navigation (with `aria-label` if multiple navs exist)
- `<main id="main-content">` for primary content
- `<section aria-labelledby="section-heading-id">` for content sections
- `<footer>` for site footer

## Page Titles

- Every page must update `<title>` via react-helmet-async on route change
- Title format: `{Page Name} — Pro-Tech IT Consulting`
