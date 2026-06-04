# Seven Days, Seven Wanderers

**Project Wanderers — Days of the Week**
*The hidden story of the week above our heads.*

A polished landing page / coming-soon page for a beautifully illustrated children's book
about the hidden sky-story behind the days of the week.

---

## What This Is

Phase One only: a static landing page.
**Do not begin MVP development until this landing page is approved.**

The page introduces the book concept to parents, educators, librarians,
museum buyers, and curious readers. It explains the core idea (the days
of the week were named after seven wanderers of the ancient sky), presents
the multilingual evidence, and collects early-interest signups.

Planned deployment: `https://wanderers.ngengwe.com`

---

## Stack

| Layer        | Choice                        |
|--------------|-------------------------------|
| Framework    | Next.js 16 (App Router)       |
| Language     | TypeScript                    |
| Styling      | Tailwind CSS v4               |
| Fonts        | Playfair Display, Lora (Google Fonts via next/font) |
| Output       | Static export (`out/`)        |
| Deployment   | Cloudflare Pages              |
| Domain       | `wanderers.ngengwe.com`       |
| DNS / Edge   | Cloudflare                    |

---

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Build for Production

```bash
npm run build
```

Output lands in `out/` — a fully static site ready for Cloudflare Pages.

---

## Deploy via Cloudflare Pages

### Option A — GitHub integration (recommended)

1. Push this repo to GitHub under `gngengwe/seven-days-seven-wanderers`.
2. In the Cloudflare Pages dashboard, click **Create a project → Connect to Git**.
3. Select the repo and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** 20 (set in Environment variables: `NODE_VERSION=20`)
4. Add a custom domain: `wanderers.ngengwe.com`
5. Cloudflare will add the DNS CNAME automatically if your domain is on Cloudflare.

### Option B — Direct upload (wrangler)

```bash
npx wrangler pages deploy out --project-name=seven-days-seven-wanderers
```

---

## DNS / Subdomain Setup

In Cloudflare DNS for `ngengwe.com`, add:

| Type  | Name       | Content                             | Proxy |
|-------|------------|-------------------------------------|-------|
| CNAME | wanderers  | seven-days-seven-wanderers.pages.dev | ON   |

Once the custom domain is added in Pages and the DNS record is live,
`https://wanderers.ngengwe.com` will route to this site.

---

## Email Signup

The signup form (`app/components/Signup.tsx`) currently **simulates** submission
(short delay → success state). A clear `TODO` comment marks where to wire up
a real provider.

To connect a real provider, replace the `await new Promise(...)` block in
`Signup.tsx` with an API call to one of:

- **Mailchimp** — embed or API
- **ConvertKit / Kit** — form API
- **Resend** — Cloudflare Worker + custom endpoint
- **Buttondown** — REST API

The payload already collected: `{ name, email, role, message }`

---

## Environment Variables

Not yet required (no live form handler). When you add a form provider:

| Variable               | Purpose                          |
|------------------------|----------------------------------|
| `NEXT_PUBLIC_LIST_URL` | Mailchimp / ConvertKit endpoint  |
| `FORM_SECRET`          | HMAC secret for a custom handler |

Add these in Cloudflare Pages → Settings → Environment variables.

---

## Analytics

No analytics provider is wired up yet. Cloudflare Pages includes basic
Web Analytics — enable it in the Pages dashboard under Analytics. For
richer tracking, add Plausible or Fathom by dropping a `<Script>` tag
in `app/layout.tsx`.

---

## What Not to Build Yet

- Interactive week explorer
- Clickable day cards
- Parent / educator guide PDFs
- Sample pages viewer
- Preorder / payment flow
- Any server-side routes or database

All of the above belong to a later MVP phase.
Begin MVP only after the landing page is approved and live.

---

## Page Sections

| Section            | Component              |
|--------------------|------------------------|
| Hero               | `Hero.tsx`             |
| Core Idea          | `CoreIdea.tsx`         |
| Book Description   | `BookDescription.tsx`  |
| Language Discovery | `LanguageDiscovery.tsx`|
| Week Grid (7 days) | `WeekGrid.tsx`         |
| How It Works       | `HowItWorks.tsx`       |
| Why It Matters     | `WhyItMatters.tsx`     |
| Audience           | `Audience.tsx`         |
| Visual Style       | `VisualStyle.tsx`      |
| Project Wanderers  | `ProjectWanderers.tsx` |
| Signup             | `Signup.tsx`           |
| Final CTA          | `FinalCTA.tsx`         |
| Footer             | `Footer.tsx`           |

---

## Repository

GitHub: `https://github.com/gngengwe/seven-days-seven-wanderers`
Branch: `main`

---

*Phase One. Landing page only. MVP not started.*
