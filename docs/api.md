# API & Module Reference

This document details the TypeScript data models, component interfaces, and utility functions used across the codebase.

---

## 1. Content Schema (`lib/types.ts`)

### `MediaItem`
Defines an image or video asset rendered in project showcases.

```ts
export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // Required for videos (used as pre-load poster and reduced-motion fallback)
  aspectRatio?: string; // e.g. "aspect-[16/9]" (default), "aspect-[4/3]", "aspect-[1/1]"
};
```

### `ProjectLink`
External reference link associated with a project.

```ts
export type ProjectLink = {
  label: string; // e.g. "Live", "GitHub", "Itch.io", "YouTube"
  url: string;   // Full destination URL
};
```

### `ContentSection`
Flexible section for detailed case studies.

```ts
export type ContentSection = {
  heading?: string;    // Section heading (e.g. "Architecture", "Mechanics", "Process")
  body: string;        // Text content
  media?: MediaItem[]; // Supporting media items for this specific section
};
```

### `Project`
Primary schema representing a portfolio project.

```ts
export type Project = {
  slug: string;
  title: string;
  tier: "featured" | "projects";
  order: number;
  category: string;
  year: string;
  role?: string;
  shortDescription: string;
  longDescription?: string;
  technologies: string[];
  heroMedia: MediaItem;
  gallery?: MediaItem[];
  contentSections?: ContentSection[];
  links?: ProjectLink[];
};
```

---

## 2. Content Query Helpers (`content/projects.ts`)

| Function | Signature | Description |
| :--- | :--- | :--- |
| `getAllProjects()` | `() => Project[]` | Returns all projects with Featured items first, followed by Projects-tier items. |
| `getFeaturedProjects()` | `() => Project[]` | Returns all projects where `tier === "featured"`, sorted by `order`. |
| `getProjectsTier()` | `() => Project[]` | Returns all projects where `tier === "projects"`, sorted by `order`. |
| `getProjectBySlug(slug)` | `(slug: string) => Project \| undefined` | Finds a project by its unique URL slug. |
| `sortProjectsByOrder(items)` | `(items: Project[]) => Project[]` | Sorts a given array of projects ascending by `order`. |

---

## 3. UI Component Library (`components/`)

### `ProjectMedia` (`components/project-media.tsx`)
Responsive image/video player with intersection observer management.

```tsx
interface ProjectMediaProps {
  media: MediaItem;
  priority?: boolean;         // Disables lazy-loading for hero LCP optimization
  sizes?: string;             // Next.js responsive sizes string
  className?: string;         // Container styling
  imageClassName?: string;    // Image element styling
  videoClassName?: string;    // Video element styling
  aspectRatio?: string;       // Custom aspect ratio override
  showControls?: boolean;     // Enable native HTML5 media controls
  showHoverOverlay?: boolean; // Enable editorial hover brackets
}
```

### `ProjectGallery` (`components/project-media.tsx`)
Masonry column layout rendering an array of media items.

```tsx
interface ProjectGalleryProps {
  items: MediaItem[];
  className?: string;
}
```

### `FeaturedProjectCard` / `ProjectsTierCard` (`components/project-card.tsx`)
Project card components for grids and showcase sections.

```tsx
interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}
```

### `ScrollReveal` (`components/scroll-reveal.tsx`)
Framer Motion viewport observer triggering entrance animations.

```tsx
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article" | "header" | "footer";
}
```

---

## 4. Utility Functions (`lib/`)

### `getAutomaticProjectGallery(project)` (`lib/gallery.ts`)
Scans `public/images/[slug]` and `public/videos/[slug]` at build time and returns a deduplicated `MediaItem[]` array.

### `cn(...inputs)` (`lib/utils.ts`)
Merges conditional class strings with Tailwind CSS class conflict resolution (`twMerge(clsx(inputs))`).
