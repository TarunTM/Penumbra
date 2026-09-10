"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, GalleryImage } from "@/types/portfolio";
import { Lightbox } from "@/components/common/Lightbox";
import { ArrowLeftIcon } from "@/components/common/Icons";

interface ProjectDetailGalleryProps {
  project: Project;
}

export function ProjectDetailGallery({ project }: ProjectDetailGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full max-w-[785px] flex flex-col">
      {/* Back to Project List */}
      <div className="mb-[24px]">
        <Link
          href={`/works/${project.subCategory}`}
          aria-label="Back to project list"
          className="inline-flex items-center gap-2 text-foreground hover:opacity-60 transition-all duration-200 group py-1"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span className="font-switzer text-[13px] leading-none font-normal">Back</span>
        </Link>
      </div>

      {/* Project Metadata Header (Figma Frame 29: 785px wide, split left/right, no borders) */}
      <div className="w-full flex items-start justify-between mb-[28px]">
        {/* Left Column: Project Name + Studio */}
        <div className="flex flex-col">
          <h1 className="font-switzer text-[14px] leading-[18px] font-bold text-foreground tracking-tight">
            {project.title}
          </h1>
          <p className="font-switzer text-[12px] leading-[16px] font-normal text-[#555454]">
            {project.clientStudio}
          </p>
        </div>

        {/* Right Column: Location + Area */}
        <div className="flex flex-col text-right">
          <span className="font-switzer text-[14px] leading-[18px] font-normal text-foreground">
            {project.location}
          </span>
          {project.area && (
            <span className="font-switzer text-[12px] leading-[16px] font-normal text-[#555454]">
              {project.area}
            </span>
          )}
        </div>
      </div>

      {/* Narrative Photo Stack (Figma Frame 30: 785px wide, 28px vertical gap) */}
      <div className="w-full flex flex-col gap-[28px]">
        {renderPhotoStack(project.gallery, openLightbox)}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={project.gallery}
        initialIndex={activePhotoIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

function renderPhotoStack(
  gallery: GalleryImage[],
  onImageClick: (index: number) => void
) {
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < gallery.length) {
    const item = gallery[i];

    if (item.span === "full" || i === gallery.length - 1) {
      // Full width image (785 x 430 in Figma Frame 30)
      const currentIndex = i;
      elements.push(
        <div
          key={`full-${currentIndex}`}
          onClick={() => onImageClick(currentIndex)}
          className="relative w-full bg-stone-100 overflow-hidden cursor-pointer group"
          style={{ aspectRatio: "785 / 430" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 785px"
            priority={currentIndex < 2}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
      );
      i += 1;
    } else {
      // Two-up half-width images (379 x 278 each with 28px gap in Figma Frame 30)
      const firstIndex = i;
      const secondIndex = i + 1;
      const secondItem = gallery[secondIndex];

      elements.push(
        <div
          key={`pair-${firstIndex}-${secondIndex}`}
          className="grid grid-cols-2 gap-[28px] w-full"
        >
          <div
            onClick={() => onImageClick(firstIndex)}
            className="relative w-full bg-stone-100 overflow-hidden cursor-pointer group"
            style={{ aspectRatio: "379 / 278" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 378.5px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </div>
          {secondItem && (
            <div
              onClick={() => onImageClick(secondIndex)}
              className="relative w-full bg-stone-100 overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "379 / 278" }}
            >
              <Image
                src={secondItem.src}
                alt={secondItem.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 378.5px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              />
            </div>
          )}
        </div>
      );
      i += 2;
    }
  }

  return elements;
}
