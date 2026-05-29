import { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TarifsPageContent } from "@/components/pages/TarifsPageContent";
import { personalInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs Développement Web & Mobile | Congo Brazzaville — Devis Gratuit",
  description:
    "Sites vitrines dès 150 000 FCFA, e-commerce dès 300 000 FCFA. Devis gratuit en FCFA au Congo Brazzaville.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <PageShell>
      <TarifsPageContent />
    </PageShell>
  );
}
