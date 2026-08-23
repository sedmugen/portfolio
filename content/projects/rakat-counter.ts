import { Project } from "@/lib/types";

export const rakatCounter: Project = {
  slug: "rakat-counter",
  title: "Rakat Counter (UI/UX Project)",
  tier: "projects",
  order: 6,
  category: "Design",
  year: "2024",
  shortDescription:
    "A mobile prayer-tracking app interface designed from paper wireframes to interactive prototypes.",
  longDescription:
    "An intuitive mobile application concept designed to help Muslims track prayer rakats seamlessly. The design process moved from initial paper sketches and wireframing to high-fidelity UI screens and interactive prototypes in Figma.",
  technologies: ["Figma", "UI/UX Design", "Wireframing"],
  heroMedia: {
    type: "video",
    src: "/videos/rakat-counter/rakatcounter-showcase.mp4",
    poster: "/images/rakat-counter/ui-screens-overview.png",
    alt: "Rakat Counter mobile app interface walkthrough",
  },
  gallery: [
    {
      type: "image",
      src: "/images/rakat-counter/ui-screens-overview.png",
      alt: "Rakat Counter high-fidelity application screens",
    },
    {
      type: "image",
      src: "/images/rakat-counter/paper-sketches-prototyping.png",
      alt: "Rakat Counter paper prototyping and ideation sketches",
    },
    {
      type: "image",
      src: "/images/rakat-counter/app-icon.png",
      alt: "Rakat Counter custom application icon design",
    },
  ],
  links: [],
};
