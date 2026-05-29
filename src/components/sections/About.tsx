"use client";

import { Code2, Lightbulb, Rocket, Users, Globe } from "lucide-react";
import Link from "next/link";
import { about } from "@/lib/constants";

const iconMap = {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  Globe,
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                {about.title}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {about.subtitle.split(',')[0]},
              <span className="font-serif italic font-normal text-white">
                {" "}
                {about.subtitle.split(',')[1]}
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              {about.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "{about.mission}"
              </p>
            </div>
            <p className="text-muted-foreground animate-fade-in animation-delay-300">
              <Link href="/services" className="text-primary hover:underline">Services</Link>
              {" · "}
              <Link href="/projects" className="text-primary hover:underline">Projets</Link>
              {" · "}
              <Link href="/blog" className="text-primary hover:underline">Blog</Link>
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {about.highlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
