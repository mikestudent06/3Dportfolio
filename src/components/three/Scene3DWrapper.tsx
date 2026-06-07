"use client";

import dynamic from "next/dynamic";
import { CanvasLoader } from "@/components/canvas/CanvasLoader";
import { use3DEnabled } from "@/hooks/use3DEnabled";
import type { ComponentType } from "react";

export function Scene3DWrapper({
  component: Component,
}: {
  component: ComponentType;
  fallbackClassName?: string;
}) {
  const enabled = use3DEnabled();

  if (!enabled) return null;

  return <Component />;
}

export function loadScene(importFn: () => Promise<{ default: ComponentType }>) {
  return dynamic(importFn, {
    ssr: false,
    loading: () => <CanvasLoader />,
  });
}
