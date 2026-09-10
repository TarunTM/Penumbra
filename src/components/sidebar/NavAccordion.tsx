"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavAccordionGroup } from "@/types/portfolio";

interface NavAccordionProps {
  group: NavAccordionGroup;
  onLinkClick?: () => void;
}

export function NavAccordion({ group, onLinkClick }: NavAccordionProps) {
  const pathname = usePathname();
  const isChildActive = group.links.some(
    (link) => pathname === link.href || pathname.startsWith(link.href.split("?")[0])
  );
  const [isOpen, setIsOpen] = useState(group.defaultOpen ?? isChildActive);

  return (
    <div className="w-full flex flex-col">
      {/* Accordion Trigger matching Figma Component 1 (1000:1220) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center gap-1 text-left group py-0.5 select-none cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        {/* Plus / Minus Indicator (16x16 container matching Figma 1000:1222 / 1000:1227) */}
        <div
          className="w-4 h-4 relative flex items-center justify-center flex-shrink-0 select-none"
          aria-hidden="true"
        >
          {/* Horizontal line (always present: forms '-' when open, and horizontal bar of '+' when closed) */}
          <span className="absolute w-[9.33px] h-[1.33px] bg-foreground" />
          {/* Vertical line (visible when closed, transforms away when open) */}
          <span
            className={`absolute w-[1.33px] h-[9.33px] bg-foreground transition-all duration-200 ease-in-out ${
              isOpen ? "scale-y-0 opacity-0 rotate-90" : "scale-y-100 opacity-100 rotate-0"
            }`}
          />
        </div>
        <span className="font-switzer text-[14px] leading-[18px] font-bold text-foreground tracking-[-0.01em]">
          {group.title}
        </span>
      </button>

      {/* Accordion Links List matching Figma Frame 4 (1000:1230, paddingLeft: 28px) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 pl-[28px] flex flex-col space-y-[8px]">
              {group.links.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href.split("?")[0]);
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={onLinkClick}
                    className={`font-switzer text-[14px] leading-[19px] lowercase transition-colors duration-150 ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-[#555454] hover:text-black font-normal"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
