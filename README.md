# Creator Vault — landing page

A Next.js rebuild of the "Creator Vault" landing page, matching the
original Replit design (colors, layout, copy, and the checkout modal
flow), with no backend attached.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react for icons

No database, no API calls, no auth — this is a static frontend. The
"Get instant access" checkout form currently just shows a success
message locally; wire it up to a real endpoint when the backend exists.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `src/app/page.tsx` — assembles all sections in order
- `src/components/` — one file per section (Hero, Friction, Goods,
  HowItWorks, Testimonial, Pricing, Faq, Footer) plus the shared
  Header and the CheckoutModal
- `src/components/CheckoutContext.tsx` — tiny React context so any
  button on the page can open the checkout modal without prop-drilling
- `src/app/globals.css` — color palette (`cream`, `coral`, `lime`,
  `navy`, `tan`, `lavender`) defined as Tailwind v4 theme tokens, so
  they're usable directly as `bg-coral`, `text-navy`, etc.

## Notes

- Fonts use the system font stack (no Google Fonts network call), so
  it works offline and loads instantly. Swap in real fonts via
  `next/font/google` in `src/app/layout.tsx` if you want to match the
  original more closely.
- The scrolling ticker in the Friction section is pure CSS
  (`animate-marquee` in `globals.css`), no JS or extra library.
