export default function HowItWorks() {
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
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            How the Book Works
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            One day. One planet.{" "}
            <em className="text-gold-shimmer not-italic">One clue.</em>
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Spread description */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          {[
            {
              side: "Left page",
              icon: "📖",
              description:
                "A short read-aloud story moment between grandmother and grandson — warm, curious, unhurried.",
            },
            {
              side: "Right page",
              icon: "🎨",
              description:
                "A warm, painterly illustration of the child, grandmother, and the wanderer connected to that day.",
            },
            {
              side: "Language clue",
              icon: "✦",
              description:
                "A single word from Spanish, French, Italian, or Portuguese that reveals how language remembers — or reshapes — the story.",
              accent: "#d4a843",
            },
            {
              side: "Discovery moment",
              icon: "☽",
              description:
                "One clear, beautiful insight. Each spread leaves children with a real piece of knowledge — not a fact to memorize, but a story to carry.",
              accent: "#b8a9e8",
            },
          ].map((item) => (
            <div
              key={item.side}
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{ background: "#0d1b2a", border: "1px solid rgba(212,168,67,0.15)" }}
            >
              <span className="text-2xl">{item.icon}</span>
              <h3
                className="font-heading text-lg"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: item.accent ?? "#d4a843",
                }}
              >
                {item.side}
              </h3>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sample page */}
        <div
          className="w-full max-w-2xl rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(212,168,67,0.25)" }}
        >
          <div
            className="px-6 py-3 flex items-center gap-2"
            style={{ background: "rgba(212,168,67,0.1)", borderBottom: "1px solid rgba(212,168,67,0.15)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#d4a843" }} />
            <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#a07830", fontFamily: "var(--font-body)" }}>
              Sample page text — Monday
            </span>
          </div>
          <div className="p-8 flex flex-col gap-4" style={{ background: "#0d1b2a" }}>
            <p
              className="font-heading text-2xl leading-snug"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              Monday is the Moon&rsquo;s day.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
            >
              The Moon was once counted as a planet because it wandered through the
              night sky. In Spanish, Monday is called{" "}
              <em style={{ color: "#fdf6e3" }}>Lunes</em>, from{" "}
              <em style={{ color: "#fdf6e3" }}>Luna</em>, the Moon.
              The name still remembers its light.
            </p>
            <div
              className="mt-2 pt-4 font-body text-sm leading-relaxed"
              style={{
                color: "#b8a9e8",
                borderTop: "1px solid rgba(184,169,232,0.2)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="uppercase tracking-wider text-xs" style={{ color: "#7a6a90" }}>Portuguese contrast — </span>
              In Portuguese, Monday is{" "}
              <em>Segunda-feira</em>, showing how some languages later renamed the week
              through religious tradition rather than planets.
            </div>
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
