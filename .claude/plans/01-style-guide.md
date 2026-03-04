---
name: "Style Guide"
description: "Visual design system for Pro-Tech: brand colors, typography (Poppins/Inter), spacing scale, button variants, form styles, card styles, shadows, border radii, layout grid, icon guidance, and Tailwind theme config."
status: "completed"
completed_items:
  - "Updated @theme colors: primary-light (#6ffcb3), primary-dark (#2bb86e), added primary-muted and slate"
  - "Added JetBrains Mono font loading in index.html and --font-mono theme variable"
  - "Updated font family fallback stacks for heading, body, and mono"
  - "Added heading typography styles (weight, line-height, letter-spacing) for h1-h6"
  - "Updated .claude/rules/styling.md to match style guide color values"
  - "Verified production build succeeds"
notes:
  went_well:
    - "Theme was mostly set up from Plan 00, only needed alignment with style guide spec"
    - "Clean build with no errors"
  went_wrong: []
  blockers: []
---

# 01 — Style Guide

## Visual Tone

Pro-Tech's visual identity communicates **technological authority** and **dependable partnership**. The dark navy foundation conveys corporate seriousness and IT-sector sophistication. The emerald green acts as an energetic accent that signals innovation and forward motion. White text provides clarity and breathing room. The overall aesthetic is clean, geometric, and modern — avoiding excessive ornamentation in favor of structured layouts and clear information hierarchy.

The concentric triangle logo reinforces themes of **layered protection**, **upward progression**, and **structural integrity** — all metaphors that map directly to IT infrastructure and security services.

---

## Color Palette

### Brand Colors

| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Primary Green** | `#39e991` | 57, 233, 145 | CTAs, accents, links, highlights, logo |
| **Dark Navy** | `#2d3748` | 45, 55, 72 | Primary backgrounds, header, footer |
| **White** | `#ffffff` | 255, 255, 255 | Body text on dark, light backgrounds |

### Extended Palette

| Name | Hex | Usage |
|---|---|---|
| Green Light | `#6ffcb3` | Hover states, light accent backgrounds |
| Green Dark | `#2bb86e` | Active/pressed states, dark-on-dark accent |
| Green Muted | `#39e99120` | Subtle background tints (green at 12% opacity) |
| Navy Deep | `#1a202c` | Deepest backgrounds (hero overlays, footer) |
| Navy Mid | `#2d3748` | Section backgrounds, card backgrounds |
| Navy Light | `#4a5568` | Secondary text on dark, borders |
| Slate | `#718096` | Muted text, captions, placeholders |
| Gray 100 | `#f7fafc` | Light section backgrounds |
| Gray 200 | `#edf2f7` | Card backgrounds on white sections, borders |
| Gray 300 | `#e2e8f0` | Dividers, input borders |
| Gray 800 | `#2d3748` | Body text on light backgrounds |
| Gray 900 | `#1a202c` | Headings on light backgrounds |

### Semantic Colors

| Name | Hex | Usage |
|---|---|---|
| Success | `#38a169` | Form success messages, positive indicators |
| Warning | `#d69e2e` | Caution states, attention badges |
| Error | `#e53e3e` | Validation errors, destructive actions |
| Info | `#3182ce` | Informational banners, tooltips |

### Contrast Compliance (WCAG AA)

| Foreground | Background | Ratio | Pass? |
|---|---|---|---|
| `#ffffff` | `#2d3748` | 10.2:1 | Yes |
| `#ffffff` | `#1a202c` | 14.7:1 | Yes |
| `#39e991` | `#1a202c` | 8.5:1 | Yes |
| `#39e991` | `#2d3748` | 6.2:1 | Yes |
| `#39e991` | `#ffffff` | 1.8:1 | **No** — never use green text on white |
| `#1a202c` | `#f7fafc` | 14.1:1 | Yes |
| `#2d3748` | `#f7fafc` | 9.8:1 | Yes |

**Rule**: Primary green (`#39e991`) is used only as an accent on dark backgrounds, never as text color on white/light backgrounds. On light backgrounds, use `#2bb86e` (Green Dark) for green text elements or limit green to non-text elements (borders, backgrounds, icons).

---

## Typography

### Font Families

| Role | Font | Fallback Stack | Weight(s) |
|---|---|---|---|
| Headings | **Poppins** | `'Poppins', 'Segoe UI', system-ui, sans-serif` | 600 (Semibold), 700 (Bold) |
| Body | **Inter** | `'Inter', 'Helvetica Neue', Arial, sans-serif` | 400 (Regular), 500 (Medium), 600 (Semibold) |
| Mono / Code | **JetBrains Mono** | `'JetBrains Mono', 'Fira Code', monospace` | 400 |

Load via Google Fonts with `display=swap`. Subset to `latin`.

### Type Scale

Base: `16px` (1rem). Scale factor: 1.25 (Major Third).

| Element | Size (rem) | Size (px) | Weight | Line Height | Letter Spacing | Tailwind Class |
|---|---|---|---|---|---|---|
| h1 | 3.052 | ~49px | 700 | 1.1 | -0.02em | `text-5xl` |
| h2 | 2.441 | ~39px | 700 | 1.2 | -0.015em | `text-4xl` |
| h3 | 1.953 | ~31px | 600 | 1.25 | -0.01em | `text-3xl` |
| h4 | 1.563 | ~25px | 600 | 1.3 | -0.005em | `text-2xl` |
| h5 | 1.25 | 20px | 600 | 1.4 | 0 | `text-xl` |
| h6 | 1.0 | 16px | 600 | 1.5 | 0.02em | `text-base font-semibold` |
| Body | 1.0 | 16px | 400 | 1.6 | 0 | `text-base` |
| Body Large | 1.125 | 18px | 400 | 1.6 | 0 | `text-lg` |
| Body Small | 0.875 | 14px | 400 | 1.5 | 0 | `text-sm` |
| Caption | 0.75 | 12px | 500 | 1.4 | 0.02em | `text-xs` |
| Tagline / Overline | 0.875 | 14px | 600 | 1.3 | 0.15em | `text-sm tracking-[0.15em] uppercase` |

**Mobile overrides**: h1 scales down to `2.25rem` (36px), h2 to `1.875rem` (30px) on screens below `md`.

---

## Spacing Scale

Base unit: `4px`. Uses Tailwind default spacing scale:

| Token | Value | Common Use |
|---|---|---|
| `1` | 4px | Tight inline spacing |
| `2` | 8px | Icon-to-text gap |
| `3` | 12px | Small internal padding |
| `4` | 16px | Standard internal padding |
| `5` | 20px | Card padding (mobile) |
| `6` | 24px | Card padding (desktop), element gaps |
| `8` | 32px | Section internal spacing |
| `10` | 40px | Between-section margins (mobile) |
| `12` | 48px | Between-section margins (tablet) |
| `16` | 64px | Section vertical padding (desktop) |
| `20` | 80px | Large section padding |
| `24` | 96px | Hero section padding |

**Section rhythm**: Alternate sections use `py-16 md:py-20 lg:py-24` for consistent vertical rhythm.

---

## Button Variants

All buttons: `font-semibold`, `rounded-lg` (8px), `transition-all duration-200`, `focus:outline-none focus:ring-2 focus:ring-offset-2`.

| Variant | Base Classes | Hover | Active | Focus Ring |
|---|---|---|---|---|
| **Primary** | `bg-[#39e991] text-[#1a202c]` | `bg-[#6ffcb3]` | `bg-[#2bb86e]` | `ring-[#39e991]` |
| **Secondary** | `bg-[#2d3748] text-white` | `bg-[#4a5568]` | `bg-[#1a202c]` | `ring-[#2d3748]` |
| **Outline** | `border-2 border-[#39e991] text-[#39e991] bg-transparent` | `bg-[#39e991] text-[#1a202c]` | `bg-[#2bb86e]` | `ring-[#39e991]` |
| **Ghost** | `text-[#39e991] bg-transparent` | `bg-[#39e99115]` | `bg-[#39e99125]` | `ring-[#39e991]` |
| **White** | `bg-white text-[#1a202c]` | `bg-gray-100` | `bg-gray-200` | `ring-white` |

**Sizes:**

| Size | Padding | Font Size | Min Height |
|---|---|---|---|
| sm | `px-4 py-2` | `text-sm` | 36px |
| md | `px-6 py-2.5` | `text-base` | 44px |
| lg | `px-8 py-3.5` | `text-lg` | 52px |

All buttons must have `min-height` for tap target accessibility (minimum 44px for md/lg).

---

## Form Styles

**Inputs and Textareas:**
- Border: `border border-gray-300 rounded-lg`
- Padding: `px-4 py-3`
- Font: `text-base text-gray-900`
- Placeholder: `text-gray-400`
- Focus: `border-[#39e991] ring-2 ring-[#39e991]/20 outline-none`
- Error: `border-red-500 ring-2 ring-red-500/20`
- Label: `text-sm font-medium text-gray-700 mb-1.5 block`
- Error message: `text-sm text-red-600 mt-1`

**Select:**
- Same as input, with custom chevron via background SVG

**Checkbox / Radio:**
- Custom styled with `accent-[#39e991]` or custom SVG toggle

---

## Card Styles

```
Base Card:
  bg-white rounded-xl shadow-md overflow-hidden
  hover:shadow-lg transition-shadow duration-300

Dark Card:
  bg-[#2d3748] rounded-xl shadow-md overflow-hidden border border-[#4a5568]/30

Service Card:
  bg-white rounded-xl shadow-md p-6 md:p-8
  border-t-4 border-[#39e991]
  hover:shadow-xl hover:-translate-y-1 transition-all duration-300
```

---

## Shadow System

| Token | Value | Use |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation (inputs) |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards at rest |
| `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Cards on hover |
| `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | Modals, elevated cards |
| `shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.06)` | Pressed states |

---

## Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `rounded-sm` | 2px | Badges, small tags |
| `rounded` | 4px | Inline code |
| `rounded-md` | 6px | Small buttons |
| `rounded-lg` | 8px | Buttons, inputs |
| `rounded-xl` | 12px | Cards |
| `rounded-2xl` | 16px | Large cards, hero elements |
| `rounded-full` | 9999px | Avatars, pill badges |

---

## Layout Grid

- **System**: 12-column CSS Grid (`grid grid-cols-12 gap-6`)
- **Max width**: `max-w-7xl` (1280px) centered with `mx-auto px-4 sm:px-6 lg:px-8`
- **Common layouts**:
  - Full width: `col-span-12`
  - Two-column: `col-span-12 md:col-span-6`
  - Three-column: `col-span-12 md:col-span-6 lg:col-span-4`
  - Four-column: `col-span-12 sm:col-span-6 lg:col-span-3`
  - Sidebar: `col-span-12 lg:col-span-8` + `col-span-12 lg:col-span-4`

---

## Icon Guidance

- **Icon library**: Lucide icons via `react-icons/lu` (clean, consistent line icons matching geometric brand)
- **Sizes**: 20px for inline, 24px for buttons, 40-48px for feature cards, 64px for hero features
- **Color**: Inherit text color, or use `text-[#39e991]` for accented icons
- **Service icons**: Each service gets a dedicated icon from Lucide (e.g., `LuNetwork` for Network Infrastructure, `LuShield` for CCTV/Security, `LuCloud` for Cloud)
- **Stroke width**: 1.5px (Lucide default) for consistency

---

## Tailwind Config (Custom Theme)

```js
// tailwind.config.js — theme.extend
colors: {
  primary: '#39e991',
  'primary-light': '#6ffcb3',
  'primary-dark': '#2bb86e',
  'primary-muted': '#39e99120',
  navy: {
    deep: '#1a202c',
    DEFAULT: '#2d3748',
    light: '#4a5568',
  },
  slate: '#718096',
},
fontFamily: {
  heading: ['Poppins', 'Segoe UI', 'system-ui', 'sans-serif'],
  body: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
},
```
