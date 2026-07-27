# Snax सा — Premium Roasted Makhana Website

Next.js 15 + React 19 + TypeScript + Tailwind CSS + Framer Motion recreation of the Snax सा design.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — App Router pages, layout, global styles
- `components/home/` — Section components (Navbar, Hero, Flavours, Benefits, etc.)
- `components/ui/` — Reusable primitives (Button, Pill, SectionHeading)
- `data/` — Content arrays (flavours, reviews, benefits, ways to enjoy)
- `types/` — Shared TypeScript types
- `lib/` — Utilities (`cn` classname helper)
- `public/images/` — Product & hero imagery

## Notes

- Replace the placeholder WhatsApp number in `Navbar.tsx`, `Hero.tsx`, `CTA.tsx`, `Footer.tsx`, and `FloatingWhatsApp.tsx` with your real number.
- Swap images in `public/images/` for your final product photography — filenames are referenced in `data/flavours.ts`, `About.tsx`, and `Instagram.tsx`.
- Colors live in `tailwind.config.ts` under `theme.extend.colors` — matches your brand palette exactly.
