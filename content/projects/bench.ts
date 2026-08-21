import { Project } from "@/lib/types";

export const bench: Project = {
  slug: "bench",
  title: "Bench",
  tier: "featured",
  order: 1,
  category: "Product",
  year: "2026",
  role: "Solo developer",
  shortDescription:
    "A local-first, keyboard-first desktop app for staying focused and getting things done.",
  longDescription:
    "Bench is a small command center for daily work. It splits into modules, Focus, Capture, Areas, Shelf, Archive, Jot, and Clips, and each one does exactly one job. You can run the whole thing without touching a mouse. It's built with Tauri, so it starts fast and stays light on your system.",
  technologies: ["Tauri", "TypeScript", "Rust", "SQLite"],
  heroMedia: {
    type: "image",
    src: "/images/bench/hero.png",
    alt: "Bench desktop application interface",
  },
  links: [
    {
      label: "Live",
      url: "https://bench-hub.vercel.app",
    },
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/bench",
    },
  ],
};
