import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function BlogPostNotFound() {
  return (
    <PageShell>
      <section className="min-h-[60vh] flex-center px-6">
        <div className="text-center space-y-6 animate-page-in">
          <h1 className="text-3xl font-semibold text-white">Article introuvable</h1>
          <p className="text-white-50">Cet article n&apos;existe pas ou a été retiré.</p>
          <Link href="/blog" className="page-link justify-center">
            Retour au blog
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
