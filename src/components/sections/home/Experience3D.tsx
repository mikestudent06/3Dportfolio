"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "@/components/ui/TitleHeader";
import GlowCard from "@/components/ui/GlowCard";
import { experiences, texts } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const Experience3D = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });

    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: text, start: "top 60%" },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title={texts.experience.title} sub={texts.experience.subtitle} />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard
                    index={0}
                    card={{ quote: exp.description }}
                  >
                    <div>
                      <p className="font-bold text-xl">{exp.role}</p>
                      <p className="text-white-50">{exp.company}</p>
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo flex-center text-sm font-bold">
                        {exp.company.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-3xl">{exp.role}</h3>
                        <p className="my-5 text-white-50">🗓️ {exp.period}</p>
                        <p className="text-[#839CB5]">{exp.company}</p>
                        <p className="text-white-50 mt-4 text-lg">{exp.description}</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 text-white-50">
                          {exp.technologies.map((tech) => (
                            <li key={tech} className="text-base">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience3D;
