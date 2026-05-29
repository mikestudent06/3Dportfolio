import { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, SeoSection } from "@/components/layout/PageLayout";
import { AllSkills } from "@/components/sections/AllSkills";
import { personalInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Compétences Techniques | React, Node.js, TypeScript, React Native",
  description:
    "Stack full-stack et mobile : React, React Native, Node.js, TypeScript, Next.js, NestJS, MongoDB.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHero
        badge="Stack technique"
        title="Compétences &"
        highlight="technologies"
        description="Frontend, backend, mobile, DevOps et outils — l'ensemble de ma boîte à outils pour livrer des produits performants."
        backHref="/"
        backLabel="Retour à l'accueil"
      />
      <AllSkills />
      <SeoSection>
        <div>
          <h2>Expertise full-stack & mobile</h2>
          <p>Développeur au Congo Brazzaville, je couvre tout le cycle : conception, développement et déploiement.</p>
        </div>
        <div>
          <h3>React, Next.js, TypeScript</h3>
          <p>Interfaces modernes, typées et maintenables avec Tailwind CSS et gestion d&apos;état adaptée au projet.</p>
        </div>
        <div>
          <h3>Node.js, NestJS, MongoDB</h3>
          <p>APIs REST sécurisées, architecture scalable et bases de données adaptées aux besoins métier.</p>
        </div>
      </SeoSection>
    </PageShell>
  );
}
