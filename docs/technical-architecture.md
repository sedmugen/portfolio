# Technical Architecture

## Stack

- **Framework**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS (utility-first fits the token-driven spacing/type system in visual-design.md well, and keeps the codebase approachable for Antigravity to generate consistently)
- **Motion**: Framer Motion
- **Deployment**: Vercel (matches existing pattern, `bench-hub`, `foreman-kanban` are already on Vercel)
- **Content**: local structured data, no headless CMS (see rationale below)
- **Domain**: Vercel-provided subdomain for now (e.g. `saadmughal.vercel.app` or similar); custom domain can be added later without any architectural change, it's a DNS/config step, not a rebuild

## Why local content over a CMS

At ~15 projects, edited by one person (Saad), a headless CMS (Sanity/Contentful) adds an account, an API dependency, network calls at build/runtime, and a second place to keep in sync, for a benefit ("edit content without touching code") that doesn't matter much when the person editing content is also the developer. Local content means:

- Zero external dependencies or accounts
- Content changes are just git commits, versioned, diffable, revertable
- Faster builds (no CMS fetch step)
- Trivial to migrate to a CMS later if the project count grows significantly or a non-technical collaborator needs to edit it, the `Project` schema in project-system.md maps cleanly onto Sanity/Contentful's document model if that day comes

## Folder structure

```
/app
  /(site)
    /page.tsx                    → Homepage
    /work/page.tsx                → All work
    /work/[slug]/page.tsx         → Individual project page
    /about/page.tsx
    /contact/page.tsx
  /layout.tsx
  /globals.css

/components
  /project-media.tsx              → ProjectMedia component (motion-and-media.md)
  /project-card.tsx                → Featured + Projects-tier card variants
  /nav.tsx
  /footer.tsx
  /section.tsx                     → shared section wrapper (spacing, max-width, scroll-reveal)

/content
  /projects
    bench.ts
    class-sync-ai.ts
    moral-matrix.ts
    giselles-vegan-kitchen.ts
    one-percent.ts
    foreman-kanban.ts
    super-pong.ts
    ridgeline-pro-roofing.ts
    sunbird-solutions.ts
    hitman-assassin.ts
    urban-run.ts
    rakat-counter.ts
    himalayan-salt.ts
    blender-sword-render.ts
    climate-action-logo.ts
  /projects.ts                    → exports the combined, typed array + tier/order sort helpers

/lib
  /types.ts                       → Project, MediaItem, ProjectLink, ContentSection types
  /motion.ts                      → shared animation tokens (durations, easings)

/public
  /images/[project-slug]/...
  /videos/[project-slug]/...      → for future showreel assets
```

Each project is its own `.ts` file exporting a typed `Project` object, easy for Antigravity to generate one at a time, easy to diff, easy to reorder by editing the `order` field.

## Accessibility

- Semantic HTML throughout (`<nav>`, `<main>`, `<article>` per project page, proper heading hierarchy, one `<h1>` per page)
- All images require meaningful `alt` text (enforced at the type level, `alt` is required on `MediaItem`, not optional)
- Color contrast: body text on background must meet WCAG AA at minimum given the near-black-on-warm-white palette, verify the specific hex values chosen against a contrast checker before locking them in
- Keyboard navigation: all interactive elements (nav links, project cards, contact form) reachable and operable via keyboard, visible focus states (don't just suppress the default outline, restyle it to match the design instead)
- Respect `prefers-reduced-motion`: scroll-reveal and autoplay video both need a reduced-motion fallback (static appearance, poster image instead of autoplay)

## Performance

- Next.js `<Image>` for all images, automatic responsive sizing, lazy loading by default, priority-loaded hero image only
- WebP/AVIF as covered in motion-and-media.md
- No heavy client-side JS beyond Framer Motion, avoid pulling in a large animation/UI library on top of it
- Route-level code splitting is automatic with the App Router; no extra config needed
- Target: fast Lighthouse performance score on the homepage and a representative project page before calling v1 done, this matters more than any single visual flourish, since a slow media-heavy portfolio actively undercuts the "craft" message

## Build order (suggested for Antigravity prompts)

1. Design tokens + base layout (nav, footer, type/color scale) from visual-design.md
2. `Project` types + `content/projects/*.ts` data files (start with the 6 Featured, using content.md copy)
3. `ProjectMedia` + card components
4. Homepage
5. `/work` (Featured + Projects-tier grid)
6. `/work/[slug]`, both templates
7. `/about`, `/contact`
8. Remaining 10 Projects-tier data files
9. Motion pass (scroll-reveal, hover states, route transitions)
10. Accessibility + performance pass
