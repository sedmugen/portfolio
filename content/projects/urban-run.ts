import { Project } from "@/lib/types";

export const urbanRun: Project = {
  slug: "urban-run",
  title: "Urban Run",
  tier: "featured",
  order: 6,
  category: "Video Production",
  // TODO: Confirm year
  year: "TODO: Confirm year",
  role: "Director / editor",
  shortDescription: "A POV-style short film. (TODO: Need one real sentence on premise or setting.)",
  longDescription:
    "A POV-style short film capturing fast-paced urban movement. Directed and edited independently, exploring dynamic camera angles, pacing, and visual storytelling.",
  technologies: ["Premiere Pro", "After Effects"],
  heroMedia: {
    type: "video",
    src: "/videos/urban-run/trailer.mp4",
    poster: "/images/urban-run/hero.png",
    alt: "Urban Run POV-style short film showcase",
  },
  links: [
    {
      label: "YouTube",
      url: "https://youtube.com/watch?v=Nl3SVyF8xsg",
    },
  ],
};
