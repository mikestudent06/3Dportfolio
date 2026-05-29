import { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { personalInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services de Développement Web & Mobile | Congo Brazzaville",
  description:
    "Sites vitrines, e-commerce, applications web et mobiles au Congo Brazzaville avec React, Node.js et React Native.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesPageContent />
    </PageShell>
  );
}
