"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationGroups, directNavLinks, socialLinks } from "@/data/portfolioData";
import { NavAccordion } from "./NavAccordion";
import { InstagramIcon, LinkedInIcon, XTwitterIcon } from "@/components/common/Icons";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex flex-col justify-between fixed top-0 h-screen w-[356px] pl-[70px] pr-[0px] pt-[50px] pb-[32px] bg-canvas z-30 select-none overflow-y-auto no-scrollbar"
    >
      <div className="w-[286px] flex flex-col">
        {/* Brand Logo & Wordmark (Frame 12 in Figma: 150px x 170px) */}
        <div className="w-[150px] h-[170px] relative flex-shrink-0">
          <Link href="/" className="block w-full h-full relative group">
            <Image
              src="/branding/Logo_with_worded.webp"
              alt="Penumbra - Saurabh Madan"
              width={150}
              height={170}
              className="object-contain w-full h-full transition-opacity duration-200 group-hover:opacity-85"
              priority
            />
          </Link>
        </div>

        {/* Navigation Sections (Frame 5 in Figma: gap 56px from logo, gap 24px between items) */}
        <nav className="mt-[56px] flex flex-col space-y-[24px] w-full" aria-label="Main Navigation">
          {/* Accordion Groups */}
          {navigationGroups.map((group) => (
            <NavAccordion key={group.id} group={group} />
          ))}

          {/* Direct Main Links (Frame 6 in Figma: Inter Bold 14px, gap 24px) */}
          <div className="flex flex-col space-y-[24px] pt-1">
            {directNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`font-inter text-[14px] leading-[18px] font-bold tracking-[-0.01em] transition-colors duration-150 ${
                    isActive
                      ? "text-black"
                      : "text-black hover:opacity-75"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Social Footer (Frame 16 in Figma: paddingLeft 20px, gap 16px, 79px below nav) */}
      <footer className="mt-[79px] pl-[20px] flex items-center space-x-[16px] text-foreground">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Penumbra on ${social.name}`}
            className="text-foreground hover:opacity-70 transition-opacity"
          >
            {social.icon === "instagram" && <InstagramIcon className="w-[18px] h-[18px]" />}
            {social.icon === "linkedin" && <LinkedInIcon className="w-[18px] h-[18px]" />}
            {social.icon === "twitter" && <XTwitterIcon className="w-[16px] h-[16px]" />}
          </a>
        ))}
      </footer>
    </aside>
  );
}
