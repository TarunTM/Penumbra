import React from "react";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/data/portfolioData";
import { ProjectDetailGallery } from "@/components/portfolio/ProjectDetailGallery";

interface ProjectPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const params = allProjects.map((project) => ({
    category: project.subCategory,
    slug: project.slug,
  }));
  params.push({ category: "objects", slug: "rcl-shah-mumbai" });
  return params;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full pt-6 lg:pt-[78px] pb-24 max-w-[785px]">
      <ProjectDetailGallery project={project} />
    </div>
  );
}
