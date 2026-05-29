"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import TitleHeader from "@/components/ui/TitleHeader";
import { CanvasLoader } from "@/components/canvas/CanvasLoader";
import { Scene3DWrapper } from "@/components/three/Scene3DWrapper";
import { techStackIcons } from "@/lib/site3d";
import Link from "next/link";
import { texts } from "@/lib/constants";

const TechIconCardExperience = dynamic(
  () => import("@/components/three/tech/TechIconCardExperience"),
  { ssr: false, loading: () => <CanvasLoader /> }
);

const TechStack3D = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title={texts.skills.title} sub={texts.skills.subtitle} />
        <div className="tech-grid">
          {techStackIcons.map((model) => (
            <div
              key={model.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper h-60">
                  <Scene3DWrapper
                    component={() => <TechIconCardExperience model={model} />}
                    fallbackClassName="h-60"
                  />
                </div>
                <div className="padding-x w-full">
                  <p>{model.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-center mt-12">
          <Link href="/skills" className="text-white-50 hover:text-white underline">
            {texts.hero.viewAllSkills}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechStack3D;
