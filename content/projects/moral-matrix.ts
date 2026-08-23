import { Project } from "@/lib/types";

export const moralMatrix: Project = {
  slug: "moral-matrix",
  title: "Moral Matrix",
  tier: "featured",
  order: 3,
  category: "Game",
  year: "2024",
  role: "Lead Developer (Capstone)",
  shortDescription:
    "A 2.5D narrative adventure with branching dialogue and moral-choice mechanics.",
  longDescription:
    "Moral Matrix is a hybrid 2.5D adventure built in Unity with URP. Characters use 8-directional billboarded sprites over a 3D environment, NavMesh handles pathfinding, and dialogue runs through a typewriter-style system built for branching NPC conversations. It's an engine layer, not a single scripted level, built to carry more than one story.",
  technologies: ["Unity 2023", "C#", "URP"],
  heroMedia: {
    type: "video",
    src: "/videos/moral-matrix/Moral-Matrix-Trailer.mp4",
    poster: "/images/moral-matrix/hero.webp",
    alt: "Moral Matrix official gameplay trailer",
  },
  gallery: [
    {
      type: "image",
      src: "/images/moral-matrix/hero.webp",
      alt: "Moral Matrix 2.5D environment and billboarded sprite system",
    },
  ],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/sedmugen/moral-matrix",
    },
    {
      label: "Play",
      url: "https://sedmugen.itch.io/moral-matrix",
    },
  ],
};
