# Implementation Plan: Penumbra - Photography Portfolio Website

Build a minimal, modern, editorial photography portfolio website for architectural and interior photographer **Saurabh Madan (Penumbra)**, based on the approved Figma designs, design system tokens, and information architecture.

---

## User Review Required

> [!IMPORTANT]
> **Strict Execution Gate**: In accordance with the Project Requirement Document (`prd.md`), no application code or installation commands will execute until you review and approve this implementation plan.

### Key Architectural Decisions for Your Review:

1. **Technology Stack**:
   - **Framework**: **Next.js 14/15 App Router** (React 18/19, TypeScript) for optimal static pre-rendering, instantaneous client transitions, and native image optimization (`next/image`).
   - **Styling**: **Tailwind CSS v4** mapped directly to the `Penumbra Tokens` created in Figma (colors, spacing scale, typographic hierarchy).
   - **Animation**: **Framer Motion** for subtle, publication-grade page transitions, accordion collapse/expansion, and hover image zoom.
   - **Typography**: Local font loading via `next/font/local` using the font files in `00 BRANDING RELATED DATA/02 FONTS/Switzer_Complete/` (Switzer Regular, Medium, Semibold, Bold) and `next/font/google` for Inter.
   - **Icons**: Lucide React + custom SVG icons for brand socials (Instagram, LinkedIn, X/Twitter).

2. **Project Structure Location**:
   - The Next.js application will be structured cleanly within `/Users/ace/Desktop/Penumbra Webp/`, preserving existing branding and image asset folders while mapping them into `public/images/` for optimized asset serving.

3. **Interactivity & Experience Polish**:
   - **Custom Architectural Cursor**: Integrate the custom cursor assets (`Penumbra-Website-Cursor.cur` / `Penumbra Website Cursor.png`) on desktop displays with fallback to standard pointer.
   - **Architectural Image Lightbox**: A minimal fullscreen image viewer that allows architects and designers to inspect framing, light, and materiality without UI clutter.
   - **Responsive Adaptation**:
     - *Desktop (>=1024px)*: Fixed 286px sidebar on the left with independent scrollable portfolio canvas on the right (matching Figma 1440px canvas).
     - *Mobile & Tablet (<1024px)*: Minimal sticky header with Penumbra logo + clean slide-out navigation drawer maintaining the same accordion structure.

---

## Open Questions

> [!NOTE]
> None that block initial scaffolding; all visual specs and tokens are defined in Figma. Any extra copy for About/Contact can be populated with placeholders and refined during review.

---

## Proposed Changes & Phased Execution

### Phase 1: Project Scaffolding & Design System Tokens [COMPLETED]

Initialize the project with Next.js App Router, TypeScript, and Tailwind CSS configured with the exact tokens from Figma (`1000:947` Design System Documentation & `Penumbra Tokens`).

#### [NEW] [package.json](file:///Users/ace/Desktop/Penumbra%20Webp/package.json)
- Setup dependencies: `next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.

#### [NEW] [tailwind.config.ts](file:///Users/ace/Desktop/Penumbra%20Webp/tailwind.config.ts)
- Bind Figma color tokens:
  - `canvas`: `#FFFFFF`
  - `foreground`: `#000000`
  - `secondary`: `#555454`
  - `muted`: `#666666`
  - `border`: `#E5E5E5`
- Bind Figma spacing scale:
  - `4px` (`space-1`), `8px` (`space-2`), `12px` (`space-3`), `16px` (`space-4`), `24px` (`space-6`), `28px` (`space-7`), `32px` (`space-8`), `56px` (`space-14`), `79px` (`space-20`).
- Configure font family aliases for `font-switzer` and `font-inter`.

#### [NEW] [src/app/fonts.ts](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/fonts.ts)
- Configure `localFont` pointing to Switzer OTF/TTF files in `00 BRANDING RELATED DATA/02 FONTS/` with weights `400` (Regular), `500` (Medium), `600` (Semibold), and `700` (Bold).
- Configure `Inter` via `next/font/google`.

---

### Phase 2: Content Model & Asset Pipeline [COMPLETED]

Organize all photography assets and define strong TypeScript models for projects, categories, and media.

#### [NEW] [src/types/portfolio.ts](file:///Users/ace/Desktop/Penumbra%20Webp/src/types/portfolio.ts)
- TypeScript interfaces:
  - `Project`: `id`, `slug`, `title`, `clientStudio`, `category`, `subCategory`, `location`, `area`, `coverImage`, `galleryImages`, `description`.
  - `NavGroup`: `title`, `slug`, `isOpenDefault`, `items: { title, href }[]`.

#### [NEW] [src/data/portfolioData.ts](file:///Users/ace/Desktop/Penumbra%20Webp/src/data/portfolioData.ts)
- Portfolio dataset capturing all existing projects:
  - **Temple Tree Resort** (Auroville, Studio Naqshbandhi)
  - **White Mongoose** (Auroville, 5000 sqft, SO X Bayhauz)
  - **Prem Sweets** (Kotdwar, Legacy in Layers / WTV)
  - **Mumbai Residences** (RCL Mumbai)
  - Curated Home highlights and Personal Works taxonomy.

#### Asset Ingestion
- Copy / link branding logos (`Logo_with_worded.webp`, `Worded_logo.webp`) and project images into `public/images/` with WebP optimizations.

---

### Phase 3: Layout & Persistent Sidebar Navigation [COMPLETED]

Implement the exact 286px sidebar navigation identified in Figma (`1000:849` & `1000:880`).

#### [NEW] [src/components/sidebar/Sidebar.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/components/sidebar/Sidebar.tsx)
- Fixed left sidebar (width: 286px, top padding: 50px, bottom padding: 20px, gap: 79px).
- Penumbra Logo with worded mark (`150px × 170px`).
- Navigation section (`Frame 5`) with 24px item spacing:
  - **Commissioned Works** accordion (Architecture, Interiors, Objects).
  - **Personal Works** accordion (Crafts, Collections, Heritage, Singles).
  - **Projects** accordion (Textiles of Coastal Saurashtra, Hybridity in Kath Kuni architecture, Saur, Dhun).
  - Direct links: Published Work, Shop, Contact, About me.
- Social links footer (`Frame 16`): Instagram, LinkedIn, X/Twitter.

#### [NEW] [src/components/sidebar/NavAccordion.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/components/sidebar/NavAccordion.tsx)
- Reusable accordion item with animated chevron rotation (Framer Motion).
- Active link highlighting (`#000000` active vs `#555454` default).

#### [NEW] [src/components/sidebar/MobileNav.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/components/sidebar/MobileNav.tsx)
- Responsive mobile header (<1024px) with Penumbra emblem and clean overlay drawer.

#### [NEW] [src/app/layout.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/layout.tsx)
- Root layout shell: Desktop two-column split (Fixed Sidebar + Scrollable Content Container) and responsive viewport configuration.

---

### Phase 4: Views & Case Study Pages [COMPLETED]

Build the three core screens designed in Figma, plus essential secondary pages.

#### [NEW] [src/app/page.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/page.tsx) — Home View
- Asymmetric editorial masonry grid matching Figma `1000:841` (938px × 1476px layout, 32px spacing):
  - Featured shots: White Mongoose hero portrait (455 × 724), Temple Tree Resort landscape (455 × 348), Mumbai Interior (522 × 348), Mumbai Living (455 × 348), White Mongoose patio (455 × 348), Legacy in Layers elevation (506 × 758).
  - Smooth reveal animations and hover subtle depth.

#### [NEW] [src/app/works/[category]/page.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/works/[category]/page.tsx) — Works Overview
- 2-column project cards matching Figma `1000:876`:
  - Card header: Project Title (Switzer Bold 14px) and Studio Credit (Switzer Regular 12px).
  - Card image container: 454px × 303px with hover zoom micro-interaction.
  - Links to individual project case studies.

#### [NEW] [src/app/works/[category]/[slug]/page.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/works/[category]/[slug]/page.tsx) — Project Detail
- Case study narrative layout matching Figma `1000:906`:
  - Split metadata header (`1000:907`): Left: Project Name + Studio; Right: Location (Auroville) + Area (5000 sqft) separated by clean negative space.
  - Photo narrative stack (`1000:914`): Full-width landscape spreads (785px wide) alternating with 2-up paired details (379px wide) with 8px tight architectural grid spacing.

#### [NEW] [src/components/common/Lightbox.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/components/common/Lightbox.tsx)
- Distraction-free architectural image lightbox with keyboard navigation (Esc, Left, Right arrows) and zoom capabilities.

#### [NEW] [src/app/about/page.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/about/page.tsx) & [src/app/contact/page.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/contact/page.tsx)
- Editorial biography, awards/publications, studio statement, and minimal contact inquiry form.

---

### Phase 5: Polish, Performance & Verification [COMPLETED]

- **Next.js Image Optimization**: Automatic WebP generation, blur placeholders, and exact aspect ratio preservation.
- **Custom Cursor**: Desktop custom pointer referencing Penumbra brand cursor.
- **SEO & Social Cards**: OpenGraph tags, JSON-LD structured data for photographer portfolio.
- **Documentation**: Updated `agent_docs/work_log.md` and `agent_docs/learnings.md`.
- **Static Pre-render**: 22 routes compiled cleanly with 0 errors and 0 warnings.
- **Live Local Server**: Active at `http://localhost:3000`.

---

### Phase 6: Iterative Feedback, Refinement & Production Readiness [CURRENT ACTIVE PHASE]

#### Completed in Phase 6:
1. **Figma Frame 17 Exact Parity (Home Page)**:
   - Queried Figma nodes directly via `figma-desktop-bridge` for Frame 17 (`1000:841`).
   - Left Column: `AR_24_WhiteMangoose_Bayhauz_Auroville_1` (455x724), `IN_20_RIT_RCL_Mumbai-3` (455x348), `AR_24_WhiteMangoose_Bayhauz_Auroville_2` (455x348).
   - Right Column: `AR_24_TTR_Studio Naqshbandhi_Auroville_2` (455x348), `IN_20_RIT_RCL_Mumbai-2` (455x348), `AR_24_LegacyinLayers_WTV_Jammu_6` (455x758).
   - Strict 28px gaps between columns and rows, matching Figma coordinates.
   - Removed artificial text captions/borders below photographs on Home page.
   - Configured each image to link directly to its corresponding case study page.
   - Added full `Shah Residence` case study (`rcl-shah-mumbai`) with all photography assets for the two interior shots.
2. **1440px Global Artboard Alignment**:
   - Sidebar at `x: 70px`, `width: 286px` (total column: 356px).
   - Main content starts at `x: 413px` (57px left padding), 938px width, `89px` right margin.
3. **Build & Minifier Stability**:
   - Fixed Terser minifier unicode parsing errors by converting non-ASCII characters to clean ASCII/CSS.
   - Compiled all 22 static routes with zero errors.
   - Local production server active on `http://localhost:3000`.

#### Milestone: Commercial Works Ingestion (COMPLETED)
- Converted missing images and populated all 19 commercial projects (Architecture, Interiors, Objects) with 237 photographs into `src/data/portfolioData.ts`.
- Verified 36 static pre-rendered routes with zero errors.
- Active on `http://localhost:3000`.

#### Current Active Milestone: Comprehensive WebP Image Conversion & Performance Optimization
In response to user request: "Convert All the images in webp to increase websites load time":

1. **Batch WebP Conversion of `01 All Images/01 COMMERCIAL WORK`**:
   - Convert all 237 `.jpg` files across all 19 folders in `01 All Images/01 COMMERCIAL WORK` into high-quality `.webp` format using `sharp` (quality 82, metadata stripping, optimal compression).
   - Reduces raw source storage by ~50-65% while keeping crisp visual fidelity.

2. **Heavy Public Assets Optimization**:
   - Re-encode oversized assets (such as `public/images/home/Homae page 1st image.webp`, which is 2.6 MB) down to ~300 KB.
   - Ensure all image assets in `public/` are lightweight, modern WebP.

3. **Next.js Performance Tuning**:
   - Configure `next.config.mjs` with `formats: ['image/avif', 'image/webp']` and optimized caching.
   - Run `npm run build` and benchmark route loading times.

---

## Verification Plan

### Automated Verification:
- Run TypeScript type checks: `npx tsc --noEmit`
- Run Next.js production build: `npm run build`
- Validate ESLint rules: `npm run lint`

### Visual & Interactive Parity Checks:
- **Desktop (1440px)**: Compare Home, Works, and Project Detail side-by-side against Figma frames `1000:840`, `1000:875`, and `1000:906`.
- **Sidebar Accordion**: Verify smooth open/close transitions and active category highlighting.
- **Responsive Drawer (<1024px)**: Verify mobile hamburger menu opens/closes smoothly without layout shift.
- **Lightbox**: Test clicking any architectural photograph to ensure crisp full-screen inspection.
