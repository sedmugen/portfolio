import { Project } from "@/lib/types";

export const urbanRun: Project = {
  slug: "urban-run",
  title: "Urban Run",
  tier: "featured",
  order: 6,
  category: "Game",
  year: "2024",
  role: "Lead Developer & Game Designer",
  shortDescription:
    "A fast-paced 2D endless runner built with responsive physics, dynamic obstacles, and fluid movement.",
  longDescription:
    "Urban Run is a 2D endless runner developed in Unity. It combines responsive jump and slide mechanics with procedural obstacle spawning and progressive difficulty scaling for fast-paced, replayable gameplay.",
  technologies: ["Unity", "C#"],
  heroMedia: {
    type: "video",
    src: "/videos/urban-run/trailer.mp4",
    poster: "/images/urban-run/hero.png",
    alt: "Urban Run 2D endless runner gameplay showcase",
  },
  links: [
    {
      label: "YouTube",
      url: "https://youtube.com/watch?v=Nl3SVyF8xsg",
    },
  ],
};
