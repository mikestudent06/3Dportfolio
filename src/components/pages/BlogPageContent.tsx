"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { PageHero, SeoSection, CtaBanner } from "@/components/layout/PageLayout";
import { blogPosts, categories } from "@/lib/blogPosts";

export function BlogPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const filteredPosts =
    selectedCategory === "Tous" ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <PageHero
        badge="Blog"
        title="Ressources &"
        highlight="guides pratiques"
        description="Articles sur le développement web, le mobile, l'e-commerce et les bonnes pratiques du numérique."
        backHref="/"
        backLabel="Retour à l'accueil"
      />

      <section className="page-section pt-0">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`page-chip cursor-pointer transition-colors ${
                  selectedCategory === category ? "page-chip-active" : "hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="text-center text-white-50 py-12">Aucun article dans cette catégorie.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  data-reveal-item
                  className="page-card-hover card p-8 group"
                >
                  <span className="page-chip inline-flex items-center gap-1 mb-4">
                    <Tag className="w-3 h-3" /> {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-white-50 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white-50 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-blue-50 mb-6">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="page-link text-sm">
                    Lire l&apos;article <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <SeoSection>
        <div>
          <h2>À propos de ce blog</h2>
          <p>Guides pratiques sur le développement web et mobile, technologies modernes et retours d&apos;expérience.</p>
        </div>
      </SeoSection>

      <CtaBanner
        title="Besoin d'aide pour votre projet ?"
        description="Discutons de votre projet de développement web ou mobile."
        primaryHref="/#contact"
        primaryLabel="Me contacter"
      />
    </>
  );
}
