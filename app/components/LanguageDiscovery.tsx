const PAIRS = [
  {
    wanderer: "Moon",
    color: "#cbd5e1",
    symbol: "☽",
    languages: [
      { code: "ES", word: "Lunes" },
      { code: "FR", word: "Lundi" },
      { code: "IT", word: "Lunedì" },
    ],
    root: "Luna",
  },
  {
    wanderer: "Mars",
    color: "#dc4c2a",
    symbol: "♂",
    languages: [
      { code: "ES", word: "Martes" },
      { code: "FR", word: "Mardi" },
      { code: "IT", word: "Martedì" },
    ],
    root: "Mars",
  },
  {
    wanderer: "Venus",
    color: "#f472b6",
    symbol: "♀",
    languages: [
      { code: "ES", word: "Viernes" },
      { code: "FR", word: "Vendredi" },
      { code: "IT", word: "Venerdì" },
    ],
    root: "Venus",
  },
];

export default function LanguageDiscovery() {
  return (
    <section
      className="relative py-28 px-6"
      style={{ background: "#0f2133" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
        {/* Heading — the reveal */}
        <div className="text-center flex flex-col items-center gap-6">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            Hidden in plain sight
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl leading-snug max-w-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            The names you use every day
            <br />
            <em className="text-gold-shimmer not-italic">still remember the wanderers.</em>
          </h2>
          <div className="gold-rule" />
          <p
            className="font-body text-lg leading-relaxed max-w-xl"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            Spanish, French, and Italian kept the planetary names visible — you
            can still see them if you know where to look. English disguised them
            through Norse mythology. Portuguese replaced them entirely through
            religious tradition. Same sky. Three different stories about what
            happened to the names.
          </p>
        </div>

        {/* Planet-language connections */}
        <div className="grid sm:grid-cols-3 gap-8 w-full">
          {PAIRS.map((p) => (
            <div key={p.wanderer} className="flex flex-col items-center gap-4">
              {/* Planet orb */}
              <div
                className="planet-orb w-14 h-14 flex items-center justify-center text-2xl"
                style={{
                  background: `radial-gradient(circle at 35% 35%, white 0%, ${p.color} 40%, ${p.color}88 100%)`,
                  boxShadow: `0 0 30px 8px ${p.color}44`,
                  color: p.color,
                  "--float-dur": "7s",
                  "--float-delay": `${PAIRS.indexOf(p) * 0.6}s`,
                } as React.CSSProperties}
                aria-label={p.wanderer}
              />
              <p
                className="font-heading text-lg"
                style={{ fontFamily: "var(--font-heading)", color: p.color }}
              >
                {p.wanderer}
              </p>

              {/* Language words */}
              <div className="flex flex-col items-center gap-2 w-full">
                {p.languages.map(({ code, word }) => (
                  <div key={code} className="flex items-baseline justify-center gap-2 w-full">
                    <span
                      className="font-body text-xs uppercase tracking-wider shrink-0"
                      style={{ color: "#a07830", fontFamily: "var(--font-body)", minWidth: "1.75rem", textAlign: "right" }}
                    >
                      {code}
                    </span>
                    <span
                      className="font-heading text-xl"
                      style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3", fontStyle: "italic" }}
                    >
                      {word}
                    </span>
                  </div>
                ))}
              </div>

              {/* Root connection */}
              <p
                className="text-sm text-center font-body"
                style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
              >
                from <em>{p.root}</em>
              </p>
            </div>
          ))}
        </div>

        {/* English — Norse substitution */}
        <div className="max-w-2xl w-full flex flex-col items-center gap-6 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-heading"
            style={{
              background: "rgba(212,168,67,0.12)",
              border: "1px solid rgba(212,168,67,0.4)",
              color: "#d4a843",
              fontFamily: "var(--font-heading)",
            }}
          >
            EN
          </div>
          <h3
            className="font-heading text-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            English tells a Norse story.
          </h3>
          <p
            className="text-lg leading-relaxed font-body"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            When Germanic tribes adopted the Roman seven-day week, they kept the
            planetary structure but replaced four of the Roman gods with their own
            Norse equivalents — gods they considered a match.
          </p>

          {/* Norse mapping grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { day: "Tuesday",   norse: "Tyr",   planet: "Mars",    note: "Both gods of war",                    planetColor: "#dc4c2a" },
              { day: "Wednesday", norse: "Woden", planet: "Mercury", note: "Both linked to wisdom and travelers",  planetColor: "#94a3b8" },
              { day: "Thursday",  norse: "Thor",  planet: "Jupiter", note: "Both gods of thunder",                planetColor: "#d4874a" },
              { day: "Friday",    norse: "Frigg", planet: "Venus",   note: "Both goddesses of love and beauty",   planetColor: "#f472b6" },
            ].map((row) => (
              <div
                key={row.day}
                className="flex items-start gap-3 rounded-lg px-4 py-3 text-left"
                style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.12)" }}
              >
                <div className="flex flex-col gap-0.5 min-w-[90px]">
                  <span
                    className="font-heading text-base"
                    style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
                  >
                    {row.day}
                  </span>
                  <span
                    className="font-body text-xs"
                    style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
                  >
                    {row.norse}
                  </span>
                </div>
                <div
                  className="mt-1 shrink-0 text-xs font-body"
                  style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                >
                  →
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-heading text-base"
                    style={{ fontFamily: "var(--font-heading)", color: row.planetColor, fontStyle: "italic" }}
                  >
                    {row.planet}
                  </span>
                  <span
                    className="font-body text-xs"
                    style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                  >
                    {row.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-sm font-body"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            Sunday, Monday, and Saturday came directly from the Latin —
            Sun&rsquo;s day, Moon&rsquo;s day, Saturn&rsquo;s day — and were not replaced.
          </p>

          <div
            className="rounded-xl p-6 w-full"
            style={{ background: "rgba(212,168,67,0.06)", border: "1px solid rgba(212,168,67,0.18)" }}
          >
            <p
              className="text-xl leading-snug font-heading"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              English kept the planetary structure.
              <br />
              <em>It just renamed the gods.</em>
            </p>
          </div>
        </div>

        {/* German — Mittwoch */}
        <div className="max-w-2xl w-full flex flex-col items-center gap-6 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-heading"
            style={{
              background: "rgba(148,163,184,0.12)",
              border: "1px solid rgba(148,163,184,0.35)",
              color: "#94a3b8",
              fontFamily: "var(--font-heading)",
            }}
          >
            DE
          </div>
          <h3
            className="font-heading text-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            German made a third choice.
          </h3>
          <p
            className="text-lg leading-relaxed font-body"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            Like English, German kept the Norse names for Thursday and Friday —
            {" "}<em style={{ color: "#d4874a" }}>Donnerstag</em> (Donner, Thor&rsquo;s thunder)
            and <em style={{ color: "#f472b6" }}>Freitag</em> (Freya&rsquo;s day).
            But for Wednesday, German did something no other major European language did.
          </p>

          {/* Mittwoch callout */}
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(148,163,184,0.25)" }}
          >
            <div
              className="px-6 py-4 flex flex-col gap-1"
              style={{ background: "rgba(148,163,184,0.08)" }}
            >
              <span
                className="font-heading text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
              >
                Mittwoch.
              </span>
              <span
                className="font-body text-sm tracking-widest uppercase"
                style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
              >
                Middle of the week.
              </span>
            </div>
            <div
              className="px-6 py-4"
              style={{ background: "rgba(148,163,184,0.04)" }}
            >
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
              >
                German dropped both the Roman god (Mercury) and the Norse god (Woden)
                entirely. No mythology. No planet. Just a practical description of where
                Wednesday falls in the week. The wanderer is gone.
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-6 w-full"
            style={{ background: "rgba(148,163,184,0.06)", border: "1px solid rgba(148,163,184,0.15)" }}
          >
            <p
              className="text-xl leading-snug font-heading"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              Some languages disguised the planet.
              <br />
              <em style={{ color: "#94a3b8" }}>German erased it.</em>
            </p>
          </div>
        </div>

        {/* Portuguese contrast */}
        <div className="max-w-2xl w-full flex flex-col items-center gap-6 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
            style={{
              background: "rgba(184,169,232,0.12)",
              border: "1px solid rgba(184,169,232,0.4)",
              color: "#b8a9e8",
            }}
          >
            PT
          </div>
          <h3
            className="font-heading text-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Portuguese tells a different story.
          </h3>
          <p
            className="text-lg leading-relaxed font-body"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            Instead of preserving most of the planetary names,{" "}
            <em style={{ color: "#b8a9e8" }}>
              Segunda-feira, Terça-feira, Quarta-feira, Quinta-feira,
            </em>{" "}
            and{" "}
            <em style={{ color: "#b8a9e8" }}>Sexta-feira</em>{" "}
            reflect a later religious and cultural reshaping of the week.
          </p>
          <div
            className="rounded-xl p-6 w-full"
            style={{ background: "rgba(184,169,232,0.07)", border: "1px solid rgba(184,169,232,0.2)" }}
          >
            <p
              className="text-xl leading-snug font-heading"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              Names do not just come from the sky.
              <br />
              <em>They also travel through people, cultures, and time.</em>
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />
    </section>
  );
}
