const DAYS = [
  {
    day: "Sunday",
    wanderer: "Sun",
    symbol: "☉",
    meaning: "Light, beginning, warmth",
    color: "#f59e0b",
    spanish: "Domingo",
    french: "Dimanche",
    italian: "Domenica",
    portuguese: "Domingo",
    ptNote: "Lord's Day; English preserves the older Sun-day",
    german: "Sonntag",
    deNote: "Sonne = Sun — direct",
  },
  {
    day: "Monday",
    wanderer: "Moon",
    symbol: "☽",
    meaning: "Night, rhythm, reflection",
    color: "#cbd5e1",
    spanish: "Lunes",
    french: "Lundi",
    italian: "Lunedì",
    portuguese: "Segunda-feira",
    ptNote: "Second fair/liturgical day",
    german: "Montag",
    deNote: "Mond = Moon — direct",
  },
  {
    day: "Tuesday",
    wanderer: "Mars",
    symbol: "♂",
    meaning: "Courage, warrior energy",
    color: "#dc4c2a",
    spanish: "Martes",
    french: "Mardi",
    italian: "Martedì",
    portuguese: "Terça-feira",
    ptNote: "Third fair/liturgical day",
    german: "Dienstag",
    deNote: "Tyr's day via Norse",
  },
  {
    day: "Wednesday",
    wanderer: "Mercury",
    symbol: "☿",
    meaning: "Speed, messages, travel",
    color: "#94a3b8",
    spanish: "Miércoles",
    french: "Mercredi",
    italian: "Mercoledì",
    portuguese: "Quarta-feira",
    ptNote: "Fourth fair/liturgical day",
    german: "Mittwoch",
    deNote: "Middle of the week — planet erased",
  },
  {
    day: "Thursday",
    wanderer: "Jupiter",
    symbol: "♃",
    meaning: "Thunder, power, storms",
    color: "#d4874a",
    spanish: "Jueves",
    french: "Jeudi",
    italian: "Giovedì",
    portuguese: "Quinta-feira",
    ptNote: "Fifth fair/liturgical day",
    german: "Donnerstag",
    deNote: "Donner (Thor) = Jupiter",
  },
  {
    day: "Friday",
    wanderer: "Venus",
    symbol: "♀",
    meaning: "Love, beauty, kindness",
    color: "#f472b6",
    spanish: "Viernes",
    french: "Vendredi",
    italian: "Venerdì",
    portuguese: "Sexta-feira",
    ptNote: "Sixth fair/liturgical day",
    german: "Freitag",
    deNote: "Freia (Freya) = Venus",
  },
  {
    day: "Saturday",
    wanderer: "Saturn",
    symbol: "♄",
    meaning: "Time, rest, the week's edge",
    color: "#c89b3c",
    spanish: "Sábado",
    french: "Samedi",
    italian: "Sabato",
    portuguese: "Sábado",
    ptNote: "Sabbath / rest tradition",
    german: "Samstag",
    deNote: "Sabbath tradition",
  },
];

function LangRow({
  lang,
  value,
  isPt,
  ptNote,
  isDe,
  deNote,
}: {
  lang: string;
  value: string;
  isPt?: boolean;
  ptNote?: string;
  isDe?: boolean;
  deNote?: string;
}) {
  const isSpecial = isPt || isDe;
  const noteText = isPt ? ptNote : deNote;
  const specialColor = isPt ? "#b8a9e8" : "#94a3b8";
  const noteColor = isPt ? "#7a6a90" : "#5a6a7a";

  return (
    <div className="flex justify-between items-start gap-2 py-1 border-b border-white/5 last:border-0">
      <span
        className="text-xs uppercase tracking-wider shrink-0 font-body"
        style={{ color: "#a07830", fontFamily: "var(--font-body)", paddingTop: "2px" }}
      >
        {lang}
      </span>
      <div className="text-right">
        <span
          className="font-heading text-base"
          style={{
            fontFamily: "var(--font-heading)",
            color: isSpecial ? specialColor : "#fdf6e3",
            fontStyle: "italic",
          }}
        >
          {value}
        </span>
        {isSpecial && noteText && (
          <p
            className="text-xs mt-0.5 font-body"
            style={{ color: noteColor, fontFamily: "var(--font-body)" }}
          >
            {noteText}
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
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="rounded-xl p-6 flex flex-col gap-4 day-card"
              style={{
                background: "#0f2133",
                border: `1px solid ${d.color}28`,
              }}
            >
              {/* Planet orb + day */}
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, white 0%, ${d.color} 45%, ${d.color}88 100%)`,
                    boxShadow: `0 0 16px 4px ${d.color}44`,
                  }}
                  aria-label={d.wanderer}
                >
                  <span style={{ color: "rgba(255,255,255,0.8)", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                    {d.symbol}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-heading text-xl leading-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
                  >
                    {d.day}
                  </h3>
                  <p
                    className="text-sm font-body"
                    style={{ color: d.color, fontFamily: "var(--font-body)" }}
                  >
                    {d.wanderer}&rsquo;s day
                  </p>
                </div>
              </div>

              {/* Meaning */}
              <p
                className="text-sm italic font-body"
                style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
              >
                {d.meaning}
              </p>

              {/* Language clues */}
              <div className="flex flex-col mt-auto">
                <LangRow lang="ES" value={d.spanish} />
                <LangRow lang="FR" value={d.french} />
                <LangRow lang="IT" value={d.italian} />
                <LangRow lang="DE" value={d.german} isDe deNote={d.deNote} />
                <LangRow lang="PT" value={d.portuguese} isPt ptNote={d.ptNote} />
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
              {[
                { code: "ES", label: "Spanish",    color: "#a07830" },
                { code: "FR", label: "French",     color: "#a07830" },
                { code: "IT", label: "Italian",    color: "#a07830" },
                { code: "DE", label: "German",     color: "#94a3b8" },
                { code: "PT", label: "Portuguese", color: "#b8a9e8" },
              ].map(({ code, label, color }) => (
                <div key={code} className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-body w-6" style={{ color, fontFamily: "var(--font-body)" }}>{code}</span>
                  <span className="text-sm font-body" style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}>{label}</span>
                </div>
              ))}
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
