# Saad Mughal — Developer Showcase & Exhibition

> A high-performance, editorial digital exhibition showcasing software systems, desktop applications, games, AI schedulers, and design work built by Saad Mughal.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 1. Project Name & Description

**Saad Mughal Portfolio** (`sedmugen/portfolio`) is a curated, visual-first digital exhibition designed to communicate technical craft, software engineering breadth, and design precision. Built on Next.js 15 App Router, React 19, TypeScript, and Framer Motion, the platform delivers zero-layout-shift performance, automatic media discovery, and responsive video/image presentation.

---

## 2. Visuals & Showcase

| Homepage Exhibition | Dynamic Project Window |
| :---: | :---: |
| ![Homepage Overview](public/images/bench/hero.png) | ![Project Detail Case Study](public/images/class-sync-ai/timetable.webp) |
| *Editorial 2-Column Selected Work Grid* | *Two-Column Detail Layout with Automated Asset Gallery* |

---

## 3. Overview & Motivation

Most developer websites fall into two extremes: generic template-heavy resumes or over-animated landing pages that distract from the underlying engineering. 

This project was built around a singular principle: **exhibit the work rather than explain it.** Inspired by high-end gallery exhibitions, the interface acts as a quiet, consistent stage using a warm off-white canvas (`#F7F6F3`), deep ink typography (`#141414`), generous whitespace, and purposeful micro-interactions that never hijack native browser scrolling.

---

## 4. Key Features

- **Curated Tier Architecture**: Categorizes projects into *Featured* (flagship case studies) and *Projects Tier / More Work* (compact grid cards) with a typed TypeScript content layer.
- **Automated Media Discovery Engine**: Automatically scans asset folders (`public/images/[slug]` and `public/videos/[slug]`) at build time to populate project galleries dynamically.
- **Adaptive Media Component**: Viewport intersection observer dynamically pauses offscreen media and preheats upcoming video playback while strictly respecting `prefers-reduced-motion`.
- **Live PKT Clock & Timezone Sync**: Header clock tracks `Asia/Karachi` time with requestAnimationFrame throttling and animated mobile drawer interactions.
- **Fast Static Site Generation (SSG)**: Pre-renders all 15 project routes and site pages statically at build time for sub-100ms page delivery.

---

## 5. Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Library**: React 19 (Hooks, Transitions)
- **Language**: TypeScript 5.7 (Strict static typing)
- **Styling**: Tailwind CSS 3.4 + PostCSS
- **Animation**: Framer Motion 12.4
- **Typography**: Google Fonts via `next/font/google` (`Syne`, `Space Grotesk`, `Inter`)
- **Deployment**: Vercel Edge Network

---

## 6. Architecture Overview

```
app/
├── layout.tsx                # Root layout, Google Fonts, global header & footer
├── globals.css               # Editorial theme tokens, GPU acceleration utilities
├── not-found.tsx             # 404 error template
└── (site)/
    ├── page.tsx              # Homepage: Hero + Selected Work
    ├── work/
    │   ├── page.tsx          # Full catalog index (/work)
    │   └── [slug]/page.tsx   # Dynamic project showcase (/work/[slug])
    ├── about/page.tsx        # Profile, disciplines, education, and connect links
    └── contact/page.tsx      # Direct inquiry gateway & email copy utility

content/
├── projects.ts               # Registry helpers (getAllProjects, getFeaturedProjects)
└── projects/*.ts             # Individual project metadata definitions

lib/
├── types.ts                  # Schema definitions (Project, MediaItem, ContentSection)
├── gallery.ts                # Server-side filesystem scanner for automated galleries
└── motion.ts                 # Shared animation timing & easing tokens
```

---

## 7. Installation

### Prerequisites
- Node.js 18.18.0 or higher
- npm 9.0.0 or higher

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/sedmugen/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment configuration:
   ```bash
   cp .env.example .env.local
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 8. Usage & Content Authoring

### Adding a New Project
1. Create a new TypeScript definition in `content/projects/<project-slug>.ts`:
   ```ts
   import { Project } from "@/lib/types";

   export const myProject: Project = {
     slug: "my-project",
     title: "Project Name",
     tier: "featured", // or "projects"
     order: 1,
     category: "Product",
     year: "2026",
     role: "Solo developer",
     shortDescription: "One punchy sentence describing the project.",
     longDescription: "Detailed technical background and architecture.",
     technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
     heroMedia: {
       type: "image",
       src: "/images/my-project/hero.png",
       alt: "My project preview",
     },
     links: [
       { label: "Live", url: "https://example.com" },
       { label: "GitHub", url: "https://github.com/sedmugen/my-project" },
     ],
   };
   ```

2. Register the project in `content/projects.ts`.
3. Drop supporting images into `public/images/my-project/`. They will be automatically detected and displayed in the project's gallery.

---

## 9. Roadmap

- [x] Next.js 15 App Router migration with React 19 SSG compilation
- [x] Automated filesystem gallery discovery engine
- [x] Framer Motion scroll reveals and responsive video playback
- [ ] AVIF next-generation image encoding pipeline
- [ ] Interactive 3D asset canvas viewer for 3D model showcases
- [ ] Dynamic headless contact form API endpoint

---

## 10. License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

**Built by [Saad Mughal](https://github.com/sedmugen)** · [LinkedIn](https://www.linkedin.com/in/saadmughal321) · [Contact](mailto:saadmughal321@gmail.com)
