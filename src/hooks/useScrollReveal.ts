"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(scope?: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-left]").forEach((el) => {
        gsap.from(el, {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-right]").forEach((el) => {
        gsap.from(el, {
          x: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((container) => {
        const items = container.querySelectorAll("[data-reveal-item]");
        if (!items.length) return;

        gsap.from(items, {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 82%",
          },
        });
      });
    },
    { scope }
  );
}
