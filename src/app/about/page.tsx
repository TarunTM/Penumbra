import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-12 pt-[40px] lg:pt-[50px] pb-24 max-w-[785px]">
      <header className="mb-10 pb-6 border-b border-border/40">
        <h1 className="font-switzer text-[14px] leading-[18px] font-bold uppercase tracking-widest text-secondary">
          About Saurabh Madan
        </h1>
      </header>

      {/* Portrait and Bio Narrative */}
      <div className="flex flex-col space-y-8">
        <div className="relative w-full aspect-[16/9] bg-stone-100 overflow-hidden">
          <Image
            src="/images/commercial/01 Architecture/2408_White Mangoose_SOXBayhauz/AR_24_WhiteMangoose_Bayhauz_Auroville_4.webp"
            alt="Penumbra - Light and shadow architectural study"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 font-switzer text-[14px] leading-[22px] text-foreground/90 font-normal">
          <p>
            <strong>Penumbra</strong> is the specialized architectural and interior photography studio founded by <strong>Saurabh Madan</strong>. Based between Auroville and Mumbai, the practice investigates the threshold where light transitions into shadow - revealing the quiet materiality, tectonic truth, and tactile volumes of built spaces.
          </p>
          <p>
            Working closely with visionary architects, interior designers, landscape masters, and cultural institutions across the subcontinent, Saurabh approaches every commission as an editorial monograph. Rather than treating buildings as static forms, his lens captures the diurnal rhythms, seasonal patinas, and living spirit designed into contemporary and vernacular Indian architecture.
          </p>
          <p>
            His personal research projects examine regional building traditions, ranging from the seismic resilience of Himalayan Kath-Kuni timber-and-stone hybridity to the vernacular indigo dyeing and weaving settlements of Coastal Saurashtra.
          </p>
        </div>

        {/* Selected Clients & Collaborators */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="font-switzer text-[13px] uppercase tracking-wider text-secondary font-semibold mb-4">
            Select Collaborations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4 font-switzer text-[13px] text-foreground/80">
            <div>Studio Naqshbandhi</div>
            <div>SO X Bayhauz</div>
            <div>Legacy in Layers</div>
            <div>RCL Mumbai</div>
            <div>DRAW Studio</div>
            <div>Monochrome Studio</div>
            <div>Muzali Arts</div>
            <div>WTV Jammu</div>
            <div>Sound Solutions</div>
          </div>
        </div>

        {/* Studio Services */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="font-switzer text-[13px] uppercase tracking-wider text-secondary font-semibold mb-4">
            Commissions & Inquiries
          </h2>
          <p className="font-switzer text-[13px] leading-[20px] text-secondary">
            Available worldwide for architectural monograph commissions, interior documentation, developer portfolios, and editorial features.
          </p>
        </div>
      </div>
    </div>
  );
}
