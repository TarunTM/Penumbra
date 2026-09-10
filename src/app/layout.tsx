import type { Metadata } from "next";
import { switzer } from "./fonts";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileNav } from "@/components/sidebar/MobileNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://penumbra.photography"),
  title: "Penumbra - Saurabh Madan | Architectural & Interior Photography",
  description:
    "Penumbra is the interior and architectural photography practice of Saurabh Madan. Exploring light, shadow, texture, and vernacular architectural narratives across India.",
  keywords: [
    "Saurabh Madan",
    "Penumbra",
    "Architectural Photography",
    "Interior Photography",
    "India Architecture Photographer",
    "Auroville Architecture",
    "Editorial Photography",
  ],
  authors: [{ name: "Saurabh Madan" }],
  openGraph: {
    title: "Penumbra - Saurabh Madan",
    description:
      "Architectural and Interior Photography monograph by Saurabh Madan.",
    url: "https://penumbra.photography",
    siteName: "Penumbra",
    images: [
      {
        url: "/images/commercial/01 Architecture/2408_White Mangoose_SOXBayhauz/AR_24_WhiteMangoose_Bayhauz_Auroville_1.webp",
        width: 1200,
        height: 800,
        alt: "Penumbra Architectural Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/branding/Logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${switzer.variable}`}>
      <body className="bg-canvas text-foreground selection:bg-black selection:text-white min-h-screen">
        <div className="min-h-screen bg-canvas w-full">
          {/* Centered 1440px Artboard Container matching Figma Canvas */}
          <div className="max-w-[1440px] mx-auto min-h-screen relative flex">
            {/* Persistent Desktop Sidebar (x: 70px, w: 286px -> total column 356px) */}
            <Sidebar />

            {/* Main Content Area (Offset by 356px sidebar column on desktop) */}
            <div className="flex-1 lg:ml-[356px] min-w-0 w-full flex flex-col">
              {/* Mobile Header (<1024px) */}
              <MobileNav />

              {/* Main Canvas (Aligns exactly to x: 413px with 57px offset) */}
              <main className="flex-1 w-full min-h-screen px-6 sm:px-8 lg:px-0 lg:pl-[57px] lg:pr-[89px]">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
