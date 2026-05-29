import { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { BlogPageContent } from "@/components/pages/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog Développement Web & Mobile | Guides & Ressources",
  description: "Articles sur le développement web, mobile, e-commerce et bonnes pratiques.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <PageShell>
      <BlogPageContent />
    </PageShell>
  );
}
