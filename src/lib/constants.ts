// Informations personnelles
export const personalInfo = {
  name: "Michel MOUHANI",
  firstName: "Michel",
  lastName: "MOUHANI",
  title: "Développeur Full-Stack & Mobile",
  tagline: "Je conçois des applications web et mobiles performantes, des sites vitrines et e-commerce sécurisés, orientés business.",
  location: "Congo Brazzaville",
  available: true,
  yearsOfExperience: "3+",
  profileImage: "/profile-photo.jpg",
};

// Compétences techniques
export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "React Native",
    "ShadCN UI",
    "Redux Toolkit",
    "Zustand",
    "GSAP",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "API REST",
    "JWT",
    "Domain Driven Design",
  ],
  database: [
    "MongoDB",
    "MongoDB Atlas",
    "SQL",
  ],
  testing: [
    "Postman",
    "Tests API",
  ],
  devops: [
    "Git & GitHub",
    "Vercel",
    "Render",
    "Netlify",
  ],
  tools: [
    "Cursor",
    "Figma",
    "React Query (TanStack)",
    "UML",
    "Prompt IA",
  ],
  softSkills: [
    "Communication",
    "Travail d'équipe",
  ],
};

// Toutes les compétences pour la section Hero
export const allSkills = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.database,
  ...skills.testing,
  ...skills.devops,
  ...skills.tools,
  ...skills.softSkills,
];

// À propos
export const about = {
  title: "À propos de moi",
  subtitle: "Construire l'avenir, grâce au numérique.",
  description: [
    "Développeur full-stack et mobile au Congo Brazzaville, je conçois des applications web et mobiles, des sites vitrines et des boutiques e-commerce. Spécialisé en React, Node.js, TypeScript et React Native, j'allie rigueur technique, performance et expérience utilisateur — pour des clients locaux comme internationaux.",
    "Chaque projet part d'un objectif business clair : application métier, site vitrine optimisé pour le SEO, ou plateforme e-commerce sécurisée. Du frontend au backend, je livre des solutions complètes, maintenables et évolutives.",
    "Autonome et en veille sur les bonnes pratiques, je travaille sur des produits qui ont un impact — apps Next.js, applications iOS/Android en React Native, sites vitrines ou e-commerce. Mon objectif : des solutions numériques utiles, au Congo et au-delà.",
  ],
  mission: "Ma mission est de créer des applications qui ne sont pas seulement fonctionnelles, mais véritablement performantes et sécurisées — des produits que les utilisateurs apprécient et que les développeurs peuvent maintenir facilement.",
  highlights: [
    {
      icon: "Code2",
      title: "Code Propre",
      description: "Écrire du code maintenable, évolutif et de qualité professionnelle.",
    },
    {
      icon: "Rocket",
      title: "Performance",
      description: "Optimiser pour la vitesse et offrir des expériences utilisateur ultra-rapides.",
    },
    {
      icon: "Users",
      title: "Orientation Business",
      description: "Créer des solutions qui répondent aux besoins métier et génèrent de la valeur.",
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Rester à jour avec les dernières technologies et meilleures pratiques.",
    },
    {
      icon: "Globe",
      title: "Sites Web & E-commerce",
      description: "Création de sites vitrines élégants et de plateformes e-commerce performantes et sécurisées.",
    },
  ],
};

// Projets — voir src/lib/projects.ts pour slug, gallery et détails
export { projects } from "./projects";
export type { Project } from "./projects";

// Expériences
export const experiences = [
  {
    period: "2023 — Présent",
    role: "Développeur Full-Stack & Mobile",
    company: "Freelance / Projets clients",
    description: "Développement d'applications web et mobiles pour divers clients. Création de solutions sur mesure avec React, React Native, Node.js et MongoDB. Gestion complète des projets de la conception au déploiement.",
    technologies: ["React", "React Native", "Node.js", "Express", "MongoDB", "TypeScript"],
    current: true,
  },
  {
    period: "2023",
    role: "Développeur Frontend",
    company: "Ginov & Freelance",
    description: "A aidé au développement de plusieurs solutions web au sein de Ginov et en freelance utilisant React.js et Vue.js, améliorant l'interactivité et l'expérience utilisateur.",
    technologies: ["React", "Vue.js", "JavaScript", "TypeScript"],
    current: false,
  },
  {
    period: "2023",
    role: "Développeur Frontend Vue.js",
    company: "Interstis (France)",
    description: "A contribué au développement d'une application de gestion des calendriers en collaboration avec l'entreprise française Interstis en utilisant Vue.js pour une expérience utilisateur fluide.",
    technologies: ["Vue.js", "JavaScript", "TypeScript"],
    current: false,
  },
  {
    period: "2023",
    role: "Développeur Frontend React.js",
    company: "Mediasoft (France)",
    description: "A contribué au développement d'une application de gestion de devis et factures en collaboration avec l'entreprise française Mediasoft en utilisant React.js.",
    technologies: ["React", "JavaScript", "TypeScript"],
    current: false,
  },
  {
    period: "2023",
    role: "Développeur Backend",
    company: "Ginov",
    description: "Développé l'API complète d'une application de chat en temps réel au sein de Ginov, utilisant Nest.js et Socket.io pour la communication en temps réel.",
    technologies: ["NestJS", "Socket.io", "Node.js", "TypeScript"],
    current: false,
  },
  {
    period: "2023",
    role: "Développeur d'App Mobile",
    company: "Freelance",
    description: "Conçu et développé des applications mobiles pour les plateformes iOS et Android en utilisant React Native, avec gestion du stockage local et synchronisation avec API distante.",
    technologies: ["React Native", "JavaScript", "TypeScript"],
    current: false,
  },
  {
    period: "2022 — 2023",
    role: "Développeur Web",
    company: "Projets académiques & personnels",
    description: "Développement de projets web full-stack incluant authentification, CRUD, APIs REST. Apprentissage et mise en pratique des technologies modernes.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    current: false,
  },
];

// Services
export const services = [
  {
    title: "Création de sites vitrines",
    description: "Sites web modernes et responsives pour présenter votre activité.",
  },
  {
    title: "Applications web sur mesure",
    description: "Solutions web complètes adaptées à vos besoins spécifiques.",
  },
  {
    title: "Applications mobiles",
    description: "Apps Android et iOS développées avec React Native.",
  },
  {
    title: "APIs & backends sécurisés",
    description: "Architecture backend robuste avec authentification et sécurité.",
  },
  {
    title: "Intégration de paiements",
    description: "Intégration Mobile Money et autres systèmes de paiement.",
  },
  {
    title: "Maintenance & évolution",
    description: "Support continu et amélioration de vos applications existantes.",
  },
];

// Contact
export const contact = {
  email: "michel.mouhani@outlook.com",
  phone: "+242 06 986 58 00",
  whatsapp: "https://wa.me/242069865800",
  github: "https://github.com/mikestudent06",
  linkedin: "https://www.linkedin.com/in/michel-mouhani-b563b1262",
  twitter: "https://x.com/MouhaniMic44729",
  location: "Congo Brazzaville",
  availability: {
    status: true,
    message: "Je suis actuellement disponible pour de nouveaux projets et opportunités passionnantes. Que vous ayez besoin d'un développeur à temps plein ou d'un consultant freelance, discutons-en !",
  },
};

// Témoignages
export const testimonials = [
  {
    quote: "Travailler avec Michel MOUHANI a été une expérience exceptionnelle. Son expertise, sa réactivité et son souci du détail ont permis de donner vie à notre vision. Michel a su comprendre nos besoins spécifiques et livrer un résultat qui dépasse nos attentes. Je recommande vivement ses services à quiconque souhaite faire évoluer son projet.",
    author: "BIKO RO BIEKO Gilles",
    role: "CEO de Ginov",
  },
  {
    quote: "La collaboration avec Michel MOUHANI a été fluide et enrichissante. Grâce à son travail, notre plateforme a un design moderne et attrayant. Un partenaire fiable pour tout projet ambitieux.",
    author: "Ruben KIMBEMBE",
    role: "CEO de KM Dreams",
  },
  {
    quote: "Michel MOUHANI a fait preuve d'un professionnalisme exemplaire tout au long de notre collaboration. Sa capacité à transformer des idées complexes en solutions simples et efficaces est impressionnante. Je suis très satisfait du résultat final et je n'hésiterai pas à faire appel à lui pour de futurs projets.",
    author: "Paul MOUKALA",
    role: "CEO de Cogym",
  },
];

// Navigation
export const navigation = {
  links: [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "/services", label: "Services", isRoute: true },
    { href: "/tarifs", label: "Tarifs", isRoute: true },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "#experience", label: "Expérience" },
    { href: "#testimonials", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ],
  logo: {
    text: "MM",
    fullName: "Michel MOUHANI",
  },
};

// Réseaux sociaux
export const socialLinks = [
  { icon: "Github", href: contact.github, label: "GitHub" },
  { icon: "Linkedin", href: contact.linkedin, label: "LinkedIn" },
  { icon: "Twitter", href: contact.twitter, label: "Twitter" },
];

// Textes généraux
export const texts = {
  hero: {
    badge: "Développeur Full-Stack & Mobile",
    scroll: "Défiler",
    technologies: "Technologies avec lesquelles je travaille",
    available: "Disponible pour travailler",
    yearsExp: "Années d'exp.",
    contactMe: "Me contacter",
    downloadCV: "Télécharger CV",
    viewProjects: "Voir mes projets",
    viewAllSkills: "Voir toutes mes compétences",
  },
  skills: {
    title: "Compétences & Technologies",
    subtitle: "L'ensemble de mes outils et technologies.",
    description: "Découvrez toutes les technologies, frameworks et outils que j'utilise pour créer des applications performantes et modernes.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Bases de données",
      testing: "Tests & Qualité",
      devops: "DevOps & Déploiement",
      tools: "Outils & Utilitaires",
      softSkills: "Compétences transversales",
    },
    backToHome: "Retour à l'accueil",
  },
  projects: {
    title: "Travaux sélectionnés",
    subtitle: "Projets qui font la différence.",
    description: "Une sélection de mes travaux récents, des applications web complexes aux outils innovants qui résolvent des problèmes réels.",
    viewAll: "Voir tous les projets",
  },
  experience: {
    title: "Parcours professionnel",
    subtitle: "Une expérience qui parle d'elle-même.",
    description: "Un aperçu de ma croissance professionnelle, du développeur curieux au développeur full-stack créant des produits à grande échelle.",
  },
  testimonials: {
    title: "Ce qu'on dit de moi",
    subtitle: "Des mots gentils de personnes formidables.",
  },
  contact: {
    title: "Restons en contact",
    subtitle: "Travaillons ensemble sur quelque chose de grand.",
    description: "Vous avez un projet en tête ? J'aimerais en entendre parler. Envoyez-moi un message et discutons de la façon dont nous pouvons travailler ensemble.",
    sendMessage: "Envoyer le message",
    sending: "Envoi en cours...",
    success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
    error: "Échec de l'envoi du message. Veuillez réessayer plus tard ou me contacter directement par email.",
    name: "Nom",
    email: "Email",
    message: "Message",
    phone: "Téléphone",
    location: "Localisation",
    namePlaceholder: "Votre nom...",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder: "Votre message...",
    contactInfo: "Informations de contact",
    currentlyAvailable: "Actuellement disponible",
  },
};
