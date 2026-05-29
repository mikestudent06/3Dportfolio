"use client";

import { useRef } from "react";
import Navbar3D from "@/components/layout/Navbar3D";
import Footer3D from "@/components/layout/Footer3D";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageBackground3D from "@/components/three/page/PageBackground3D";

export function PageShell({ children }: { children: React.ReactNode }) {
  const shellRef = useRef<HTMLDivElement>(null);
  useScrollReveal(shellRef);

  return (
    <GsapProvider>
      <div ref={shellRef} className="page-shell relative">
        <PageBackground3D />
        <Navbar3D />
        <main className="page-main relative z-10">{children}</main>
        <Footer3D />
        <ScrollToTop />
      </div>
    </GsapProvider>
  );
}
