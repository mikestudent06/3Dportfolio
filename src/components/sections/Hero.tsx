"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { personalInfo, allSkills, texts, socialLinks } from "@/lib/constants";

interface DotPosition {
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
}

export const Hero = () => {
  const [dots, setDots] = useState<DotPosition[]>([]);

  useEffect(() => {
    // Generate random positions only on client side to avoid hydration mismatch
    const generatedDots: DotPosition[] = Array.from({ length: 30 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      animationDelay: Math.random() * 5,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero image"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.animationDuration}s ease-in-out infinite`,
              animationDelay: `${dot.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {texts.hero.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">Développeur full-stack</span>
                <br />
                & mobile au Congo Brazzaville
                <br />
                <span className="font-serif italic font-normal text-white">
                  Applications web & mobiles performantes.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Bonjour, je suis <strong>{personalInfo.name}</strong> — développeur full-stack et mobile au Congo Brazzaville. {personalInfo.tagline}
              </p>
              <p className="text-sm text-muted-foreground/80 animate-fade-in animation-delay-200">
                <Link href="/services" className="underline hover:text-primary">Services</Link>
                {" · "}
                <Link href="/projects" className="underline hover:text-primary">Projets</Link>
                {" · "}
                <Link href="/blog" className="underline hover:text-primary">Blog</Link>
                {" · "}
                <Link href="/tarifs" className="underline hover:text-primary">Tarifs</Link>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {texts.hero.contactMe} <ArrowRight className="w-5 h-5" />
              </Button>
              <Link href="/projects">
                <AnimatedBorderButton className="cursor-pointer">
                  {texts.hero.viewProjects} <ArrowRight className="w-5 h-5" />
                </AnimatedBorderButton>
              </Link>
              <a href="/cv.pdf" download="CV_Michel_MOUHANI.pdf">
                <AnimatedBorderButton className="cursor-pointer">
                  <Download className="w-5 h-5" />
                  {texts.hero.downloadCV}
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Suivez-moi : </span>
              {socialLinks.map((social, idx) => {
                let IconComponent = null;
                if (social.icon === "Github") IconComponent = Github;
                else if (social.icon === "Linkedin") IconComponent = Linkedin;
                else if (social.icon === "Twitter") IconComponent = Twitter;

                if (!IconComponent || !social.href || social.href === "#") return null;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  width={400}
                  height={500}
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  priority
                />

                {/* Floating Badge */}
                {personalInfo.available && (
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        {texts.hero.available}
                      </span>
                    </div>
                  </div>
                )}
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">{personalInfo.yearsOfExperience}</div>
                  <div className="text-xs text-muted-foreground">
                    {texts.hero.yearsExp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            {texts.hero.technologies}
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...allSkills, ...allSkills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Button */}
          <div className="text-center mt-8 animate-fade-in animation-delay-700">
            <Link href="/skills">
              <AnimatedBorderButton className="cursor-pointer">
                {texts.hero.viewAllSkills} <ArrowRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">{texts.hero.scroll}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
