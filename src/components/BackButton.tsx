"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";

export const BackButton = () => {
  return (
    <Button
      onClick={() => window.history.back()}
      size="lg"
      className="inline-flex items-center gap-2 w-full sm:w-auto bg-transparent border border-primary text-primary hover:bg-primary/10"
    >
      <ArrowLeft className="w-5 h-5" />
      Page précédente
    </Button>
  );
};
