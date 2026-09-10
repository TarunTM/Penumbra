# Learnings & Project Journey - Penumbra Portfolio

This document captures architectural learnings, completed milestones, pending items, and critical domain context so future sessions can instantly resume work.

---

## 1. Project & Client Profile
- **Client**: Saurabh Madan — Interior & Architectural Photographer.
- **Brand**: *Penumbra* (evoking light, shadow, nuance, and architectural atmosphere).
- **Audience**: Architects, interior designers, design studios, luxury developers, editorial publications.
- **Core Aesthetic Principle**: Art monograph sensibility — minimal, ultra-clean, generous negative space, restrained type hierarchy, high-fidelity responsive imagery, fluid micro-interactions.

---

## 2. Information Architecture (IA)

### Navigation (Persistent Left Sidebar - 286px Fixed)
- **Top Section**:
  - Logo (`Logo_with_worded` or `Logo.webp` + `Worded_logo.webp` / SVG) — height 170px, width 150px.
- **Accordion Groups** (Collapsible with smooth chevron animation, default open or active state):
  1. **Commissioned Works**
     - Architecture (e.g. Temple Tree Resort, White Mongoose, Prem Sweets)
     - Interiors (e.g. Marathon Era Residence, Monochrome Bakery)
     - Objects (e.g. Muzali Arts Studio)
  2. **Personal Works**
     - Crafts
     - Collections
     - Heritage
     - Singles
  3. **Projects**
     - Textiles of Coastal Saurashtra
     - Hybridity in Kath Kuni architecture
     - Saur
     - Dhun
- **Direct Navigation Links**:
  - Published Work
  - Shop
  - Contact
  - About me
- **Footer Section**:
  - Social Links: Instagram (`@penumbra.ppl`), LinkedIn, X/Twitter.

### Main Content Area Views
1. **Home (`/`)**:
   - Curated asymmetric editorial grid (6 featured architectural photographs matching Figma `1000:841` with alternating aspect ratios and 32px gap).
2. **Works Overview (`/works/[category]`)**:
   - 2-column project cards (title + studio header above image container, 28px gap, matching Figma `1000:876`).
3. **Project Case Study Detail (`/works/[category]/[slug]`)**:
   - Clean metadata split header: Project Name & Studio on left, Location & Area on right (580px spacer, matching Figma `1000:907`).
   - Editorial photo narrative stack: 785px wide full-width key frames mixed with 2-up 379px detail pairs (8px tight gap, matching Figma `1000:914`).
   - Integrated full-resolution Lightbox for close-up architectural study.
4. **Static Pages**:
   - About me (`/about`), Contact (`/contact`), Published Work (`/published`), Shop (`/shop`).

---

## 3. Design System & Tokens
- **Colors**:
  - Canvas: `#FFFFFF`
  - Foreground / Primary Text: `#000000`
  - Secondary Text / Captions: `#555454`
  - Muted / Placeholder Text: `#666666`
  - Subtle Border: `#EBEBEB`
  - Card Background: `#F7F7F7`
- **Typography**:
  - **Switzer** (Custom Sans-Serif font): Primary display font, project titles, metadata, accordion items, loaded offline via `next/font/local` using WOFF2 files in `public/fonts/`.
  - **Inter**: System fallback font.
  - Scale:
    - Heading: 20px - 24px (Bold / Semibold)
    - Subheading / Project Title: 14px (Bold)
    - Body / Studio Label: 12px - 14px (Regular)
    - Metadata / Captions: 11px - 12px (Regular)
- **Spacing Scale**:
  - `space-1` (4px), `space-2` (8px), `space-3` (12px), `space-4` (16px), `space-6` (24px), `space-7` (28px), `space-8` (32px), `space-14` (56px), `space-20` (79px).
  - Sidebar width: 286px.
- **Custom Assets**:
  - Custom brand cursor (`/branding/Penumbra Website Cursor.png` and `.cur`).

---

## 4. Current Phase & Work Checklist

### We Are Currently in: **Phase 6: Iterative Feedback & Refinement**

#### Completed (Phases 1-6 Alignment)
- [x] Extracted design tokens and bound components in Pencil (`Penumbra.pen`).
- [x] Verified local Switzer font installation and assets.
- [x] Established Figma Desktop Bridge MCP connection (`Saurabh Portfolio`).
- [x] Generated `Penumbra Tokens` variable collection in Figma (21 tokens) and mapped paint fills & gaps.
- [x] Designed `Design System Documentation` board in Figma (`1000:947`).
- [x] Inspected Home, Works Page, and Detail Page node hierarchies and layout specs.
- [x] Created `agent_docs/work_log.md` and `agent_docs/learnings.md`.
- [x] Formulated detailed, production-grade Implementation Plan and obtained explicit user approval.
- [x] Initialized Next.js 14 App Router project with TypeScript & Tailwind CSS.
- [x] Ingested local Switzer WOFF2 fonts and configured `next/font/local` with zero remote dependencies.
- [x] Implemented responsive layout shell:
-   Desktop: 1440px canvas, 286px sidebar at `x: 70px`, content at `x: 413px` (57px offset), right margin `89px`.
-   Mobile/Tablet: Minimal top-bar + slide-out navigation drawer.
- [x] Exact Figma Home Grid (`1000:841`):
-   6-image editorial monograph layout with exact 28px gaps.
-   No artificial text captions/borders below photos on the home page.
-   Each image directly links to its corresponding project case study page.
-   Added full `Shah Residence` (`rcl-shah-mumbai`) case study for the 2 featured interior photographs.
- [x] Exact Works Page Grid (`1000:875`): 2-column cards starting at `pt-[96px]`, 28px gap, title + studio headers.
- [x] Exact Project Detail Page (`1000:906`): split header (785px) + narrative photo stack (hero + 2-up pairs, 28px gaps) + lightbox.
- [x] Built out all other pages: About, Contact, Published Work, Shop.
- [x] Resolved Terser minifier build issue by cleaning all source files to strict ASCII.
- [x] Verified production build: all 22 static pages compiled with zero errors.
- [x] Next.js production daemon active and running at `http://localhost:3000`.

- [x] Commercial Works Ingestion & WebP Conversion:
  - Converted all remaining JPGs to WebP (237/237 images converted, 100% complete).
  - Ingested all 19 commercial projects into `src/data/portfolioData.ts`:
    - Architecture (3 projects): Temple Tree Resort, White Mongoose, Prem Sweets.
    - Interiors (12 projects): Divinity Apartment, Marathon Era Residence, TATA Capital Heights, Piyush Residence, Akbar Residence, Aaru's Bakery, Echoes of Amsterdam, D'Souza Residence, DR&W Headquarters, Sound Solutions, Ballard Estate Office, SNM Residence.
    - Objects (4 projects): Shah Residence, NAAD Thane, Project Nomad, Muzali Arts.
  - Pre-rendered all 36 static routes with 0 errors via `npm run build`.
  - Next.js production daemon running live on `http://localhost:3000`.

- [x] Comprehensive WebP Image Conversion & Performance Optimization:
  - Batch converted all 237 JPGs in `01 All Images/01 COMMERCIAL WORK` to `.webp` using `sharp` (quality 82, 50% space savings).
  - Compressed oversized assets: `Homae page 1st image.webp` reduced from 2.6 MB to 466 KB (82% reduction).
  - Added modern HTTP caching headers for images, fonts, and branding in `next.config.mjs` (`public, max-age=31536000, immutable`).
  - Pre-rendered all 36 static pages cleanly with zero errors.
  - Server active and verified on `http://localhost:3000`.

- [x] Back Button Navigation:
  - Added clean `ArrowLeftIcon` SVG paired with `"Back"` text label in `font-switzer text-[13px]`.
  - Added top back button on project case study detail pages (`ProjectDetailGallery.tsx`) linking to the parent category project list (`/works/${project.subCategory}`).
  - Added top back button on category project list pages (`[category]/page.tsx`) linking to Home (`/`).
  - Re-compiled all 36 static routes with 0 errors.

- [x] Updated Penumbra Instagram URL:
  - Updated social link target to `https://www.instagram.com/penumbra.ppl/`.
  - Re-compiled and verified production server.

- [x] GitHub Repository Push:
  - Configured git repository with `.gitignore`.
  - Linked to `git@github.com:TarunTM/Penumbra.git`.
  - Successfully committed and pushed all 925 files to branch `main`.

- [x] Expanded Home Page Editorial Grid (All 19 Projects):
  - Featured one curated photograph from every single project created so far.
  - Preserved 2-column asymmetric editorial monograph rhythm from Figma Frame 17.
  - Linked all 19 plates directly to their respective case study routes (`/works/[category]/[slug]`).
  - Pre-rendered all 36 static pages cleanly with zero build errors.

- [x] Fixed Image Aspect-Ratio Container Sizing:
  - Resolved issue where dynamic Tailwind classes (`aspect-[455/...]`) were not extracted at build time, causing image containers to collapse to 0 height.
  - Implemented explicit native CSS `style={{ aspectRatio }}` on Home grid items and Project Detail gallery elements.
  - Added `./src/data` to `tailwind.config.ts` content.

- [x] Interactive Sidebar Navigation Accordion Plus (+) / Minus (-) Icons:
  - Implemented dynamic state-dependent toggle icons matching Figma Component 1 (`1000:1220`):
    - Closed state: crisp `+` icon (9.33x9.33 vector inside 16x16 frame).
    - Open state: crisp `-` dash icon (9.33x1.33 vector inside 16x16 frame).
    - Smooth 200ms transition between open and closed states.
    - Added auto-open expansion when viewing active child routes.
    - Matched child list indentation to Figma Frame 4 (`pl-[28px]`).

#### Active in Phase 6:
- [ ] Receive user review on overall site experience, typography, and navigation.
- [ ] Ingest Personal Works & Projects (Crafts, Collections, Heritage, Textiles of Coastal Saurashtra, Kath Kuni) when requested.
- [ ] Production deployment setup (Vercel / custom domain) when ready.




