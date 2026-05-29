import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function ProjectNotFound() {
  return (
    <PageShell>
      <section className="page-section">
        <div className="page-container max-w-2xl text-center" data-reveal>
          <p className="page-tag mb-6 mx-auto w-fit">404</p>
          <h1 className="page-title mb-4">Projet introuvable</h1>
          <p className="page-lead mx-auto mb-8">Ce projet n&apos;existe pas ou a été déplacé.</p>
          <Link href="/projects" className="cta-wrapper inline-block">
            <div className="cta-button group px-8 py-3">
              <div className="bg-circle" />
              <p className="text">Voir tous les projets</p>
            </div>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
