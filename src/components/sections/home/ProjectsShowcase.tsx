"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import TitleHeader from "@/components/ui/TitleHeader";
import { projects, texts } from "@/lib/constants";
import { getProjectExcerpt } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featured = projects.slice(0, 3);
  const [main, ...side] = featured;

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  if (!main) return null;

  return (
    <div id="projects" ref={sectionRef} className="app-showcase section-padding">
      <TitleHeader title={texts.projects.title} sub={texts.projects.subtitle} />
      <div className="w-full mt-16">
        <div className="showcaselayout">
          <Link href={`/projects/${main.slug}`} className="first-project-wrapper group">
            <div className="image-wrapper relative">
              <Image src={main.image} alt={main.title} fill className="object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div className="text-content">
              <div className="badges flex flex-wrap gap-2">
                {main.technologies.slice(0, 4).map((t) => (
                  <span key={t} className="hero-badge text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white-50 transition-colors">{main.title}</h3>
              <p className="text-white-50 md:text-xl">{getProjectExcerpt(main, 140)}</p>
              <span className="text-white underline group-hover:text-white-50">Voir les détails →</span>
            </div>
          </Link>

          <div className="project-list-wrapper overflow-hidden">
            {side.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project group block">
                <div className="image-wrapper relative bg-black-50">
                  <Image src={project.image} alt={project.title} fill className="object-contain rounded-xl p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mt-5 group-hover:text-white-50 transition-colors">{project.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-center mt-12">
          <Link href="/projects" className="cta-wrapper">
            <div className="cta-button group px-8 py-4">
              <p className="text uppercase md:text-lg text-black group-hover:text-white-50">
                {texts.projects.viewAll}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
