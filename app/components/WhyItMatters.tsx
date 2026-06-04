const TRUTHS = [
  {
    heading: "Words are fossils.",
    body: "Every name in every language carries the history of the people who spoke it. Most of us walk past that history every day without noticing.",
  },
  {
    heading: "Different cultures made different choices.",
    body: "They inherited the same sky and decided differently what to remember, what to rename, and what to replace. None of them were wrong.",
  },
  {
    heading: "Asking \"where did that come from?\" is the beginning.",
    body: "A child who asks that question about a word will eventually ask it about everything. That question is the most important education there is.",
  },
];

export default function WhyItMatters() {
  return (
    <section
      className="relative py-28 px-6"
      style={{ background: "#0d1b2a" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            Why It Matters
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl leading-snug"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Children deserve explanations
            <br />
            <em className="text-gold-shimmer not-italic">
              that keep the wonder intact.
            </em>
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Contrast: memorize vs. notice */}
        <div
          className="grid sm:grid-cols-2 gap-6 w-full"
        >
          <div
            className="rounded-xl p-6 flex flex-col gap-3"
            style={{ background: "#0f2133", border: "1px solid rgba(148,163,184,0.15)" }}
          >
            <span
              className="text-xs tracking-widest uppercase font-body"
              style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
            >
              Most early learning
            </span>
            <p
              className="font-heading text-2xl"
              style={{ fontFamily: "var(--font-heading)", color: "#6b7280" }}
            >
              Asks children to memorize.
            </p>
          </div>
          <div
            className="rounded-xl p-6 flex flex-col gap-3"
            style={{ background: "#0f2133", border: "1px solid rgba(212,168,67,0.25)" }}
          >
            <span
              className="text-xs tracking-widest uppercase font-body"
              style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
            >
              This book
            </span>
            <p
              className="font-heading text-2xl"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              Invites them to{" "}
              <em className="text-gold-shimmer not-italic">notice.</em>
            </p>
          </div>
        </div>

        {/* Three truths */}
        <div className="w-full grid md:grid-cols-3 gap-6">
          {TRUTHS.map((t) => (
            <div
              key={t.heading}
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{ background: "#0f2133", border: "1px solid rgba(212,168,67,0.12)" }}
            >
              <h3
                className="font-heading text-lg leading-snug"
                style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
              >
                {t.heading}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
              >
                {t.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center flex flex-col items-center gap-6">
          <p
            className="font-body text-lg leading-relaxed max-w-xl"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            The goal is not just to teach the days of the week.
            <br /><br />
            The goal is to help children feel the thrill of asking:
          </p>
          <blockquote
            className="font-heading text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            &ldquo;Where did that come from?&rdquo;
          </blockquote>
          <p
            className="font-body text-base"
            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
          >
            That question can last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
}
