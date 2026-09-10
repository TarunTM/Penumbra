import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeCuratedImages } from "@/data/portfolioData";

export default function HomePage() {
  // Split images into the two exact columns from Figma Home Frame 17 (1000:841)
  // Left column:
  // 1. AR_24_WhiteMangoose_Bayhauz_Auroville_1 (455 x 724) -> White Mongoose
  // 2. IN_20_RIT_RCL_Mumbai-3 (455 x 348) -> Shah Residence, Mumbai
  // 3. AR_24_WhiteMangoose_Bayhauz_Auroville_2 (455 x 348) -> White Mongoose
  const leftColumnImages = [
    homeCuratedImages[0], // White Mongoose portrait
    homeCuratedImages[3], // Shah Residence interior detail
    homeCuratedImages[4], // White Mongoose living room
  ];

  // Right column:
  // 1. AR_24_TTR_Studio Naqshbandhi_Auroville_2 (455 x 348) -> Temple Tree Resort
  // 2. IN_20_RIT_RCL_Mumbai-2 (455 x 348) -> Shah Residence, Mumbai
  // 3. AR_24_LegacyinLayers_WTV_Jammu_6 (455 x 758) -> Prem Sweets
  const rightColumnImages = [
    homeCuratedImages[1], // Temple Tree Resort
    homeCuratedImages[2], // Shah Residence living room
    homeCuratedImages[5], // Prem Sweets courtyard
  ];

  return (
    <div className="w-full pt-6 lg:pt-[72px] pb-24 max-w-[938px]">
      {/* 2-Column Staggered Editorial Layout matching Figma Frame 17 (938px wide, 28px gap) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-[28px] w-full">
          {leftColumnImages.map((item) => (
            <HomeGridItem key={item.id} item={item} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[28px] w-full">
          {rightColumnImages.map((item) => (
            <HomeGridItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeGridItem({ item }: { item: (typeof homeCuratedImages)[0] }) {
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
          priority={item.priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 455px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </div>
    </Link>
  );
}
