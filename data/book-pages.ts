/**
 * 28-page parametric book template for Seven Days, Seven Wanderers.
 *
 * Parameters available in every text template:
 *   {child}           — child's name (e.g. "Kwame")
 *   {narrator}        — narrator label lowercase (e.g. "grandmother")
 *   {narratorPronoun} — she/he/they depending on narrator choice
 *   {day}             — day name in chosen language (e.g. "Lunes")
 *   {planet}          — planet name (e.g. "Mars")
 *   {dayEn}           — English day name (e.g. "Tuesday")
 *   {lang}            — language name (e.g. "Spanish")
 *
 * Page types drive the illustration layer selection:
 *   "title"       — book cover/title spread
 *   "opening"     — narrator + child scene
 *   "question"    — child looks up, narrator points to sky
 *   "sky-scene"   — wide sky, wanderers visible
 *   "planet-hero" — full-bleed planet illustration
 *   "day-reveal"  — day name typography reveal
 *   "cross-lang"  — word comparison across languages
 *   "reflection"  — quiet moment, child thinking
 *   "closing"     — last night sky scene
 *   "back-matter" — etymology/activity pages
 */

export type PageType =
  | "title"
  | "opening"
  | "question"
  | "sky-scene"
  | "planet-hero"
  | "day-reveal"
  | "cross-lang"
  | "reflection"
  | "closing"
  | "back-matter";

export interface BookPage {
  page: number;
  spread: number;       // which two-page spread this belongs to (1–14)
  side: "left" | "right" | "full";
  type: PageType;
  heading?: string;     // large display text, may use {day} / {planet}
  body: string[];       // paragraphs; each string is one paragraph
  note?: string;        // small caption or footer note
  illustrationSlot: string;  // which illustration asset category to use
}

export const BOOK_PAGES: BookPage[] = [

  // ── SPREAD 1: Title spread ──────────────────────────────────────────────────
  {
    page: 1, spread: 1, side: "full", type: "title",
    heading: "Seven Days,\nSeven Wanderers",
    body: [],
    note: "A {lang} Edition",
    illustrationSlot: "title-spread",
  },

  // ── SPREAD 2: Dedication / verso + Opening scene ────────────────────────────
  {
    page: 2, spread: 2, side: "left", type: "opening",
    body: ["For every child who has ever asked why."],
    illustrationSlot: "dedication",
  },
  {
    page: 3, spread: 2, side: "right", type: "opening",
    body: [
      "{child} and {narrator} sat outside as the day faded.",
      "The first star appeared. Then another.",
    ],
    illustrationSlot: "opening-scene",
  },

  // ── SPREAD 3: The week question ─────────────────────────────────────────────
  {
    page: 4, spread: 3, side: "left", type: "question",
    body: [
      "\"Why is today called {day}?\" asked {child}.",
      "{narrator} smiled. \"That is a very old question,\" {narratorPronoun} said. \"And the answer is up there.\"",
    ],
    illustrationSlot: "question-scene",
  },
  {
    page: 5, spread: 3, side: "right", type: "sky-scene",
    heading: "The Sky had Wanderers.",
    body: [
      "Long before there were calendars, people looked up and saw lights that moved. Not stars — those stayed in their places. These moved. Night after night, they wandered.",
    ],
    illustrationSlot: "sky-scene-wide",
  },

  // ── SPREAD 4: The seven wanderers ───────────────────────────────────────────
  {
    page: 6, spread: 4, side: "left", type: "sky-scene",
    body: [
      "Sky-watchers counted seven wanderers: the Sun, the Moon, and five bright points of light they named after their gods.",
      "Each wanderer was given a day.",
    ],
    illustrationSlot: "seven-wanderers-diagram",
  },
  {
    page: 7, spread: 4, side: "right", type: "sky-scene",
    body: [
      "The seven days of the week still carry those names — sometimes clearly, sometimes hidden inside words so old that most people have forgotten where they came from.",
      "\"Let us find them,\" said {narrator}.",
    ],
    illustrationSlot: "seven-days-circle",
  },

  // ── SPREAD 5: Day 1 — Sun's day ─────────────────────────────────────────────
  {
    page: 8, spread: 5, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The Sun's day",
    illustrationSlot: "planet-hero-sun",
  },
  {
    page: 9, spread: 5, side: "right", type: "day-reveal",
    body: [
      "The first wanderer rose every morning and set every evening. It brought warmth and light. Every ancient people knew it.",
      "\"In {lang}, we call this day {day},\" said {narrator}. \"The wanderer of light gave it its name.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 6: Day 2 — Moon's day ────────────────────────────────────────────
  {
    page: 10, spread: 6, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The Moon's day",
    illustrationSlot: "planet-hero-moon",
  },
  {
    page: 11, spread: 6, side: "right", type: "day-reveal",
    body: [
      "The Moon changed shape — thin as a thread one night, full and round the next. It was the most familiar wanderer.",
      "\"{day} holds the Moon inside it,\" {narrator} told {child}. \"In many languages you can still hear it.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 7: Day 3 — Mars/Tiw's day ────────────────────────────────────────
  {
    page: 12, spread: 7, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The warrior's day",
    illustrationSlot: "planet-hero-mars",
  },
  {
    page: 13, spread: 7, side: "right", type: "day-reveal",
    body: [
      "One wanderer glowed red, like iron in the fire. The sky-watchers thought of warriors when they saw it.",
      "\"This day carries the name of a warrior,\" said {narrator}. \"The red wanderer, {planet}, or a god of war who replaced it.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 8: Day 4 — Mercury/Woden's day ───────────────────────────────────
  {
    page: 14, spread: 8, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The swift one's day",
    illustrationSlot: "planet-hero-mercury",
  },
  {
    page: 15, spread: 8, side: "right", type: "day-reveal",
    body: [
      "The smallest wanderer moved fastest of all — appearing in the dawn and vanishing again before you could blink. The sky-watchers called it the messenger.",
      "{child} counted on their fingers. \"We are halfway through the week,\" they said. {narrator} nodded. \"Right in the middle.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 9: Day 5 — Jupiter/Thor's day ────────────────────────────────────
  {
    page: 16, spread: 9, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The king's day",
    illustrationSlot: "planet-hero-jupiter",
  },
  {
    page: 17, spread: 9, side: "right", type: "day-reveal",
    body: [
      "One wanderer moved with great, slow dignity — brighter than any star. The sky-watchers imagined it must belong to the greatest of their gods.",
      "\"This day belongs to the king of the wanderers,\" said {narrator}. \"{planet}, or the god who stood in its place.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 10: Day 6 — Venus/Frigg's day ────────────────────────────────────
  {
    page: 18, spread: 10, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The bright one's day",
    illustrationSlot: "planet-hero-venus",
  },
  {
    page: 19, spread: 10, side: "right", type: "day-reveal",
    body: [
      "Before sunrise, a wanderer appeared in the east — so bright it could cast a faint shadow. No other point of light came close.",
      "\"This day carries the name of beauty and light,\" said {narrator}. \"{planet} — the wanderer of the dawn sky.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 11: Day 7 — Saturn/Sabbath ───────────────────────────────────────
  {
    page: 20, spread: 11, side: "left", type: "planet-hero",
    heading: "{day}",
    body: [],
    note: "The slow one's day",
    illustrationSlot: "planet-hero-saturn",
  },
  {
    page: 21, spread: 11, side: "right", type: "day-reveal",
    body: [
      "The last wanderer moved slowest of all. It took nearly thirty years to complete one journey around the heavens. The sky-watchers saw in it the great passing of time.",
      "\"And so the seven days were given to the seven wanderers,\" said {narrator}. \"Now you know where your week came from.\"",
    ],
    illustrationSlot: "day-reveal-scene",
  },

  // ── SPREAD 12: Cross-language comparison ────────────────────────────────────
  {
    page: 22, spread: 12, side: "left", type: "cross-lang",
    heading: "The Same Sky, Many Names",
    body: [
      "{child} looked at the list. The same seven wanderers. But each language had found its own words.",
      "\"Some languages kept the planet names. Others used the names of their own gods. Some hid the planets so well you need to know where to look.\"",
    ],
    illustrationSlot: "language-spread-scene",
  },
  {
    page: 23, spread: 12, side: "right", type: "cross-lang",
    body: [
      "\"Is it the same story?\" asked {child}.",
      "\"It is the same sky,\" said {narrator}. \"Same wanderers. Same seven days. Each language tells it from where it stands.\"",
    ],
    note: "Turn the page to see how other languages name each day.",
    illustrationSlot: "language-comparison-chart",
  },

  // ── SPREAD 13: Reflection + Closing (face each other) ───────────────────────
  {
    page: 24, spread: 13, side: "left", type: "reflection",
    body: [
      "{child} was quiet for a moment. The stars were bright now.",
      "\"So every time someone says {day}, they are saying the name of a wanderer?\"",
      "\"Every time,\" said {narrator}. \"Even if they do not know it.\"",
    ],
    illustrationSlot: "reflection-scene",
  },
  {
    page: 25, spread: 13, side: "right", type: "closing",
    body: [
      "{child} looked up. Seven lights moved slowly in the deep sky.",
      "They had always been there. They had given their names to every week that had ever passed.",
      "Now {child} knew their names.",
    ],
    illustrationSlot: "closing-night-sky",
  },

  // ── Back matter: pages 26–28 ─────────────────────────────────────────────────
  {
    page: 26, spread: 0, side: "full", type: "back-matter",
    heading: "The Seven Wanderers",
    body: [
      "Sun — the wanderer of light and warmth",
      "Moon — the wanderer that changes shape",
      "Mars — the red wanderer of warriors",
      "Mercury — the swift wanderer, the messenger",
      "Jupiter — the bright wanderer, king of the sky",
      "Venus — the wanderer of the dawn",
      "Saturn — the slow wanderer of deep time",
    ],
    note: "Each gave a name to one day of the week.",
    illustrationSlot: "back-matter-planet-list",
  },
  {
    page: 27, spread: 0, side: "full", type: "back-matter",
    heading: "Your Week in Many Languages",
    body: [
      "The days of the week are named differently in every language — but most languages inherited the same seven wanderers.",
      "Some kept the Roman planet names. Some replaced them with Norse gods. Some counted the days from a holy day. And some, like Japanese and Korean, kept the planets but described them in elements: fire, water, wood, metal, earth.",
      "All of these calendars come from the same ancient sky.",
    ],
    note: "Ask a grown-up to help you find your language in this book.",
    illustrationSlot: "back-matter-language-map",
  },
  {
    page: 28, spread: 0, side: "full", type: "back-matter",
    heading: "About This Book",
    body: [
      "Seven Days, Seven Wanderers is a picture book about the astronomical origins of the days of the week. The seven visible planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, and Saturn — were identified by ancient astronomers across many civilisations. The seven-day week and its planetary associations spread through the ancient world and survive in most of the world's major languages today.",
      "This book was written to be true to the etymology of each language edition. No day name has been invented or simplified.",
    ],
    note: "Series concept and etymology database: Project Wanderers",
    illustrationSlot: "back-matter-colophon",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function renderTemplate(
  template: string,
  vars: Record<string, string>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

export function getSpread(spreadNum: number): BookPage[] {
  return BOOK_PAGES.filter((p) => p.spread === spreadNum);
}

export function getPage(pageNum: number): BookPage | undefined {
  return BOOK_PAGES.find((p) => p.page === pageNum);
}
