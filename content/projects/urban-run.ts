import { Project } from "@/lib/types";

export const urbanRun: Project = {
  slug: "urban-run",
  title: "Urban Run",
  tier: "featured",
  order: 6,
  category: "Game",
  year: "2025",
  role: "Game developer & designer",
  shortDescription:
    "An endless 3D urban runner game built with Unity, featuring fast-paced movement and stylized city environments.",
  longDescription:
    "Urban Run is a fast-paced 3D endless runner featuring dynamic city environments, responsive physics-based movement, obstacle navigation, and stylized visuals built with Unity and C#.",
  technologies: ["Unity", "C#", "URP"],
  heroMedia: {
    type: "video",
    src: "/videos/urban-run/trailer.mp4",
    poster: "/images/urban-run/hero.png",
    alt: "Urban Run gameplay trailer and action preview",
  },
  links: [],
};
