"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function use3DEnabled() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return !isMobile && !reducedMotion;
}
