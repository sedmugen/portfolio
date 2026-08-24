import { Project } from "@/lib/types";

export const blenderSwordRender: Project = {
  slug: "blender-sword-render",
  title: "Blender 3D Sword (Game Asset)",
  tier: "projects",
  order: 9,
  category: "3D",
  year: "2023",
  role: "3D Artist",
  shortDescription: "A fantasy sword asset modeled, textured, and rendered in Blender.",
  longDescription:
    "A 3D fantasy sword modeled, textured, and rendered in Blender. Features detailed hilt geometry, blade shaders, and lighting turntable sequences.",
  technologies: ["Blender", "Cycles / Eevee"],
  heroMedia: {
    type: "video",
    src: "/videos/blender-sword/sword_v1.mp4",
    poster: "/images/blender-sword/sword-render.png",
    alt: "Blender 3D sword turntable render",
  },
  gallery: [
    {
      type: "image",
      src: "/images/blender-sword/sword-render.png",
      alt: "Blender 3D sword final render",
    },
    {
      type: "image",
      src: "/images/blender-sword/blender-sword-greybox.png",
      alt: "Blender 3D sword viewport greybox model",
    },
  ],
  links: [],
};
