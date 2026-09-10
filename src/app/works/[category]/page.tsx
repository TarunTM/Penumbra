import React from "react";
import Link from "next/link";
import { getProjectsBySubCategory } from "@/data/portfolioData";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ArrowLeftIcon } from "@/components/common/Icons";

interface WorksPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  const categories = [
    "architecture",
    "interiors",
    "objects",
    "crafts",
    "collections",
    "heritage",
    "singles",
    "projects",
  ];
  return categories.map((cat) => ({ category: cat }));
}

export default function WorksPage({ params }: WorksPageProps) {
  const { category } = params;
  const projects = getProjectsBySubCategory(category);

  return (
    <div className="w-full pt-6 lg:pt-[72px] pb-24 max-w-[937px]">
      {/* Back to Home */}
      <div className="mb-[24px]">
        <Link
          href="/"
          aria-label="Back to home"
          className="inline-flex items-center gap-2 text-foreground hover:opacity-60 transition-all duration-200 group py-1"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span className="font-switzer text-[13px] leading-none font-normal">Back</span>
        </Link>
      </div>

      {/* 2-Column Grid (Figma Frame 28 with 28px item spacing) */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] w-full">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={idx < 2}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-[#555454] font-switzer text-[14px] max-w-md">
          <p>
            Monograph archive for <span className="text-foreground capitalize">{category}</span> is currently being curated. Selected photographic plates will be published soon.
          </p>
        </div>
      )}
    </div>
  );
}
