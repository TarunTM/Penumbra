import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeLeftColumnImages, homeRightColumnImages } from "@/data/portfolioData";
import { HomeCuratedItem } from "@/types/portfolio";

export default function HomePage() {
  return (
    <div className="w-full pt-6 lg:pt-[72px] pb-24 max-w-[938px]">
      {/* 2-Column Staggered Editorial Layout matching Figma Frame 17 (938px wide, 28px gap) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] w-full">
        {/* Left Column (10 project plates) */}
        <div className="flex flex-col gap-[28px] w-full">
          {homeLeftColumnImages.map((item, idx) => (
            <HomeGridItem key={item.id} item={item} priority={idx === 0} />
          ))}
        </div>

        {/* Right Column (9 project plates) */}
        <div className="flex flex-col gap-[28px] w-full">
          {homeRightColumnImages.map((item, idx) => (
            <HomeGridItem key={item.id} item={item} priority={idx === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeGridItem({ item, priority = false }: { item: HomeCuratedItem; priority?: boolean }) {
  return (
    <Link
      href={`/works/${item.category}/${item.slug}`}
      title={`${item.projectTitle} (${item.studio})`}
      className="group relative block w-full overflow-hidden bg-stone-100 cursor-pointer"
    >
      <div className={`relative w-full ${item.aspect} overflow-hidden`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 455px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </div>
    </Link>
  );
}

