import { Metadata } from "next";
import Link from "next/link";
import { Home, Search } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { personalInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Page non trouvée - ${personalInfo.name}`,
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="min-h-[70vh] flex-center px-6">
        <div className="max-w-lg w-full text-center space-y-8 animate-page-in">
          <div>
            <p className="text-7xl md:text-8xl font-bold text-white mb-4">404</p>
            <div className="page-card inline-flex p-4 rounded-full mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">Page non trouvée</h1>
            <p className="text-white-50">Cette page n&apos;existe pas ou a été déplacée.</p>
          </div>
          <Link href="/" className="cta-wrapper inline-block">
            <div className="cta-button group px-8 py-3">
              <div className="bg-circle" />
              <p className="text flex items-center gap-2 justify-center">
                <Home className="w-4 h-4" /> Retour à l&apos;accueil
              </p>
            </div>
          </Link>
          <div className="page-card pt-6">
            <p className="text-sm text-blue-50 mb-4">Pages populaires</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "/projects", label: "Projets" },
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="page-chip hover:border-white/30">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
