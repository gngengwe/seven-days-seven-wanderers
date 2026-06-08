/**
 * Generates public/og.png — 1200×630 social share image.
 * Run: node scripts/gen-og.mjs
 * Wired into build via: "prebuild": "node scripts/gen-og.mjs"
 */

import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const fontData = readFileSync(
  join(root, "node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff")
);

const GOLD  = "#d4a843";
const CREAM = "#fdf6e3";
const NAVY  = "#0d1b2a";
const MUTED = "#c4b490";
const DIM   = "#4a5568";

const PLANETS = [
  { sym: "☉", color: "#f59e0b" },
  { sym: "☽", color: "#cbd5e1" },
  { sym: "♂",  color: "#dc4c2a" },
  { sym: "☿", color: "#94a3b8" },
  { sym: "♃", color: "#d4874a" },
  { sym: "♀",  color: "#f472b6" },
  { sym: "♄", color: "#c89b3c" },
];

const el = (type, style, children) => ({
  type, key: null,
  props: { style: { display: "flex", ...style }, children },
});

const txt = (content, style) => el("span", style, content);

const svg = await satori(
  el("div",
    {
      width: 1200, height: 630,
      background: NAVY,
      flexDirection: "column",
      padding: "60px 72px",
      gap: 0,
      position: "relative",
    },
    [
      // Row 1 — planet orbs
      el("div", { gap: 24, marginBottom: 48 },
        PLANETS.map(({ sym, color }) =>
          el("div",
            {
              width: 50, height: 50, borderRadius: 25,
              background: color,
              alignItems: "center", justifyContent: "center",
              fontSize: 22, color: "rgba(255,255,255,0.9)",
            },
            sym
          )
        )
      ),

      // Row 2 — title
      el("div", { flexDirection: "column", gap: 16, flex: 1 }, [
        txt("Seven Days, Seven Wanderers", {
          fontFamily: "Playfair", fontSize: 72, fontWeight: 400,
          color: CREAM, lineHeight: 1.08, letterSpacing: -1,
        }),

        el("div", { width: 80, height: 3, background: GOLD, borderRadius: 2, marginTop: 8, marginBottom: 8 }, null),

        txt(
          "The hidden sky-story inside every ordinary week. A picture book for curious children.",
          { fontFamily: "Playfair", fontSize: 28, color: MUTED, lineHeight: 1.5, maxWidth: 680 }
        ),
      ]),

      // Row 3 — footer
      el("div", { justifyContent: "space-between", alignItems: "flex-end" }, [
        txt("wanderers.ngengwe.com", {
          fontFamily: "Playfair", fontSize: 20, color: GOLD, letterSpacing: 2,
        }),
        txt("PROJECT WANDERERS · VOLUME 1", {
          fontFamily: "Playfair", fontSize: 14, color: DIM, letterSpacing: 3,
        }),
      ]),
    ]
  ),
  {
    width: 1200,
    height: 630,
    fonts: [{ name: "Playfair", data: fontData, weight: 400, style: "normal" }],
  }
);

const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
const png   = resvg.render().asPng();

const outDir = join(root, "public");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "og.png");
writeFileSync(outPath, png);

console.log(`✓ OG image → ${outPath} (${Math.round(png.byteLength / 1024)} KB)`);
