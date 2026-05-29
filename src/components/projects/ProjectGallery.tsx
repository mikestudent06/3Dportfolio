"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { Project } from "@/lib/projects";
import { getProjectImages } from "@/lib/projects";

export function ProjectGallery({ project }: { project: Project }) {
  const images = getProjectImages(project);
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const goPrev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="space-y-4" data-reveal>
      <div className="relative aspect-video rounded-2xl overflow-hidden card-border bg-black-100">
        <Image
          src={images[activeIndex]}
          alt={`${project.title} — capture ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white border border-white/20 hover:bg-black/80 transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white border border-white/20 hover:bg-black/80 transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="absolute bottom-4 right-4 text-xs bg-black/70 text-white px-3 py-1 rounded-full">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border transition-all ${
                activeIndex === index ? "border-white ring-2 ring-white/30" : "border-black-50 hover:border-white/30"
              }`}
              aria-label={`Afficher l'image ${index + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {(project.gallery?.length ?? 0) === 0 && (
        <p className="flex items-center gap-2 text-sm text-white-50">
          <Images className="w-4 h-4" />
          Ajoutez vos captures dans le tableau <code className="text-white">gallery</code> du projet.
        </p>
      )}
    </div>
  );
}
