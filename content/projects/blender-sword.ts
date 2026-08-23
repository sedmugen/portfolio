import { Project } from "@/lib/types";

export const blenderSword: Project = {
  slug: "blender-sword",
  title: "Blender Sword Render",
  tier: "projects",
  order: 8,
  category: "3D",
  year: "2025",
  role: "3D Artist",
  shortDescription:
    "A stylized 3D sword asset modeled, textured, and rendered in Blender.",
  technologies: ["Blender", "3D Modeling"],
  heroMedia: {
    type: "image",
    src: "/images/blender-sword/hero.svg",
    alt: "Blender 3D sword render and lighting study",
  },
};
