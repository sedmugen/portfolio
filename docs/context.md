# Portfolio Master Context

## 1. Executive Summary & Vision

- **Owner**: Saad Mughal (Computer Science final-year student, Beaconhouse National University, Lahore).
- **One-Sentence Pitch**: A sophisticated, editorial, visual-first portfolio that curates an exhibition of software, games, AI, and design projects built by Saad.
- **Core Purpose**: Career advancement (job applications, internships, employer outreach). Filter for every design and content decision: *"Does this help someone hiring a builder decide to talk to Saad?"*
- **Central Identity**: *"I build things."* A curated developer/creator showcase communicating craft and breadth through the work itself, not paragraphs of self-description.
- **Reference Philosophy**: Inspired by the restraint, whitespace, and project-first exhibition style of high-end portfolios (e.g., Eizo), but purposefully adapted for software, desktop apps, games, AI schedulers, and design work.
- **Primary Design Principle**: *Exhibit the work rather than explain it.* The UI serves as a quiet, consistent stage for visually diverse projects without competing with them.
- **Non-Goals**: Not a blog, no downloadable resume/CV replacement (tailored CVs sent per job), no skill percentage bars, no client-acquisition/services pricing (handled by onepercent.ink), and SlushBox Studios is out of scope.

---

## 2. Information Architecture & Sitemap

### Navigation (Global Header)
- **Format**: Flat, minimal, 3 items, persistent across all pages:
  ```
  SAAD MUGHAL          WORK · ABOUT · CONTACT
  ```
- No dropdowns, no mega-menus, no secondary nav clutter.

### Sitemap & Routes
| Route | Page | Purpose & Contents |
| :--- | :--- | :--- |
| `/` | Homepage | Hero, Selected Work (6 Featured projects), "View all work" link, optional short About preview, Contact closing section. |
| `/work` | Full Portfolio | Two distinct visual zones: **Selected Work** (6 Featured projects, large cards) and **More Work** (~9 Projects-tier compact grid cards). No category filters needed for ~15 projects. |
| `/work/[slug]` | Project Detail | Dynamic project page with two tier-specific templates (Featured: full case study; Projects tier: lightweight single-scroll). Stable lowercase-hyphenated slugs. |
| `/about` | About | Brief bio (2-3 sentences), 4 focus areas list, brief working philosophy, education/experience summary (BS CS @ BNU final year), direct contact links. |
| `/contact` | Contact | Dedicated route with contact form (Name, Email, Message) + direct email address + LinkedIn/GitHub links. |

---

## 3. Project System & Content Schema

All projects share a single TypeScript content model located in `lib/types.ts`. Switching a project between tiers is a single field edit (`tier: "featured"` $\leftrightarrow$ `"projects"`).

### TypeScript Type Definitions
```ts
export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // Required for videos (fallback & pre-load display)
};

export type ProjectLink = {
  label: string;   // e.g. "Live", "GitHub", "Itch.io", "YouTube", "Play"
  url: string;
};

export type ContentSection = {
  heading?: string;     // e.g. "About", "Process", "Features", "Architecture"
  body: string;         // Plain text or markdown
  media?: MediaItem[];  // Optional supporting screenshots / clips
};

export type Project = {
  slug: string;
  title: string;
  tier: "featured" | "projects";
  order: number;              // Manual sequence within tier
  category: string;           // "Product", "Game", "AI / Technical", "Design", "Web", "Video Production", "3D"
  year: string;               // e.g. "2026" or "2025–2026"
  role?: string;              // e.g. "Solo developer", "Designer & developer", "Director / editor"
  shortDescription: string;   // 1 punchy sentence for cards and project headers
  longDescription?: string;   // 2–4 sentences for project detail overview
  technologies: string[];     // Array of tech tags (rendered as clean inline text, not heavy pills)
  heroMedia: MediaItem;
  gallery?: MediaItem[];      // Optional standalone image array
  contentSections?: ContentSection[]; // Featured tier: flexible section breakdown
  links?: ProjectLink[];
};
```

### Page Templates

#### 1. Featured Template (`/work/[slug]`, `tier = "featured"`)
- `[ Back to Work ]` navigation link
- **Header**: Project Title, shortDescription, Metadata line (`YEAR · CATEGORY · ROLE`)
- **Hero Media**: Large, near full-bleed image or video
- **About**: `longDescription`
- **Optional Supporting Media / Gallery**
- **Dynamic Content Sections**: Rendered flexibly per project (e.g. Bench: About $\rightarrow$ Features $\rightarrow$ Tech; Moral Matrix: About $\rightarrow$ Mechanics $\rightarrow$ Screenshots)
- **Technology**: Clean inline text list
- **Links**: Understated external text links

#### 2. Projects-Tier Template (`/work/[slug]`, `tier = "projects"`)
- `[ Back to Work ]` navigation link
- **Header**: Project Title, shortDescription, Metadata line (`YEAR · CATEGORY`)
- **Hero Media**: Single prominent media asset (no complex gallery required)
- **Description**: Optional 1–3 sentence summary
- **Technology**: Inline list
- **Links**: External links

---

## 4. Visual Design System

### Typography
- **Max 2 Typefaces**:
  - **Display / Heading**: Editorial serif or high-contrast grotesque sans (e.g. Neue Haas Grotesk / General Sans / Fraunces) for name, titles, section headers. Single font weight for headers.
  - **Body / UI**: Clean, neutral, high-legibility sans (Inter, General Sans, or modern system stack) for body copy, nav, metadata, and links.
- **Rules**:
  - Max 3 font sizes visible per viewport (Display, Body, Small Metadata/Caption).
  - Line measure capped at 60–75 characters for paragraphs.
  - Generous line height on body copy (`1.5`–`1.7`).
  - Metadata lines (category, year, role) are small, uppercase-tracked, and muted.

### Color Palette
- **Background**: Warm off-white / canvas (`#F7F6F3` range). Avoid stark `#FFFFFF`.
- **Text**: Deep near-black (`#141414` range). Avoid stark `#000000`.
- **Borders & Secondary Text**: Muted neutral gray.
- **Accent Color**: Single accent color used sparingly (link hover states, active nav dot, cursor accent).
- **Prohibitions**: No multi-color gradients, per-project theme shifts, colored section backgrounds, glassmorphism, or heavy drop shadows. The project media provides all necessary color.

### Spacing & Layout
- **Spacing Scale**: 8pt grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).
- **Container**: Max width `~1280px–1440px` with consistent horizontal margins. Hero media can break out to full-bleed when appropriate.
- **Responsive Breakpoints**:
  - **Desktop ($\ge 1024\text{px}$)**: Full layout, 2–3 column Projects grid, large Featured imagery.
  - **Tablet ($768\text{px}–1023\text{px}$)**: 2-column Projects grid, proportional hero scaling, inline navigation.
  - **Mobile ($< 768\text{px}$)**: Single-column stack, full-width media, reduced display typography scale, body font $\ge 16\text{px}$.

---

## 5. Motion & Media Strategy

### Motion Guidelines
- **Core Philosophy**: *"Alive, not animated."* Subtle, purposeful transitions that confirm interaction and guide scroll attention.
- **Allowed Interactions**:
  - Scroll-reveal: Subtle fade + slide up (`16–24px` travel, `300–500ms`, `ease-out`, `once: true`).
  - Project card hover: Gentle scale (`1.02–1.03x`) or subtle brightness shift.
  - Page transitions: Clean crossfade (`200–300ms`).
  - Optional custom cursor hover label on Featured cards.
- **Strictly Prohibited**: Parallax scrolling, bouncy/spring physics, staggered heavy entrance chains, animated intro loading screens, and scroll hijacking.
- **Motion Constants**: Centralized in `lib/motion.ts` (shared duration and easing tokens).

### `ProjectMedia` Component Architecture
A unified component rendering images or videos seamlessly:
```
ProjectMedia
├── image   → Next.js <Image> (WebP/AVIF, responsive srcset, lazy loaded; LCP hero prioritized)
├── video   → <video> with poster, muted, loop, playsInline, autoPlay on viewport entry
└── gallery → responsive stack or grid of ProjectMedia items
```
- **"Screenshots Now, Video Later" Path**: Upgrading a project from a static screenshot to an edited showreel requires only changing `type: "image"` $\rightarrow$ `type: "video"`, adding a `poster`, and pointing `src` to the video file.

### Media Production Rules
- Format: WebP (AVIF stretch goal) exported at 2x display resolution.
- Target size: $< 500\text{KB}$ per image after compression.
- Strict `alt` text required on every media item (accessibility & SEO).
- Clean, deliberate crops focusing on actual UI/artwork—no raw uncropped OS browser window chrome.
- Videos: 15–40s short showcases, compressed H.264/AV1, mandatory poster frame, fallback to poster when `prefers-reduced-motion` is active. Full trailers link out to YouTube.

---

## 6. Technical Architecture & Implementation Stack

### Technology Stack
- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Hosting & Deployment**: Vercel
- **Content Storage**: Local TypeScript data files (No headless CMS overhead; full Git version control, zero API roundtrips, instant builds)

### Directory Structure
```
/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── work/
│   │   │   ├── page.tsx             # All Work (/work)
│   │   │   └── [slug]/page.tsx      # Dynamic Project Detail (/work/[slug])
│   │   ├── about/page.tsx           # About (/about)
│   │   └── contact/page.tsx         # Contact (/contact)
│   ├── layout.tsx                   # Root layout with fonts, metadata, global styles
│   └── globals.css                  # Tailwind directives and CSS variables
├── components/
│   ├── nav.tsx                      # Header with Work, About, Contact
│   ├── footer.tsx                   # Footer with email, socials, copyright
│   ├── project-media.tsx            # Unified Image/Video renderer
│   ├── project-card.tsx             # Featured & Projects-tier card variants
│   └── section.tsx                  # Standard section container with scroll-reveal
├── content/
│   ├── projects/                    # Individual project TS definitions
│   │   ├── bench.ts
│   │   ├── class-sync-ai.ts
│   │   ├── moral-matrix.ts
│   │   ├── giselles-vegan-kitchen.ts
│   │   ├── one-percent.ts
│   │   ├── hitman-assassin.ts
│   │   ├── foreman-kanban.ts
│   │   ├── super-pong.ts
│   │   ├── ridgeline-pro-roofing.ts
│   │   ├── sunbird-solutions.ts
│   │   ├── urban-run.ts
│   │   ├── rakat-counter.ts
│   │   ├── himalayan-salt.ts
│   │   ├── blender-sword-render.ts
│   │   └── climate-action-logo.ts
│   └── projects.ts                  # Aggregated export & sorting helpers
├── lib/
│   ├── types.ts                     # Project, MediaItem, Section types
│   └── motion.ts                    # Shared animation tokens & variants
├── public/
│   ├── images/[project-slug]/       # Optimized project screenshots
│   └── videos/[project-slug]/       # Video clips & poster frames
└── docs/                            # Project specifications & documentation
```

### Accessibility & Performance Standards
- Semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`).
- Full WCAG AA color contrast compliance.
- Complete keyboard accessibility with visible, custom-styled focus rings.
- Strict `prefers-reduced-motion` compliance across all Framer Motion and video elements.
- Top-tier Lighthouse performance score on homepage and project pages.

---

## 7. Project Catalog & Content Inventory

### Featured Projects (6 Items)

| Project | Category | Year | Role | Tech Stack | Short Description & Links |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Bench** | Product | 2026 | Solo developer | Tauri, TypeScript, Rust, SQLite | A local-first, keyboard-first desktop app for staying focused and getting things done.<br>• *Live*: `bench-hub.vercel.app`<br>• *GitHub*: `github.com/sedmugen/bench` |
| **ClassSync AI** | AI / Technical | 2026 | Solo developer | Python, Genetic Algorithms, FastAPI, React 19 | A university timetabling system that schedules classes with a genetic algorithm.<br>• *GitHub*: `github.com/sedmugen/class-sync-ai` |
| **Moral Matrix** | Game | 2025 | Solo developer | Unity 2023, C#, URP | A 2.5D narrative adventure with branching dialogue and moral-choice mechanics.<br>• *GitHub*: `github.com/sedmugen/moral-matrix`<br>• *Play*: `sedmugen.itch.io/moral-matrix` |
| **Giselle's Vegan Kitchen** | Design / Web | 2026 | Designer & developer | *TBD (Front-end)* | A luxury vegan bakery concept, designed and built end to end as a self-directed exercise.<br>• *Live*: `giselles-kitchen.netlify.app`<br>• *GitHub*: `github.com/sedmugen/giselles-concept` |
| **One Percent** | Web | 2025–2026 | Designer & developer | *TBD* | A marketing and web services site, designed and built from the ground up.<br>• *Live*: `onepercent.ink` |
| **Hitman Assassin** | Video Production | *TBD* | Director / editor | Production Bible, Storyboard, Editing | A POV-style short film, written, storyboarded, and produced scene by scene before a single frame was shot.<br>• *YouTube*: `youtube.com/watch?v=lGYCloz5BW8` |

### Projects Tier (9 Items)

| Project | Category | Year | Role | Tech Stack | Short Description & Links |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Foreman Kanban** | Product | 2025 | Contributor | Python, React, MongoDB | A Kanban tool built for tracking pull requests and team task flow, built as a DevOps final-semester project.<br>• *Live*: `foreman-kanban.vercel.app`<br>• *GitHub*: `github.com/sedmugen/foreman-kanban` |
| **Super Pong** | Game | 2025 | Solo developer | Unity, C# | A 2D arcade Pong where time only moves when you do, a SUPERHOT-style twist on a 50-year-old idea.<br>• *GitHub*: `github.com/sedmugen/super-pong`<br>• *Play*: `sedmugen.itch.io/super-pong` |
| **Ridgeline Pro Roofing** | Web / Design | 2026 | Designer & developer | Astro | A concept marketing site for a roofing company: services, process, coverage area, and a quote flow.<br>• *Live*: `roof-site.netlify.app`<br>• *GitHub*: `github.com/sedmugen/roofers-showcase` |
| **Sunbird Solutions** | Web | 2026 | Developer | Web stack | Web development work for Sunbird Solutions, including a footer redesign and site structure updates.<br>• *Live*: `sunbirdsolutions.co` |
| **Urban Run** | Video Production | *TBD* | Director / editor | Video production | A POV-style short film.<br>• *YouTube*: `youtube.com/watch?v=Nl3SVyF8xsg` |
| **Rakat Counter** | Design | *TBD* | UI/UX Designer | Figma / UI Design | Prayer-tracking application interface design concept. |
| **Himalayan Salt Product Design** | Design | *TBD* | Designer | Product / Packaging | Packaging and product presentation design. |
| **Blender Sword Render** | 3D | *TBD* | 3D Artist | Blender | A sword asset modeled, textured, and rendered in Blender. |
| **Climate Action Coalition Logo** | Design | *TBD* | Brand Designer | Vector / Branding | Brand identity and logo mark for Climate Action Coalition. |

---

## 8. Site Copy Reference

### Homepage Hero
```
SAAD MUGHAL
Developer, Game Designer, Builder

I design and build software, games, and tools.
```
*(No large explanatory prose underneath. The project exhibition delivers the evidence.)*

### About Page Copy
```
I'm a computer science student in my final year at Beaconhouse National University in Lahore. I build things: desktop apps, games, scheduling systems, and the occasional site for a client who needs one built right.

I care about software that respects your time. No unnecessary decisions, no clutter, no waiting on something that should be instant.

Software
Game Development
AI / Technical Projects
Design

BS Computer Science, Beaconhouse National University (final year)
```

### Editorial Tone & Copy Standards
- Plain, direct, confident, and factual.
- Avoid buzzwords, generic claims ("passionate developer"), and marketing fluff.
- First-person voice is used strictly on the About page; project descriptions remain objective and punchy.
- No em dashes.

---

## 9. Implementation Roadmap & Build Sequence

1. **Tokens & Layout**: Configure Tailwind theme tokens (warm white background, near-black text, muted borders, accent color, typography) and global layout with Header navigation and Footer.
2. **Types & Data Layer**: Implement `lib/types.ts` and `content/projects/*.ts` for all 6 Featured projects and 9 Projects-tier projects.
3. **Core Components**: Build `ProjectMedia`, `ProjectCard` (Featured and Projects-tier variants), and `Section` wrapper.
4. **Homepage (`/`)**: Implement Hero, Selected Work showcase, link to `/work`, and closing Contact section.
5. **Work Index (`/work`)**: Build Selected Work section + More Work compact grid.
6. **Project Detail Pages (`/work/[slug]`)**: Implement dynamic route supporting both Featured case-study template and lightweight Projects-tier template.
7. **About & Contact Pages (`/about`, `/contact`)**: Complete standalone routes and forms.
8. **Motion Pass**: Add Framer Motion scroll reveals (`whileInView`, `once: true`), subtle hover scales, and route transitions using constants from `lib/motion.ts`.
9. **Accessibility & Polish**: Verify semantic markup, alt tags, keyboard focus rings, `prefers-reduced-motion`, and Lighthouse performance score.
