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
  gallery: [
    {
      type: "image",
      src: "/images/foreman-kanban/manager-dashboard.svg",
      alt: "Foreman Kanban manager dashboard view",
    },
    {
      type: "image",
      src: "/images/foreman-kanban/employee-dashboard.svg",
      alt: "Foreman Kanban employee task board view",
    },
    {
      type: "image",
      src: "/images/foreman-kanban/auth-screen.svg",
      alt: "Foreman Kanban authentication view",
    },
  ],
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
