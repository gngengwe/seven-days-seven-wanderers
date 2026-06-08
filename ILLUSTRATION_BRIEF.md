# ILLUSTRATION_BRIEF.md
## Seven Days, Seven Wanderers — Complete Asset Specification

All illustrations follow a fixed compositional principle:
**Characters always face away from the viewer, toward the sky.**
No faces are shown. This solves character consistency across editions
and is stronger artistically — the reader looks with the characters, not at them.

---

## Art Styles

Two complete style sets. Every asset is created in both styles.

### Style A — Watercolor Warm
- Medium: watercolor wash + ink line, slight texture
- Palette: warm navy/indigo backgrounds, gold planet glows, soft earth tones for figures
- Feel: timeless, emotional, book-like — suitable for libraries and gift market
- Reference mood: Oliver Jeffers, Jon Klassen

### Style B — Graphic Bold
- Medium: flat vector + bold block color, minimal line
- Palette: high-contrast navy + gold + vivid planet accent colors
- Feel: modern, clean, screen-friendly — suitable for digital editions and younger readers
- Reference mood: Isol, Blexbolex

---

## File Naming Convention

```
{style}_{slot-name}_{variant}.png
```

Examples:
- `warm_planet-hero-sun.png`
- `bold_planet-hero-sun.png`
- `warm_narrator-grandmother.png`
- `warm_cultural-bg-east-africa-night.png`

All files: PNG with transparency (RGBA), 2400px wide minimum, 300dpi.

---

## SECTION 1 — Shared Scene Templates (12 assets × 2 styles = 24 files)

These scenes appear in all editions regardless of language or narrator choice.
The narrator silhouette, child silhouette, and cultural background are composited on top as separate layers.

**`day-reveal-scene` is one shared asset reused for all 7 planet-day pages.** The facing planet-hero illustration provides the specific planet context, so the scene itself does not need to vary per planet. Optional future upgrade: 7 atmospheric lighting variants (e.g. warm orange tint for Sun's day, cool silver for Moon's day) — tag these as a Phase 2 enhancement, not required for V1.

### 1.1 title-spread
- Full 2-page spread (4800×3200px when spread, 2400×3200px per page)
- Sky filling the frame, seven faint wandering lights visible as warm orbs
- No figures on this page — pure sky
- Text space: center, large, upper third of right page
- Imagen prompt (Watercolor):
  > "A wide watercolor illustration of a deep indigo night sky with seven glowing orbs of light — yellow, silver, red, grey, amber, pink, and gold — floating at different heights. No figures. Loose ink wash texture. Warm gold rim light on the horizon. Space for text in upper center. Children's picture book style."

### 1.2 dedication
- Single page, simple
- A small crescent moon in the upper corner, soft glow
- Mostly white/cream paper showing, minimal illustration
- Imagen prompt:
  > "A simple watercolor crescent moon, small and centered, soft gold glow, on a white textured paper background. Minimal. Children's picture book style."

### 1.3 opening-scene
- Wide establishing shot: an interior or exterior space at dusk
- Two silhouettes visible from behind: one adult (seated or standing), one child (smaller)
- Both looking outward at an opening — window, doorway, or open yard
- First star visible in the darkening sky beyond
- NO cultural specifics in this template — cultural background layer added separately
- Imagen prompt (Watercolor):
  > "Two silhouettes from behind — a taller adult and a smaller child — seated near a large window or open door. The sky beyond is deep indigo at dusk. One bright star is visible. Warm interior light from the left. No faces visible. Loose watercolor wash. Children's picture book style."

### 1.4 question-scene
- Child silhouette looking upward, arm possibly pointing
- Adult silhouette beside them, slightly turned, gesture of showing or explaining
- Sky with visible orb of light (generic, color-placeholder for compositing)
- Imagen prompt:
  > "A child silhouette looking upward with curiosity, one arm raised slightly. Beside them, an adult silhouette with a gentle gesture pointing toward the sky. Night sky background with a soft glowing orb above. No faces. Watercolor wash. Children's picture book style."

### 1.5 sky-scene-wide
- Panoramic sky, full spread
- Seven distinct glowing orbs at different heights and colors arranged in a loose arc
- Faint constellation lines visible as gold thread
- No figures
- Imagen prompt:
  > "Wide panoramic watercolor illustration of a deep night sky. Seven glowing orbs in different colors — golden yellow, silver, brick red, cool grey, warm amber, pale pink, antique gold — arranged in a gentle arc. Faint gold thread lines connecting them like star maps. No figures. Children's picture book style."

### 1.6 seven-wanderers-diagram
- Stylized circular diagram: seven orbs arranged in a ring
- Each labeled with a symbol (not text — symbol only, for multilingual use)
- Astronomical symbol for each planet: ☉ ☽ ♂ ☿ ♃ ♀ ♄
- Illustrated rather than technical — each orb with texture and glow
- Imagen prompt:
  > "A stylized circular diagram with seven glowing orbs arranged in a ring. Each orb has a different color and texture — a golden sun, a silver crescent, a red Mars, a grey Mercury, an amber Jupiter, a pink Venus, and a tan Saturn. Each has its astronomical symbol faintly visible. Illustrated style, not technical. Warm watercolor. Children's picture book."

### 1.7 reflection-scene
- Quieter moment: one adult and one child, small in frame
- Sitting together under a sky full of stars
- Adult's arm around the child, both looking up
- Wide-format, lots of sky
- Imagen prompt:
  > "A small adult and child silhouette sitting together under a vast star-filled sky, the adult's arm around the child. Both looking upward. Very wide composition — sky fills most of the frame. No faces. Loose watercolor. Children's picture book style."

### 1.8 closing-night-sky
- Full-spread night sky, the seven wanderers glowing brightly
- Possible small silhouettes at the bottom edge
- Intentionally similar to 1.5 but richer, fuller — the ending
- Imagen prompt:
  > "A full-spread deep indigo night sky with seven distinct glowing planets in a gentle arc. Richer and more luminous than an opening page — this is the climax of the sky scenes. Small silhouettes visible at the very bottom. Gold star-thread visible. Watercolor. Children's picture book style."

### 1.9 language-comparison-chart
- A stylized visual grid or scatter of day names in multiple scripts
- Arabic, Japanese/Korean characters, Latin script, Devanagari visible
- Illustrated as glowing text, not a data table
- Artistic, not informational — the viewer sees many languages at once
- Imagen prompt:
  > "A stylized watercolor illustration of floating day-name words in different scripts — Arabic, Japanese, Latin, Devanagari, Cyrillic — glowing softly like stars in a dark sky. Not a table. Poetic arrangement. Children's picture book style."

### 1.10 day-reveal-scene
- One shared template used for all 7 planet-day right-hand pages (pages 9, 11, 13, 15, 17, 19, 21)
- Narrator and child silhouettes in setting, both oriented toward a soft off-frame light source (the planet on the facing page)
- Calm, attentive mood — child is listening, narrator is explaining
- No planet in this frame; all planetary color comes from the facing planet-hero illustration
- Text-safe zone: lower half, 50% of page height — the scene fills the upper half
- Imagen prompt:
  > "Two silhouettes from behind — an adult and a child — seated near an opening, both oriented toward a soft light source off-frame to the left. Calm, attentive mood. The light is warm and diffuse — no specific planet visible. Large upper-half composition, lower half clear for text. Watercolor. Children's picture book style."

### 1.11 seven-days-circle
- A circular diagram showing the seven-day week cycle, one day per position
- Each position holds a planet symbol (☉ ☽ ♂ ☿ ♃ ♀ ♄), illustrated as small glowing orbs
- Connecting arc or ring shows the week as a repeating cycle, not a list
- Distinct from `seven-wanderers-diagram` (Section 1.6): that shows planets as a group; this shows the week as a cycle
- Imagen prompt:
  > "A circular diagram showing seven positions around a ring, each marked with a small glowing planet orb in its canonical color — golden sun, silver moon, red Mars, grey Mercury, amber Jupiter, pink Venus, gold Saturn. A subtle arc or ring connects them as a cycle. Illustrated style, not technical. Watercolor. Children's picture book style."

### 1.12 language-spread-scene
- Narrative scene: narrator and child looking at something together — a book, a chart, the sky — with wonder
- This is an illustrated narrative moment, not a typographic piece (that's `language-comparison-chart`)
- The mood is the pivot of the book: the world just got bigger
- No specific language scripts in this illustration — those appear on the facing page (1.9)
- Imagen prompt:
  > "Two silhouettes from behind — an adult and a child — looking together at something just off-frame, their postures suggesting discovery and wonder. The setting is open, airy. A sense of the world getting larger. Warm watercolor. No text or scripts in the illustration. Children's picture book style."

---

## SECTION 2 — Planet Hero Illustrations (7 planets × 2 styles = 14 files)

Full-bleed left-page illustrations. Each planet takes the full page.
No figures, no text space needed — pure planetary illustration.

### 2.1 planet-hero-sun
- Warm golden orb, radiant, filling most of the frame
- Soft corona visible, warm light spreading outward
- Imagen prompt:
  > "A large golden sun orb filling most of the frame, with a soft radiant corona spreading outward. Warm amber and yellow watercolor. Textured surface like brush strokes on water. No text, no figures. Full-bleed. Children's picture book style."

### 2.2 planet-hero-moon
- Silver-white orb with subtle texture (mare, craters as loose wash marks)
- Surrounded by deep indigo
- Thin star visible alongside
- Imagen prompt:
  > "A large silver-white moon orb with subtle watercolor texture suggesting surface detail. Deep indigo background. One or two faint stars nearby. Full-bleed. Children's picture book style."

### 2.3 planet-hero-mars
- Red-orange orb, slightly mottled
- Warm brick red with subtle cooler edges
- Small rust-colored dust haze around it
- Imagen prompt:
  > "A large brick-red Mars planet orb with subtle surface mottling in watercolor. Warm red-orange tones with cooler edges. A faint rusty haze or glow surrounding it. Full-bleed. Children's picture book style."

### 2.4 planet-hero-mercury
- Smaller orb — visually the smallest of the seven
- Cool grey with a subtle blue-silver sheen
- Positioned close to a barely-visible sun glow at the edge
- Imagen prompt:
  > "A smaller cool grey planet orb with a blue-silver sheen in watercolor. At the very edge of the frame, a soft warm glow suggests the nearby sun. The planet looks quick, small, close to light. Full-bleed. Children's picture book style."

### 2.5 planet-hero-jupiter
- Largest of the seven — takes dominant portion of frame
- Warm amber-orange with faint horizontal band markings
- Subtle cloud texture
- Imagen prompt:
  > "A large dominant amber-orange Jupiter planet in watercolor, with subtle horizontal band markings and soft cloud texture. The largest planet, filling most of the frame with authority. Full-bleed. Children's picture book style."

### 2.6 planet-hero-venus
- Brilliant white-gold orb, almost too bright to look at
- Soft pink-gold rim, light spreading dramatically
- Positioned in a pre-dawn scene — dark blue sky behind
- Imagen prompt:
  > "An intensely bright white-gold Venus orb set against a deep pre-dawn blue sky in watercolor. The light spreads dramatically. A soft pink-gold rim. Almost overwhelming in its brightness. Full-bleed. Children's picture book style."

### 2.7 planet-hero-saturn
- Warm gold orb with clearly visible ring
- The ring is illustrated loosely, like watercolor wash rings
- Slowest feeling — more space around it
- Imagen prompt:
  > "A warm gold Saturn with a soft watercolor ring system. The ring is illustrated loosely, not technically precise. The composition has more space around the planet than the others — it feels unhurried. Full-bleed. Children's picture book style."

---

## SECTION 3 — Cultural Setting Backgrounds (6 settings × 2 scenes × 2 styles = 24 files)

Every background is a pure environment — no figures, no text.
The narrator silhouette and child silhouette are composited on top as separate layers.

Each setting has two versions:
- **interior-dusk**: indoors, window showing dusk/night sky
- **exterior-night**: outdoors, open sky, setting-appropriate environment

### 3.1 East Africa
- Interior: thatched-roof home, warm lamp light, wide open window, savanna visible outside
- Exterior: open savanna with acacia trees silhouetted against night sky
- Palette: warm red-browns, golden lamp glow, deep indigo sky

### 3.2 West Africa / Coastal
- Interior: veranda or open-sided room, ocean glimpse, batik-patterned cloth
- Exterior: coastal scene, palm silhouettes, sand reflecting moonlight

### 3.3 South Asia
- Interior: cool tile floor, carved wooden window frame, jasmine garlands visible
- Exterior: rooftop terrace with city lights below, open sky above

### 3.4 East Asia
- Interior: paper screen (shoji), low furniture, soft lantern light
- Exterior: garden or courtyard, bamboo visible, tiled roofline silhouette

### 3.5 Northern Europe
- Interior: stone cottage, fireplace glow, small square window to dark sky
- Exterior: open heath or highland, dramatic wide sky, heather ground cover

### 3.6 Latin America
- Interior: adobe wall, tile floor, open courtyard arch, blooming plant
- Exterior: open rooftop or patio, city or mountain visible, night blooms

### Imagen prompt template (adapt per setting):
> "A {setting description} interior at dusk, warm light from within, a large window or open wall showing a deep night sky. No figures. Watercolor background illustration, slightly desaturated compared to the foreground. Children's picture book style."

---

## SECTION 4 — Figure Silhouettes (7 figures × 2 styles = 14 files)

Each silhouette is a standalone transparent PNG.
Figures always face away from the viewer.
Posture conveys warmth and presence without showing a face.

No skin tone specified — silhouettes are solid dark shapes against the background.
Cultural clothing cues are subtle but present.

**Clothing approach**: silhouettes should be drawn in a culturally neutral but dignified style of dress. Loose flowing garments read universally. Avoid clothing that is iconically specific to one culture (e.g., no kimonos, no Scottish kilts). The cultural specificity comes from the background layer, not the figure layer. The compositor pairs any figure with any background.

### 4.0 child (shared across all editions)
- Smaller stature than any narrator — clearly a young child
- Loose, simple clothing — no cultural specificity
- Two posture variants needed: seated (used in interior scenes) and standing (used in exterior scenes)
- File names: `warm_child-seated.png`, `warm_child-standing.png` (counted as 2 files)
- Imagen prompt (seated):
  > "A small child silhouette from behind, seated, in loose simple clothing. No face shown. Solid dark silhouette. Transparent background. Clearly younger than an adult. Children's picture book style."
- Imagen prompt (standing):
  > "A small child silhouette from behind, standing, looking upward slightly. Loose simple clothing. No face shown. Solid dark silhouette. Transparent background. Children's picture book style."

### 4.1 grandmother
- Shorter stature, slightly rounded silhouette
- Loose traditional or modest clothing (long skirt/wrapper/robe depending on edition)
- Seated or standing with relaxed, loving posture

### 4.2 grandfather
- Taller than grandmother, broader shoulders
- Simple clothing with dignity — could be a kaftan, robe, or trousers + top
- May have a slight lean forward, hands on knees if seated

### 4.3 mother
- Young adult, medium height
- Could be carrying or wearing something that suggests home/life
- Relaxed but attentive posture

### 4.4 father
- Young adult, taller
- Open posture, arm possibly out or around child's direction

### 4.5 uncle
- Young adult to middle-aged, energetic posture
- Slightly leaning, casual

### 4.6 aunt
- Young adult to middle-aged, warm and close
- Close to child silhouette in composition

### Imagen prompt template:
> "A {narrator description, e.g. 'taller adult woman'} silhouette from behind, facing away, in loose flowing clothing with subtle drape suggesting dignity and warmth. No face shown. Solid dark silhouette with subtle clothing shape detail. Transparent background. Children's picture book style."

---

## SECTION 5 — Back Matter Illustrations (3 assets × 2 styles = 6 files)

### 5.1 back-matter-planet-list
- Seven planet orbs in a vertical or circular arrangement, numbered or with symbols
- Each orb labeled with its symbol only (not text)
- Clean, simple, reference-style but still illustrated

### 5.2 back-matter-language-map
- A loose world map shape, not technically accurate
- Seven or more languages marked with a glowing day name in their script
- Warm, illustrative, not a geography lesson

### 5.3 back-matter-colophon
- Simple decorative element: the seven planet symbols arranged as a row or ring
- Small, elegant, page-bottom placement

---

## Asset Checklist Summary — Full Platform

| Section | Assets | × Styles | = Files |
|---------|--------|----------|---------|
| Shared scene templates | 12 | 2 | 24 |
| Planet hero illustrations | 7 | 2 | 14 |
| Cultural setting backgrounds | 12 | 2 | 24 |
| Figure silhouettes (6 narrators + child ×2 postures = 8) | 8 | 2 | 16 |
| Back matter illustrations | 3 | 2 | 6 |
| **Total** | **42** | | **84** |

---

## Phase 1 Minimum Asset Set (English edition, one setting, one narrator, Watercolor Warm only)

To launch a working preview of the English edition, only the following Watercolor Warm assets are needed. This is ~26 files, achievable in 3–4 weeks:

| Asset | Slot | Files |
|-------|------|-------|
| Shared scenes (all 12) | 1.1–1.12 | 12 |
| Planet heroes (all 7) | 2.1–2.7 | 7 |
| 1 cultural setting × 2 scenes (suggest: East Africa) | 3.1 | 2 |
| Grandmother silhouette (seated + standing child) | 4.0, 4.1 | 3 |
| Back matter (all 3) | 5.1–5.3 | 3 |
| **Phase 1 total** | | **27** |

The compositor can be fully built and tested against these 27 files. Additional narrators, settings, and the Bold style are additive — they slot in without architecture changes.

---

## Composition Rules (apply to all assets)

1. **No faces** — all figures face away from the viewer, toward the sky or an opening
2. **Sky orientation** — compositions are designed to make the viewer look upward
3. **Text-safe zones** — scenes with heading overlays keep the upper-right or lower portion clear of detail
4. **Layer compatibility** — background, figure, and planet are separate PNG files for compositing
5. **Planet colors are canonical** — Sun (#f59e0b), Moon (#cbd5e1), Mars (#dc4c2a), Mercury (#94a3b8), Jupiter (#d4874a), Venus (#f472b6), Saturn (#c89b3c)
6. **Minimum resolution** — 2400px wide per page, 300dpi, RGBA PNG

---

## Delivery Format

```
assets/
  warm/
    shared/
      warm_title-spread.png
      warm_opening-scene.png
      ...
    planets/
      warm_planet-hero-sun.png
      ...
    settings/
      warm_east-africa-interior.png
      ...
    narrators/
      warm_narrator-grandmother.png
      ...
    back-matter/
      warm_back-matter-planet-list.png
      ...
  bold/
    [same structure]
```

Suggested working order: complete one style for all 37 assets before starting the second style.
Start with Watercolor Warm (Style A).
