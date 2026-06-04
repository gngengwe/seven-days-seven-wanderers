const PAIRS = [
  {
    wanderer: "Moon",
    color: "#cbd5e1",
    symbol: "☽",
    languages: ["Lunes", "Lundi", "Lunedì"],
    root: "Luna",
  },
  {
    wanderer: "Mars",
    color: "#dc4c2a",
    symbol: "♂",
    languages: ["Martes", "Mardi", "Martedì"],
    root: "Mars",
  },
  {
    wanderer: "Venus",
    color: "#f472b6",
    symbol: "♀",
    languages: ["Viernes", "Vendredi", "Venerdì"],
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
              <div className="flex flex-col items-center gap-1">
                {p.languages.map((word) => (
                  <span
                    key={word}
                    className="font-heading text-xl"
                    style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3", fontStyle: "italic" }}
                  >
                    {word}
                  </span>
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
