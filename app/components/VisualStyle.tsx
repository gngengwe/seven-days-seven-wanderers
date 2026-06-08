const QUALITIES = [
  { label: "Soft painterly texture",    color: "#d4a843" },
  { label: "Warm night-sky colors",     color: "#f472b6" },
  { label: "Gentle realism",           color: "#cbd5e1" },
  { label: "Magical atmosphere",        color: "#b8a9e8" },
  { label: "Educational clarity",       color: "#d4874a" },
];

export default function VisualStyle() {
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
            Visual Style
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Warm Planetarium Storybook.
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Layout: description + mock spread */}
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
            >
              The illustrations are designed to feel cozy, timeless, and full of wonder.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "An adult and child sit beneath a glowing planetary sky — seen from behind, looking up.",
                "The planets appear large and luminous — not as scientific diagrams, but as storybook presences.",
                "The world feels familiar: a bedroom window, a backyard, a blanket, a warm lamp, a child looking up.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-body text-base leading-relaxed"
                  style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
                >
                  <span
                    className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#d4a843" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Quality tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {QUALITIES.map((q) => (
                <span
                  key={q.label}
                  className="px-3 py-1 rounded-full text-xs font-body"
                  style={{
                    background: `${q.color}14`,
                    border: `1px solid ${q.color}40`,
                    color: q.color,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {q.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: illustration placeholder */}
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(160deg, #0a1520 0%, #152535 50%, #0d1b2a 100%)",
              border: "1px solid rgba(212,168,67,0.2)",
              aspectRatio: "4/3",
              minHeight: "260px",
            }}
          >
            {/* Stars */}
            {Array.from({ length: 30 }, (_, i) => (
              <span
                key={i}
                className="star absolute"
                style={{
                  top: `${(Math.sin(i * 6.2) * 50 + 50).toFixed(1)}%`,
                  left: `${(Math.cos(i * 4.8) * 50 + 50).toFixed(1)}%`,
                  width: `${(Math.abs(Math.sin(i * 1.7)) * 2 + 1).toFixed(1)}px`,
                  height: `${(Math.abs(Math.sin(i * 1.7)) * 2 + 1).toFixed(1)}px`,
                  "--duration": `${3 + (i % 3)}s`,
                  "--delay": `${((i * 0.4) % 3).toFixed(1)}s`,
                } as React.CSSProperties}
              />
            ))}

            {/* Moon */}
            <div
              className="absolute top-6 right-8 rounded-full"
              style={{
                width: 48,
                height: 48,
                background: "radial-gradient(circle at 35% 35%, #fff 0%, #cbd5e1 40%, #94a3b8 100%)",
                boxShadow: "0 0 30px 8px rgba(203,213,225,0.35)",
              }}
            />

            {/* Jupiter */}
            <div
              className="absolute top-12 left-10 rounded-full"
              style={{
                width: 28,
                height: 28,
                background: "radial-gradient(circle at 35% 35%, #fff 0%, #d4874a 40%, #d4874a88 100%)",
                boxShadow: "0 0 16px 4px rgba(212,135,74,0.4)",
              }}
            />

            {/* Ground glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background: "radial-gradient(ellipse at 50% 100%, rgba(212,168,67,0.18) 0%, transparent 70%)",
              }}
            />

            {/* Label */}
            <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
              <p
                className="font-heading text-lg"
                style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
              >
                Illustration placeholder
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
              >
                Warm painterly scene — adult and child
                <br />
                seen from behind, beneath a glowing sky
              </p>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <div className="text-center flex flex-col items-center gap-4">
          <div className="gold-rule" />
          <p
            className="font-heading text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            The sky is not just background.
          </p>
          <p
            className="font-heading text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
          >
            <em>The sky is the teacher.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
