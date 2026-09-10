import React from "react";
import Image from "next/image";

export default function ShopPage() {
  const prints = [
    {
      id: "print-1",
      title: "White Mongoose: Void & Reflection, Auroville",
      paper: "Hahnemuhle Photo Rag 308gsm, archival pigment ink",
      edition: "Edition of 15 + 2 AP",
      size: "24 x 36 in (60 x 90 cm)",
      price: "INR 38,000 / $450",
      image:
        "/images/commercial/01 Architecture/2408_White Mangoose_SOXBayhauz/AR_24_WhiteMangoose_Bayhauz_Auroville_6.webp",
    },
    {
      id: "print-2",
      title: "Temple Tree Resort: Twilight Rammed Earth",
      paper: "Hahnemuhle German Etching 310gsm",
      edition: "Edition of 15 + 2 AP",
      size: "20 x 30 in (50 x 75 cm)",
      price: "INR 32,000 / $380",
      image:
        "/images/commercial/01 Architecture/2406_Temple Tree Resort_Studio Naqshbandhi/AR_24_TTR_Studio Naqshbandhi_Auroville_2.webp",
    },
    {
      id: "print-3",
      title: "Legacy in Layers: Pierced Solitude, Kotdwar",
      paper: "Canson Infinity Rag Photographique 310gsm",
      edition: "Edition of 10 + 2 AP",
      size: "24 x 36 in (60 x 90 cm)",
      price: "INR 38,000 / $450",
      image:
        "/images/commercial/01 Architecture/2411_WTV_Prem Sweets/AR_24_LegacyinLayers_WTV_Jammu_6.webp",
    },
  ];

  return (
    <div className="w-full px-6 sm:px-10 lg:px-12 pt-[40px] lg:pt-[50px] pb-24 max-w-[938px]">
      <header className="mb-10 pb-6 border-b border-border/40">
        <h1 className="font-switzer text-[14px] leading-[18px] font-bold uppercase tracking-widest text-secondary">
          Limited Edition Archival Prints
        </h1>
        <p className="mt-2 font-switzer text-[13px] text-secondary leading-[20px] max-w-xl">
          Museum-grade architectural photographic prints individually numbered and signed by Saurabh Madan. Accompanied by a certificate of authenticity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {prints.map((item) => (
          <div key={item.id} className="flex flex-col group">
            <div className="relative w-full aspect-[3/2] bg-stone-100 overflow-hidden mb-3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-1">
              <h2 className="font-switzer text-[14px] font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="font-switzer text-[12px] text-secondary">{item.paper}</p>
              <p className="font-switzer text-[12px] text-secondary">
                {item.size} - {item.edition}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="font-switzer text-[13px] font-medium text-foreground">
                  {item.price}
                </span>
                <a
                  href={`mailto:prints@penumbra.photography?subject=Acquisition Inquiry: ${encodeURIComponent(
                    item.title
                  )}`}
                  className="font-switzer text-[12px] uppercase tracking-wider text-black font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  Inquire Acquisition
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
