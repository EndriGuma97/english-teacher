# Build prompt — "Learn Albanian with Debora" website (hosted on Vercel)

You are a senior web designer and front-end developer. Build a complete, production-ready, single-page marketing website for Debora, a native Albanian language teacher who teaches international students online. The site must feel premium, warm and personal, blend **modern web design with traditional Albanian visual identity**, be **fully mobile responsive**, and be built the Vercel-native way: **Next.js (App Router) deployed on Vercel**, fully static, with Vercel's image, font, metadata and analytics best practices baked in. Use the exact copy, assets and structure below.

---

## 1. Project summary

- **Site name:** Learn Albanian with Debora
- **Job of the page:** introduce Debora, build trust, and get visitors to book a lesson via a Calendly booking calendar (placeholder for now, see section 3.9).
- **Audience:** adults worldwide (and parents booking for children) who want to learn Albanian: people moving to Albania, partners of Albanian speakers, diaspora reconnecting with heritage, travellers, professionals and students, and language lovers.
- **Tone:** friendly, encouraging, professional, first person ("I").
- **Primary CTA everywhere:** "Reserve your spot" → smooth-scrolls to `#book`.
- **Contact email:** learnalb@gmail.com (the only contact channel; no phone, no social links).
- **Site language:** English. Albanian words appear as accents and are wrapped in `<span lang="sq">`.
- **Hosting:** Vercel. **Deliverable:** a Git repository (Next.js project) that deploys on Vercel with zero configuration, plus a README (see section 7).

---

## 2. Design direction — modern meets traditional Albanian

The brief in one line: **clean, contemporary and confident, with the Albanian identity carried by colour, one pattern and one symbol, used with restraint.** It must look designed for Debora specifically, not like a template.

### Concept
- **Base:** light ivory backgrounds (the white of Albanian whitewashed houses and the traditional white felt hat), generous whitespace, large expressive serif headlines, real black and flag red as the identity colours.
- **Traditional layer, used as accents only:**
  - **Albanian flag red** for CTAs, highlights, stars and small details.
  - **True black** for headlines and one dark "statement" section (red + black reads instantly Albanian).
  - **A qilim (Albanian kilim rug) geometric pattern** — diamonds, zigzags, stepped borders in red/black on ivory — built in CSS/SVG (no image files). This is the signature device: use it boldly once (hero portrait frame) and thinly elsewhere (section dividers, a top border on cards).
  - **A stylised, geometric double-headed eagle silhouette** as the brand mark: logo, favicon, and a faint watermark in the dark section. Keep it minimal; do not reproduce the official coat of arms.
  - Optional: a faint mountain-ridge silhouette (Albanian Alps) behind the hero.
- **Modern layer:** sticky translucent nav, fluid type scale, pill buttons, a slow marquee of Albanian words, a horizontal snap-scroll review carousel on mobile, a sticky bottom CTA bar on mobile, one orchestrated hero entrance animation.

### Spend boldness in one place
The **hero** is the memorable moment: Debora's cut-out portrait inside an arch framed by the qilim pattern, next to the big serif headline. Everything after the hero stays quiet and disciplined.

### Colour tokens (CSS variables)
| Token | Hex | Use |
|---|---|---|
| `--red` | `#E41E20` | Albanian flag red: CTAs, accents, stars |
| `--red-dark` | `#B8151A` | hover/active states |
| `--black` | `#000000` | headlines, dark section background |
| `--ivory` | `#FFFDF7` | page background |
| `--stone` | `#ECE7DD` | alternate section background, card fills (Gjirokastër stone) |
| `--sea` | `#1B4F8A` | sparing tertiary accent; echoes the blue dress in her portrait |
| `--ink` | `#1F1F1F` | body text |
| `--muted` | `#6A6660` | secondary text |

All text/background pairs must pass WCAG AA contrast.

### Typography (loaded with `next/font/google`, **`subsets: ['latin', 'latin-ext']` so ë and ç render correctly**)
- **Display/headings:** Fraunces (fallback: Playfair Display). Weight 600–700, slightly tight letter-spacing, optical size enabled. Let the headline itself be a visual element.
- **Body/UI:** Nunito Sans (fallback: Manrope). Regular 400, semi-bold 600 for buttons.
- Fluid scale with `clamp()`; H1 ≈ `clamp(2.6rem, 6vw, 5.2rem)`; body 17–18px; line length 60–75 characters; serif blocks get slightly more line-height.

### Emojis and icons
The copy contains emojis; keep them, they are part of Debora's warm voice. Render each in a soft circular chip (ivory or stone fill, hairline border) so they look intentional and consistent. Use inline SVG icons (Lucide) only for UI: menu, close, arrows, stars, check, copy.

### Avoid these generic-template tells
- Every section as identical rounded cards with the same grey shadow. Vary treatments: a plain list for the reasons, cards with a qilim top border for the skills, quote-style cards for reviews.
- An ALL-CAPS eyebrow label above every heading; numbered 01/02/03 markers where nothing is a sequence.
- Fade-up animation on every section; hover effects on everything. One orchestrated hero entrance + a marquee + button/link states is enough.
- Purple/blue gradients, glassmorphism everywhere, "→" glued to every button, stock photos, lorem ipsum, chat widgets, cookie banners, autoplaying video.
- Inventing content: no prices, no extra statistics, no extra testimonials, no FAQ answers Debora has not written.

---

## 3. Page structure and exact copy

Use the copy below **verbatim** (British spelling: personalised, memorise, practise). The only edit allowed is normalising "practice" to "practise" where it is a verb. Keep all copy in one typed file (`lib/content.ts`) so Debora's text can be edited without touching components.

### 3.1 Navigation (sticky; becomes translucent with blur after scrolling)
- Left: eagle brand mark + wordmark **Learn Albanian with Debora**
- Links: About · Why me · What you'll learn · My approach · Reviews · Contact
- Right: red pill button **Reserve your spot** → `#book`
- Mobile: hamburger opens a full-screen menu with large links and the CTA; keyboard accessible; closes on link tap.

### 3.2 Hero
- **H1:** Learn Albanian with Debora 🇦🇱
- **Subheadline:** Your friendly guide to speaking Albanian with confidence.
- **Buttons:** [Reserve your spot] (primary, red) · [Why learn with me] (secondary, outlined black → `#why`)
- **Trust line under the buttons (plain text, small):** 8 years of teaching · 5,000+ students worldwide · Native speaker
- **Portrait:** the professional headshot (blue dress). Ideally remove the white background (transparent PNG/WebP) so she sits directly on the arch fill; if that is not possible, keep the white background and let the arch itself be the white area. Frame the arch with the qilim pattern. Add a small floating badge card overlapping the portrait: **"Përshëndetje! 👋"** with the small line **Native Albanian speaker**.
- Background: ivory, optional faint mountain silhouette, a very soft red radial glow behind the arch.
- Entrance: one orchestrated CSS animation on load (headline rises, portrait fades in, badge pops), 600–800 ms total, disabled under `prefers-reduced-motion`. No animation library.

### 3.3 About — `id="about"`
Heading: **Hi, I'm Debora**

> Hi, I'm Debora, a passionate Albanian teacher and native speaker.
>
> With 8 years of teaching experience, I have helped more than 5,000 students from around the world learn, practise, and improve their language skills.
>
> Albanian is my native language and I love helping international students discover not only the language, but also the culture, expressions, and everyday way of communicating in Albania.

Layout: two columns on desktop (text left, an "inside my lessons" photo collage right using the three classroom images from section 4), stacked on mobile. You may set "8 years" and "5,000 students" in the display serif at a larger size within the paragraph.

### 3.4 Why learn Albanian with me? — `id="why"`
Heading: **Why Learn Albanian with Me?**

> Learning a new language should feel exciting — not stressful.
>
> My lessons are friendly, practical, interactive, and personalised. I adapt each lesson to your level, goals, and interests so you can make real progress from the very beginning.

Show **Friendly · Practical · Interactive · Personalised** as four pill badges (stone fill, red text or red outline).

Sub-heading: **Whether you are learning Albanian because you are:**

Six reasons as a two-column list (single column on mobile) with the emoji chip as the bullet:
- 🇦🇱 moving to Albania
- ❤️ in a relationship with an Albanian speaker
- 👨‍👩‍👧 connecting with Albanian family or heritage
- ✈️ travelling to Albania
- 💼 working or studying in Albania
- 🌍 simply interested in the Albanian language and culture

Closing line (large, centred, serif): **— I'm here to help you feel confident using Albanian in real-life situations.**

### 3.5 What will you learn? — `id="learn"`
Heading: **What Will You Learn?**

Six cards (3×2 desktop, 2×3 tablet, 1 column mobile), each with emoji chip, title and one line; cards have a thin qilim-pattern top border and a slight lift on hover:
- 🗣️ **Conversation** — Speak naturally and confidently.
- 📚 **Vocabulary** — Learn useful words and everyday expressions.
- ✏️ **Grammar** — Understand Albanian grammar in a simple and practical way.
- 👂 **Listening** — Improve your understanding of spoken Albanian.
- 🔤 **Pronunciation** — Learn to pronounce Albanian words clearly and naturally.
- 🇦🇱 **Culture & Expressions** — Discover the phrases and expressions Albanians actually use.

### 3.6 My teaching approach — `id="approach"` (dark statement section)
Black background, ivory text, red accents, faint eagle watermark in one corner.

Heading: **My Teaching Approach**

> I don't want you to simply memorise Albanian words.
>
> **I want you to use them.** ← render as a large pull-quote in red italic serif
>
> My lessons focus on real communication, practical vocabulary, conversation, and situations you are likely to encounter in everyday life.
>
> I create a supportive environment where you can ask questions, make mistakes, practise, and gradually build your confidence.

Optionally pair the text with the "Përshëndetje / Unë quhem Debora" lesson slide in a rounded frame.

### 3.7 Reviews — `id="reviews"`
Heading: **What my students say**

Four testimonial cards (grid on desktop; horizontal CSS scroll-snap carousel on mobile with dots), each with five red stars, the quote, and attribution. Use exactly these — they are transcribed from real reviews; keep the wording as written, including the student's own spelling:

1. ★★★★★ — "Thank you so much Teacher Debora!! I'm so happy to see you and know each other^^ You are so kindly and patiently, so that I could study comfortably. See you soon !! Feleminderit^^" — **Student, April 2022**
2. ★★★★★ — "It is always fun to talk to her. Thank you for your lesson." — **Student, January 2023**
3. ★★★★★ — "Debora is very kind and friendly. Her pronunciation is very beautiful." — **Student, May 2023**
4. ★★★★★ — "Professional, kind, cooperative, caring tutor that guarantees success" — **Xhuljana 🇬🇧, Google review**

Do not add names to reviews 1–3, and do not invent a total review count or an average-rating number.

### 3.8 Journey CTA band
Ivory or stone background with a qilim divider on top.

Heading: **Your Albanian journey starts here.**

> From your first "Përshëndetje!" to having your first real conversation in Albanian, I'll be there to guide you.

Line: **Ready to learn Albanian?**

Big closing line (serif): **🇦🇱 Let's speak Albanian together.**

Button: [Reserve your spot] → `#book`

### 3.9 Reserve your spot — Calendly (IMPORTANT) — `id="book"`
Heading: **Reserve your spot**
Subtext: Pick a time that suits you and let's start speaking Albanian.

The real Calendly embed (showing Debora's available hours) will be added later. Implement it the Vercel way — **driven by an environment variable, so it can be switched on without touching code:**

- Create a `CalendlyEmbed` client component (`'use client'`) that receives `url` from `process.env.NEXT_PUBLIC_CALENDLY_URL`.
- **If the variable is empty (now):** render a clearly marked placeholder — a container with `min-height: 700px`, rounded corners, dashed red border on a stone background, centred content: a simple inline-SVG calendar illustration, the text **"📅 Booking calendar coming soon"** and the smaller line **"Debora's Calendly schedule will appear here."** Give the wrapper `id="calendly-placeholder"` and a code comment `{/* CALENDLY PLACEHOLDER — set NEXT_PUBLIC_CALENDLY_URL in Vercel to activate the real embed */}`.
- **If the variable is set (later):** render the real inline widget, loading Calendly's script lazily so it never hurts page speed:

```tsx
'use client';
import Script from 'next/script';

export function CalendlyEmbed({ url }: { url?: string }) {
  if (!url) return <CalendlyPlaceholder />; // the placeholder described above

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={`${url}?primary_color=e41e20`}   // Calendly colour param to match the brand
        style={{ minWidth: 320, height: 700 }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
```

- Reserve the same height (700px desktop / 640px mobile) for both the placeholder and the widget so there is no layout shift when it switches.
- Also add `NEXT_PUBLIC_CALENDLY_URL=` (empty) to `.env.example` with a comment explaining it.
- Below the embed: **Prefer email? Write to me at learnalb@gmail.com** (mailto link).

### 3.10 Contact and footer — `id="contact"`
- Email **learnalb@gmail.com** as a mailto link with a "Copy" button (copies to clipboard, shows "Copied").
- Footer: eagle mark + **Learn Albanian with Debora**, the line **Your friendly guide to speaking Albanian with confidence.**, footer nav links, **© 2026 Learn Albanian with Debora**.
- No social media icons, no phone number, no address.

---

## 4. Assets (the 8 provided images) and how to use each

Identify images by their content; original filenames are given in case they are kept. Save the ones used in `/public/images/` with clean names, pre-compressed (each under ~400 KB), and render them with `next/image`.

| # | Original file | Content | Save as | Use |
|---|---|---|---|---|
| 1 | `WhatsApp_Image_2026-09-11_at_11_56_41_AM.jpeg` | Professional headshot: Debora smiling, glasses, royal-blue sleeveless dress with a fabric rose, plain white background | `debora-portrait.png` (background removed) or `.jpg` | **Hero portrait** with `priority` (it is the LCP element); also the source for the Open Graph image. Never crop or distort her face. |
| 2 | `debora2.jpeg` | Live online class screenshot: Debora on camera beside a slide with a vowel table ("Zanore – E gjatë – Shembull – E shkurtër") | `lesson-vowels.jpg` | About-section collage ("inside my lessons") |
| 3 | `debora.jpeg` | ClassIn screenshot: purple slide reading "Përshëndetje. Unë quhem Debora. Cili është emri yt? Si të quajnë? Unë quhem …" | `lesson-intro-slide.jpg` | Approach section frame or About collage |
| 4 | `WhatsApp_Image_2026-09-11_at_11_57_04_AM.jpeg` | Phone screenshot of a photo: a young student pointing at a tablet during an online lesson, Debora in the video window | `lesson-tablet.jpg` (cropped) | Crop to the central landscape photo (remove the black phone bars) → About collage |
| 5–8 | `debora3.jpeg`, `debora4.jpeg`, `debora5.jpeg`, `debora6.jpeg` | Four review screenshots | not saved | **Do not display as raw screenshots.** Use the transcribed text in section 3.7. |

Rules: for lesson images, crop or blur so students are not identifiable while Debora stays visible; give every image explicit `width`/`height` (or `fill` + `sizes`) and descriptive alt text (e.g. "Debora teaching Albanian vowels in a live online lesson"). Keep the image set to these four files: Vercel's Image Optimization is metered, so do not add decorative images.

---

## 5. Optional enhancements (tasteful, small)
- **Albanian words marquee** (pure CSS animation, slow, pauses on hover, between hero and About): Përshëndetje — Hello · Faleminderit — Thank you · Mirëmëngjes — Good morning · Si je? — How are you? · Mirë — Good · Gëzohem që u njohëm — Nice to meet you · Mirupafshim — Goodbye
- **Sticky bottom bar on mobile** with "Reserve your spot" (appears after the hero scrolls out of view).
- **Back-to-top** button.
- A **"How it works" strip** of three steps, only if it fits cleanly: 1. Reserve your spot 2. Meet me online for your first lesson 3. Start speaking Albanian
- A branded **404 page** (`app/not-found.tsx`) in the same style with a link home.

---

## 6. Technical requirements (Next.js on Vercel)

### Stack
- **Latest stable Next.js, App Router, TypeScript (strict), ESLint**, created with `create-next-app`. Tailwind (the default) is fine for layout and spacing, but define the brand tokens as CSS variables in `app/globals.css` and write the signature pieces (qilim pattern, arch mask, marquee, hero entrance) in plain CSS so the look stays distinctive. No UI kits, no animation libraries, no CMS.
- **Fully static.** No API routes, no middleware, no Server Actions, no `cookies()`/`headers()`/`force-dynamic`. After `next build`, the route table must show `/` as static (○). The site is then served from Vercel's global CDN with zero function invocations.
- **Server Components by default.** Only these are client components: `Nav` (menu state), `ReviewsCarousel` dots (optional), `CopyEmailButton`, `MobileCtaBar`, `CalendlyEmbed`. Everything else, including the marquee and hero animation, is CSS-only.
- Commit the lockfile (`pnpm-lock.yaml` or `package-lock.json`); keep the standard `dev`/`build`/`start` scripts so Vercel auto-detects the framework; leave the Node version at Vercel's default LTS.

### Suggested structure
```
app/
  layout.tsx            fonts (next/font), Metadata API, <Analytics />, <SpeedInsights />, skip link
  page.tsx              composes the sections + JSON-LD script
  globals.css           tokens, qilim pattern, arch, marquee, hero keyframes, reduced-motion rules
  icon.svg              favicon (eagle mark)      apple-icon.png (180×180)
  opengraph-image.jpg   1200×630, ivory background, headshot + site name (also copy as twitter-image.jpg)
  sitemap.ts  robots.ts  not-found.tsx
components/             Nav, Hero, Marquee, About, Why, Learn, Approach, Reviews, JourneyCta, Book (+ CalendlyEmbed), Contact, Footer, MobileCtaBar
lib/
  content.ts            ALL copy, the six reasons, six skills, four reviews (typed)
  site.ts               siteUrl helper (see below)
public/images/          debora-portrait.png, lesson-vowels.jpg, lesson-intro-slide.jpg, lesson-tablet.jpg
.env.example  next.config.ts  README.md
```

### Fonts — `next/font/google` (self-hosted at build time: no request to Google at runtime, zero layout shift)
```ts
import { Fraunces, Nunito_Sans } from 'next/font/google';
const display = Fraunces({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-display', axes: ['opsz', 'SOFT'] });
const body = Nunito_Sans({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-body' });
// apply `${display.variable} ${body.variable}` on <html>; use var(--font-display) / var(--font-body) in CSS
```

### Images — `next/image` everywhere
- Hero portrait: `priority`, explicit `width`/`height`, `sizes="(max-width: 768px) 80vw, 480px"`.
- All other images: default lazy loading with a correct `sizes` attribute.
- `next.config.ts`: `images: { formats: ['image/avif', 'image/webp'], minimumCacheTTL: 2678400 }` (the photos never change, so cache optimized variants for 31 days).
- Do **not** set `output: 'export'` — it disables Vercel's image optimization; Next.js already prerenders the page statically on Vercel.

### Metadata, SEO and indexing — App Router Metadata API in `app/layout.tsx`
- `lib/site.ts`: `export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');`
- `metadataBase: new URL(siteUrl)`; `title: 'Learn Albanian with Debora — Online Albanian Lessons with a Native Teacher'`; `description` built from the subheadline and the first About sentence; `alternates: { canonical: '/' }`; `openGraph: { type: 'website', locale: 'en_US', siteName: 'Learn Albanian with Debora', url: '/' }`; `twitter: { card: 'summary_large_image' }`.
- **Never index previews:** `robots: process.env.VERCEL_ENV === 'production' ? { index: true, follow: true } : { index: false, follow: false }`, and `app/robots.ts` returns `disallow: '/'` when `VERCEL_ENV !== 'production'`, plus the sitemap URL in production.
- `app/sitemap.ts` with the single URL. `app/icon.svg` favicon, `app/opengraph-image.jpg` (file convention).
- JSON-LD `Person` in `page.tsx` via `<script type="application/ld+json">`: name "Debora", jobTitle "Albanian Language Teacher", email, url `siteUrl`, image (portrait), knowsLanguage ["sq", "en"].
- `<html lang="en">`; Albanian phrases wrapped in `lang="sq"`.

### Responsiveness, accessibility, performance
- Mobile-first. Verify at 360, 390, 768, 1024 and 1440 px: no horizontal scroll, touch targets ≥ 44 px, images never overflow, the H1 wraps gracefully.
- Semantic landmarks (header/nav/main/section/footer), one H1, logical heading order, alt text, visible focus states, AA contrast, skip-to-content link, `prefers-reduced-motion` disables all non-essential motion, keyboard-operable menu and carousel.
- Core Web Vitals targets (this is what Vercel Speed Insights will measure): **LCP < 2.5 s** (hero portrait `priority`, fonts via `next/font`), **CLS < 0.1** (explicit image sizes, reserved height for the Calendly block, no late-loading layout), **INP < 200 ms** (tiny client bundle, no heavy libraries). Lighthouse 95+ on mobile.
- Watch CSS specificity so section spacing rules do not cancel each other out.

---

## 7. Vercel setup and best practices (implement in the code, document in the README)

### Configuration in the repo
- **`next.config.ts`:** `poweredByHeader: false`; the `images` settings above; security headers for every route:
  ```ts
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  }
  ```
  Vercel adds HTTPS, HSTS and immutable caching of `/_next/static/*` automatically, so do not add those. Skip a Content-Security-Policy unless you implement it properly with nonces and test it with the Calendly iframe (`frame-src https://calendly.com https://*.calendly.com`, `script-src https://assets.calendly.com`) and Vercel Analytics; a broken CSP is worse than none on a static site.
- **Vercel Web Analytics + Speed Insights:** install `@vercel/analytics` and `@vercel/speed-insights`, render `<Analytics />` (from `@vercel/analytics/next`) and `<SpeedInsights />` (from `@vercel/speed-insights/next`) in `app/layout.tsx`. Both are privacy-friendly, cookieless, and no-ops in development. The README must remind the owner to also **enable Analytics and Speed Insights in the Vercel project dashboard**.
- **Environment variables** — the only two the site needs, both documented in `.env.example`:
  - `NEXT_PUBLIC_CALENDLY_URL` — empty now; set to Debora's Calendly event link later to activate the booking embed.
  - `NEXT_PUBLIC_SITE_URL` — the final custom domain (e.g. `https://www.example.com`), used for canonical/OG/sitemap; until it is set, the code falls back to Vercel's `VERCEL_PROJECT_PRODUCTION_URL`.
  Never commit `.env.local`. Because `NEXT_PUBLIC_*` values are inlined at build time, the README must say: after changing a variable in Vercel → Settings → Environment Variables, trigger a **Redeploy** for it to take effect.
- No `vercel.json` is needed for a Next.js project (only for the static fallback in section 8).

### Deployment workflow (write these steps into the README)
1. Push the repo to GitHub → Vercel → **Add New Project → Import** → framework is auto-detected as Next.js → Deploy. Production branch: `main`.
2. Every push to `main` becomes the production deployment; every other branch or pull request gets its own **preview URL** — use previews to show Debora changes before they go live (if a preview asks for a Vercel login, adjust Settings → Deployment Protection).
3. Add the environment variables for Production and Preview, then redeploy.
4. **Custom domain:** Settings → Domains → add both the apex and `www`, choose one as primary (Vercel redirects the other), and set the DNS records exactly as the dashboard shows (or move DNS to Vercel's nameservers). SSL is automatic.
5. Enable **Web Analytics** and **Speed Insights** in the project dashboard; after launch, watch Speed Insights for real-user Core Web Vitals.
6. Submit `https://<domain>/sitemap.xml` to Google Search Console.
7. If a deployment ever breaks the site, open Deployments and promote the previous good one (**Instant Rollback**).
8. **Plan note:** Vercel's fair-use guidelines restrict the free Hobby plan to non-commercial, personal use; a website advertising paid lessons counts as commercial usage, so the project should run on the **Pro plan**. This static site uses no serverless functions, so usage stays minimal either way.

### README contents
How to run locally (`pnpm install`, `pnpm dev`), the deployment steps above, the two environment variables and how to activate Calendly, where the copy lives (`lib/content.ts`), how to replace an image (`/public/images/` + update `width`/`height`), and the plan note.

---

## 8. Fallback only if a Next.js project is impossible: static site on Vercel
Deliver `index.html` + `/assets/` and add this `vercel.json` (static deployments are detected automatically):
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    { "source": "/(.*)", "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
      { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
    ]},
    { "source": "/assets/(.*)", "headers": [
      { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
    ]}
  ]
}
```
In that case pre-generate WebP images with `srcset`, load fonts with `<link rel="preconnect">` + `display=swap`, keep the Calendly placeholder as a clearly commented HTML block, and version asset filenames when they change (because of the immutable cache header).

---

## 9. Quality check before you finish
1. Every line of copy in section 3 is present, verbatim, in the right order, and lives in `lib/content.ts`.
2. ë and ç render correctly in every font weight; fonts come from `next/font` (no runtime Google Fonts request).
3. All "Reserve your spot" buttons scroll to `#book`; with `NEXT_PUBLIC_CALENDLY_URL` empty the placeholder shows, with it set the Calendly widget loads.
4. `pnpm build` and lint pass with zero errors; the build output lists `/` as static; no serverless functions are created.
5. Lighthouse (mobile) ≥ 95 for Performance, Accessibility, Best Practices and SEO; no CLS from images, fonts or the booking block.
6. The page looks polished on a 390 px phone and a 1440 px desktop; previews are `noindex`, production is indexable with a valid sitemap and OG image.
7. The design reads unmistakably Albanian, yet modern, warm and premium, and nothing on the page is invented beyond this brief.
