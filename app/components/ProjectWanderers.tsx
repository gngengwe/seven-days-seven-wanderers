const EDITIONS = [
  { lang: "English",    note: "Volume 1 — in development", color: "#d4a843" },
  { lang: "Spanish",    note: "Coming",                    color: "#dc4c2a" },
  { lang: "French",     note: "Coming",                    color: "#94a3b8" },
  { lang: "Portuguese", note: "Coming",                    color: "#b8a9e8" },
  { lang: "Italian",    note: "Coming",                    color: "#f472b6" },
  { lang: "German",     note: "Coming",                    color: "#cbd5e1" },
  { lang: "Japanese",   note: "Coming",                    color: "#f59e0b" },
  { lang: "Hindi",      note: "Coming",                    color: "#f472b6" },
  { lang: "Arabic",     note: "Coming",                    color: "#94a3b8" },
  { lang: "Russian",    note: "Coming",                    color: "#7dd3fc" },
  { lang: "Swahili",    note: "Coming",                    color: "#86efac" },
  { lang: "Dutch",      note: "Coming",                    color: "#c4b5fd" },
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
            is the first title in a multilingual series. Each edition is written
            natively in its own language — not translated, but authored from
            that language&rsquo;s own vantage point on the sky.
          </p>
          <p>
            Every edition includes a cross-language addendum: a window into how
            other languages carried, disguised, or deliberately replaced the same
            planetary names. The story is the same sky. The entry point changes
            with every language.
          </p>
          <p>
            The longer vision: a platform where any family can generate this book
            in their language, with characters that look like them, in a visual
            style from their world. The etymology stays true.
            The story belongs to whoever is reading it.
          </p>
        </div>

        {/* Personalization vision */}
        <div className="grid sm:grid-cols-3 gap-4 w-full">
          {[
            { label: "Your language", body: "Swahili, Arabic, Japanese, Portuguese — whichever language the child grows up inside." },
            { label: "Your characters", body: "A grandmother, a mother, an uncle, a father. Whoever that adult is in the child's life." },
            { label: "Your world", body: "The setting, the art style, the cultural detail. The sky is universal. The story is yours." },
          ].map(({ label, body }) => (
            <div
              key={label}
              className="rounded-xl p-5 flex flex-col gap-2"
              style={{ background: "rgba(212,168,67,0.04)", border: "1px solid rgba(212,168,67,0.12)" }}
            >
              <p
                className="font-heading text-base"
                style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
              >
                {label}
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#8a9db5", fontFamily: "var(--font-body)" }}
              >
                {body}
              </p>
            </div>
          ))}
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
            What if every child could find
            <br />
            <em className="text-gold-shimmer not-italic">their own sky in the same story?</em>
          </p>
        </div>

        {/* Editions */}
        <div className="flex flex-col items-center gap-6 w-full">
          <p
            className="text-sm tracking-widest uppercase font-body"
            style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
          >
            Planned editions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {EDITIONS.map((ed) => (
              <div
                key={ed.lang}
                className="flex flex-col items-center px-5 py-3 rounded-xl gap-1"
                style={{
                  background: `${ed.color}0d`,
                  border: `1px solid ${ed.color}33`,
                }}
              >
                <span
                  className="font-heading text-base"
                  style={{ fontFamily: "var(--font-heading)", color: ed.color }}
                >
                  {ed.lang}
                </span>
                <span
                  className="text-xs font-body"
                  style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
                >
                  {ed.note}
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-sm font-body max-w-sm text-center"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            More languages to follow. Each edition authored natively,
            not translated.
          </p>
        </div>

        {/* Closing */}
        <div className="flex flex-col items-center gap-5">
          <p
            className="font-heading text-xl"
            style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
          >
            <em>Same sky. Every language its own entry point.</em>
          </p>
          <a
            href="/generate"
            className="font-body text-sm px-6 py-2.5 rounded-xl transition-all hover:opacity-90"
            style={{
              fontFamily: "var(--font-body)",
              background: "rgba(212,168,67,0.08)",
              border: "1px solid rgba(212,168,67,0.3)",
              color: "#d4a843",
              textDecoration: "none",
            }}
          >
            Try the prototype — pick a language and see a page &rarr;
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />
    </section>
  );
}
