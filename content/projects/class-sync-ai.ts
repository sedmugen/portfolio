import { Project } from "@/lib/types";

export const classSyncAi: Project = {
  slug: "class-sync-ai",
  title: "ClassSync AI",
  tier: "featured",
  order: 4,
  category: "AI / Technical",
  year: "2026",
  shortDescription:
    "A university timetabling system that schedules classes with a genetic algorithm.",
  longDescription:
    "ClassSync AI builds conflict-free class schedules for a university department. It works through room capacity, instructor availability, and section overlap at once, the kind of scheduling that usually eats a staff member's week. The optimizer runs on a genetic algorithm behind a FastAPI backend, with a React 19 frontend for building and reviewing schedules.",
  technologies: ["Python", "Genetic Algorithms", "FastAPI", "React 19"],
  heroMedia: {
    type: "image",
    src: "/images/class-sync-ai/timetable.webp",
    alt: "ClassSync AI timetabling system schedule dashboard",
  },
  links: [
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/class-sync-ai",
    },
  ],
};
