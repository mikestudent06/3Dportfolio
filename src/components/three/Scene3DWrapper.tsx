"use client";

import dynamic from "next/dynamic";
import { CanvasLoader } from "@/components/canvas/CanvasLoader";
import { use3DEnabled } from "@/hooks/use3DEnabled";
import type { ComponentType } from "react";

export function Scene3DWrapper({
  component: Component,
  fallbackClassName = "min-h-[50vh]",
}: {
  component: ComponentType;
  fallbackClassName?: string;
}) {
  const enabled = use3DEnabled();

  if (!enabled) {
    return (
      <div className={`flex-center ${fallbackClassName} bg-black-100 rounded-3xl border border-black-50`}>
        <p className="text-white-50 text-center px-6 text-sm max-w-md">
          Aperçu 3D désactivé sur mobile ou selon vos préférences d&apos;accessibilité.
        </p>
      </div>
    );
  }

  return <Component />;
}

export function loadScene(importFn: () => Promise<{ default: ComponentType }>) {
  return dynamic(importFn, {
    ssr: false,
    loading: () => <CanvasLoader />,
  });
}
