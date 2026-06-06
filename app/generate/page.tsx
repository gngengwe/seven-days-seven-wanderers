"use client";

import { useState } from "react";
import { LANGUAGES, getDayEntry } from "@/data/etymology";

// ── Visual + story data per planet ──────────────────────────────────────────
const PLANET_DATA: Record<string, { symbol: string; color: string; story: string }> = {
  Sun: {
    symbol: "☉", color: "#f59e0b",
    story: "Long before there were calendars, sky-watchers looked up and saw a great wanderer — one that brought light and warmth every morning. They called it the Sun. They gave it the very first day.",
  },
  Moon: {
    symbol: "☽", color: "#cbd5e1",
    story: "When the light of day faded and the world grew quiet, a silver wanderer rose into the sky. It changed shape — thin as a thread, then full and round — then disappeared, and came back again. The old sky-watchers called it the Moon and gave it a day all its own.",
  },
  Mars: {
    symbol: "♂", color: "#dc4c2a",
    story: "There was a wanderer that glowed red as iron in the fire. The ancient sky-watchers saw it move slowly through the stars — unhurried, powerful. They thought of warriors when they saw it. They called it Mars.",
  },
  Mercury: {
    symbol: "☿", color: "#94a3b8",
    story: "The smallest wanderer raced close to the Sun — appearing briefly in the dawn, then vanishing again. No other wanderer moved so quickly. The sky-watchers called it Mercury, the swift messenger, and gave it its own day.",
  },
  Jupiter: {
    symbol: "♃", color: "#d4874a",
    story: "Of all the wanderers, one moved with great, slow dignity — brighter than any star. The sky-watchers imagined it must belong to the mightiest of their gods. They called it Jupiter, the king of the wanderers, and gave it a day.",
  },
  Venus: {
    symbol: "♀", color: "#f472b6",
    story: "Before the Sun rose each morning, a wanderer appeared in the east — so bright it could cast shadows. It outshone every other point of light in the sky. They called it Venus, the wanderer of beauty.",
  },
  Saturn: {
    symbol: "♄", color: "#c89b3c",
    story: "Moving slowest of all, Saturn took nearly thirty years to complete one great journey around the heavens. The old sky-watchers saw in it the passage of great time. They named it Saturn and gave it the last day.",
  },
};

const NARRATORS = [
  { id: "grandmother", label: "Grandmother" },
  { id: "grandfather", label: "Grandfather" },
  { id: "mother",      label: "Mother"      },
  { id: "father",      label: "Father"      },
  { id: "uncle",       label: "Uncle"       },
  { id: "aunt",        label: "Aunt"        },
];

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// ── Page ────────────────────────────────────────────────────────────────────
export default function GeneratePage() {
  const [langCode,   setLangCode]   = useState("en");
  const [narratorId, setNarratorId] = useState("grandmother");
  const [childName,  setChildName]  = useState("Kwame");
  const [dayIndex,   setDayIndex]   = useState(1); // Monday

  const lang     = LANGUAGES.find((l) => l.code === langCode)!;
  const narrator = NARRATORS.find((n) => n.id === narratorId)!;
  const dayEntry = getDayEntry(langCode, dayIndex);
  const planet   = dayEntry ? PLANET_DATA[dayEntry.planet] : null;
  const child    = childName.trim() || "the child";

  const crossLang = LANGUAGES
    .filter((l) => l.code !== langCode)
    .map((l) => ({ code: l.code, name: l.name, entry: getDayEntry(l.code, dayIndex) }))
    .filter((x) => !!x.entry);

  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "#0d1b2a" }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <a
            href="/"
            className="font-body text-xs tracking-[0.25em] uppercase hover:opacity-80 transition-opacity"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)", textDecoration: "none" }}
          >
            ← Seven Days, Seven Wanderers
          </a>
          <h1
            className="font-heading text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Book Generator
          </h1>
          <p
            className="font-body text-sm max-w-md text-center"
            style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
          >
            Pick a language, a character, and a day.
            This prototype uses templated English narrative — native editions will be authored by human writers in each language.
          </p>
        </div>

        {/* Config panel */}
        <div
          className="rounded-2xl p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ background: "#0f2133", border: "1px solid rgba(212,168,67,0.15)" }}
        >
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider" style={{ color: "#a07830", fontFamily: "var(--font-body)" }}>
              Language edition
            </label>
            <select className="signup-input" value={langCode} onChange={(e) => setLangCode(e.target.value)}>
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.name} — {l.native_name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider" style={{ color: "#a07830", fontFamily: "var(--font-body)" }}>
              Narrator
            </label>
            <select className="signup-input" value={narratorId} onChange={(e) => setNarratorId(e.target.value)}>
              {NARRATORS.map((n) => (
                <option key={n.id} value={n.id}>{n.label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider" style={{ color: "#a07830", fontFamily: "var(--font-body)" }}>
              Child&rsquo;s name
            </label>
            <input
              type="text"
              className="signup-input"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Kwame, Sofia, Yuki…"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-body text-xs uppercase tracking-wider" style={{ color: "#a07830", fontFamily: "var(--font-body)" }}>
              Day
            </label>
            <select className="signup-input" value={dayIndex} onChange={(e) => setDayIndex(Number(e.target.value))}>
              {DAY_NAMES.map((d, i) => (
                <option key={d} value={i}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Day navigation pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {DAY_NAMES.map((name, i) => (
            <button
              key={name}
              onClick={() => setDayIndex(i)}
              className="font-body px-4 py-2 rounded-lg text-sm transition-all"
              style={{
                fontFamily: "var(--font-body)",
                background: dayIndex === i ? "rgba(212,168,67,0.18)" : "rgba(255,255,255,0.04)",
                border:     dayIndex === i ? "1px solid rgba(212,168,67,0.5)"  : "1px solid rgba(255,255,255,0.08)",
                color:      dayIndex === i ? "#d4a843" : "#8a9db5",
                cursor: "pointer",
              }}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Book spread */}
        {dayEntry && planet && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
          >
            <div className="grid md:grid-cols-2">

              {/* Left page */}
              <div className="p-10 flex flex-col gap-6" style={{ background: "#fdf6e3", minHeight: "500px" }}>
                {/* Planet + day name */}
                <div className="flex items-center gap-4">
                  <div
                    className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, white 0%, ${planet.color} 40%, ${planet.color}99 100%)`,
                      boxShadow:  `0 0 28px 8px ${planet.color}55`,
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                      {planet.symbol}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-body text-xs uppercase tracking-widest"
                      style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                    >
                      {dayEntry.planet}&rsquo;s day
                    </p>
                    <h2
                      className="font-heading text-4xl md:text-5xl leading-none"
                      style={{ fontFamily: "var(--font-heading)", color: "#0d1b2a" }}
                    >
                      {dayEntry.name}
                    </h2>
                  </div>
                </div>

                {/* Narrative */}
                <p
                  className="font-heading text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-heading)", color: "#1c2f40", fontStyle: "italic" }}
                >
                  &ldquo;{dayEntry.name},&rdquo; said the {narrator.label.toLowerCase()}.
                  &ldquo;{child} — do you know where that name comes from?&rdquo;
                </p>

                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "#3d4f5e", fontFamily: "var(--font-body)" }}
                >
                  {planet.story}
                </p>

                <p
                  className="font-heading text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-heading)", color: "#1c2f40", fontStyle: "italic" }}
                >
                  &ldquo;And that wanderer,&rdquo; said the {narrator.label.toLowerCase()},
                  &ldquo;gave its name to this day. In every language that inherited the old week,
                  that memory is still there — sometimes hidden, sometimes clear.&rdquo;
                </p>

                <p
                  className="font-body text-xs mt-auto"
                  style={{ color: "#b8a878", fontFamily: "var(--font-body)" }}
                >
                  {lang.name} edition — template preview
                </p>
              </div>

              {/* Right page */}
              <div
                className="p-10 flex flex-col gap-5"
                style={{ background: "#f5ede0", borderLeft: "1px solid rgba(0,0,0,0.08)", minHeight: "500px" }}
              >
                <div>
                  <p
                    className="font-body text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                  >
                    The same sky, other languages
                  </p>
                  <p
                    className="font-heading text-lg"
                    style={{ fontFamily: "var(--font-heading)", color: "#0d1b2a" }}
                  >
                    How other languages name this day
                  </p>
                </div>

                <div className="flex flex-col">
                  {crossLang.map(({ code, name, entry }) =>
                    entry ? (
                      <div
                        key={code}
                        className="flex items-start justify-between gap-3 py-2.5 border-b"
                        style={{ borderColor: "rgba(0,0,0,0.08)" }}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="font-body text-xs uppercase tracking-wider"
                            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                          >
                            {code.toUpperCase()} — {name}
                          </span>
                          {entry.display_note && (
                            <span
                              className="font-body text-xs"
                              style={{ color: "#7a7060", fontFamily: "var(--font-body)" }}
                            >
                              {entry.display_note}
                            </span>
                          )}
                        </div>
                        <span
                          className="font-heading text-xl shrink-0"
                          style={{ fontFamily: "var(--font-heading)", color: "#0d1b2a", fontStyle: "italic" }}
                        >
                          {entry.name}
                        </span>
                      </div>
                    ) : null
                  )}
                </div>

                {/* Etymology note */}
                <div
                  className="rounded-xl p-4 mt-auto"
                  style={{ background: "rgba(212,168,67,0.10)", border: "1px solid rgba(212,168,67,0.22)" }}
                >
                  <p
                    className="font-body text-xs uppercase tracking-wider mb-1.5"
                    style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                  >
                    Etymology
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "#3d4f5e", fontFamily: "var(--font-body)" }}
                  >
                    {dayEntry.root}
                  </p>
                </div>
              </div>
            </div>

            {/* Spine bar */}
            <div
              className="h-1.5"
              style={{ background: `linear-gradient(90deg, ${planet.color}22, ${planet.color}77, ${planet.color}22)` }}
            />
          </div>
        )}

        <p
          className="font-body text-center text-xs"
          style={{ color: "#4a5568", fontFamily: "var(--font-body)" }}
        >
          Prototype — template narrative only. Native editions will be authored by human writers in each language.
        </p>
      </div>
    </main>
  );
}
