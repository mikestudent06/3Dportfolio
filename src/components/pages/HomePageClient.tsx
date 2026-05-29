"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Navbar3D from "@/components/layout/Navbar3D";
import Footer3D from "@/components/layout/Footer3D";
import Hero3D from "@/components/sections/home/Hero3D";
import About3D from "@/components/sections/home/About3D";
import ProjectsShowcase from "@/components/sections/home/ProjectsShowcase";
import Experience3D from "@/components/sections/home/Experience3D";
import TechStack3D from "@/components/sections/home/TechStack3D";
import Testimonials3D from "@/components/sections/home/Testimonials3D";
import Contact3D from "@/components/sections/home/Contact3D";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HomePageClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const homeRef = useRef<HTMLDivElement>(null);
  useScrollReveal(homeRef);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, searchParams]);

  return (
    <GsapProvider>
      <div ref={homeRef} className="min-h-screen overflow-x-hidden bg-black text-white">
        <Navbar3D />
        <main>
          <Hero3D />
          <About3D />
          <ProjectsShowcase />
          <Experience3D />
          <TechStack3D />
          <Testimonials3D />
          <Contact3D />
        </main>
        <Footer3D />
        <ScrollToTop />
      </div>
    </GsapProvider>
  );
}

export default function HomePageWithSuspense() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <HomePageClient />
    </Suspense>
  );
}
