# Architecture Decision Records (ADRs)

This document records the architectural and technical decisions made during the design and development of the **Saad Mughal Portfolio**.

---

## ADR-001: Local Immutable TypeScript Data Layer over Headless CMS

### Status
Accepted

### Context
For a curated showcase containing ~15 high-quality projects managed by a single software engineer, integrating an external headless CMS (e.g. Sanity, Contentful, Strapi) introduces external API dependencies, network overhead during builds, rate limits, and synchronization overhead.

### Decision
Model all project data as typed, immutable TypeScript files in `content/projects/*.ts` and aggregate them in `content/projects.ts`.

### Consequences
- **Positive**: Zero external dependencies or network roundtrips during build time.
- **Positive**: Full Git version control, branch diffability, and atomic commits for content edits.
- **Positive**: Instant TypeScript compilation and compile-time type safety across all fields.
- **Trade-off**: Non-technical collaborators cannot edit content without Git access (acceptable for a personal portfolio).

---

## ADR-002: Static Site Generation (SSG) via Next.js App Router

### Status
Accepted

### Context
The portfolio is fundamentally an editorial exhibition where content updates occur upon Git commits rather than per-request dynamic data.

### Decision
Use Next.js 15 App Router with `generateStaticParams()` to pre-render all 15 project routes and site pages into static HTML ahead of time.

### Consequences
- **Positive**: Sub-100ms global edge delivery via Vercel Edge CDN.
- **Positive**: Top-tier Lighthouse performance, SEO crawlability, and zero cold-start latency.
- **Positive**: Server load is minimal since static assets are cached on edge nodes.

---

## ADR-003: Automated Filesystem Gallery Discovery Engine (`lib/gallery.ts`)

### Status
Accepted

### Context
Managing image arrays manually in code for every project screenshot is tedious and prone to missing or orphaned assets.

### Decision
Implement `getAutomaticProjectGallery()` to scan `public/images/[slug]` and `public/videos/[slug]` at build time, parse clean captions from filenames, and generate dynamic masonry galleries while allowing explicit overrides via `project.gallery`.

### Consequences
- **Positive**: Adding a new image or video to a project simply requires dropping the file into its respective folder.
- **Positive**: Automatic deduplication against the primary hero media.
- **Trade-off**: Requires Node.js `fs` APIs (executable during SSG build, but not on client components).

---

## ADR-004: Restrained Motion System with Hardware Acceleration

### Status
Accepted

### Context
Over-animated portfolios with bouncy spring physics, scroll-jacking, and heavy parallax distract from technical project substance and reduce readability.

### Decision
Centralize all transition timings in `lib/motion.ts` using subtle `18px` translation distances, fast `0.2s-0.4s` cubic-bezier easings, and GPU-accelerated layer transforms (`translate3d`). Enforce strict `prefers-reduced-motion` fallbacks across Framer Motion variants and video players.

### Consequences
- **Positive**: The site feels responsive and alive without competing with project media.
- **Positive**: WCAG AA accessibility compliance for users with vestibular motion sensitivity.

---

## ADR-005: Unified `ProjectMedia` Responsive Wrapper

### Status
Accepted

### Context
Showcasing projects requires mixing static WebP screenshots, SVG vectors, and short looping H.264/AV1 showreels across the same card and detail templates.

### Decision
Build a polymorphic `<ProjectMedia>` component that wraps both Next.js `<Image>` and HTML5 `<video>`, using an `IntersectionObserver` to automatically pause offscreen videos and preheat onscreen playback.

### Consequences
- **Positive**: Switching a project from a static screenshot to a video showreel is a single-property change (`type: "video"`) without altering layout.
- **Positive**: Prevents mobile device overheating and GPU thrashing from concurrent offscreen video playback.
