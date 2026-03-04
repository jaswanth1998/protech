# Pro-Tech IT Consulting — Design System

**Website Title:** Pro-Tech IT Consulting  
**Tagline:** Your Reliable Service Partner  
**Version:** 1.0.0  
**Last Updated:** March 2026

---

## 1. Brand Overview

**Project Name:** Pro-Tech IT Consulting  
**Description:** A professional IT consulting website that provides reliable service solutions for businesses across North America.

**Mission:** To deliver reliable, scalable IT infrastructure solutions that empower businesses to operate efficiently and grow with confidence.

**Vision:** To be the most trusted IT consulting partner for businesses seeking dependable technology solutions across North America.

---

## 2. Typography System

### Font Families

| Usage | Font Family | Fallback |
|-------|------------|----------|
| **Headings** (H1-H6) | Poppins | Segoe UI, System UI, sans-serif |
| **Body Text** | Inter | Helvetica Neue, Arial, sans-serif |
| **Monospace/Code** | JetBrains Mono | Fira Code, monospace |

### Heading Styles

| Level | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|-------------|-----------------|-------|
| **H1** | 700 (Bold) | 1.1 | -0.02em | Page titles, hero sections |
| **H2** | 700 (Bold) | 1.2 | -0.015em | Section headers |
| **H3** | 600 (Semibold) | 1.25 | -0.01em | Subsections, card titles |
| **H4** | 600 (Semibold) | 1.3 | -0.005em | Smaller headings |
| **H5** | 600 (Semibold) | 1.4 | 0 | Minor headings |
| **H6** | 600 (Semibold) | 1.5 | 0.02em | Footer headings, small caps |

### Body Text

- **Font:** Inter
- **Weight:** 400 (Regular) for body text
- **Line Height:** 1.5-1.6 for readability
- **Antialiased:** Yes (for smooth rendering)

---

## 3. Color Palette

### Primary Colors

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Primary** | #39e991 | (57, 233, 145) | Main brand color, primary buttons, accents |
| **Primary Light** | #6ffcb3 | (111, 252, 179) | Hover states for primary elements |
| **Primary Dark** | #2bb86e | (43, 184, 110) | Active states, darker variations |
| **Primary Muted** | #39e99120 | (57, 233, 145, 12.5% opacity) | Subtle backgrounds, badges |

### Dark Navy (Secondary)

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Navy** | #2d3748 | (45, 55, 72) | Text, secondary buttons, borders |
| **Navy Light** | #4a5568 | (74, 85, 104) | Hover states for navy elements |
| **Navy Dark** | #1a202c | (26, 32, 44) | Dark backgrounds, footer |

### Neutral Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Slate** | #718096 | Text muting, secondary text |

### Gray Scale

| Level | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| **Gray-50** | #f7fafc | (247, 250, 252) | Lightest backgrounds |
| **Gray-100** | #edf2f7 | (237, 242, 247) | Light backgrounds |
| **Gray-200** | #e2e8f0 | (226, 232, 240) | Light dividers, borders |
| **Gray-300** | #cbd5e0 | (203, 213, 224) | Medium dividers |
| **Gray-400** | #a0aec0 | (160, 174, 192) | Disabled text |
| **Gray-500** | #718096 | (113, 128, 150) | Secondary text |
| **Gray-600** | #4a5568 | (74, 85, 104) | Medium text |
| **Gray-700** | #2d3748 | (45, 55, 72) | Dark text |
| **Gray-800** | #1a202c | (26, 32, 44) | Darker text |
| **Gray-900** | #171923 | (23, 25, 35) | Darkest text |

### Semantic Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Success** | #38a169 | Success messages, positive states |
| **Warning** | #d69e2e | Warning messages, alerts |
| **Error** | #e53e3e | Error messages, validation errors |
| **Info** | #3182ce | Information messages |

---

## 4. Button System

### Button Variants

#### Primary Button
- **Background:** #39e991 (Primary Green)
- **Text Color:** #1a202c (Navy Dark)
- **Hover State:** #6ffcb3 (Primary Light)
- **Active State:** #2bb86e (Primary Dark)
- **Focus Ring:** Primary Green
- **Use Case:** Main CTAs, primary actions

#### Secondary Button
- **Background:** #2d3748 (Navy)
- **Text Color:** White
- **Hover State:** #4a5568 (Navy Light)
- **Active State:** #1a202c (Navy Dark)
- **Focus Ring:** Navy
- **Use Case:** Secondary actions, navigation

#### Outline Button
- **Border:** 2px #39e991 (Primary Green)
- **Text Color:** #2bb86e (Primary Dark)
- **Background:** Transparent
- **Hover State:** Green background with navy text
- **Focus Ring:** Primary Green
- **Use Case:** Alternative actions, less emphasis

#### Ghost Button
- **Background:** Transparent
- **Text Color:** #2bb86e (Primary Dark)
- **Hover State:** 10% opacity primary green background
- **Focus Ring:** Primary Green
- **Use Case:** Minimal, text-only actions

#### White Button
- **Background:** White
- **Text Color:** #1a202c (Navy Dark)
- **Hover State:** #f7fafc (Gray-50)
- **Active State:** #edf2f7 (Gray-100)
- **Focus Ring:** White
- **Use Case:** On dark backgrounds, contrast

### Button Sizes

| Size | Min Height | Padding (X/Y) | Font Size |
|------|-----------|----------------|-----------|
| **Small (sm)** | 36px | 1rem / 0.375rem | 0.875rem (14px) |
| **Medium (md)** | 44px | 1.5rem / 0.625rem | 1rem (16px) |
| **Large (lg)** | 52px | 2rem / 0.75rem | 1.125rem (18px) |

### Button States

- **Default:** Full opacity, interactive
- **Hover:** Background color change (variant-dependent)
- **Active:** Darker shade activation
- **Focus:** 2px ring with offset
- **Disabled:** 50% opacity, no cursor interaction
- **Duration:** 200ms transition for all state changes

---

## 5. Spacing & Layout

### Maximum Container Width
- **Max Width:** 1280px

### Spacing Scale
Following standard 4px base unit:
- 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px

---

## 6. Component Patterns

### Glass Morphism
- **Background:** rgba(255, 255, 255, 0.05)
- **Backdrop Filter:** blur(10px)
- **Border:** 1px solid rgba(255, 255, 255, 0.08)
- **Use:** Modern card designs, overlays

### Gradient Overlays

#### Navy Gradient
- **Direction:** 135deg
- **Colors:** #1a202c → #2d3748 → #1a202c
- **Use:** Dark backgrounds, hero sections

#### Navy Radial Gradient
- **Base:** Navy gradient with radial green accents
- **Opacity:** 6% and 4% green overlays
- **Use:** Dynamic hero sections

#### Green Gradient
- **Direction:** 135deg
- **Colors:** #2bb86e → #39e991 → #6ffcb3
- **Use:** Feature highlights, accent areas

### Decorative Patterns

#### Hero Grid Pattern
- **Color:** Primary green (#39e991) at 3% opacity
- **Size:** 60px × 60px grid
- **Use:** Background texture in hero sections

#### Hero Dot Pattern
- **Color:** Primary green at 8% opacity
- **Size:** 24px × 24px radial
- **Use:** Subtle background detail

---

## 7. Animations & Transitions

### Transition Defaults
- **Duration:** 200ms
- **Easing:** All (ease-in-out for complex)

### Animations

| Animation | Duration | Effect | Use Case |
|-----------|----------|--------|----------|
| **float** | 6s | Y-axis movement (-10px) | Icons, floating elements |
| **float-slow** | 8s | Y-axis + rotation (3deg) | Slower, elegant movements |
| **pulse-glow** | 4s | Opacity (0.4 → 0.8) | Glowing effects, highlights |

### Accessibility
- Respects `prefers-reduced-motion` media query
- Animations disabled for users who prefer reduced motion
- Animation duration: 0.01ms, iteration: 1x

---

## 8. Accessibility Features

### Skip to Content Link
- **Styling:** Hidden by default
- **Visible on Focus:** Background #39e991, padding 1rem 2rem
- **Font:** 600 weight, navy dark text
- **Outline:** 2px solid navy
- **Z-Index:** 9999 (always on top)
- **Use:** Keyboard navigation accessibility

### Focus States
- **All interactive elements:** 2px ring with ring offset
- **Ring color:** Matches variant color
- **Ring offset:** Visible separation from element

### Color Contrast
- Primary green (#39e991) on dark navy for 4.5:1+ ratio
- White text on navy for high contrast
- Gray scale maintains accessibility standards

---

## 9. Typography Scale (Tailwind-based)

The project uses **Tailwind CSS v4** with custom CSS-based configuration. All typography classes follow Tailwind naming conventions:

- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.
- `font-light`, `font-normal`, `font-semibold`, `font-bold`, etc.
- `leading-tight`, `leading-normal`, `leading-relaxed`, etc.

---

## 10. Browser & Resolution Support

- **Framework:** React 19.2.4
- **Build Tool:** Vite
- **CSS Framework:** Tailwind CSS v4
- **Responsive:** Mobile-first design approach

---

## 11. Font Import Notes

- **Poppins:** Google Fonts (import in main.jsx or global CSS)
- **Inter:** Google Fonts (import in main.jsx or global CSS)
- **JetBrains Mono:** Google Fonts or self-hosted (for code blocks)

---

## 12. Current Usage Examples

### Primary Call-to-Action Button
```
Button (primary, lg size)
Background: #39e991
Text: #1a202c (Bold, Poppins)
```

### Navigation Links
```
Secondary buttons or ghost buttons
Background: Navy or transparent
Text: White or #2bb86e
```

### Service Cards
```
Heading: H3 (Poppins, 600)
Description: Body text (Inter, 400)
Accent: Primary green borders or backgrounds
```

---

## 13. Implementation Notes

- All colors are CSS custom properties (`--color-*`)
- Font families are CSS custom properties (`--font-*`)
- Tailwind v4 uses `@theme` for custom configuration
- All transitions use 200ms duration by default
- Focus states mandatory for WCAG AA compliance
- Container max-width: 1280px for optimal readability

---

**Ready for Designer:** This document provides all necessary design tokens for creating mockups, style guides, and component libraries in Figma or similar design tools.
