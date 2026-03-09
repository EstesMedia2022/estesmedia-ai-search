

## Plan: Convert Estes Media HTML Landing Page to React

### Overview
Convert the uploaded 629-line HTML landing page into a React/Tailwind project, preserving all sections, styling, animations, and interactivity.

### Structure
Create a single-page landing page broken into React components:

1. **`src/pages/Index.tsx`** — Main page composing all sections
2. **`src/components/Navbar.tsx`** — Fixed nav with logo text + CTA button
3. **`src/components/HeroSection.tsx`** — Hero with badge, headline, CTAs, and terminal animation
4. **`src/components/TrustStrip.tsx`** — Award badges and star ratings bar
5. **`src/components/StatsSection.tsx`** — 4-column stat cards (60%, 30%, 20x, $1M+)
6. **`src/components/ProblemSection.tsx`** — 6 pain-point cards in grid
7. **`src/components/HowItWorks.tsx`** — 6 numbered steps
8. **`src/components/ResultsSection.tsx`** — 2 case study cards with metrics (Malone Roofing, Total Wrecking)
9. **`src/components/MascotSection.tsx`** — 3 feature blocks with images
10. **`src/components/CompareSection.tsx`** — Competitor comparison table
11. **`src/components/TestimonialsSection.tsx`** — 3 testimonial cards
12. **`src/components/FaqSection.tsx`** — Accordion FAQ (6 items) with React state toggle
13. **`src/components/CtaSection.tsx`** — Final CTA with form inputs
14. **`src/components/Footer.tsx`** — Simple footer

### Styling Approach
- Add CSS custom properties (--black, --blue, --orange, --linen, --red) to `index.css`
- Import Montserrat and DM Serif Display via Google Fonts in `index.html`
- Use Tailwind utility classes where natural, inline styles or a scoped CSS module for complex selectors (terminal animation, comparison table column highlights)
- Add keyframe animations (pulse, blink) to `tailwind.config.ts`

### External Assets
- Copy relevant parsed images (award badges, case study screenshots, mascot images) from `parsed-documents://` to `src/assets/`
- Logo text rendered as styled text (original uses text, not an image file)
- SVG data URIs (SEMrush logo) kept inline

### Interactivity
- FAQ toggle: React `useState` per item
- Smooth scroll: anchor links with `scrollIntoView`
- Terminal cursor blink: CSS animation
- Hover effects: Tailwind hover utilities

### Notes
- The original page references external images via URLs (case study screenshots use placeholder image URLs). These will use placeholder images initially since the original URLs aren't accessible.
- Form submission will be UI-only (no backend). Can be connected to Supabase or an API later.
- Fully responsive using the same breakpoint logic from the original CSS.

