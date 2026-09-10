import React from "react";

export default function PublishedPage() {
  const publications = [
    {
      year: "2024",
      title: "White Mongoose: Tropical Brutalism in the Forests of Auroville",
      outlet: "Architectural Digest India",
      role: "Cover Story & Feature Photography",
    },
    {
      year: "2024",
      title: "Temple Tree Resort: Vernacular Earth Construction",
      outlet: "Domus India",
      role: "Architectural Monograph",
    },
    {
      year: "2023",
      title: "The Craftsmanship of Prem Sweets: Modernist Retail Heritage",
      outlet: "Stir World Architecture",
      role: "Photo Essay & Spatial Documentation",
    },
    {
      year: "2023",
      title: "Tactile Urban Living: Mumbai High-Rise Interiors",
      outlet: "Elle Decor India",
      role: "Interior Monograph",
    },
    {
      year: "2022",
      title: "Himalayan Kath-Kuni: Seismic Hybridity in Vernacular Timber",
      outlet: "Journal of South Asian Architectural Research",
      role: "Field Research & Visual Survey",
    },
  ];

  return (
    <div className="w-full px-6 sm:px-10 lg:px-12 pt-[40px] lg:pt-[50px] pb-24 max-w-[785px]">
      <header className="mb-10 pb-6 border-b border-border/40">
        <h1 className="font-switzer text-[14px] leading-[18px] font-bold uppercase tracking-widest text-secondary">
          Published Work & Press
        </h1>
      </header>

      <div className="flex flex-col divide-y divide-border/40">
        {publications.map((pub, idx) => (
          <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1 max-w-lg">
              <h2 className="font-switzer text-[14px] font-semibold text-foreground tracking-tight">
                {pub.title}
              </h2>
              <p className="font-switzer text-[13px] text-secondary">
                {pub.outlet} - <span className="italic">{pub.role}</span>
              </p>
            </div>
            <span className="font-switzer text-[13px] text-muted font-normal self-start sm:self-auto">
              {pub.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
