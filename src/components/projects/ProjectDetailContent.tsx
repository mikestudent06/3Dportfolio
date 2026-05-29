import Link from "next/link";
import { ArrowLeft, CheckCircle, Code, Download, ExternalLink, Github } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { CtaBanner } from "@/components/layout/PageLayout";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import type { Project } from "@/lib/projects";

export function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <>
      <section className="page-section pb-8">
        <div className="page-container max-w-5xl" data-reveal>
          <Link href="/projects" className="page-link mb-8 group inline-flex">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Retour aux projets</span>
          </Link>

          <p className="page-tag mb-6">Projet</p>
          <h1 className="page-title mb-6">{project.title}</h1>
          <p className="page-lead mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tag) => (
              <span key={tag} className="page-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-wrapper inline-flex"
              >
                <div className="cta-button group px-6 py-3">
                  <div className="bg-circle" />
                  <p className="text flex items-center gap-2">
                    Voir en live <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-black-50 text-white-50 hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Code source
              </a>
            )}
            {project.apk && (
              <a
                href={project.apk}
                download
                className="px-6 py-3 rounded-lg border border-black-50 text-white-50 hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Télécharger APK
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="page-container max-w-5xl">
          <ProjectGallery project={project} />
        </div>
      </section>

      <section className="page-section border-t border-black-50">
        <div className="page-container max-w-5xl grid md:grid-cols-2 gap-10" data-reveal-stagger>
          {project.problem && (
            <div data-reveal-item className="page-card card p-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                <Code className="w-5 h-5" /> Problème résolu
              </h2>
              <p className="text-white-50 leading-relaxed">{project.problem}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div data-reveal-item className="page-card card p-8">
              <h2 className="text-xl font-semibold text-white mb-4">Fonctionnalités</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-white-50">
                    <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Un projet similaire en tête ?"
        description="Discutons de vos besoins et créons une solution adaptée à votre activité."
        primaryHref="/#contact"
        primaryLabel="Me contacter"
        secondaryHref="/projects"
        secondaryLabel="Autres projets"
      />
    </>
  );
}

export function ProjectDetailShell({ project }: { project: Project }) {
  return (
    <PageShell>
      <ProjectDetailContent project={project} />
    </PageShell>
  );
}
