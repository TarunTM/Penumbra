"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full px-6 sm:px-10 lg:px-12 pt-[40px] lg:pt-[50px] pb-24 max-w-[785px]">
      <header className="mb-10 pb-6 border-b border-border/40">
        <h1 className="font-switzer text-[14px] leading-[18px] font-bold uppercase tracking-widest text-secondary">
          Inquiries & Contact
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 font-switzer text-[13px] leading-[22px] text-secondary">
          <div>
            <h2 className="text-foreground font-semibold text-[14px] mb-1">
              Studio Locations
            </h2>
            <p>Auroville / Pondicherry, Tamil Nadu</p>
            <p>Mumbai, Maharashtra, India</p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-[14px] mb-1">
              Direct Communication
            </h2>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@penumbra.photography"
                className="text-foreground underline underline-offset-4"
              >
                contact@penumbra.photography
              </a>
            </p>
            <p>WhatsApp / Studio Phone: +91 98200 00000</p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold text-[14px] mb-1">
              Commission Specifications
            </h2>
            <p>
              Please include project location, approximate built-up area, key dates, and architectural firm details when requesting date holds.
            </p>
          </div>
        </div>

        {/* Minimal Inquiry Form */}
        <div className="w-full">
          {submitted ? (
            <div className="p-6 bg-stone-50 border border-border text-foreground font-switzer text-[13px] leading-[20px]">
              <p className="font-semibold text-[14px] mb-1">Thank you for your message.</p>
              <p className="text-secondary">
                Saurabh will review your project brief and respond within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-switzer text-[13px]">
              <div>
                <label className="block text-secondary mb-1.5 font-medium">Your Name / Studio</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Studio Naqshbandhi"
                  className="w-full px-3 py-2 border border-border bg-white text-foreground focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-secondary mb-1.5 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="contact@studio.com"
                  className="w-full px-3 py-2 border border-border bg-white text-foreground focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-secondary mb-1.5 font-medium">Project Typology & Location</label>
                <input
                  type="text"
                  placeholder="e.g. Residential Villa, Auroville"
                  className="w-full px-3 py-2 border border-border bg-white text-foreground focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-secondary mb-1.5 font-medium">Brief / Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe project status, timeline, or editorial inquiry..."
                  className="w-full px-3 py-2 border border-border bg-white text-foreground focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-black text-white font-medium hover:bg-neutral-800 transition-colors uppercase tracking-wider text-[12px]"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
