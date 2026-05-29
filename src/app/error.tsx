"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex-center bg-black px-6">
      <div className="max-w-lg w-full text-center space-y-8 animate-page-in">
        <div className="page-card inline-flex p-6 rounded-full">
          <AlertCircle className="w-12 h-12 text-white" />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Une erreur s&apos;est produite</h1>
          <p className="text-white-50">Désolé, quelque chose s&apos;est mal passé. Veuillez réessayer.</p>
          {process.env.NODE_ENV === "development" && error.message && (
            <p className="text-sm text-blue-50 font-mono break-all page-card p-4 text-left">{error.message}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button type="button" onClick={reset} className="cta-wrapper">
            <div className="cta-button group px-6 py-3">
              <div className="bg-circle" />
              <p className="text flex items-center gap-2 justify-center">
                <RefreshCw className="w-4 h-4" /> Réessayer
              </p>
            </div>
          </button>
          <Link href="/" className="px-6 py-3 rounded-lg border border-black-50 text-white-50 hover:text-white inline-flex items-center justify-center gap-2">
            <Home className="w-4 h-4" /> Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
