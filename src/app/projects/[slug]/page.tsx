import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailShell } from "@/components/projects/ProjectDetailContent";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { personalInfo } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projet non trouvé" };

  return {
    title: `${project.title} | ${personalInfo.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailShell project={project} />;
}
