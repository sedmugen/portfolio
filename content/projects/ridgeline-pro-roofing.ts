import { Project } from "@/lib/types";

export const ridgelineProRoofing: Project = {
  slug: "ridgeline-pro-roofing",
  title: "Ridgeline Pro Roofing",
  tier: "projects",
  order: 4,
  category: "Web / Design",
  year: "2026",
  role: "Designer & developer",
  shortDescription:
    "A concept marketing site for a roofing company: services, process, coverage area, and a quote flow.",
  technologies: ["Astro"],
  heroMedia: {
    type: "video",
    src: "/videos/ridgeline-pro-roofing/ridgeline-pro-showcase.mp4",
    poster: "/images/ridgeline-pro-roofing/hero.svg",
    alt: "Ridgeline Pro Roofing marketing concept website walkthrough showcase",
  },
  links: [
    {
      label: "Live",
      url: "https://roof-site.netlify.app",
    },
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/roofers-showcase",
    },
  ],
};
