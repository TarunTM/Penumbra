import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/works/${project.subCategory}/${project.slug}`}
      className="group flex flex-col w-full max-w-[454px] cursor-pointer"
    >
      {/* Card Header (Frame 20 in Figma: Title Bold 14px, Studio Regular 12px) */}
      <div className="flex flex-col mb-2">
        <h3 className="font-switzer text-[14px] leading-[18px] font-bold text-foreground tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="font-switzer text-[12px] leading-[16px] font-normal text-[#555454]">
          {project.clientStudio}
        </p>
      </div>

      {/* Card Image Container (454x303 in Figma) */}
      <div className="relative w-full aspect-[454/303] overflow-hidden bg-stone-100">
        <Image
          src={project.coverImage}
          alt={`${project.title} ${project.clientStudio}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 454px"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </div>
    </Link>
  );
}
