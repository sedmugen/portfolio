import { Project } from "@/lib/types";

export const foremanKanban: Project = {
  slug: "foreman-kanban",
  title: "Foreman Kanban",
  tier: "projects",
  order: 2,
  category: "Product",
  year: "2026",
  role: "Full-Stack Developer (Team Project)",
  shortDescription:
    "A collaborative Kanban board built for tracking pull requests, team workflows, and task delivery pipelines.",
  longDescription:
    "A team-developed workflow management system engineered to streamline pull request tracking and task allocation across engineering teams. Features interactive kanban boards, real-time status updates, and automated DevOps delivery metrics.",
  technologies: ["Python", "React", "MongoDB"],
  heroMedia: {
    type: "image",
    src: "/images/foreman-kanban/foreman.png",
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
