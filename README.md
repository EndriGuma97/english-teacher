# Learn Albanian with Debora

Single-page marketing website for Debora, a native Albanian teacher who teaches international students online.
Built with **Next.js (App Router, TypeScript, Tailwind)** and deployed on **Vercel** as a fully static site.

- Design: modern layout with Albanian identity carried by flag red, true black, a qilim (kilim) pattern and a geometric double-headed eagle mark.
- Copy: every line of text lives in `lib/content.ts`.
- Booking: a Calendly embed that switches on with one environment variable.

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
| `NEXT_PUBLIC_CALENDLY_URL` | Empty now. Set it to Debora's Calendly event link (e.g. `https://calendly.com/debora/albanian-lesson`) to replace the "Booking calendar coming soon" placeholder with the real inline booking widget. |
| `NEXT_PUBLIC_SITE_URL` | The final custom domain (e.g. `https://www.example.com`). Used for the canonical URL, Open Graph tags and the sitemap. Until it is set the code falls back to Vercel's `VERCEL_PROJECT_PRODUCTION_URL`. |

Both are `NEXT_PUBLIC_*`, so they are inlined at **build time**: after changing a value in
Vercel → Settings → Environment Variables, trigger a **Redeploy** for it to take effect.

### Activating Calendly

1. In Vercel → Settings → Environment Variables add `NEXT_PUBLIC_CALENDLY_URL` for Production and Preview.
2. Redeploy. The `components/CalendlyEmbed.tsx` component loads Calendly's script lazily and passes
   `primary_color=e41e20` so the widget matches the brand. The placeholder and the widget reserve the same
   height, so there is no layout shift.

## Editing the site

- **Copy** — `lib/content.ts`. All headings, paragraphs, the six reasons, six skills, four reviews, marquee words
  and button labels are there. Components only render what this file exports.
- **Images** — `public/images/`:
  - `debora-portrait.webp` — hero portrait (background removed), also used for the JSON-LD image.
  - `lesson-vowels.jpg`, `lesson-intro-slide.jpg`, `lesson-tablet.jpg` — About collage / Approach section.
  To replace one, drop in a new file with the same name and update the `width`/`height` in `lib/content.ts`
  (or in `components/Hero.tsx` for the portrait). Keep files under ~400 KB.
- **Open Graph image** — `app/opengraph-image.jpg` and `app/twitter-image.jpg` (1200×630).
- **Favicon / brand mark** — `app/icon.svg`, `app/apple-icon.png`, `components/EagleMark.tsx`.
- **Tokens and signature CSS** (qilim pattern, arch, marquee, hero entrance) — `app/globals.css`.

## Deploying on Vercel

1. Push the repository to GitHub, then in Vercel choose **Add New Project → Import**. The framework is
   auto-detected as Next.js; no configuration is needed. Deploy. Production branch: `main`.
2. Every push to `main` becomes the production deployment. Every other branch or pull request gets its own
   **preview URL** — use previews to show Debora changes before they go live. (If a preview asks for a Vercel
   login, adjust Settings → Deployment Protection.) Previews are served with `noindex`; only production is
   indexable.
3. Add the environment variables above for Production and Preview, then redeploy.
4. **Custom domain:** Settings → Domains → add both the apex domain and `www`, choose one as primary
   (Vercel redirects the other) and set the DNS records exactly as the dashboard shows, or move DNS to
   Vercel's nameservers. SSL is automatic.
5. Enable **Web Analytics** and **Speed Insights** in the project dashboard (the `<Analytics />` and
   `<SpeedInsights />` components are already in `app/layout.tsx`). After launch, watch Speed Insights for
   real-user Core Web Vitals.
6. Submit `https://<domain>/sitemap.xml` to Google Search Console.
7. If a deployment ever breaks the site, open Deployments and promote the previous good one
   (**Instant Rollback**).
8. **Plan note:** Vercel's fair-use guidelines restrict the free Hobby plan to non-commercial, personal use.
   A website advertising paid lessons counts as commercial usage, so run the project on the **Pro plan**.
   The site is fully static with no serverless functions, so usage stays minimal either way.

## What is in the repo

```
app/            layout (fonts, metadata, analytics), page, globals.css, icons, OG images, robots, sitemap, 404
components/     Nav, Hero, Marquee, About, Why, Learn, Approach, Reviews, JourneyCta, Book, CalendlyEmbed,
                Contact, CopyEmailButton, Footer, MobileCtaBar, EagleMark, Icons, RichText
lib/            content.ts (all copy), site.ts (site URL, name, email)
public/images/  the four photos used on the page
docs/           the original website brief
```

Only `Nav`, `ReviewsCarousel`, `CopyEmailButton`, `MobileCtaBar` and `CalendlyEmbed` are client components.
Everything else, including the marquee and the hero entrance animation, is server-rendered and CSS-only.
