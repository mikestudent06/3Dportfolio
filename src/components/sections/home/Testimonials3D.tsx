"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "@/components/ui/TitleHeader";
import GlowCard from "@/components/ui/GlowCard";
import { testimonials, texts } from "@/lib/constants";

const Testimonials3D = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-testimonials-header]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "#testimonials", start: "top 80%" },
      });
      gsap.from("[data-testimonial-card]", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-testimonials-grid]", start: "top 82%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="testimonials" ref={sectionRef} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div data-testimonials-header>
          <TitleHeader title={texts.testimonials.title} sub={texts.testimonials.subtitle} />
        </div>
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16" data-testimonials-grid>
          {testimonials.map((testimonial, index) => (
            <div key={index} data-testimonial-card>
              <GlowCard card={{ quote: testimonial.quote }} index={index}>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-white-50">{testimonial.role}</p>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials3D;
