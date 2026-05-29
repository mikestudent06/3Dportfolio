"use client";

import Link from "next/link";
import { Check, ArrowRight, Zap, Rocket, Crown, Smartphone, LucideIcon } from "lucide-react";
import { PageHero, CtaBanner } from "@/components/layout/PageLayout";

const pricingPlans = [
  {
    name: "Site Vitrine",
    icon: Zap,
    priceFcfa: "150 000 – 350 000 FCFA",
    priceFcfaLabel: "Pack Essentiel",
    priceEur: "≈ 229 € – 534 €",
    description: "Parfait pour présenter votre entreprise en ligne",
    features: ["Design responsive", "1 à 5 pages", "Formulaire contact", "SEO de base", "SSL inclus"],
    popular: false,
    cta: "Demander un devis",
  },
  {
    name: "Site E-commerce",
    icon: Rocket,
    priceFcfa: "300 000 – 700 000 FCFA",
    priceFcfaLabel: "Pack Starter",
    priceEur: "≈ 458 € – 1 067 €",
    description: "Boutique en ligne complète et sécurisée",
    features: ["Jusqu'à 50 produits", "Panier & commandes", "Paiement en ligne", "Design responsive", "SEO basique"],
    popular: true,
    cta: "Demander un devis",
  },
  {
    name: "Application Web",
    icon: Crown,
    priceFcfa: "650 000 – 1 500 000 FCFA",
    priceFcfaLabel: "Pack MVP",
    priceEur: "≈ 992 € – 2 290 €",
    description: "Application web / SaaS sur mesure",
    features: ["Auth & dashboard", "API REST", "Base de données", "Notifications", "Déploiement"],
    popular: false,
    cta: "Discuter du projet",
  },
  {
    name: "Application Mobile",
    icon: Smartphone,
    priceFcfa: "850 000 – 1 800 000 FCFA",
    priceFcfaLabel: "Pack Essentiel",
    priceEur: "≈ 1 298 € – 2 747 €",
    description: "App Android et/ou iOS cross-platform",
    features: ["React Native", "Auth & API", "Notifications", "UI standard", "Stores en option"],
    popular: false,
    cta: "Discuter du projet",
  },
];

const hourlyRates = [
  { service: "Frontend (React, Vue)", rateFcfa: "28 000 – 46 000 FCFA/h", rateEur: "43 € – 70 €/h", description: "Interface responsive moderne" },
  { service: "Backend (Node.js, NestJS)", rateFcfa: "30 000 – 49 000 FCFA/h", rateEur: "46 € – 75 €/h", description: "API REST et logique métier" },
  { service: "Mobile (React Native)", rateFcfa: "33 000 – 52 000 FCFA/h", rateEur: "50 € – 80 €/h", description: "Apps iOS et Android" },
  { service: "Intégration & Design", rateFcfa: "25 000 – 43 000 FCFA/h", rateEur: "38 € – 65 €/h", description: "Maquettes et animations" },
  { service: "Maintenance", rateFcfa: "22 000 – 39 000 FCFA/h", rateEur: "34 € – 60 €/h", description: "Refactoring et support" },
];

export function TarifsPageContent() {
  return (
    <>
      <PageHero
        badge="Tarifs & Devis"
        title="Tarifs"
        highlight="transparents"
        description="Grilles en FCFA adaptées au marché local. Chaque projet fait l'objet d'un devis gratuit et personnalisé."
        backHref="/"
        backLabel="Retour à l'accueil"
      />

      <section className="page-section pt-0">
        <div className="page-container grid md:grid-cols-2 xl:grid-cols-4 gap-6" data-reveal-stagger>
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.name}
                data-reveal-item
                className={`page-card-hover card p-6 relative ${plan.popular ? "ring-1 ring-white/30" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 hero-badge text-xs bg-white text-black">
                    Populaire
                  </span>
                )}
                <div className="size-12 rounded-xl bg-black-200 border border-black-50 flex-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-1">{plan.name}</h2>
                <p className="text-blue-50 text-sm mb-4">{plan.description}</p>
                <p className="text-2xl font-bold text-white mb-1">{plan.priceFcfa}</p>
                <p className="text-xs text-blue-50 mb-1">{plan.priceFcfaLabel}</p>
                <p className="text-sm text-blue-50 mb-5">{plan.priceEur}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white-50">
                      <Check className="w-4 h-4 text-white shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    plan.popular ? "bg-white text-black hover:bg-white-50" : "border border-black-50 text-white hover:border-white/30"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section border-t border-black-50" data-reveal>
        <div className="page-container max-w-4xl">
          <h2 className="page-title text-2xl md:text-3xl mb-4 text-center">Tarifs horaires freelance</h2>
          <p className="text-white-50 text-center mb-10">Pour missions longues ou projets sur mesure.</p>
          <div className="page-card space-y-4">
            {hourlyRates.map((rate) => (
              <div key={rate.service} className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-lg hover:bg-black-200 transition-colors">
                <div>
                  <h3 className="font-semibold text-white">{rate.service}</h3>
                  <p className="text-sm text-blue-50">{rate.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-white">{rate.rateFcfa}</p>
                  <p className="text-sm text-blue-50">{rate.rateEur}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/#contact" className="cta-wrapper inline-block">
              <div className="cta-button group px-8 py-3">
                <div className="bg-circle" />
                <p className="text flex items-center gap-2">
                  Devis personnalisé <ArrowRight className="w-4 h-4" />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Consultation gratuite incluse"
        description="Design professionnel, code maintenable, SEO de base et formation à la gestion de votre site."
        primaryHref="/#contact"
        primaryLabel="Demander un devis"
        secondaryHref="/services"
        secondaryLabel="Voir les services"
      />
    </>
  );
}
