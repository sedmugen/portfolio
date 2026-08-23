import { Project } from "@/lib/types";

export const sunbirdSolutions: Project = {
  slug: "sunbird-solutions",
  title: "Sunbird Solutions",
  tier: "projects",
  order: 5,
  category: "Web",
  year: "2026",
  role: "Developer",
  shortDescription:
    "Web development work for Sunbird Solutions, including a footer redesign and site structure updates.",
  technologies: ["TypeScript", "React"],
  heroMedia: {
    type: "image",
    src: "/images/sunbird-solutions/hero.svg",
    alt: "Sunbird Solutions web platform",
  },
  links: [
    {
      label: "Live",
      url: "https://sunbirdsolutions.co",
    },
  ],
};
