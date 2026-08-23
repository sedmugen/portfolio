import { Project } from "@/lib/types";

export const hitmanAssassin: Project = {
  slug: "hitman-assassin",
  title: "Hitman Assassin",
  tier: "featured",
  order: 2,
  category: "Game",
  year: "2025",
  role: "Lead Developer & Game Designer",
  shortDescription:
    "A tactical stealth-action game featuring assassination contracts, detection systems, and varied mission environments.",
  longDescription:
    "Hitman Assassin is a tactical stealth-action experience built around precision movement, target elimination, and dynamic detection mechanics. Features responsive enemy awareness cones, multi-tier mission contracts, and diverse map layouts designed for strategic execution.",
  technologies: ["Unity", "C#", "Game Design"],
  heroMedia: {
    type: "video",
    src: "/videos/hitman-assassin/trailer.mp4",
    poster: "/images/hitman-assassin/hero.png",
    alt: "Hitman Assassin official gameplay trailer",
  },
  gallery: [
    {
      type: "image",
      src: "/images/hitman-assassin/the-definitive-hitman-experience.png",
      alt: "The Definitive Hitman Experience feature artwork",
    },
    {
      type: "image",
      src: "/images/hitman-assassin/attack-them-swiftly.png",
      alt: "Hitman Assassin stealth combat gameplay",
    },
    {
      type: "image",
      src: "/images/hitman-assassin/earn-mission-rewards.png",
      alt: "Hitman Assassin mission progression and reward systems",
    },
    {
      type: "image",
      src: "/images/hitman-assassin/multiple-maps.png",
      alt: "Hitman Assassin tactical environments and map layouts",
    },
  ],
  links: [
    {
      label: "YouTube",
      url: "https://youtube.com/watch?v=lGYCloz5BW8",
    },
  ],
};
