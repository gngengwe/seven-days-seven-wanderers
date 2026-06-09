# Project Wanderers — AI Project Manager Briefing

> Feed this document to any AI assistant to bring it up to full PM context.
> Last updated: 2026-06-07
> Illustration strategy: **Model A** (human-illustrated templates + layer compositing). Model C (full AI generation) reserved for future phase once character consistency is solved in Vertex AI.

---

## 1. What This Project Is

**Seven Days, Seven Wanderers** is a children's picture book — and eventually a platform — built on a single insight: the names of the days of the week were given by ancient sky-watchers to the seven visible planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn). Every language that adopted the Roman seven-day week encoded this astronomical memory differently. Some preserved it in plain sight (Spanish: Lunes from Luna). Some disguised it through Norse mythology (English: Wednesday from Woden, stand-in for Mercury). Some erased it entirely (German: Mittwoch = "middle of the week"). Some replaced the whole system with religious numbering (Portuguese: Segunda-feira = "second fair/liturgical day").

The book tells this story through the relationship between a child and the adult who loves them — with the narrator, the child, the cultural setting, the art style, and the language all eventually being choices the reader makes.

**The long-term vision** is a platform where any family can generate a personalized version of this book: in their language, with characters that look like them, in an art style from their world. The etymology is the same. The sky is the same. The story is theirs.

---

## 2. Where We Started

- A blank Next.js repo and a concept
- One book. One language. A landing page to explain it.
- Phase One goal: prove the concept publicly and collect early interest

---

## 3. What Has Been Built (Current State)

> Last updated: 2026-06-09

### Infrastructure
- **Stack**: Next.js 16.2.7 + TypeScript + Tailwind CSS v4, `output: "export"` (fully static)
- **Hosting**: Cloudflare Pages, auto-deploys from GitHub `main` branch on push
  - **Important**: always push to `origin main` (not `main:master`) — production branch is `main`
- **Repo**: `github.com/gngengwe/seven-days-seven-wanderers`
- **Domain**: `wanderers.ngengwe.com`
- **Corporate**: HK Clearway LLC (powered by becomiNG), owned by George-Leonard Ncheumeni Ngengwe

### Landing Page (`/`)
A full narrative landing page with the following sections in deliberate order:
1. **Hero** — "What if the days of the week were really stories from the sky?" + starfield + planet orbs + back-facing child + adult silhouette (figures always face away, toward the sky)
2. **CoreIdea** — The week as a planetarium. Seven wanderer chips.
3. **BookDescription** — Story + character teasers (neutral "child and adult" framing — no fixed identity, no faces)
4. **HowItWorks** — Four spread-format preview cards showing how a page works
5. **WhyItMatters** — Three felt-statement truth cards
6. **Audience** — Who this is for
7. **VisualStyle** — Art direction description (neutral adult + child, seen from behind)
8. **LanguageDiscovery** — THE REVEAL: Romance clusters with language code indicators (ES/FR/IT), EN Norse explainer, DE Mittwoch explainer, PT liturgical explainer
9. **WeekGrid** — All 7 days × 5 languages (ES/FR/IT/DE/PT) data-driven from etymology layer
10. **ProjectWanderers** — Series vision + personalization vision (pick language, characters, world) + 12 planned editions + link to /generate
11. **Signup** — Single email field, wired to Web3Forms (key pending activation)
12. **FinalCTA**
13. **Footer** — "by George Ngengwe"

### Etymology Data Layer (`/data/etymology.ts`, `/types/etymology.ts`)
A typed TypeScript data model representing weekday etymologies across languages.

**Schema:**
```typescript
interface DayEntry {
  day_index: 0 | 1 | 2 | 3 | 4 | 5 | 6;  // 0=Sunday
  name: string;           // day name in this language
  planet: Planet;         // underlying astronomical planet (universal)
  etymology_type: EtymologyType;  // how the name got there
  root: string;           // full etymology explanation
  display_note?: string;  // short note shown in WeekGrid card
  detail?: string;        // longer narrative for LanguageDiscovery section
}

interface LanguageEntry {
  code: string;           // BCP 47
  name: string;           // English name
  native_name: string;    // name in the language itself
  family: string;         // language family
  week_start: 0 | 1;
  days: DayEntry[];       // 7 entries
  verified?: boolean;
  contributor?: string;   // for future crowdsourcing
}
```

**EtymologyType values** (the key insight of the whole platform):
- `planetary_direct` — name directly encodes the planet (Lunes from Luna)
- `norse_substitution` — planet slot kept, god name swapped (Tuesday: Tyr for Mars)
- `liturgical` — religious system replaced planet names (PT: segunda-feira)
- `descriptive` — purely positional, planet erased (Mittwoch = middle of week)
- `sabbath` — Shabbat tradition (Saturday, Sábado, Samedi)
- `other`

**Languages seeded (13 total):**

| Code | Language   | Family      | Approach                         |
|------|-----------|-------------|----------------------------------|
| en   | English   | Germanic    | Planetary + Norse substitution   |
| de   | German    | Germanic    | Norse + Mittwoch erasure         |
| nl   | Dutch     | Germanic    | Same as English                  |
| es   | Spanish   | Romance     | Planetary direct (Mon–Fri)       |
| fr   | French    | Romance     | Planetary direct (Mon–Fri)       |
| it   | Italian   | Romance     | Planetary direct (Mon–Fri)       |
| pt   | Portuguese| Romance     | Full liturgical replacement      |
| ja   | Japanese  | Japonic     | Elemental-planetary (火=Mars/fire)|
| ko   | Korean    | Koreanic    | Same elemental system (Sino-Korean)|
| hi   | Hindi     | Indo-Aryan  | Sanskrit planetary names         |
| ar   | Arabic    | Semitic     | Ordinal numbers, no planets      |
| ru   | Russian   | Slavic      | Resurrection Sunday + ordinal    |
| sw   | Swahili   | Bantu       | Arabic-borrowed ordinal from Saturday |

### Book Generator Prototype (`/generate`)
A fully client-side, static page at `wanderers.ngengwe.com/generate`:
- **Inputs**: Language edition (all 13), Narrator (grandmother/mother/father/uncle/aunt/grandfather), Child's name (free text), Day (7-day pill navigation)
- **Output**: A rendered "book spread" — left page (planet orb + day name + narrative text with narrator/child interpolated), right page (cross-language panel for all other languages + etymology note from data layer)
- **Planet stories**: 7 narrative paragraphs, one per wanderer, written in English
- **Cross-language panel**: scrollable, shows all 12 other languages with display_notes

### Email Capture
- Signup form at `#signup` with single email field
- Wired to Web3Forms API using `NEXT_PUBLIC_WEB3FORMS_KEY` env var
- Dev fallback: simulates success if key not present
- **Pending**: user needs to get Web3Forms key and add to Cloudflare Pages env vars

### Book Template (`/data/book-pages.ts`)
- 28-page typed schema: `PageType`, `BookPage` interface, `illustrationSlot` keys
- Parametric narrative strings with `{child}/{narrator}/{narratorPronoun}/{day}/{planet}/{dayEn}/{lang}` placeholders
- `renderTemplate()`, `getSpread()`, `getPage()` helpers
- Spread pairings verified (pages 24-25 share spread 13)

### Illustration Brief (`ILLUSTRATION_BRIEF.md`)
- 42 distinct assets × 2 styles (Watercolor Warm + Graphic Bold) = 84 files fully specified
- Sections: shared scene templates (12), planet heroes (7), cultural setting backgrounds (12), figure silhouettes (8 inc. child × 2 postures), back matter (3)
- **Phase 0** — self-production learning slice: 3 files (Moon planet hero + day-reveal-scene + child silhouette), one weekend timebox, goal is sourcing judgment not finished art
- **Phase 1** — minimum set for English-edition preview: ~27 files, Watercolor Warm only
- Exported to `ILLUSTRATION_BRIEF.docx` for sharing (gitignored)
- Illustration principle: no faces, figures always face away toward the sky; cultural specificity from background layer, not figure layer

### OG Social Image (`public/og.png`)
- Generated at build time via `scripts/gen-og.mjs` (satori + @resvg/resvg-js)
- Wired as `prebuild` npm hook — regenerates automatically on every Cloudflare Pages build
- Uses `@fontsource/playfair-display` `.woff` file (not .woff2 — satori doesn't support woff2)

### Stakeholder Briefing (`/stakeholders`)
- Internal page, not linked from nav, `robots: noindex`
- Accessible at `wanderers.ngengwe.com/stakeholders` by direct URL only
- Covers: what we're building, how we got here, platform architecture, status table, roadmap, contact

---

## 4. What Needs to Be Built — Full Roadmap

### Phase 1.5 — Immediate (Days)
- [ ] Activate Web3Forms (get key, add to Cloudflare, redeploy)
- [ ] OG social share image (1200×630px) for link previews

### Phase 2 — Illustration System (8–12 weeks, George's creative work)

**Model A: human-illustrated templates + layer compositing. No AI generation at order time.**

The core creative insight: characters face away from the viewer (toward the sky, toward the page). No faces needed. This makes characters universal, eliminates consistency problems, and is a stronger artistic choice.

**Assets to create (total: ~94 files across 2 art styles):**

| Asset group | Count | Description |
|------------|-------|-------------|
| Shared scene templates | 9 | Sky Scene, Question, Ancient Watchers, Language Spread, Reflection, Closing, 3× back matter layouts |
| Planet illustrations | 7 | One hero illustration per wanderer — the centerpiece of each day |
| Planet sky composites | 7 | Sky Scene template with each planet composited in |
| Cultural setting backgrounds | 12 | 6 settings × 2 (interior + exterior night scene) |
| Narrator silhouettes | 6 | Grandmother, grandfather, mother, father, uncle, aunt — no faces, silhouette + clothing cue |
| Typography/layout pages | 6 | Language reveal spread, etymology glossary, reference spread, author's note |

**6 cultural settings:** West African urban · East Asian · South Asian · Latin American · Northern European · Mediterranean · Universal (default)

**2 art styles for launch:**
- **Watercolor Warm** (primary) — soft edges, warm palette, timeless heirloom feel
- **Graphic Bold** (secondary) — flat color, clean shapes, mid-century children's book aesthetic

**Production workflow per asset:**
1. Use Google Imagen/Midjourney to generate rough composition reference (not the final image)
2. Illustrate from that reference using your own skills (digital or traditional)
3. Export as layered file: background / character silhouette / planet / atmosphere — separate layers
4. System composites layers at order time — no AI at generation

**Generation at order time (compositing, not AI):**
- User selects: language + narrator + setting + art style + child name
- System selects correct layers, composites → PNG per page (~10–30 seconds total)
- Child's name typeset on cover, dedication, and in-text dialogue
- Assembles 28-page PDF → ready for print
- Cost per book: ~$0 (no AI API calls)
- Quality: identical every time

### Phase 3 — Backend + Commerce (Weeks, after Phase 2 assets are ready)

**3a — Remove static export, add Cloudflare Workers backend**
- Remove `output: "export"` from next.config.ts
- Install `@cloudflare/next-on-pages` adapter
- Add Route Handlers for: compositing, PDF assembly, Stripe, POD
- Storage: Cloudflare R2 for generated PDFs and layered assets
- Book state: Cloudflare KV (no database needed at this stage)

**3b — Compositing engine**
- Cloudflare Worker accepts book config → selects correct asset layers from R2 → composites PNGs using `@cloudflare/images` or `sharp` WASM → assembles into 28-page PDF via `pdf-lib`
- Trim size: 8.5" × 8.5", 300 DPI, CMYK-compatible

**3c — Preview UI**
- `/preview/[bookId]` page-turner interface
- Spreads load progressively as pages composite
- "Regenerate" placeholder (for future Model C upgrade)

**3d — Stripe payment**
- Pricing: Digital PDF $9.99 / Softcover $24.99 / Hardcover $34.99
- `app/api/checkout/route.ts` → Stripe checkout session
- `app/api/webhook/route.ts` → payment confirmation → triggers PDF finalization + POD

**3e — Print-on-demand (Peecho recommended)**
- POST assembled PDF to Peecho API with shipping address + product spec
- Store Peecho order ID in KV against bookId
- Confirmation email with estimated delivery

### Phase 4 — Personalization Depth (Post-launch)
- Additional cultural settings (user-requested)
- Additional art styles (Style 3: Afrocentric painted; Style 4: ukiyo-e inspired)
- Additional narrator types (teacher, older sibling)
- Language expansion (community-contributed etymology entries)
- Native authors write non-English narrative editions (not AI-translated — authored from within the language)

### Phase 5 — Model C: Full AI Generation (Future, technology-dependent)
Activate when Vertex AI reference images solve character consistency reliably:
- Replace layer compositing with Imagen 3 generation using character reference sheet
- Per-page illustration generation with locked style + character reference
- Enables truly unlimited settings/styles beyond the 6 curated options
- Pricing: ~$0.56–$1.12 per book in illustration API costs — factor into margin
- Keep Model A as fallback (and as the cheaper/faster option for users who want it)

---

## 5. Architecture Shift Required for Phase 3+

**Current**: Fully static Next.js export. No server. No database. No sessions.

**Needed for commercialization:**
- Server-side route handlers (move away from `output: "export"`)
- Options:
  - **Cloudflare Pages Functions** — add `functions/` directory, serverless at the edge, stays on same infrastructure
  - **Cloudflare Workers** — separate worker for API logic, communicate from the static frontend
  - **Supabase** — free-tier Postgres for storing books, orders, contributor data
- **Auth**: Clerk or Supabase Auth for user accounts (save/retrieve generated books)
- **Storage**: Cloudflare R2 or Supabase Storage for generated PDFs and illustration assets
- **Queue**: Cloudflare Queues for async generation jobs (illustration generation can be slow)

Recommended path: keep Cloudflare Pages for the frontend, add Cloudflare Workers for API routes, Supabase for database, R2 for file storage.

---

## 6. Nano Banana (Google Imagen) — Illustration Generation

**What it is**: Google's text-to-image generation model — their equivalent to DALL-E. Accessible via two routes:

| Route | Best for | Auth | Cost |
|-------|----------|------|------|
| **Vertex AI Imagen** (via Google Cloud) | Production, fine-tuning, higher limits | GCP service account JSON | Pay-per-image (~$0.02–0.04/image on Imagen 3) |
| **Gemini API** (via Google AI Studio) | Prototyping, simpler setup | API key | Free tier + pay-as-you-go |

**Recommended path for this project**: Start with the Gemini API (simpler, API key auth, no GCP project required). Migrate to Vertex AI Imagen when ready for production scale or fine-tuned art styles.

---

### What it generates

- **Input**: a text prompt describing the scene, art style, characters, mood
- **Output**: PNG image (base64 or URL depending on SDK)
- **Quality**: excellent for illustrated children's book aesthetics
- **Style control**: art style is prompt-driven — e.g. "soft watercolor illustration, warm palette, grandmother and child looking at the night sky, West African setting, children's picture book style"
- **Character consistency**: the main challenge — maintaining the same character appearance across 28 pages requires either (a) very precise prompting, (b) reference image input (Imagen supports this via Vertex AI), or (c) a seed/style token approach

---

### Illustration prompt structure (per page)

Each page prompt is assembled from user settings + page content:

```
[art style] illustration of [scene description from page text].
[narrator description] and [child description] in [cultural setting].
[mood/time of day]. Children's picture book style. [color palette guidance].
No text in the image.
```

**Example for Monday (Moon), Hindi edition, grandmother narrator, child named Arjun, watercolor style:**
```
Soft watercolor illustration of an elderly Indian grandmother and a young boy 
named Arjun sitting on a rooftop at night, looking up at a full moon. 
The grandmother points to the sky with gentle wonder. Warm lantern light, 
deep blue night sky, stars visible. Children's picture book style. 
Soft, warm palette. No text in the image.
```

---

### Integration architecture

```
[User configures book]
  language + narrator + child (name/gender/appearance)
  + cultural setting + art style
         ↓
[Cloudflare Worker: text pipeline]
  Pull etymology data for selected language
  Fill narrative templates (narrator, child name, pronouns)
  Generate 28 page texts
         ↓
[Cloudflare Worker: illustration pipeline]
  For each page: assemble prompt from page text + user settings
  POST to Gemini API / Vertex AI Imagen
  → receive image (base64 PNG)
  → store in Cloudflare R2 with book ID + page number
  (run sequentially or in batches to respect rate limits)
         ↓
[Preview]
  Frontend polls R2 for completed pages
  Renders page-turner as illustrations arrive (progressive loading)
         ↓
[Assemble PDF]
  Cloudflare Worker: pdf-lib stitches text + images into print-ready PDF
  Correct trim size (e.g. 8×8" or 8.5×8.5") + bleed + color profile
  Store final PDF in R2
         ↓
[Payment → Print → Ship]
  Stripe checkout → POD API submission → fulfillment
```

---

### Gemini API setup (prototype)

```bash
# Install
npm install @google/generative-ai

# Environment variable
GEMINI_API_KEY=your_key_here   # add to Cloudflare Workers secrets
```

```typescript
// Cloudflare Worker illustration route
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

const result = await model.generateContent([
  { text: illustrationPrompt },
]);
// result.response.candidates[0].content.parts → image data
```

> Note: image generation via Gemini API requires the model to support it (check current model list — `gemini-2.0-flash-exp` and `imagen-3.0` via Vertex AI are current as of mid-2025). Confirm the exact model ID before building.

---

### Key challenge: character consistency across 28 pages

DALL-E and Imagen both struggle with this by default. Mitigation strategies:

1. **Vertex AI Imagen with reference images** — upload a "character sheet" image as a reference, subsequent generations stay consistent. Requires Vertex AI (not the simpler Gemini API).
2. **Style + seed locking** — use identical style descriptors and a fixed seed value on every page. Reduces variance but doesn't guarantee consistency.
3. **Manual review + regenerate** — build a "regenerate this page" button in the preview UI so the user can replace any illustration they don't like before buying.
4. **Illustrated style over realistic** — watercolor/sketch styles are more forgiving of minor character inconsistency than photorealistic styles. Lean into this.

**Recommendation**: start with option 3 (user-controlled regeneration) for the prototype, migrate to option 1 (Vertex AI reference images) for the production product.

---

## 7. Print-on-Demand API Evaluation

Three primary candidates for children's picture book printing:

### Lulu Direct API
- REST API, good documentation
- Supports hardcover and softcover picture books
- Global distribution network
- Requires product creation upfront (trim size, page count, etc.)
- Pricing: competitive, especially for small runs
- **Best for**: if you want Amazon/bookstore distribution later

### Peecho
- Print-on-demand API focused on quality publications
- Excellent for photo books and children's books
- Per-print pricing model
- Ships internationally
- Simple REST API
- **Best for**: quality-first, no inventory management

### Gelato
- Strong global printing network (print closest to customer)
- Good API
- Faster delivery times due to local printers
- Children's picture book format available
- **Best for**: fast fulfillment, international audience

**Recommended evaluation criteria:**
1. Children's picture book trim sizes available (8×8, 8.5×11, etc.)
2. Paper stock options (matte vs. gloss, page weight)
3. Minimum order quantity (ideally 1 — true POD)
4. API quality (REST, good error handling, webhooks for status)
5. Time to ship (target: 5–7 business days)
6. Landed cost (print + ship) for a 32-page hardcover to US/EU/Africa

**Action required**: Create test accounts on all three, run the same sample book through each, compare output quality and per-unit landed cost.

---

## 8. Full User Journey (Target State)

```
1. DISCOVER
   wanderers.ngengwe.com → Landing page explains the concept
   LanguageDiscovery section reveals the multilingual angle
   "Try the prototype" → /generate

2. EXPLORE
   /generate → configure language, narrator, child, day
   See a rendered book spread with their settings
   Cross-language panel shows the same day in 12 other languages

3. CREATE
   "Make your book" → full configuration form
   Language + narrator + child (name/gender/appearance) + cultural setting + art style
   System generates: 28-page book with text + illustrations
   Preview: page-turner interface, check every spread

4. CUSTOMIZE
   Regenerate individual illustrations they don't like
   Edit specific text passages
   Change art style on a page
   Re-preview until satisfied

5. BUY
   "Order printed book" → Stripe checkout
   Choose: hardcover / softcover / digital PDF
   Enter shipping address
   Pay

6. FULFILL
   Payment confirmed → Cloudflare Worker assembles final print-ready PDF
   PDF submitted to POD API (Lulu/Peecho/Gelato)
   POD prints and ships directly to customer
   Confirmation email with tracking number

7. SHARE
   "Share your book" → shareable preview link
   Contributes to community (opt-in): "Add my language to the database"
   Review/testimonial flow
```

---

## 9. Current Open Questions for PM

1. **Nano Banana API**: What specifically does it do? Get the docs and update Section 6.
2. **POD service**: Which one? Need quality comparison test with a real sample file.
3. **Pricing model**: What does the book cost to print? What's the right retail margin?
4. **Backend timing**: When does the static export become a problem? Phase 3 requires server-side logic — plan the migration to Cloudflare Pages Functions.
5. **Etymology crowdsourcing**: What's the submission + verification workflow? Who verifies accuracy?
6. **Native authorship**: How do you find and compensate native-language authors for each edition? This is the quality gate for the series vision.
7. **Art style training**: Does Nano Banana support fine-tuned styles, or is it general-purpose? Consistent art style across a 28-page book requires either fine-tuning or very precise prompting.

---

## 10. Tech Debt & Immediate Gaps

| Item | Priority | Notes |
|------|----------|-------|
| Web3Forms key not active | Critical | Losing emails now |
| No OG image | High | Every share shows blank card |
| Static export limits | Medium | Phase 3 requires server routes |
| No database | Medium | Needed for orders, user books |
| No auth | Low | Can be anonymous until Phase 4 |
| No real illustrations | Low | Prototype uses CSS only |
| Narrative templates only partial | Medium | Only Monday's story written fully |

---

## 11. Repository & Key Files

```
c:\becomiNG\HK_Clearway\project_wanderers\
├── app/
│   ├── layout.tsx              # Fonts (Playfair Display + Lora), SEO metadata
│   ├── page.tsx                # Section assembly — narrative order
│   ├── globals.css             # Tailwind v4 @theme, custom animations
│   ├── generate/
│   │   └── page.tsx            # Book generator prototype (client component)
│   └── components/
│       ├── Hero.tsx
│       ├── CoreIdea.tsx
│       ├── BookDescription.tsx
│       ├── HowItWorks.tsx
│       ├── WhyItMatters.tsx
│       ├── LanguageDiscovery.tsx  # EN Norse + DE Mittwoch + PT liturgical explainers
│       ├── WeekGrid.tsx           # 7×5 language grid, data-driven
│       ├── ProjectWanderers.tsx   # Series vision + editions + /generate link
│       ├── Signup.tsx             # Web3Forms integration
│       └── Footer.tsx
├── data/
│   └── etymology.ts            # 13 languages, 91 day entries, getDayEntry()
├── types/
│   └── etymology.ts            # LanguageEntry, DayEntry, Planet, EtymologyType
├── next.config.ts              # output: "export", trailingSlash, images unoptimized
├── next.config.js              # CommonJS fallback for Cloudflare builder
└── PROJECT_PM.md               # This file
```

---

## 12. Contact & Credentials Context

- **Owner**: George-Leonard Ncheumeni Ngengwe (George Ngengwe)
- **Email**: gngengwe@gmail.com
- **Entity**: HK Clearway LLC (powered by becomiNG)
- **GitHub user**: gngengwe
- **Cloudflare account**: tied to gngengwe@gmail.com
- **Domain registrar**: HostMonster (FTP: ftp.ngengwe.com, user: gngengwe@ngengwe.com)
- **Web3Forms**: sign up with gngengwe@gmail.com to get access key
