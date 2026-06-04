const DAY_EXAMPLES = [
  {
    day: "Monday",
    wanderer: "Moon's day",
    color: "#cbd5e1",
    languages: [
      { lang: "Spanish",    name: "Lunes" },
      { lang: "French",     name: "Lundi" },
      { lang: "Italian",    name: "Lunedì" },
      { lang: "Portuguese", name: "Segunda-feira" },
    ],
  },
  {
    day: "Tuesday",
    wanderer: "Mars's day",
    color: "#dc4c2a",
    languages: [
      { lang: "Spanish",    name: "Martes" },
      { lang: "French",     name: "Mardi" },
      { lang: "Italian",    name: "Martedì" },
      { lang: "Portuguese", name: "Terça-feira" },
    ],
  },
  {
    day: "Friday",
    wanderer: "Venus's day",
    color: "#f472b6",
    languages: [
      { lang: "Spanish",    name: "Viernes" },
      { lang: "French",     name: "Vendredi" },
      { lang: "Italian",    name: "Venerdì" },
      { lang: "Portuguese", name: "Sexta-feira" },
    ],
  },
];

export default function BookDescription() {
  return (
    <section
      className="relative py-28 px-6"
      style={{ background: "#0d1b2a" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            The Book
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl leading-snug max-w-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            A picture book for curious children and the grown-ups who love learning with them.
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Description */}
        <div
          className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed"
          style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
        >
          <p>
            <em className="not-italic" style={{ color: "#fdf6e3" }}>Seven Days, Seven Wanderers</em> follows
            a young, inquisitive Black boy and his grandmother as they explore
            where the days of the week came from.
          </p>
          <p>
            The story is told in English, with gentle language clues from Spanish,
            French, Italian, and Portuguese — appearing not as full translations,
            but as little pieces of evidence showing how the old planetary names
            still live inside modern language.
          </p>
        </div>

        {/* Example day cards */}
        <div className="w-full">
          <p
            className="text-center text-sm tracking-widest uppercase mb-8 font-body"
            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
          >
            A few examples
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {DAY_EXAMPLES.map((ex) => (
              <div
                key={ex.day}
                className="rounded-xl p-6 flex flex-col gap-4 day-card"
                style={{
                  background: "#0f2133",
                  border: `1px solid ${ex.color}30`,
                }}
              >
                {/* Day + wanderer */}
                <div className="flex flex-col gap-1">
                  <div
                    className="w-8 h-1 rounded-full"
                    style={{ background: ex.color }}
                  />
                  <h3
                    className="font-heading text-2xl mt-2"
                    style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
                  >
                    {ex.day}
                  </h3>
                  <p className="font-body text-sm" style={{ color: ex.color, fontFamily: "var(--font-body)" }}>
                    {ex.wanderer}
                  </p>
                </div>

                {/* Language clues */}
                <div className="flex flex-col gap-2">
                  {ex.languages.map((l) => (
                    <div key={l.lang} className="flex justify-between items-baseline gap-2">
                      <span
                        className="text-xs uppercase tracking-wider font-body"
                        style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                      >
                        {l.lang}
                      </span>
                      <span
                        className="font-heading text-base"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: l.lang === "Portuguese" ? "#b8a9e8" : "#fdf6e3",
                          fontStyle: "italic",
                        }}
                      >
                        {l.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portuguese note */}
        <div
          className="rounded-xl p-6 max-w-2xl w-full text-center"
          style={{
            background: "rgba(184,169,232,0.08)",
            border: "1px solid rgba(184,169,232,0.25)",
          }}
        >
          <span
            className="block text-xs tracking-widest uppercase mb-3 font-body"
            style={{ color: "#b8a9e8", fontFamily: "var(--font-body)" }}
          >
            A note on Portuguese
          </span>
          <p
            className="text-base leading-relaxed font-body"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            Portuguese is included thoughtfully because modern Portuguese weekday names
            are liturgical and numbered for Monday&ndash;Friday rather than directly
            preserving the planetary names. This makes Portuguese a useful{" "}
            <em>contrast</em> language — showing how culture and religion can reshape
            what the sky once named.
          </p>
        </div>
      </div>
    </section>
  );
}
