# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pro-Tech IT Consulting — "Your Reliable Service Partner." A static multi-page website for an IT consultancy / networking services business, built with React + Vite + Tailwind CSS, deployed via Nginx reverse proxy.

## Repository Structure

- `Assests/` — Brand assets (logo SVG, visiting card PNG)
- `src/` — Application source code
  - `assets/` — Images, icons, logo
  - `components/` — `ui/`, `layout/`, `shared/`
  - `pages/` — `Home/`, `About/`, `Services/`, `ServiceDetail/`, `Industries/`, `Contact/`, `NotFound/`
  - `hooks/` — Custom React hooks
  - `data/` — Static data files
  - `utils/` — Helper functions
  - `styles/` — Global CSS with Tailwind v4 theme
- `public/` — Static files (favicon, robots.txt, sitemap.xml)
- `.claude/plans/` — Project plans (see Plan Execution Workflow below)
- `.claude/prompts/` — Custom prompts (e.g., `stepup.md`)

## Status

Plans 00–05 completed. Full component library built: 8 UI components, 7 layout components, 15+ shared components, 3 custom hooks. All pages fully composed with reusable components, Framer Motion animations (respecting reduced motion), and proper SEO. Router uses Layout wrapper with Outlet pattern. ContactForm integrates React Hook Form + Zod. Production build: 104 KB gzipped (under 150 KB target).

---

## Plan Execution Workflow

This project uses a **plan-first, sequential execution** workflow. All plans live in `.claude/plans/` and have YAML frontmatter for tracking.

### YAML Frontmatter Schema

Every plan file starts with this YAML block:

```yaml
---
name: "Human-readable plan name"
description: "What this plan covers"
status: "not_started"          # not_started | in_progress | completed
completed_items: []            # List of tasks/milestones finished
notes:
  went_well: []                # What worked during execution
  went_wrong: []               # Issues encountered
  blockers: []                 # Unresolved blockers
---
```

### Plan Status Values

| Status | Meaning |
|---|---|
| `not_started` | Plan exists but no work has begun |
| `in_progress` | Actively being executed |
| `completed` | All tasks in the plan are done |

### Rules for Executing Plans

When the user asks to execute a plan (e.g., "execute plan 00", "do phase 0", "start project init"):

1. **Read the plan file first** — open the `.claude/plans/XX-*.md` file and understand all tasks
2. **Update status to `in_progress`** — edit the YAML frontmatter at the start of execution
3. **Execute the tasks** — follow the plan's instructions, creating/modifying files as specified
4. **Update `completed_items` as you go** — after finishing each major task or milestone, add it to the `completed_items` list in the YAML
5. **Log notes** — record what went well, what went wrong, and any blockers in the `notes` section
6. **Update status to `completed`** — when all tasks in the plan are done, set status to `completed`
7. **Update this CLAUDE.md** — if the plan changes project structure, tech stack, or workflow, reflect those changes here

### Rules for Resuming Plans

If a plan has `status: in_progress`, check `completed_items` to understand what's already done and continue from where it left off. Do NOT redo completed work.

### Plan Execution Order

Plans should generally be executed in numerical order (00 → 01 → 02 → ...), as later plans may depend on earlier ones. Refer to `08-implementation-sequence-plan.md` for the dependency graph.

### Current Plan Status

| # | Plan | Status |
|---|---|---|
| 00 | Project Rules & Engineering Standards | completed |
| 01 | Style Guide | completed |
| 02 | Reference Website Analysis | completed |
| 03 | Site Architecture Plan | completed |
| 04 | Page-by-Page Sections Plan | completed |
| 05 | Component Build Plan | completed |
| 06 | Content Requirements Plan | completed |
| 07 | ~~GitHub Actions & Deployment Plan~~ | removed (switched to Nginx) |
| 08 | Implementation Sequence Plan | not_started |

---

## Tech Stack (Installed Versions)

| Layer | Choice | Version |
|---|---|---|
| Framework | React | 19.2.4 |
| Build Tool | Vite | 7.3.1 |
| Routing | React Router DOM | 7.13.1 |
| Styling | Tailwind CSS (v4, CSS-based config) | 4.2.1 |
| Icons | React Icons | 5.6.0 |
| Forms | React Hook Form + Zod | 7.71.2 / 4.3.6 |
| Animations | Framer Motion | 12.34.5 |
| SEO | react-helmet-async | 3.0.0 |
| Deployment | Nginx (reverse proxy) | — |
| Package Manager | npm (lockfile committed) | — |

## Key Configuration Notes

- **Tailwind v4**: Uses CSS-based config via `@theme` in `src/styles/index.css` (no `tailwind.config.js`). Integrated via `@tailwindcss/vite` plugin.
- **ESLint v9**: Uses flat config format in `eslint.config.js` (not `.eslintrc.cjs`).
- **Vite base path**: Set to `/` (root).
- **Router**: No basename (serves from root).
- **Code splitting**: All pages lazy-loaded via `React.lazy()`.
- **Path alias**: `@` → `/src` in vite.config.js.

## npm Scripts

| Script | Command |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint on src/ |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check Prettier formatting |


## Behavior Rules

### Explain Before Acting
Before executing ANY command, writing ANY file, or making ANY change:
1. State in plain English what you are about to do
2. State WHY you need to do it
3. State what happens if you skip it
4. Then ask: "Should I proceed? (yes / no / tell me more)"
5. Wait for my response before doing anything

Do NOT skip this step even for simple or obvious actions.
This rule overrides any instruction to work autonomously.
