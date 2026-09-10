"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationGroups, directNavLinks, socialLinks } from "@/data/portfolioData";
import { NavAccordion } from "./NavAccordion";
import { InstagramIcon, LinkedInIcon, XTwitterIcon } from "@/components/common/Icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="lg:hidden sticky top-0 left-0 w-full z-40 bg-canvas/95 backdrop-blur-md border-b border-border/60">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/branding/Logo.webp"
            alt="Penumbra"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-switzer font-bold tracking-tight text-base text-foreground uppercase">
            Penumbra
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 -mr-2 text-foreground focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bottom-0 bg-canvas z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                {navigationGroups.map((group) => (
                  <NavAccordion
                    key={group.id}
                    group={{ ...group, defaultOpen: true }}
                    onLinkClick={() => setIsOpen(false)}
                  />
                ))}
              </div>

              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                {directNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-switzer text-sm font-medium text-foreground py-1"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 pb-4 flex items-center space-x-5 text-secondary">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-foreground transition-colors"
                >
                  {social.icon === "instagram" && <InstagramIcon className="w-5 h-5" />}
                  {social.icon === "linkedin" && <LinkedInIcon className="w-5 h-5" />}
                  {social.icon === "twitter" && <XTwitterIcon className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
