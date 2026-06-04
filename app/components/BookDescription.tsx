const DAY_EXAMPLES = [
  {
    day: "Monday",
    wanderer: "Moon's day",
    color: "#cbd5e1",
    teaser: "The Moon moved through the night sky. Ancient sky-watchers gave it a day.",
  },
  {
    day: "Tuesday",
    wanderer: "Mars's day",
    color: "#dc4c2a",
    teaser: "Mars wandered through the stars, bright and red. A warrior's planet. A warrior's day.",
  },
  {
    day: "Friday",
    wanderer: "Venus's day",
    color: "#f472b6",
    teaser: "The brightest wanderer before sunrise. Beautiful enough to name the last day before rest.",
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
            The story moves at the pace of a bedtime conversation — warm,
            curious, unhurried. One day per chapter. One wanderer per day.
            One discovery at a time.
          </p>
        </div>

        {/* Example day cards — story teasers only, no language evidence */}
        <div className="w-full">
          <p
            className="text-center text-sm tracking-widest uppercase mb-8 font-body"
            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
          >
            A few of the days
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
                <div
                  className="w-8 h-1 rounded-full"
                  style={{ background: ex.color }}
                />
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-heading text-2xl"
                    style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
                  >
                    {ex.day}
                  </h3>
                  <p className="font-body text-sm" style={{ color: ex.color, fontFamily: "var(--font-body)" }}>
                    {ex.wanderer}
                  </p>
                </div>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
                >
                  {ex.teaser}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
