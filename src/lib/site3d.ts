/** 3D portfolio template data (hero animation, tech GLB, counters) */

import type { TechStackModel } from "./site3d-types";

export const heroWords = [
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Apps", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Codebases", imgPath: "/images/code.svg" },
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Apps", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Codebases", imgPath: "/images/code.svg" },
];

export const counterItems = [
  { value: 3, suffix: "+", label: "Années d'expérience" },
  { value: 12, suffix: "+", label: "Projets réalisés" },
  { value: 6, suffix: "+", label: "Services proposés" },
  { value: 100, suffix: "%", label: "Engagement client" },
];

export const techStackIcons: TechStackModel[] = [
  {
    name: "React / Next.js / TypeScript",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js / NestJS / Express",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "React Native / Mobile",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Three.js / GSAP / 3D",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git / DevOps / Déploiement",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const socialImgs = [
  { name: "linkedin", imgPath: "/images/linkedin.png", href: "https://www.linkedin.com/in/michel-mouhani-b563b1262" },
  { name: "github", imgPath: "/images/x.png", href: "https://github.com/mikestudent06" },
  { name: "x", imgPath: "/images/x.png", href: "https://x.com/MouhaniMic44729" },
];
