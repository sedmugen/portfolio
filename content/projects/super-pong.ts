import { Project } from "@/lib/types";

export const superPong: Project = {
  slug: "super-pong",
  title: "Super Pong",
  tier: "projects",
  order: 3,
  category: "Game",
  year: "2025",
  shortDescription:
    "A 2D arcade Pong where time only moves when you do, a SUPERHOT-style twist on a 50-year-old idea.",
  technologies: ["Unity", "C#"],
  heroMedia: {
    type: "image",
    src: "/images/super-pong/hero.svg",
    alt: "Super Pong gameplay mechanics preview",
  },
  links: [
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/super-pong",
    },
    {
      label: "Play",
      url: "https://sedmugen.itch.io/super-pong",
    },
  ],
};
