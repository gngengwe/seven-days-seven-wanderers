const AUDIENCES = [
  {
    title: "Curious Kids Ages 4–8",
    icon: "✦",
    iconColor: "#f59e0b",
    description:
      "Children learning the days of the week and beginning to notice words, sounds, patterns, and the sky.",
  },
  {
    title: "Parents & Grandparents",
    icon: "☽",
    iconColor: "#cbd5e1",
    description:
      "Families who want a read-aloud book that feels warm, beautiful, and genuinely interesting for both generations.",
  },
  {
    title: "Teachers & Librarians",
    icon: "♃",
    iconColor: "#d4874a",
    description:
      "Educators looking for a simple bridge between literacy, astronomy, mythology, etymology, cultural history, and multilingual exposure.",
  },
  {
    title: "Museums & Planetariums",
    icon: "♄",
    iconColor: "#c89b3c",
    description:
      "Science centers and gift shops that want a story-driven way to connect children to the sky — and to the words we still use to describe it.",
  },
];

export default function Audience() {
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
            Who It Is For
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Made for curious families,
            <br />
            <em className="text-gold-shimmer not-italic">classrooms, and libraries.</em>
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Audience cards */}
        <div className="grid sm:grid-cols-2 gap-6 w-full">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="rounded-xl p-8 flex flex-col gap-4 day-card"
              style={{
                background: "#0d1b2a",
                border: `1px solid ${a.iconColor}22`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: `${a.iconColor}18`,
                  border: `1px solid ${a.iconColor}44`,
                  color: a.iconColor,
                }}
                aria-hidden="true"
              >
                {a.icon}
              </div>
              <h3
                className="font-heading text-xl"
                style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
              >
                {a.title}
              </h3>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
              >
                {a.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary audience note */}
        <div
          className="w-full max-w-2xl text-center flex flex-col items-center gap-4 rounded-xl p-6"
          style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.12)" }}
        >
          <p
            className="text-xs tracking-widest uppercase font-body"
            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
          >
            Also a natural fit for
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Multilingual families",
              "Homeschool educators",
              "Children's museums",
              "Science centers",
              "Gift buyers",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-body"
                style={{
                  background: "rgba(212,168,67,0.08)",
                  border: "1px solid rgba(212,168,67,0.2)",
                  color: "#c4b490",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tag}
              </span>
            ))}
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
