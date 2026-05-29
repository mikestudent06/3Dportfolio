export type Project = {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  technologies: string[];
  features?: string[];
  github?: string;
  live?: string;
  apk?: string;
  image: string;
  /** Images supplémentaires — ajoutez vos captures dans public/projects/… */
  gallery?: string[];
};

export function slugifyProject(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProjectExcerpt(project: Project, maxLength = 110): string {
  if (project.description.length <= maxLength) return project.description;
  return `${project.description.slice(0, maxLength).trim()}…`;
}

const rawProjects: Omit<Project, "slug">[] = [
  {
    title: "Site web de la société Lordson Congo",
    description:
      "Lordson Congo est une entreprise spécialisée dans les services offshore et d'échafaudage. Site web professionnel développé pour présenter leurs services et leur expertise.",
    problem:
      "Besoin d'un site web professionnel pour présenter les services d'offshore et d'échafaudage de l'entreprise.",
    technologies: ["WordPress", "HTML", "PHP", "CSS"],
    features: ["Design professionnel", "Présentation des services", "Interface responsive", "Gestion de contenu facile"],
    github: "#",
    live: "https://candid-begonia-e3c199.netlify.app",
    image: "/projects/lodson.png",
    gallery: [],
  },
  {
    title: "Cogym - Site web pour s'exercer",
    description:
      "Cogym est un site web proposant un service d'entraînement personnalisé. Plateforme complète pour la gestion des entraînements et le suivi des utilisateurs.",
    problem: "Création d'une plateforme d'entraînement personnalisé avec gestion des utilisateurs.",
    technologies: ["WordPress", "HTML", "PHP", "CSS"],
    features: ["Entraînement personnalisé", "Gestion des utilisateurs", "Interface intuitive"],
    github: "#",
    live: "#",
    image: "/projects/cogym.png",
    gallery: [],
  },
  {
    title: "Decrea - Agence de conception de logo",
    description:
      "Decrea est une agence spécialisée dans la création de logos et d'identités visuelles pour les entreprises. Site web moderne et élégant pour présenter leurs services créatifs.",
    problem: "Création d'un site web moderne pour une agence de design graphique.",
    technologies: ["Next.js", "Tailwind CSS"],
    features: ["Design moderne et élégant", "Présentation des services", "Portfolio de réalisations"],
    github: "#",
    live: "https://decrea.vercel.app/",
    image: "/projects/decrea.png",
    gallery: [],
  },
  {
    title: "Gymo - Application web pour s'exercer",
    description:
      "Trouvez des exercices adaptés à vos besoins et des exemples en vidéos YouTube associés. Application web interactive pour découvrir et suivre des exercices personnalisés.",
    problem: "Création d'une application web interactive pour la découverte d'exercices avec intégration YouTube.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: ["Recherche d'exercices", "Intégration YouTube", "Interface interactive", "Animations fluides"],
    github: "#",
    live: "https://gymo.vercel.app/",
    image: "/projects/gymo.jpg",
    gallery: [],
  },
  {
    title: "Pitcheur - Application web pour entrepreneurs",
    description:
      "Pitcheur est une application web conçue pour les entrepreneurs souhaitant présenter leurs idées innovantes et découvrir des projets prometteurs. Plateforme de networking pour entrepreneurs.",
    problem: "Création d'une plateforme de networking pour entrepreneurs avec système de pitch de projets.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Clerk"],
    features: ["Pitch de projets", "Découverte de projets", "Networking", "Authentification sécurisée"],
    github: "#",
    live: "https://pitcheur.vercel.app/",
    image: "/projects/pitcheur.jpg",
    gallery: [],
  },
  {
    title: "Dino Jump",
    description:
      "Jeu de Dino Jump inspiré du célèbre jeu de Google Chrome, développé avec JavaScript. Jeu interactif et amusant avec mécaniques de saut et obstacles.",
    problem: "Création d'un jeu web interactif inspiré du jeu Dino de Chrome.",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: ["Gameplay fluide", "Système de score", "Animations", "Responsive"],
    github: "#",
    live: "https://dino-game-pearl.vercel.app/",
    image: "/projects/dino.png",
    gallery: [],
  },
  {
    title: "Latodo",
    description:
      "Application de gestion de tâches développée avec React et Tailwind CSS. Gestion efficace des tâches avec interface moderne et intuitive.",
    problem: "Création d'une application de gestion de tâches moderne et performante.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    features: ["Gestion de tâches", "Interface moderne", "Persistance des données", "Design responsive"],
    github: "#",
    live: "https://latodo-xi.vercel.app/",
    image: "/projects/latodo.png",
    gallery: [],
  },
  {
    title: "HAMI - Plateforme pour entrepreneurs",
    description:
      "Plateforme de médias sociaux pour entrepreneurs permettant de se connecter, trouver des investisseurs, créer des entreprises et collaborer. Application full-stack avec messagerie en temps réel, gestion de projets et système de networking.",
    problem:
      "Création d'une plateforme complète de networking pour entrepreneurs avec gestion de projets, investissements et collaborations.",
    technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    features: [
      "Réseau social pour entrepreneurs",
      "Gestion de projets et entreprises",
      "Système de messagerie en temps réel",
      "Recherche d'investisseurs",
      "Gestion des collaborations",
      "Authentification sécurisée",
    ],
    github: "#",
    live: "#",
    image: "/projects/hami.png",
    gallery: [],
  },
  {
    title: "Sprint Job - Plateforme de recrutement",
    description:
      "Application web de recrutement et matching entre candidats et entreprises. Système intelligent de correspondance basé sur les compétences, localisation et expériences. Géolocalisation, gestion de CV, suivi des candidatures.",
    problem:
      "Création d'une plateforme de recrutement moderne avec système de matching intelligent entre candidats et offres d'emploi.",
    technologies: ["React", "TypeScript", "TanStack Query", "Leaflet", "React PDF", "Zustand", "Zod"],
    features: [
      "Matching intelligent candidats/offres",
      "Gestion de profils et CV",
      "Cartes interactives (Leaflet)",
      "Génération et visualisation PDF",
      "Système de géolocalisation",
      "Gestion des candidatures",
      "Recherche avancée",
    ],
    github: "#",
    live: "#",
    image: "/projects/sprint-job.png",
    gallery: [],
  },
  {
    title: "DSI Box - Plateforme no-code pour DSI",
    description:
      "Application no-code dédiée aux DSI permettant de créer et manipuler des objets métiers, créer des vues personnalisées, et construire des modules sans coder. Solution complète pour construire des applications personnalisées.",
    problem: "Création d'une plateforme no-code permettant aux DSI de construire des applications métier sans développement.",
    technologies: ["React", "TypeScript", "Radix UI", "React Flow", "Zustand", "TanStack Query", "Zod"],
    features: [
      "Création d'objets métiers personnalisés",
      "Vues personnalisées (tableau, formulaire, kanban)",
      "Construction de modules sans code",
      "Workflow builder visuel",
      "Interface drag & drop",
      "Gestion de permissions",
      "Assistant IA intégré",
    ],
    github: "#",
    live: "#",
    image: "/projects/dsibox.jpg",
    gallery: [],
  },
  {
    title: "Mediasoft - Gestion de devis et factures",
    description:
      "Application de gestion de devis et factures développée pour l'entreprise française Mediasoft. Partie client pour la consultation et partie admin pour la gestion complète. Interface moderne avec drag & drop.",
    problem: "Création d'une application de gestion de devis et factures avec interface client et administration séparées.",
    technologies: ["React", "TypeScript", "Radix UI", "TanStack Query", "Zustand", "React Hook Form"],
    features: [
      "Gestion de devis et factures",
      "Interface client et admin",
      "Drag & drop pour organisation",
      "Génération de documents",
      "Suivi des paiements",
      "Tableaux de bord analytiques",
    ],
    github: "#",
    live: "#",
    image: "/projects/mediasoft.png",
    gallery: [],
  },
  {
    title: "Pole Embal Mobile - Application mobile",
    description:
      "Application mobile React Native développée pour Ginov. Solution mobile complète avec gestion de données, synchronisation et interface native optimisée.",
    problem: "Création d'une application mobile native pour la gestion de données avec synchronisation.",
    technologies: ["React Native", "TypeScript", "Expo"],
    features: ["Application mobile native", "Gestion de données", "Synchronisation", "Interface optimisée"],
    github: "#",
    live: "#",
    image: "/projects/pole-embal.png",
    gallery: [],
  },
  {
    title: "Toud - Gestion de tâches avec IA",
    description:
      "Application mobile de gestion de tâches avec assistant IA intégré. Vue calendrier, statistiques de productivité, rappels personnalisés, détection des tâches en retard. Application React Native avec base de données locale SQLite.",
    problem: "Création d'une application mobile de gestion de tâches moderne avec IA pour améliorer la productivité.",
    technologies: ["React Native", "Expo", "TypeScript", "SQLite", "Drizzle ORM", "Zustand"],
    features: [
      "Gestion de tâches complète",
      "Vue calendrier avec navigation swipe",
      "Statistiques et graphiques de productivité",
      "Assistant IA (Toud AI) intégré",
      "Rappels et notifications personnalisés",
      "Détection automatique des tâches en retard",
      "Catégories personnalisables",
      "Stockage local SQLite",
    ],
    github: "#",
    live: "#",
    apk: "/projects/toud.apk",
    image: "/projects/toud.png",
    gallery: [],
  },
];

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  slug: slugifyProject(project.title),
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectImages(project: Project): string[] {
  const extras = project.gallery?.filter(Boolean) ?? [];
  return [project.image, ...extras.filter((src) => src !== project.image)];
}
