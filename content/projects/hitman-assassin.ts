import { Project } from "@/lib/types";

export const hitmanAssassin: Project = {
  slug: "hitman-assassin",
  title: "Hitman Assassin",
  tier: "featured",
  order: 6,
  category: "Video Production",
  // TODO: Confirm year
  year: "TODO: Confirm year",
  role: "Director / editor",
  shortDescription:
    "A POV-style short film, written, storyboarded, and produced scene by scene before a single frame was shot.",
  // TODO: Need real description on premise, tone, and what makes this one worth featuring
  longDescription:
    "TODO: Need one real sentence from you on the premise and what makes this one worth featuring, the format, the tone, what you were trying to pull off. I know this was planned through a full scene-by-scene production bible before production, but I don't have the actual story beats to write about honestly.",
  technologies: [],
  heroMedia: {
    type: "image",
    src: "/images/hitman-assassin/hero.webp", // TODO: Add hero image/video asset
    alt: "Hitman Assassin POV-style short film title frame",
  },
  links: [
    {
      label: "YouTube",
      url: "https://youtube.com/watch?v=lGYCloz5BW8",
    },
  ],
};
