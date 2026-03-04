Help me set up this project using a **plan-first workflow**.

## Project Workflow (Important)

* There is a `.claude/plans/` folder in this project.
* We will build this project **plan by plan**.
* Each plan should be saved as a separate file in `.claude/plans/`.
* We will **execute plans sequentially** (one after another) until the project is complete.
* Do **not** jump into coding immediately.
* First create planning docs, standards, and style guidance.

---

## Project Context

We are building a **static multi-page website** for an **IT consultancy / networking services business**.

The client wants a **full-fledged website with multiple routes/pages** (not a single-page site), inspired by the following reference websites:

### Client Reference Websites (Analyze These)

* https://tecklinx.com
* https://connectratechnologies.com
* https://hanatechinc.com

These are reference sites for:

* site structure
* page hierarchy
* section patterns
* service categorization
* trust signals
* content presentation style

**Important:** Use them as structural/UI inspiration only. Do **not** copy text/content verbatim.

---

## Phase 1 — Create Project Rules (Engineering Standards)

Create a project rules document that defines how this project should be built and maintained.

### Requirements

1. **Tech Stack**

   * Static website using **React**
   * Deployment via **GitHub**
   * Include a **GitHub Actions** plan (build + deploy workflow)

2. **Code Quality / Standards**

   * Follow **senior-level React principles**
   * Clean folder structure and component architecture
   * Reusable and composable components
   * Clear naming conventions
   * Maintainable and scalable code
   * Accessibility-first basics (semantic HTML, keyboard support, alt text, labels)
   * Performance-conscious development for a static site
   * Consistent coding standards (linting, formatting, conventions)
   * Mobile-first responsive approach

3. **Output**

   * Save this as a plan/rules file in `.claude/plans/`
   * Suggested filename: `00-project-rules.md`

---

## Phase 2 — Create a Style Guide (Based on Assets)

Create a style guide for the website.

### Requirements

1. There is a **visitng Card** and a **logo** in the `assets` folder (the file may be referred to as the “wasting guide”).
2. Use those assets as the **base visual reference**.
3. Build a style guide that includes:

   * Brand colors (primary / secondary / accent / neutrals)
   * Typography system (headings, body, captions)
   * Spacing scale
   * Button variants
   * Form styles
   * Card/section styles
   * Icons/images usage guidance
   * Layout grid and spacing consistency
   * Visual tone (professional, modern, IT/networking-focused)
4. All new styles must visually align with the logo/branding guide and feel polished.

### Output

* Save this as a plan file in `.claude/plans/`
* Suggested filename: `01-style-guide.md`

---

## Phase 3 — Reference Website Analysis + Website Planning

Analyze the 3 client reference websites and create a planning package for our project.

### How to Analyze

* Inspect each reference site’s:

  * top navigation
  * pages/routes
  * service categorization
  * hero sections
  * CTA patterns
  * trust sections (partners, logos, stats, testimonials, industries served)
  * contact/footer structure
  * content/resources/blog/news/case study sections
* Use sub-agents if available for faster analysis/research.
* Treat this like structured public-site analysis (similar to scraping page structure and UX patterns).
* Extract patterns and propose a **better, cleaner version** for our client’s website.

### Key Goal

Build a **multi-page, professional IT/networking consultancy website plan** inspired by the references, with clearer structure and execution-ready React implementation planning.

---

## What I Want in the Planning Output

### 1) Reference Analysis Summary

For each of the 3 websites:

* What pages/sections exist
* What they do well
* What can be improved
* What we should adopt / avoid
* Notable patterns (service menus, trust signals, contact sections, content blocks)

### 2) Site Architecture (Our Website)

Create a proposed site map and navigation structure, including:

* Main routes/pages (multi-page)
* Dropdowns (if needed)
* Footer navigation
* CTA strategy (e.g., Contact / Book Consultation / Request Quote)

### 3) Page-by-Page Breakdown

For each page (example: Home, About, Services, Service Detail pages, Industries, Projects/Case Studies, Contact, etc.), define:

* Page purpose
* Section order
* Key content blocks
* CTA placements
* Recommended reusable React components
* UX/layout notes

### 4) Services / Networking-Focused Content Structure

Since the client mainly does networking/IT work, ensure strong coverage for:

* Network Infrastructure
* Structured Cabling / Fiber
* Wi-Fi / Wireless
* VoIP / Unified Communications
* CCTV / Physical Security (if applicable)
* Managed IT Support / Field Services
* Cloud / Hybrid Cloud (if applicable)
* Project Management / Deployment Support
* Monitoring / Maintenance / Business Continuity (if applicable)

Also define how to present:

* industries served
* certifications / partnerships
* process / methodology
* trust signals
* service coverage areas

### 5) Component Plan (React Build Planning)

Create a reusable component inventory, such as:

* Header / Nav / Mega Menu
* Hero variants
* Service cards
* Industry cards
* Stats strip
* Trust logos section
* Testimonial block
* CTA banners
* Contact form
* Footer
* Page section wrappers/layout primitives

Include:

* which components are shared
* which are page-specific
* component composition ideas

### 6) Content Requirements Plan

List what content we need from the client:

* company profile/about text
* service descriptions
* locations/coverage area
* contact info
* partner/certification logos
* testimonials
* project/case studies
* photos/team images
* FAQs
* compliance/security statements (if needed)

Also mention what can use placeholders initially.

### 7) Sequential Execution Plan (Plan-by-Plan)

Break implementation into executable phases, with dependencies:

* Phase A: Project setup + standards
* Phase B: Design tokens/style system
* Phase C: Layout shell + navigation/footer
* Phase D: Home page
* Phase E: Services listing + service detail templates
* Phase F: About / Industries / Trust pages
* Phase G: Contact + forms
* Phase H: QA, accessibility, performance
* Phase I: GitHub Actions + deployment

Each phase should be:

* independently executable
* clearly scoped
* linked to required components/files

---

## Output Files (Suggested in `.claude/plans/`)

Create these files (or equivalent):

* `00-project-rules.md`
* `01-style-guide.md`
* `02-reference-analysis.md`
* `03-site-architecture-plan.md`
* `04-page-sections-plan.md`
* `05-component-build-plan.md`
* `06-content-requirements-plan.md`
* `07-github-actions-deploy-plan.md`
* `08-implementation-sequence-plan.md`

---

## Working Style (Important)

* Think like a **senior frontend engineer + UX planner**
* Be structured, practical, and implementation-ready
* Prefer clear markdown tables/checklists where useful
* Do not code yet unless explicitly asked
* First deliver planning docs in `.claude/plans/`
* We will execute one plan at a time after approval

---

## Inputs Available

* Client reference websites (provided above)
* `assets/` folder with logo + branding/design guide

---

## First Task (Start Here)

1. Inspect project structure
2. Confirm `.claude/plans/` workflow
3. Create:

   * `00-project-rules.md`
   * `01-style-guide.md` (based on assets)
4. Analyze the 3 reference websites
5. Create the remaining planning files
6. Stop after planning and wait for the next execution instruction
