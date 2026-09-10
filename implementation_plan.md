# Implementation Plan: Expand Home Page Grid to Feature All 19 Projects

Feature one curated photograph from every project created so far (19 projects across Architecture, Interiors, and Objects) on the Home page, adhering to the exact 2-column staggered editorial monograph layout from Figma Frame 17 (`1000:841`).

## User Review Required

> [!IMPORTANT]
> - **19 Unique Projects**: Every project created to date will now be directly accessible from the Home page.
> - **Figma Editorial Cadence**: Retains the signature asymmetric vertical rhythm by interleaving portraits (~2:3 / ~455:724) and landscapes (~3:2 / ~455:348) between the Left and Right columns with the exact 28px grid gap.
> - **Direct Case Study Linking**: Clicking any photograph routes directly to `/works/[category]/[slug]`.

## Proposed Changes

Grouped by component layer:

---

### Data Layer (`src/data/portfolioData.ts`)

#### [MODIFY] [portfolioData.ts](file:///Users/ace/Desktop/Penumbra%20Webp/src/data/portfolioData.ts)
- Update `homeCuratedImages` into a curated 19-item collection featuring exactly one photograph per project:
  1. **White Mongoose** (`architecture` / `white-mongoose`) - Portrait
  2. **Temple Tree Resort** (`architecture` / `temple-tree-resort`) - Landscape
  3. **Prem Sweets** (`architecture` / `prem-sweets`) - Portrait
  4. **Divinity Apartment** (`interiors` / `divinity-apartment`) - Landscape
  5. **TATA Capital Heights** (`interiors` / `tata-capital-heights`) - Portrait
  6. **Marathon Era Residence** (`interiors` / `marathon-era-residence`) - Landscape
  7. **Akbar Residence** (`interiors` / `akbar-residence`) - Portrait
  8. **Aarus Bakery** (`interiors` / `monochrome-bakery`) - Landscape
  9. **DR&W Headquarters** (`interiors` / `draw-studio-hq`) - Portrait
  10. **Dsouza Residence** (`interiors` / `dsouza-residence`) - Landscape
  11. **Ballard Estate Office** (`interiors` / `ballard-estate-office`) - Portrait
  12. **Sound Solutions Experience Centre** (`interiors` / `sound-solutions`) - Landscape
  13. **Shah Residence** (`objects` / `rcl-shah-mumbai`) - Landscape
  14. **Piyush Residence** (`interiors` / `piyush-residence`) - Landscape
  15. **Echoes of Amsterdam** (`interiors` / `echoes-of-amsterdam`) - Portrait
  16. **Project Nomad** (`objects` / `project-nomad`) - Landscape
  17. **SNM Residence** (`interiors` / `snm-mahalaxmi`) - Portrait
  18. **Muzali Arts Studio** (`objects` / `muzali-arts`) - Landscape
  19. **NAAD Residence & Objects** (`objects` / `naad-thane`) - Portrait
- Export `homeLeftColumnImages` (10 items) and `homeRightColumnImages` (9 items) to preserve optimal visual weight and alternating aspect-ratio cadence.

---

### View Layer (`src/app/page.tsx`)

#### [MODIFY] [page.tsx](file:///Users/ace/Desktop/Penumbra%20Webp/src/app/page.tsx)
- Render the 19 projects across the 2 columns (`md:grid-cols-2 gap-[28px] max-w-[938px]`).
- Enable responsive image loading with prioritized LCP for the top two viewport images and lazy loading for subsequent plates.
- Ensure clean hover zoom transition (`group-hover:scale-[1.015]`) and hover opacity matching Figma prototype interactions.

---

### Git & Documentation Sync

#### [MODIFY] [agent_docs/work_log.md](file:///Users/ace/Desktop/Penumbra%20Webp/agent_docs/work_log.md)
- Log Session 12 actions, verification steps, and status.

#### [MODIFY] [agent_docs/learnings.md](file:///Users/ace/Desktop/Penumbra%20Webp/agent_docs/learnings.md)
- Record Home page monograph expansion and layout cadence.

#### [MODIFY] [walkthrough.md](file:///Users/ace/.gemini/antigravity/brain/cf8c265f-2be2-4104-9d40-4e8c93f97d92/walkthrough.md)
- Summarize Home page updates and verification.

---

## Verification Plan

### Automated Verification
- `npx tsc --noEmit`: Ensure zero TypeScript or lint errors.
- `npm run build`: Verify all 36 static routes pre-render successfully with exit code 0.
- Verify that every image path in `homeCuratedImages` exists and resolves to HTTP 200 on `http://localhost:3000`.

### Visual & Interactive Verification
- Verify that all 19 images display in the 2-column layout with 28px spacing.
- Verify clicking any image navigates seamlessly to that project's detail case study page (`/works/[category]/[slug]`).
- Push final clean commit to GitHub `main` branch.
