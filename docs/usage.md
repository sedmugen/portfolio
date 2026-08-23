# Content Authoring & Usage Guide

This guide explains how to manage, author, and curate projects, media assets, and site copy in the **Saad Mughal Portfolio** (`sedmugen/portfolio`).

---

## 1. Content Architecture Overview

All project content is authored as typed TypeScript modules inside `content/projects/*.ts`. There is no external database or headless CMS; every change is tracked in Git, fully diffable, and validated at compile time.

```
content/
├── projects.ts               # Registry & sort/query helpers
└── projects/
    ├── bench.ts              # Featured project definition
    ├── class-sync-ai.ts      # Featured project definition
    ├── super-pong.ts         # Projects-tier definition
    └── ...
```

---

## 2. Adding a New Project

### Step 1: Create Project Definition
Create a new file in `content/projects/<project-slug>.ts`:

```ts
import { Project } from "@/lib/types";

export const myProject: Project = {
  slug: "my-project",
  title: "My Project Title",
  tier: "featured", // "featured" (6 Selected Work cards) or "projects" (More Work grid)
  order: 1,         // Ascending display order within its tier
  category: "Product", // "Product" | "Game" | "AI / Technical" | "Design" | "Web" | "3D"
  year: "2026",
  role: "Solo developer",
  shortDescription: "A concise, single-sentence summary for cards and headers.",
  longDescription:
    "A detailed 2-4 sentence paragraph providing technical context, problem framing, and implementation highlights for the case study window.",
  technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Rust"],
  heroMedia: {
    type: "video", // "image" or "video"
    src: "/videos/my-project/showcase.mp4",
    poster: "/images/my-project/hero.png", // Mandatory for videos (used for pre-load & reduced motion)
    alt: "My Project showcase recording",
  },
  links: [
    { label: "Live", url: "https://myproject.com" },
    { label: "GitHub", url: "https://github.com/sedmugen/my-project" },
  ],
};
```

### Step 2: Register in Project Registry
Open `content/projects.ts` and add your project to the `projects` array:

```ts
import { myProject } from "./projects/my-project";

export const projects: Project[] = [
  // 1. Featured Tier
  bench,
  hitmanAssassin,
  moralMatrix,
  classSyncAi,
  gisellesVeganKitchen,
  urbanRun,
  myProject, // Add here

  // 2. Projects Tier
  ...
];
```

---

## 3. Managing Media & Automated Masonry Galleries

The portfolio features an **automated filesystem media discovery engine** (`lib/gallery.ts`).

### Dropping Assets
To add screenshots, UI mockups, or renders to a project's detail gallery:
1. Create or navigate to `public/images/<project-slug>/`.
2. Add your images (`.png`, `.jpg`, `.webp`, `.svg`, `.avif`).
3. Build or run dev (`npm run dev`).

The system will:
- Automatically scan the folder.
- Exclude primary hero media to avoid duplicate display.
- Format filenames (e.g. `system-architecture.png` $\rightarrow$ `System Architecture`) into clean captions.
- Render them in a balanced, responsive masonry grid.

---

## 4. Toggling Project Tiers

Switching a project between **Featured** and **Projects Tier** is a single field edit:

```ts
// Move to Featured (large cards on homepage & /work)
tier: "featured",

// Move to Projects Tier (compact grid on /work)
tier: "projects",
```

---

## 5. Editing Profile, Disciplines & Site Copy

- **Homepage Hero Statement**: Edit copy in `app/(site)/page.tsx`.
- **About Bio & Disciplines**: Edit `DISCIPLINES` array and bio paragraphs in `app/(site)/about/page.tsx`.
- **Contact Channels**: Edit `SOCIALS` and contact handlers in `app/(site)/contact/page.tsx`.
- **Global Header Social Links**: Edit `SOCIAL_LINKS` in `components/nav.tsx`.
