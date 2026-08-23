import { Project } from "@/lib/types";

export const gisellesVeganKitchen: Project = {
  slug: "giselles-vegan-kitchen",
  title: "Giselle's Vegan Kitchen",
  tier: "featured",
  order: 5,
  category: "Design / Web",
  year: "2026",
  role: "Designer & developer",
  shortDescription:
    "A luxury vegan bakery concept, designed and built end to end as a self-directed exercise.",
  longDescription:
    "A concept e-commerce site for a fictional high-end organic bakery. No client brief, no constraints, just a chance to build the kind of premium commerce layout that photography and product-led brands need: large product imagery, quiet typography, and a full shop and checkout flow.",
  technologies: ["HTML", "CSS", "JavaScript"],
  heroMedia: {
    type: "video",
    src: "/videos/giselles-vegan-kitchen/giselle-showcase.mp4",
    poster: "/images/giselles-vegan-kitchen/hero.jpg",
    alt: "Giselle's Vegan Kitchen luxury bakery concept store showcase",
  },
  gallery: [
    {
      type: "image",
      src: "/images/giselles-vegan-kitchen/hero.jpg",
      alt: "Giselle's Vegan Kitchen storefront layout and product photography",
    },
  ],
  links: [
    {
      label: "Live",
      url: "https://giselles-kitchen.netlify.app",
    },
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/giselles-concept",
    },
  ],
};
