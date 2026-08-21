export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string; // required if type is "video", used before playback / as fallback
};

export type ProjectLink = {
  label: string; // "Live", "GitHub", "Itch.io", "YouTube", "Case Study"
  url: string;
};

export type ContentSection = {
  heading?: string; // e.g. "Process", "Features", omit for freeform sections
  body: string; // markdown/richtext
  media?: MediaItem[]; // 0 or more supporting images for this section
};

export type Project = {
  slug: string;
  title: string;
  tier: "featured" | "projects";
  order: number; // manual display order within its tier
  category: string; // "Product", "Game", "AI / Technical", "Design", "Web"
  year: string; // "2026" or "2025–2026"
  role?: string; // e.g. "Solo developer", "Designer & developer"
  shortDescription: string; // 1 sentence, used on cards and hero
  longDescription?: string; // 2-4 sentences, used on the project page (Featured only)
  technologies: string[]; // ["Tauri", "TypeScript", "Rust", "SQLite"]
  heroMedia: MediaItem;
  gallery?: MediaItem[]; // additional standalone images, no section text
  contentSections?: ContentSection[]; // Featured only, About / Process / Features etc.
  links?: ProjectLink[];
};
