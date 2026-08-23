import { Project } from "@/lib/types";

export const foremanKanban: Project = {
  slug: "foreman-kanban",
  title: "Foreman Kanban",
  tier: "projects",
  order: 1,
  category: "Product",
  year: "2025",
  role: "Contributor (forked from ismailrzw/foreman-kanban)",
  shortDescription:
    "A Kanban tool built for tracking pull requests and team task flow, built as a DevOps final-semester project.",
  technologies: ["Python", "React", "MongoDB"],
  heroMedia: {
    type: "image",
    src: "/images/foreman-kanban/hero.svg",
    alt: "Foreman Kanban task tracking and pull request management interface",
  },
  links: [
    {
      label: "Live",
      url: "https://foreman-kanban.vercel.app",
    },
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/foreman-kanban",
    },
  ],
};
