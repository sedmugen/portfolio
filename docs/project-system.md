# Project System

## Content model

Every project, Featured or Projects-tier, uses the same base schema. Featured projects populate more of the optional fields; Projects-tier items can leave most optional fields empty.

```ts
type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // required if type is "video", used before playback / as fallback
};

type ProjectLink = {
  label: string;       // "Live", "GitHub", "Itch.io", "YouTube", "Case Study"
  url: string;
};

type ContentSection = {
  heading?: string;     // e.g. "Process", "Features", omit for freeform sections
  body: string;         // markdown/richtext
  media?: MediaItem[];  // 0 or more supporting images for this section
};

type Project = {
  slug: string;
  title: string;
  tier: "featured" | "projects";
  order: number;              // manual display order within its tier
  category: string;           // "Product", "Game", "AI / Technical", "Design", "Web"
  year: string;                // "2026" or "2025–2026"
  role?: string;                // e.g. "Solo developer", "Designer & developer"
  shortDescription: string;    // 1 sentence, used on cards and hero
  longDescription?: string;    // 2-4 sentences, used on the project page (Featured only)
  technologies: string[];      // ["Tauri", "TypeScript", "Rust", "SQLite"]
  heroMedia: MediaItem;
  gallery?: MediaItem[];       // additional standalone images, no section text
  contentSections?: ContentSection[]; // Featured only, About / Process / Features etc.
  links?: ProjectLink[];
};
```

### Notes on the schema

- `heroMedia` supports image or video from day one, so swapping a screenshot for a showreel clip later is a data change, not a redesign (see motion-and-media.md).
- `order` is manual, not auto-computed from `year`, because Saad wants control over Selected Work sequencing independent of chronology.
- `contentSections` is an open array precisely so a game's page (Process → screenshots → mechanics breakdown) doesn't have to look identical to Bench's page (About → Features → Technology). Structure is flexible; visual language (spacing, type, image treatment) is not.

## Page templates

### Featured template (`/work/[slug]`, tier = "featured")

```
[ Back to Work ]

PROJECT TITLE
shortDescription

YEAR · CATEGORY · ROLE

[ heroMedia, large, full-bleed or near-full-bleed ]

ABOUT
longDescription

[ optional supporting image from gallery ]

[ contentSections, rendered in order, each can include its own image(s) ]

TECHNOLOGY
[ technologies as a plain inline list, not badges/pills ]

LINKS
[ links, rendered as understated text links, not buttons ]
```

Do not force every Featured project into an identical number of sections. Bench (a real product) supports About → Features → Technology. Moral Matrix (a game) might be About → Design/Mechanics → Screenshots. Giselle's Vegan Kitchen (a design concept) might be About → Visual System → Technology. The section *count* and *labels* flex; the section *styling* (heading treatment, image sizing, spacing rhythm) stays consistent site-wide.

### Projects-tier template (`/work/[slug]`, tier = "projects")

```
[ Back to Work ]

PROJECT TITLE
shortDescription

YEAR · CATEGORY

[ heroMedia, single large image/video, no gallery grid required ]

[ 1-3 sentence description, if longDescription exists, optional ]

TECHNOLOGY
[ technologies, if applicable ]

LINKS
```

No forced "Process" or "Features" sections here. This template should take under 10 minutes to fill out per project, that's the point of a lighter tier.

## Card treatment (used on homepage + /work)

**Featured card** (homepage & /work "Selected Work"): large image (16:9 or custom per project), title, category/year line beneath, shortDescription. One card can span close to full viewport width on desktop.

**Projects-tier card** (/work "More Work" grid): smaller image, title, category + year only, no description text on the card itself, keeps the grid scannable. 2-3 columns on desktop, 1 on mobile.

## Assigning the current 15 projects

Featured (order is a placeholder, Saad sets final sequence):
1. Bench
2. ClassSync AI
3. Moral Matrix
4. Giselle's Vegan Kitchen
5. One Percent
6. Hitman Assassin

Projects tier:
- Foreman Kanban
- Super Pong
- Ridgeline Pro Roofing
- Sunbird Solutions
- Urban Run (video production)
- Rakat Counter (UI/UX)
- Himalayan Salt Product Design
- Blender Sword Render
- Climate Action Coalition Logo

This is a data decision, not a code decision, moving a project between tiers later is a one-field change (`tier: "projects"` → `"featured"`), which is exactly why the schema is built this way.
