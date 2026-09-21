# Learn Albanian with Debora

Single-page marketing website for Debora, a native Albanian teacher who teaches international students online.
Built with **Next.js (App Router, TypeScript, Tailwind)** and deployed on **Vercel** as a fully static site.

- Design: modern layout with Albanian identity carried by flag red, true black, a qilim (kilim) pattern and the "Learn Albanian with Debora" logo (a plis felt cap on the A).
- Copy: every line of text lives in `lib/content.ts`.
- Packages: the three monthly lesson packages (Starter / Regular / Intensive) and their prices live in `packages` in `lib/content.ts`.
- Booking: Debora's Calendly calendar (the group class event) loads inline in the "Reserve your spot" section.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build — "/" must be listed as static (○)
pnpm lint
```

Node 20+ and pnpm are required (`corepack enable` installs pnpm).

## Environment variables

Copy `.env.example` to `.env.local` for local work. Never commit `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_CALENDLY_GROUP_URL` | Optional override for the Calendly event (the **group class**). Default: `https://calendly.com/learnalb/learn-albanian`. |
| `NEXT_PUBLIC_SITE_URL` | Optional override for the canonical origin. The live domain `https://www.learnalbanianwithdebora.com` is the default on Vercel (see `lib/site.ts`), so this only needs setting if the domain ever changes. Used for the canonical URL, Open Graph tags, JSON-LD and the sitemap. |

Both are `NEXT_PUBLIC_*`, so they are inlined at **build time**: after changing a value in
Vercel → Settings → Environment Variables, trigger a **Redeploy** for it to take effect.

### Booking flow

`components/CalendlyEmbed.tsx` mounts the Calendly event inline with `primary_color=e41e20` so the widget
matches the brand. Calendly's script is only requested once the visitor scrolls near the booking block, and
the slot keeps a reserved height so nothing shifts. The event URL lives in `lib/site.ts`; the env var above
only overrides it.

## Editing the site

- **Copy** — `lib/content.ts`. All headings, paragraphs, the six reasons, six skills, four reviews, marquee words
  and button labels are there. Components only render what this file exports.
- **Images** — `public/images/`:
  - `debora-portrait.webp` — hero portrait (background removed), also used for the JSON-LD image.
  - `lesson-vowels.jpg`, `lesson-intro-slide.jpg`, `lesson-tablet.jpg` — About collage / Approach section.
  - `english-hello-song.jpg`, `english-phonics.jpg`, `english-drawing.jpg` — the small "English for kids" aside
    (cropped to the lesson slides; the student's face is covered with a sticker and the platform logo removed).
  - `cert-tefl.jpg`, `cert-tesol.jpg` — certificate thumbnails, shown deliberately small.
  To replace one, drop in a new file with the same name and update the `width`/`height` in `lib/content.ts`
  (or in `components/Hero.tsx` for the portrait). Keep files under ~400 KB.
- **Reviews** — `reviews.items` in `lib/content.ts`, newest first. Each has `name`, optional `country`
  (BE/US/IT/RO/GB flag; add more in `components/Flag.tsx`), `when` and `rating`.
- **Open Graph image** — `app/opengraph-image.jpg` and `app/twitter-image.jpg` (1200×630).
- **Packages and prices** — `packages.plans` in `lib/content.ts` (`was` is the struck-through price, `price` the
  package price; the "Save €…" badge and the JSON-LD offers are calculated from them).
- **Logo / favicon** — `public/brand/*.svg` (rendered by `components/Logo.tsx`), `app/icon.svg`,
  `app/apple-icon.png`, `app/favicon.ico`. Hand-off files for social profiles and print are in `brand/`.
- **Tokens and signature CSS** (qilim pattern, arch, marquee, hero entrance) — `app/globals.css`.

## Deploying on Vercel

1. Push the repository to GitHub, then in Vercel choose **Add New Project → Import**. The framework is
   auto-detected as Next.js; no configuration is needed. Deploy. Production branch: `main`.
2. Every push to `main` becomes the production deployment. Every other branch or pull request gets its own
   **preview URL** — use previews to show Debora changes before they go live. (If a preview asks for a Vercel
   login, adjust Settings → Deployment Protection.) Previews are served with `noindex`; only production is
   indexable.
3. Add the environment variables above for Production and Preview, then redeploy.
4. **Custom domain:** `learnalbanianwithdebora.com` and `www.learnalbanianwithdebora.com` are added in
   Settings → Domains. `www` is primary; the apex 308-redirects to it. SSL is automatic. If the domain
   ever changes, update `productionUrl` in `lib/site.ts` (or set `NEXT_PUBLIC_SITE_URL`).
5. Enable **Web Analytics** and **Speed Insights** in the project dashboard (the `<Analytics />` and
   `<SpeedInsights />` components are already in `app/layout.tsx`). After launch, watch Speed Insights for
   real-user Core Web Vitals.
6. Verify the site in [Google Search Console](https://search.google.com/search-console) (Domain property for
   `learnalbanianwithdebora.com`) and submit `https://www.learnalbanianwithdebora.com/sitemap.xml`. Check the
   structured data with the [Rich Results Test](https://search.google.com/test/rich-results).
7. If a deployment ever breaks the site, open Deployments and promote the previous good one
   (**Instant Rollback**).
8. **Plan note:** Vercel's fair-use guidelines restrict the free Hobby plan to non-commercial, personal use.
   A website advertising paid lessons counts as commercial usage, so run the project on the **Pro plan**.
   The site is fully static with no serverless functions, so usage stays minimal either way.

## What is in the repo

```
app/            layout (fonts, metadata, analytics), page, globals.css, icons, OG images, robots, sitemap, 404
components/     Nav, Hero, Marquee, About, Why, Learn, Approach, Reviews, Packages, JourneyCta, Book,
                CalendlyEmbed, Contact, CopyEmailButton, Footer, MobileCtaBar, Logo, EagleMark (flag only),
                Icons, RichText
lib/            content.ts (all copy), site.ts (site URL, name, email)
public/images/  the photos used on the page
public/brand/   the logo SVGs used by the site
brand/          logo hand-off files (PNG + SVG)
docs/           the original website brief
```

Only `Nav`, `ReviewsCarousel`, `CopyEmailButton`, `MobileCtaBar` and `CalendlyEmbed` are client components.
Everything else, including the marquee and the hero entrance animation, is server-rendered and CSS-only.
