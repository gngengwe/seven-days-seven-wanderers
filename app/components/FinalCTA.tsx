export default function FinalCTA() {
  return (
    <section
      className="relative py-28 px-6"
      style={{
        background: "linear-gradient(180deg, #0f2133 0%, #060e18 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />

      {/* Star accents */}
      {[
        { top: "20%", left: "8%",  size: 2, dur: "4s", del: "0s" },
        { top: "70%", left: "15%", size: 1, dur: "3s", del: "1s" },
        { top: "35%", left: "88%", size: 2, dur: "5s", del: "0.5s" },
        { top: "80%", left: "82%", size: 1, dur: "3s", del: "2s" },
        { top: "15%", left: "50%", size: 1.5, dur: "4s", del: "1.5s" },
      ].map((s, i) => (
        <span
          key={i}
          className="star absolute rounded-full bg-white"
          style={{
            top: s.top, left: s.left,
            width: `${s.size}px`, height: `${s.size}px`,
            "--duration": s.dur, "--delay": s.del,
          } as React.CSSProperties}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            Help bring this to life
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl leading-snug"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Help bring the hidden story
            <br />
            of the week to life.
          </h2>
          <div className="gold-rule" />
        </div>

        {/* Poetic lines */}
        <div className="flex flex-col gap-3">
          {[
            "Seven days.",
            "Seven wanderers.",
            "One grown-up who loves them.",
            "One curious child.",
            "A sky full of names we still speak every day.",
          ].map((line, i) => (
            <p
              key={i}
              className="font-heading text-xl md:text-2xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: i === 4 ? "#d4a843" : "#fdf6e3",
                fontStyle: i === 4 ? "italic" : "normal",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA */}
        <a href="#signup" className="btn-primary text-base px-12 py-4 text-lg mt-4">
          Join the Launch List
        </a>
      </div>
    </section>
  );
}
