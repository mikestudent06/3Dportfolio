import { Metadata } from "next";
import HomePageWithSuspense from "@/components/pages/HomePageClient";
import { personalInfo, socialLinks, contact } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Développeur Full-Stack & Mobile | Congo Brazzaville — Applications Web & Mobile",
  description:
    "Michel MOUHANI, développeur full-stack et mobile au Congo Brazzaville. Applications web et mobiles, sites vitrines et e-commerce avec React, Node.js et TypeScript.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://michelmouhani-dev.netlify.app";
  const sameAs = socialLinks.filter((s) => s.href && s.href !== "#").map((s) => s.href);

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${personalInfo.name} — Développement web & mobile`,
    description:
      "Services de développement web et mobile au Congo Brazzaville : sites vitrines, e-commerce, applications web et mobiles.",
    provider: {
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      email: contact.email,
      telephone: contact.phone,
      sameAs,
    },
    areaServed: { "@type": "Country", name: "Congo-Brazzaville" },
    url: siteUrl,
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: siteUrl,
    image: `${siteUrl}${personalInfo.profileImage}`,
    email: contact.email,
    telephone: contact.phone,
    sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomePageWithSuspense />
    </>
  );
}
