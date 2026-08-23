# System Architecture

This document provides a technical breakdown of the architecture, rendering pipelines, directory layout, and component relationships of the **Saad Mughal Portfolio** (`sedmugen/portfolio`).

---

## 1. High-Level Architecture Diagram

![System Architecture](../assets/diagrams/architecture.svg)

---

## 2. Rendering & Compilation Pipeline

### 2.1. Static Site Generation (SSG)
The portfolio uses Next.js 15 App Router with full Static Site Generation (SSG). During `next build`:
1. **Root Layout**: Compiles `app/layout.tsx` with self-hosted Google Fonts (`Syne`, `Space Grotesk`, `Inter`), global styles, navigation header, and footer.
2. **Static Routes**: Pre-renders `/` (Homepage), `/work` (Project Index), `/about` (Profile & Disciplines), `/contact` (Inquiry Gateway), and `/_not-found` (404 Error Page).
3. **Dynamic Routes (`/work/[slug]`)**:
   - `generateStaticParams()` queries `getAllProjects()` from `content/projects.ts`.
   - All 15 project detail pages are statically compiled ahead of time with zero runtime database or API latency.
   - `lib/gallery.ts` scans the local filesystem (`public/images/[slug]` and `public/videos/[slug]`) at build time to build dynamic masonry galleries.

---

## 3. Directory Layout & Module Responsibilities

```
portfolio/
├── assets/                     # Open-source documentation assets & diagrams
│   ├── diagrams/               # SVG architecture & system diagrams
│   ├── images/                 # Repository showcase screenshots
│   └── videos/                 # Repository showcase recordings
│
├── docs/                       # Architecture & engineering specifications
│   ├── architecture.md         # This document
│   ├── api.md                  # Schema, component, and utility API reference
│   ├── decisions.md            # Architecture Decision Records (ADRs)
│   ├── information-architecture.md # Routing & layout strategy
│   ├── motion-and-media.md     # Motion tokens & video guidelines
│   ├── project-system.md       # Content catalog & tier breakdown
│   └── vision.md               # Design ethos & exhibition philosophy
│
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root HTML shell, fonts, SEO metadata
│   ├── globals.css             # Theme variables, utility resets
│   ├── not-found.tsx           # Custom 404 page
│   └── (site)/                 # Route grouping
│       ├── page.tsx            # Homepage
│       ├── about/page.tsx      # Profile page
│       ├── contact/page.tsx    # Inquiry form
│       └── work/
│           ├── page.tsx        # Project index
│           └── [slug]/page.tsx # Project case study page
│
├── components/                 # Reusable UI component library
│   ├── nav.tsx                 # Header navigation & live PKT clock
│   ├── footer.tsx              # Dark-contrast footer & social directory
│   ├── page-transition.tsx     # Route transition crossfade wrapper
│   ├── project-card.tsx        # Featured & Projects-tier card components
│   ├── project-media.tsx       # Responsive image/video player with intersection observer
│   └── scroll-reveal.tsx       # Viewport-triggered scroll animations
│
├── content/                    # Typed project content layer
│   ├── projects.ts             # Project registry & query helpers
│   └── projects/*.ts           # 15 individual project data definitions
│
├── lib/                        # Shared utilities, types, and constants
│   ├── gallery.ts              # Server-side filesystem media discovery
│   ├── motion.ts               # Framer motion transition tokens & variants
│   ├── types.ts                # TypeScript schema definitions
│   └── utils.ts                # Tailwind cn() merge utility
│
└── public/                     # Public runtime static assets
    ├── images/                 # Project screenshots organized by slug
    └── videos/                 # Project showcase clips organized by slug
```

---

## 4. Component Hierarchy & Data Flow

```
RootLayout (app/layout.tsx)
├── Nav (components/nav.tsx)
│   ├── LiveTime (Asia/Karachi PKT Clock)
│   └── Mobile Drawer (AnimatePresence)
├── PageTransition (components/page-transition.tsx)
│   └── Page Component (app/(site)/*)
│       ├── ScrollReveal (components/scroll-reveal.tsx)
│       ├── FeaturedProjectCard / ProjectsTierCard (components/project-card.tsx)
│       │   └── ProjectMedia (components/project-media.tsx)
│       └── ProjectGallery (components/project-media.tsx)
│           └── GalleryItemCard (Intersection-observed)
└── Footer (components/footer.tsx)
```

---

## 5. Performance & Resource Management

1. **Zero Client-Side Bundle Bloat**: No external CSS frameworks or heavy UI libraries beyond Tailwind CSS and Framer Motion.
2. **Intersection-Observed Video Playback**: Videos automatically pause when scrolled outside the viewport (`rootMargin: "250px 0px"`), saving GPU cycles and battery life.
3. **Optimized Image Pipeline**: Next.js `<Image>` generates responsive `srcset` definitions and lazy-loads offscreen images.
4. **Reduced-Motion Fallbacks**: Framer Motion animations and autoplay videos respect `prefers-reduced-motion: reduce`, serving static poster frames and zero animation durations.
