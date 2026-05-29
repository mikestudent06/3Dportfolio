"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TitleHeader from "@/components/ui/TitleHeader";
import { projects, texts } from "@/lib/constants";
import { getProjectExcerpt } from "@/lib/projects";

export const AllProjects = () => (
  <section id="all-projects" className="page-section pt-0">
    <div className="page-container">
      <TitleHeader title="Tous mes projets" sub={texts.projects.subtitle} />
      <p className="text-center text-white-50 max-w-2xl mx-auto mt-6 mb-16">{texts.projects.description}</p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8" data-reveal-stagger>
        {projects.map((project) => (
          <article key={project.slug} data-reveal-item className="page-card-hover card group overflow-hidden flex flex-col">
            <Link href={`/projects/${project.slug}`} className="relative aspect-video overflow-hidden rounded-lg mb-5 block">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </Link>

            <div className="flex flex-col flex-1 gap-4">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-semibold text-white group-hover:text-white-50 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-white-50 text-sm leading-relaxed">{getProjectExcerpt(project)}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tag) => (
                  <span key={tag} className="page-chip">
                    {tag}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="page-chip">+{project.technologies.length - 3}</span>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="page-link text-sm mt-auto pt-2 group/link"
              >
                Voir les détails
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
