import { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, SeoSection, CtaBanner } from "@/components/layout/PageLayout";
import { AllProjects } from "@/components/sections/AllProjects";

export const metadata: Metadata = {
  title: "Portfolio Projets | Applications Web, Mobiles & E-commerce",
  description:
    "Réalisations : applications web (React, Node.js), apps mobiles (React Native), sites vitrines et e-commerce. Portfolio de Michel MOUHANI, développeur au Congo Brazzaville.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Portfolio"
        title="Mes"
        highlight="projets"
        description="Applications web, mobiles, sites vitrines et e-commerce — une sélection de réalisations pour clients locaux et internationaux."
        backHref="/"
        backLabel="Retour à l'accueil"
      />
      <AllProjects />
      <SeoSection>
        <div>
          <h2>Mes réalisations</h2>
          <p>
            Stack habituelle : React, Node.js, TypeScript, React Native et Next.js — du site vitrine à la plateforme
            métier complexe.
          </p>
        </div>
        <div>
          <h3>Applications web & mobile</h3>
          <p>Plateformes SaaS, outils métier, apps iOS/Android en React Native avec UX soignée de bout en bout.</p>
        </div>
        <div>
          <h3>E-commerce & sites vitrines</h3>
          <p>Boutiques en ligne et sites professionnels optimisés SEO pour convertir et générer des contacts qualifiés.</p>
        </div>
      </SeoSection>
      <CtaBanner
        title="Un projet en tête ?"
        description="Discutons de vos besoins et construisons ensemble la solution adaptée."
        primaryHref="/#contact"
        primaryLabel="Me contacter"
      />
    </PageShell>
  );
}
