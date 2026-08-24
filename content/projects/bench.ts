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
    type: "video",
    src: "/videos/bench/bench-focus.mp4",
    poster: "/images/bench/hero.png",
    alt: "Bench desktop application interface and focus workflow showcase",
  },
  gallery: [
    {
      type: "image",
      src: "/images/bench/hero.png",
      alt: "Bench command center dashboard overview",
    },
    {
      type: "image",
      src: "/images/bench/focus.png",
      alt: "Focus mode dashboard and active task timer",
    },
    {
      type: "image",
      src: "/images/bench/Empty Focus.png",
      alt: "Focus mode empty state before session planning",
    },
    {
      type: "image",
      src: "/images/bench/Focus Task 1.png",
      alt: "Focus task setup with estimated time intervals",
    },
    {
      type: "image",
      src: "/images/bench/Focus Task 2.png",
      alt: "Focus task breakdown with sub-items",
    },
    {
      type: "image",
      src: "/images/bench/Focus Task 3.png",
      alt: "Focus task tracking and prioritization",
    },
    {
      type: "image",
      src: "/images/bench/Focus Task Work in Progress.png",
      alt: "Focus session in progress with timer active",
    },
    {
      type: "image",
      src: "/images/bench/All Focus Tasks Completed.png",
      alt: "Focus summary showing all daily targets completed",
    },
    {
      type: "image",
      src: "/images/bench/areas.png",
      alt: "Areas module for contextual workspace organization",
    },
    {
      type: "image",
      src: "/images/bench/clips.png",
      alt: "Clips clipboard manager and snippet history",
    },
    {
      type: "image",
      src: "/images/bench/jot.png",
      alt: "Jot scratchpad for distraction-free quick notes",
    },
    {
      type: "image",
      src: "/images/bench/settings.png",
      alt: "Bench keyboard shortcut configuration and preferences",
    },
  ],
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
