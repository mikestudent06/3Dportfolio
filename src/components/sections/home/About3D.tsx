"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "@/components/ui/TitleHeader";
import { about } from "@/lib/constants";

const About3D = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-about-header]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "#about", start: "top 80%" },
      });
      gsap.from("[data-about-text]", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-about-text]", start: "top 85%" },
      });
      gsap.from("[data-about-card]", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-about-cards]", start: "top 82%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div data-about-header>
        <TitleHeader title={about.title} sub={about.subtitle} />
      </div>
      <div className="w-full padding-x-lg mt-16">
        <div className="mx-auto max-w-4xl space-y-6 text-white-50 text-lg text-center">
          {about.description.map((p) => (
            <p key={p.slice(0, 40)} data-about-text>
              {p}
            </p>
          ))}
        </div>
        <div className="mx-auto grid-3-cols mt-16" data-about-cards>
          {about.highlights.map(({ title, description }) => (
            <div key={title} data-about-card className="card-border rounded-xl p-8 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
              <p className="text-white-50 text-lg">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About3D;
