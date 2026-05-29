"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Scene3DWrapper } from "@/components/three/Scene3DWrapper";
import { CanvasLoader } from "@/components/canvas/CanvasLoader";
import { heroWords } from "@/lib/site3d";
import { personalInfo, texts } from "@/lib/constants";

const HeroExperience = dynamic(() => import("@/components/three/hero/HeroExperience"), {
  ssr: false,
  loading: () => <CanvasLoader />,
});

const Hero3D = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.8 })
        .from(
          ".hero-text h1",
          { y: 50, opacity: 0, stagger: 0.15, duration: 0.9 },
          "-=0.4"
        )
        .from(".hero-tagline", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-actions", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-socials", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-3d-layout", { x: 80, opacity: 0, duration: 1.2 }, "-=0.8");
    },
    { scope: heroRef }
  );

  return (
    <section id="hero" ref={heroRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <Image src="/images/bg.png" alt="" width={1920} height={1080} className="opacity-80" priority />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <p className="hero-badge w-fit">{texts.hero.badge}</p>
            <div className="hero-text">
              <h1>
                Transformer vos
                <span className="slide">
                  <span className="wrapper">
                    {heroWords.map((word, index) => (
                      <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt=""
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>en projets concrets</h1>
              <h1>qui génèrent des résultats</h1>
            </div>

            <p className="hero-tagline text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl">
              {personalInfo.tagline}
            </p>

            <div className="hero-actions flex flex-wrap gap-4 relative z-10">
              <Button text={texts.hero.viewProjects} className="md:w-80 md:h-16 w-60 h-12" id="projects" />
              <Button
                text={texts.hero.contactMe}
                className="md:w-64 md:h-16 w-52 h-12"
                href="#contact"
              />
            </div>

            <div className="hero-socials flex items-center gap-4 relative z-10">
              <span className="text-sm text-white-50">Suivez-moi :</span>
              <SocialLinks className="!justify-start gap-3" linkClassName="icon hover:border-white/40 hover:bg-black-50" />
            </div>
          </div>
        </header>

        <figure className="hero-3d-layout">
          <Scene3DWrapper component={HeroExperience} />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero3D;
