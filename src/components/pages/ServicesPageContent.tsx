"use client";

import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Globe, ShoppingCart, Rocket, Shield, Zap, LucideIcon } from "lucide-react";
import { PageHero, SeoSection, CtaBanner } from "@/components/layout/PageLayout";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    icon: Globe,
    title: "Sites Web Vitrines",
    description: "Sites professionnels et modernes pour présenter votre activité avec un design responsive et un SEO intégré.",
    features: ["Design responsive", "Optimisation SEO", "Formulaire de contact", "Hébergement & déploiement", "Support et maintenance"],
  },
  {
    icon: ShoppingCart,
    title: "Sites E-commerce",
    description: "Boutiques en ligne complètes avec catalogue, panier, paiement et administration.",
    features: ["Catalogue produits", "Paiement sécurisé", "Gestion commandes", "Back-office admin", "Optimisation conversion"],
  },
  {
    icon: Code2,
    title: "Applications Web",
    description: "Apps performantes avec React, Node.js et TypeScript — sur mesure pour vos processus métier.",
    features: ["React & Node.js", "API REST sécurisée", "Authentification JWT", "Performance optimale", "Scalabilité"],
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Apps iOS et Android en React Native avec une expérience native et des délais maîtrisés.",
    features: ["Cross-platform", "UI intuitive", "Intégration API", "Notifications", "Publication stores"],
  },
  {
    icon: Rocket,
    title: "API REST & Backend",
    description: "Backends robustes avec Node.js, Express ou NestJS pour alimenter vos applications.",
    features: ["Architecture REST", "Documentation API", "Tests & qualité", "Sécurité", "Monitoring"],
  },
  {
    icon: Zap,
    title: "Optimisation & Maintenance",
    description: "Refactoring, performance, SEO et évolution de vos applications existantes.",
    features: ["Audit performance", "Refactoring", "Mises à jour sécurité", "Maintenance", "Support technique"],
  },
];

export function ServicesPageContent() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Développement"
        highlight="web & mobile"
        description="Sites vitrines, e-commerce, applications web et mobiles sur mesure — pour entreprises au Congo et à l'international."
        backHref="/"
        backLabel="Retour à l'accueil"
      />

      <section className="page-section pt-0">
        <div className="page-container grid md:grid-cols-2 xl:grid-cols-3 gap-8" data-reveal-stagger>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} data-reveal-item className="page-card-hover card p-8">
                <div className="size-14 rounded-xl bg-black-200 border border-black-50 flex-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-white-50 text-sm mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-blue-50">
                      <Shield className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="page-link text-sm">
                  Discuter du projet <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <SeoSection>
        <div>
          <h2>Ce que je propose</h2>
          <p>
            Basé au Congo Brazzaville, j&apos;accompagne entreprises et porteurs de projet avec React, React Native, Node.js
            et TypeScript.
          </p>
        </div>
        <div>
          <h3>Pourquoi travailler avec moi ?</h3>
          <ul className="space-y-2 list-none pl-0">
            {[
              "Technologies modernes et éprouvées",
              "Approche orientée résultats business",
              "Code propre et maintenable",
              "SEO intégré dès la conception",
              "Support après livraison",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-white">▸</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </SeoSection>

      <CtaBanner
        title="Prêt à démarrer votre projet ?"
        description="Discutons de vos besoins et créons une solution adaptée à votre business."
        primaryHref="/#contact"
        primaryLabel="Me contacter"
        secondaryHref="/tarifs"
        secondaryLabel="Voir les tarifs"
      />
    </>
  );
}
