import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, Tag } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { BackLink, CtaBanner } from "@/components/layout/PageLayout";
import { blogPosts } from "@/lib/blogPosts";
import { personalInfo } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article non trouvé" };
  return {
    title: `${post.title} | ${personalInfo.name}`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [personalInfo.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <section className="page-section pb-8">
        <div className="page-container max-w-4xl" data-reveal>
          <BackLink href="/blog" label="Retour au blog" />
          <span className="page-chip inline-flex items-center gap-1 mb-6">
            <Tag className="w-3 h-3" /> {post.category}
          </span>
          <h1 className="page-title mb-6">{post.title}</h1>
          <div className="flex flex-wrap gap-6 text-blue-50 text-sm mb-8">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      <section className="page-section pt-0 pb-16" data-reveal>
        <div className="page-container max-w-4xl">
          <article
            className="blog-article page-card card p-8 md:p-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <CtaBanner
        title="Un projet en tête ?"
        description="Je suis disponible pour vous accompagner sur votre développement web ou mobile."
        primaryHref="/#contact"
        primaryLabel="Me contacter"
      />
    </PageShell>
  );
}
