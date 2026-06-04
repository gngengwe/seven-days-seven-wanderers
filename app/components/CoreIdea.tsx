const WANDERERS = [
  { name: "the Sun",     symbol: "☉", color: "#f59e0b" },
  { name: "the Moon",    symbol: "☽", color: "#cbd5e1" },
  { name: "Mars",        symbol: "♂", color: "#dc4c2a" },
  { name: "Mercury",     symbol: "☿", color: "#94a3b8" },
  { name: "Jupiter",     symbol: "♃", color: "#d4874a" },
  { name: "Venus",       symbol: "♀", color: "#f472b6" },
  { name: "Saturn",      symbol: "♄", color: "#c89b3c" },
];

export default function CoreIdea() {
  return (
    <section
      id="story"
      className="relative py-28 px-6"
      style={{ background: "#0f2133" }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-12">
        {/* Pull quote */}
        <div className="flex flex-col items-center gap-6">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            The Core Idea
          </p>
          <h2
            className="font-heading text-4xl md:text-6xl leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            The week was once
            <br />
            <em className="text-gold-shimmer not-italic">a planetarium.</em>
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Body copy */}
        <div
          className="flex flex-col gap-6 text-lg leading-relaxed text-left md:text-center max-w-2xl"
          style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
        >
          <p>
            Long before modern astronomy, people used the word &ldquo;planet&rdquo; differently.
          </p>
          <p>
            A planet was a <strong style={{ color: "#fdf6e3" }}>wanderer</strong> —
            something that moved against the background of the fixed stars.
            Ancient sky-watchers saw seven of these wanderers:
          </p>
        </div>

        {/* Wanderer chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {WANDERERS.map((w) => (
            <div
              key={w.name}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-body"
              style={{
                background: `${w.color}18`,
                border: `1px solid ${w.color}55`,
                color: w.color,
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-base" aria-hidden="true">{w.symbol}</span>
              <span>{w.name}</span>
            </div>
          ))}
        </div>

        {/* Continuation */}
        <div
          className="flex flex-col gap-2 text-lg leading-relaxed text-left md:text-center max-w-2xl"
          style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
        >
          <p>
            Those seven wanderers became linked to the seven days of the week.
            And the pattern held.
          </p>
        </div>

        {/* Final trio */}
        <div className="flex flex-col gap-3">
          {["Seven days.", "Seven wanderers.", "A week written in the sky."].map((line) => (
            <p
              key={line}
              className="font-heading text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />
    </section>
  );
}
