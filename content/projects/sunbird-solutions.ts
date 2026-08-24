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
  technologies: ["Web Development", "Responsive Design"],
  heroMedia: {
    type: "video",
    src: "/videos/sunbird-solutions/sunbird-showcase.mp4",
    poster: "/images/sunbird-solutions/hero.svg",
    alt: "Sunbird Solutions website structure and redesign showcase",
  },
  links: [
    {
      label: "Live",
      url: "https://sunbirdsolutions.co",
    },
  ],
};
