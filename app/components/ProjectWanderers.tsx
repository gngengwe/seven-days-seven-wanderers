const FUTURE_TITLES = [
  "The months of the year",
  "Holiday names",
  "Idioms and sayings",
  "Food words",
  "Place names",
  "Everyday objects",
  "Words shaped by history, migration, science, and culture",
];

export default function ProjectWanderers() {
  return (
    <section
      className="relative py-28 px-6"
      style={{ background: "#0f2133" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-14 text-center">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            The Series
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            The first book in{" "}
            <em className="text-gold-shimmer not-italic">Project Wanderers.</em>
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Series description */}
        <div
          className="flex flex-col gap-4 text-lg leading-relaxed font-body"
          style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
        >
          <p>
            <em className="not-italic" style={{ color: "#fdf6e3" }}>Seven Days, Seven Wanderers</em>{" "}
            is the first title in a larger creative project about the hidden histories
            inside everyday words.
          </p>
          <p>
            Project Wanderers asks:
          </p>
        </div>

        {/* Series question */}
        <div
          className="rounded-2xl p-8 w-full"
          style={{ background: "#0d1b2a", border: "1px solid rgba(212,168,67,0.2)" }}
        >
          <p
            className="font-heading text-2xl md:text-3xl leading-snug"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            What if children could learn that
            <br />
            ordinary things are{" "}
            <em className="text-gold-shimmer not-italic">not ordinary at all?</em>
          </p>
        </div>

        {/* Future titles */}
        <div className="flex flex-col items-center gap-6 w-full">
          <p
            className="text-sm tracking-widest uppercase font-body"
            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
          >
            Future books may explore
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {FUTURE_TITLES.map((title) => (
              <span
                key={title}
                className="px-4 py-2 rounded-full text-sm font-body"
                style={{
                  background: "rgba(212,168,67,0.06)",
                  border: "1px solid rgba(212,168,67,0.15)",
                  color: "#c4b490",
                  fontFamily: "var(--font-body)",
                }}
              >
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="flex flex-col items-center gap-4">
          <p
            className="font-body text-base leading-relaxed max-w-lg"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            The first journey begins with the week.
          </p>
          <p
            className="font-heading text-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Because every child knows the days.
          </p>
          <p
            className="font-heading text-xl"
            style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
          >
            <em>But not every child knows that the days came from the sky.</em>
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />
    </section>
  );
}
