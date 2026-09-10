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
  const [isOpen, setIsOpen] = useState(group.defaultOpen ?? true);

  return (
    <div className="w-full flex flex-col">
      {/* Accordion Trigger matching Figma Frame 2 with horizontal dash indicator */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center space-x-2 text-left group py-0.5 select-none cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        {/* Dash Indicator matching Figma Vector */}
        <span className="w-2.5 h-[1.5px] bg-foreground inline-block select-none flex-shrink-0" />
        <span className="font-switzer text-[14px] leading-[18px] font-bold text-foreground tracking-[-0.01em]">
          {group.title}
        </span>
      </button>

      {/* Accordion Links List matching Figma Frame 4 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 pl-[18px] flex flex-col space-y-[6px]">
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
