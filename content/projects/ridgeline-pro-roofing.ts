import { Project } from "@/lib/types";

export const ridgelineProRoofing: Project = {
  slug: "ridgeline-pro-roofing",
  title: "Ridgeline Pro Roofing",
  tier: "projects",
  order: 3,
  category: "Web / Design",
  year: "2026",
  role: "Designer & developer",
  shortDescription:
    "A concept marketing site for a roofing company: services, process, coverage area, and a quote flow.",
  technologies: ["Astro"],
  heroMedia: {
    type: "image",
    src: "/images/ridgeline-pro-roofing/hero.svg",
    alt: "Ridgeline Pro Roofing marketing concept website",
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
