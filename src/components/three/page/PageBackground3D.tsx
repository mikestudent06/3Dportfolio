"use client";

import dynamic from "next/dynamic";
import { use3DEnabled } from "@/hooks/use3DEnabled";

const PageBackgroundCanvas = dynamic(() => import("./PageBackgroundCanvas"), { ssr: false });

export default function PageBackground3D() {
  const enabled = use3DEnabled();

  if (!enabled) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        aria-hidden
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-35" aria-hidden>
      <PageBackgroundCanvas />
    </div>
  );
}
