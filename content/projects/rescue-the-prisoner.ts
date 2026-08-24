import { Project } from "@/lib/types";

export const rescueThePrisoner: Project = {
  slug: "rescue-the-prisoner",
  title: "Rescue the Prisoner",
  tier: "featured",
  order: 4,
  category: "Game",
  year: "2026",
  role: "Game Design & Gameplay Developer",
  shortDescription:
    "A fast-paced, Quake-inspired boomer shooter with roguelike elements, built with responsive combat systems and custom low-poly 3D assets.",
  longDescription:
    "Developed with Indie's Slice, Rescue the Prisoner merges high-velocity retro FPS movement with procedural roguelike replayability in Godot. Led gameplay mechanics and GDScript programming for weapon handling, projectile physics, and enemy combat loops, while creating original 3D weapon and pickup models in Blender for a cohesive retro aesthetic.",
  technologies: ["Godot", "GDScript", "Blender", "Game Design", "3D Modeling"],
  heroMedia: {
    type: "video",
    src: "/videos/rescue-the-prisoner/godot-quake-like-Fps-graphics-test.mp4",
    poster: "/images/rescue-the-prisoner/PulseRifle.png",
    alt: "Rescue the Prisoner fast-paced boomer shooter gameplay test in Godot",
  },
  gallery: [
    {
      type: "image",
      src: "/images/rescue-the-prisoner/PulseRifle.png",
      alt: "Pulse Rifle 3D weapon model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Scattergun.png",
      alt: "Scattergun 3D weapon model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/VoidLauncher.png",
      alt: "Void Launcher 3D heavy weapon model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Grunt.png",
      alt: "Grunt enemy character 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Medmega.png",
      alt: "Mega Health pickup 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Medkit.png",
      alt: "Standard Medkit pickup 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Medpack.png",
      alt: "Medpack recovery item 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Armor.png",
      alt: "Armor pickup item 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Armorkit.png",
      alt: "Armor Kit consumable item 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/PulseRilfe-Ammo-Large.png",
      alt: "Pulse Rifle large ammo crate 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/PulseRilfe-Ammo-Small.png",
      alt: "Pulse Rifle small ammo pack 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Scattergun-Ammo-Large.png",
      alt: "Scattergun heavy shell box 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/Scattergun-Ammo-Small.png",
      alt: "Scattergun small shell pack 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/VoidLauncher-Ammo-Large.png",
      alt: "Void Launcher high-capacity ammo 3D model",
    },
    {
      type: "image",
      src: "/images/rescue-the-prisoner/VoidLauncher-Ammo-Small.png",
      alt: "Void Launcher compact ammo 3D model",
    },
  ],
  links: [
    {
      label: "Steam",
      url: "https://store.steampowered.com/app/2616550/Rescue_The_Prisoner/",
    },
    {
      label: "Gameplay Video",
      url: "https://youtu.be/nQiTtv-XvbI?si=cPddr2o5SD1ZfYfU",
    },
  ],
};
