import { Project } from "@/lib/types";

export const onePercent: Project = {
  slug: "one-percent",
  title: "One Percent",
  tier: "featured",
  order: 5,
  category: "Web",
  year: "2025-2026",
  role: "Designer & developer",
  shortDescription:
    "A marketing and web services site, designed and built from the ground up.",
  longDescription:
    "A full site built to sell marketing and web development services to local businesses: positioning, service breakdown, and a contact flow, designed and shipped independently.",
  // TODO: Confirm actual stack
  technologies: ["TODO: Confirm actual stack"],
  heroMedia: {
    type: "image",
    src: "/images/one-percent/hero.webp", // TODO: Add hero image asset
    alt: "One Percent marketing and web development agency website",
  },
  links: [
    {
      label: "Live",
      url: "https://onepercent.ink",
    },
  ],
};
