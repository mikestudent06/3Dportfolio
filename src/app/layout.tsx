import type { Metadata } from "next";
import "./globals.css";
import { personalInfo, socialLinks } from "@/lib/constants";
import { Analytics } from "@/components/Analytics";
import { SiteAudioProvider } from "@/components/providers/SiteAudioProvider";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const defaultTitle = `Développeur Full-Stack & Mobile | Congo Brazzaville`;
const defaultDescription = `Michel MOUHANI, développeur full-stack et mobile au Congo Brazzaville. Applications web et mobiles, sites vitrines et e-commerce avec React, Node.js et TypeScript.`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://michelmouhani-dev.netlify.app"),
  title: {
    default: defaultTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: defaultDescription,
  keywords: [
    "développeur full-stack Congo-Brazzaville",
    "développeur mobile Congo-Brazzaville",
    "React",
    "Node.js",
    "TypeScript",
    "portfolio",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    siteName: personalInfo.name,
    images: [
      {
        url: personalInfo.profileImage,
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [personalInfo.profileImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sameAs = socialLinks.filter((s) => s.href && s.href !== "#").map((s) => s.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: defaultDescription,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://michelmouhani-dev.netlify.app",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://michelmouhani-dev.netlify.app"}${personalInfo.profileImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
    },
    sameAs,
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        <SiteAudioProvider>
          <Analytics />
          {children}
        </SiteAudioProvider>
      </body>
    </html>
  );
}
