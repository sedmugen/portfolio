/**
 * Represents a media asset (image or video) rendered within project showcases.
 */
export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // Required for videos (used before playback and as reduced-motion fallback)
  aspectRatio?: string; // e.g. "aspect-[16/9]" (default), "aspect-[4/3]", "aspect-[1/1]"
};

/**
 * Represents an external link related to a project (e.g. Live, GitHub, Itch.io, YouTube).
 */
export type ProjectLink = {
  label: string;
  url: string;
};

/**
 * Optional content breakdown section for detailed case studies.
 */
export type ContentSection = {
  heading?: string;
  body: string;
  media?: MediaItem[];
};

/**
 * Unified project schema across Featured and Projects tiers.
 */
export type Project = {
  slug: string;
  title: string;
  tier: "featured" | "projects";
  order: number; // Manual display order within its tier
  category: string; // "Product", "Game", "AI / Technical", "Design", "Web", "3D"
  year: string; // e.g. "2026" or "2024-2025"
  role?: string; // e.g. "Solo developer", "Lead Developer", "Designer & developer"
  shortDescription: string; // 1 punchy sentence used on cards and project headers
  longDescription?: string; // 2-4 sentences used on the project case study page
  technologies: string[]; // List of technologies used
  heroMedia: MediaItem;
  gallery?: MediaItem[]; // Optional explicit gallery overrides
  contentSections?: ContentSection[]; // Flexible case-study sections
  links?: ProjectLink[];
};
