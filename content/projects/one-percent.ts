import { Project } from "@/lib/types";

export const onePercent: Project = {
  slug: "one-percent",
  title: "One Percent",
  tier: "projects",
  order: 6,
  category: "Web",
  year: "2026",
  role: "Designer & Developer",
  shortDescription:
    "A modern digital platform and marketing services website featuring structured solution showcases and inquiry flows.",
  longDescription:
    "A digital presence and service platform built for business and marketing solutions. Features clean editorial typography, modular service showcases, and a streamlined client inquiry and contact flow.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  heroMedia: {
    type: "image",
    src: "/images/one-percent/hero.png",
    alt: "One Percent marketing and web development agency website",
  },
  links: [
    {
      label: "Live",
      url: "https://onepercent.ink",
    },
  ],
};
