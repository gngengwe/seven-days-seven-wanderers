import { LANGUAGES, GRID_LANG_CODES, getDayEntry } from "@/data/etymology";

const PLANET_META = [
  { day: "Sunday",    wanderer: "Sun",     symbol: "☉", meaning: "Light, beginning, warmth",    color: "#f59e0b" },
  { day: "Monday",    wanderer: "Moon",    symbol: "☽", meaning: "Night, rhythm, reflection",   color: "#cbd5e1" },
  { day: "Tuesday",   wanderer: "Mars",    symbol: "♂", meaning: "Courage, warrior energy",     color: "#dc4c2a" },
  { day: "Wednesday", wanderer: "Mercury", symbol: "☿", meaning: "Speed, messages, travel",     color: "#94a3b8" },
  { day: "Thursday",  wanderer: "Jupiter", symbol: "♃", meaning: "Thunder, power, storms",      color: "#d4874a" },
  { day: "Friday",    wanderer: "Venus",   symbol: "♀", meaning: "Love, beauty, kindness",      color: "#f472b6" },
  { day: "Saturday",  wanderer: "Saturn",  symbol: "♄", meaning: "Time, rest, the week's edge", color: "#c89b3c" },
] as const;

const LANG_META: Record<string, { label: string; nameColor: string; noteColor: string }> = {
  es: { label: "ES", nameColor: "#fdf6e3", noteColor: "#6b7280" },
  fr: { label: "FR", nameColor: "#fdf6e3", noteColor: "#6b7280" },
  it: { label: "IT", nameColor: "#fdf6e3", noteColor: "#6b7280" },
  de: { label: "DE", nameColor: "#94a3b8", noteColor: "#5a6a7a" },
  pt: { label: "PT", nameColor: "#b8a9e8", noteColor: "#7a6a90" },
};

function LangRow({ langCode, dayIndex }: { langCode: string; dayIndex: number }) {
  const entry = getDayEntry(langCode, dayIndex);
  const meta = LANG_META[langCode];
  if (!entry || !meta) return null;

  const hasNote = !!entry.display_note;

  return (
    <div className="flex justify-between items-start gap-2 py-1 border-b border-white/5 last:border-0">
      <span
        className="text-xs uppercase tracking-wider shrink-0 font-body"
        style={{ color: "#a07830", fontFamily: "var(--font-body)", paddingTop: "2px" }}
      >
        {meta.label}
      </span>
      <div className="text-right">
        <span
          className="font-heading text-base"
          style={{
            fontFamily: "var(--font-heading)",
            color: hasNote ? meta.nameColor : "#fdf6e3",
            fontStyle: "italic",
          }}
        >
          {entry.name}
        </span>
        {hasNote && (
          <p
            className="text-xs mt-0.5 font-body"
            style={{ color: meta.noteColor, fontFamily: "var(--font-body)" }}
          >
            {entry.display_note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function WeekGrid() {
  return (
    <section
      className="relative py-28 px-6"
      style={{ background: "#0d1b2a" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            A Week of Hidden Stories
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Seven wanderers.
            <br />
            <em className="text-gold-shimmer not-italic">Seven hidden stories.</em>
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {PLANET_META.map((planet, dayIndex) => (
            <div
              key={planet.day}
              className="rounded-xl p-6 flex flex-col gap-4 day-card"
              style={{
                background: "#0f2133",
                border: `1px solid ${planet.color}28`,
              }}
            >
              {/* Planet orb + day */}
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, white 0%, ${planet.color} 45%, ${planet.color}88 100%)`,
                    boxShadow: `0 0 16px 4px ${planet.color}44`,
                  }}
                  aria-label={planet.wanderer}
                >
                  <span style={{ color: "rgba(255,255,255,0.8)", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                    {planet.symbol}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-heading text-xl leading-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
                  >
                    {planet.day}
                  </h3>
                  <p
                    className="text-sm font-body"
                    style={{ color: planet.color, fontFamily: "var(--font-body)" }}
                  >
                    {planet.wanderer}&rsquo;s day
                  </p>
                </div>
              </div>

              {/* Meaning */}
              <p
                className="text-sm italic font-body"
                style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
              >
                {planet.meaning}
              </p>

              {/* Language rows — driven by data */}
              <div className="flex flex-col mt-auto">
                {GRID_LANG_CODES.map((code) => (
                  <LangRow key={code} langCode={code} dayIndex={dayIndex} />
                ))}
              </div>
            </div>
          ))}

          {/* Legend card — XL layout only */}
          <div
            className="rounded-xl p-6 flex flex-col justify-center items-center gap-3 text-center col-span-1 hidden xl:flex"
            style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.15)" }}
          >
            <p
              className="font-heading text-lg"
              style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
            >
              Legend
            </p>
            <div className="flex flex-col gap-2 text-left w-full">
              {GRID_LANG_CODES.map((code) => {
                const lang = LANGUAGES.find((l) => l.code === code);
                const meta = LANG_META[code];
                return (
                  <div key={code} className="flex items-center gap-2">
                    <span
                      className="text-xs uppercase tracking-wider font-body w-6"
                      style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                    >
                      {meta.label}
                    </span>
                    <span
                      className="text-sm font-body"
                      style={{ color: meta.nameColor, fontFamily: "var(--font-body)" }}
                    >
                      {lang?.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <p
              className="text-xs font-body mt-2"
              style={{ color: "#7a6a90", fontFamily: "var(--font-body)" }}
            >
              PT weekday names Mon–Fri use liturgical numbering.
              DE Wednesday (Mittwoch) dropped the planet entirely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
