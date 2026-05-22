# Sher, LLP — Marketing Website

Boutique transactional law firm (healthcare facility acquisitions, commercial real estate financing, HUD loans). Built with Next.js 14 + TypeScript + Tailwind, configured for **static export** so it can run on Vercel for review and then be uploaded as static HTML to GoDaddy.

## Stack

- Next.js 14 (App Router, `output: 'export'`)
- TypeScript, Tailwind CSS
- framer-motion (scroll reveal), lucide-react (icons)
- Web3Forms (static-friendly contact form — no backend required)

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Environment variables

Create `.env.local` in this directory:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
```

Get a free key at https://web3forms.com — it ties form submissions to an email address (use info@sherlegal.com). Without a key the form will still render but submissions will fail.

## Static export → GoDaddy

```bash
npm run build
```

This produces an `out/` directory containing the entire site as static HTML/CSS/JS. To deploy on GoDaddy hosting (cPanel):

1. Run `npm run build`
2. Zip the contents of `out/` (not the folder itself — the files inside it)
3. Upload via cPanel File Manager into `public_html/`
4. Extract

Because `trailingSlash: true` is set in `next.config.mjs`, every page is served as `/path/index.html` — works on any static host including GoDaddy shared hosting.

## Vercel (for client review)

Connect this repo to Vercel; it will auto-detect Next.js. No env vars are strictly required for build — only `NEXT_PUBLIC_WEB3FORMS_KEY` to make the contact form work.

## Pages

- `/` — Home (video-style hero, practice highlights, partners, CTA)
- `/about` — Firm story, principles, stats
- `/people` — Partners, of counsel + associates, staff
- `/practice-areas` — Healthcare transactions, CRE financing, HUD, joint ventures
- `/contact` — Form, address, hours, embedded map

## Content edits

All firm content (attorneys, practice areas, contact info, stats) lives in **`lib/site.ts`**. Edit there to update the site — no other files need to change.
