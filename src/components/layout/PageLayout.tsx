"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";

const PageHeroScene = dynamic(() => import("@/components/three/page/PageHeroScene"), { ssr: false });

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="page-link mb-8 group" data-hero-item>
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      <span>{label}</span>
    </Link>
  );
}

export function PageHero({
  badge,
  title,
  highlight,
  description,
  backHref,
  backLabel,
}: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-hero-item]", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
      gsap.from("[data-hero-scene]", {
        x: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: heroRef }
  );

  return (
    <section className="page-section pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div ref={heroRef} className="page-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            {backHref && backLabel && <BackLink href={backHref} label={backLabel} />}
            <p className="page-tag mb-6" data-hero-item>
              {badge}
            </p>
            <h1 className="page-title mb-6" data-hero-item>
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="text-white-50">{highlight}</span>
                </>
              )}
            </h1>
            <p className="page-lead" data-hero-item>
              {description}
            </p>
          </div>
          <div className="hidden lg:block" data-hero-scene>
            <PageHeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeoSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="page-section border-t border-black-50" data-reveal>
      <div className="page-container">
        <div className="page-seo">{children}</div>
      </div>
    </section>
  );
}

export function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="page-section" data-reveal>
      <div className="page-container">
        <div className="page-card text-center max-w-3xl mx-auto card">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{title}</h2>
          <p className="text-white-50 mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryHref} className="cta-wrapper">
              <div className="cta-button group px-8 py-3">
                <div className="bg-circle" />
                <p className="text">{primaryLabel}</p>
              </div>
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="px-8 py-3 rounded-lg border border-black-50 text-white-50 hover:text-white hover:border-white/30 transition-colors"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
