import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seven Days, Seven Wanderers — Stakeholder Briefing",
  description: "Internal briefing for early supporters and potential partners. Not indexed, not linked from navigation.",
  robots: { index: false, follow: false },
};

const STATUS = [
  { item: "Landing page — full narrative, 13 sections, live at wanderers.ngengwe.com", state: "done" as const },
  { item: "Etymology data layer — 13 languages, typed schema, drives WeekGrid + /generate", state: "done" as const },
  { item: "/generate prototype — language, narrator, child name, day selectors", state: "done" as const },
  { item: "Email capture — Web3Forms wired, awaiting live API key", state: "progress" as const },
  { item: "28-page book template — typed schema, parametric narrative strings", state: "done" as const },
  { item: "Illustration brief — 42 assets × 2 styles = 84 files specified, Phase 0/1 staged", state: "done" as const },
  { item: "OG social image — generated at build time via satori + resvg", state: "done" as const },
  { item: "Phase 0 learning slice — 3 illustrations, self-produced, to inform sourcing decision", state: "pending" as const },
  { item: "Phase 1 illustration set — ~27 files, English edition, Watercolor Warm style", state: "pending" as const },
  { item: "Backend — remove static export, add compositing + PDF route handlers", state: "pending" as const },
  { item: "Compositing engine — layered PNGs assembled into 28-page PDF via pdf-lib", state: "pending" as const },
  { item: "Preview UI — /preview/[bookId] page-turner experience", state: "pending" as const },
  { item: "Commerce — Stripe checkout + Peecho print-on-demand integration", state: "pending" as const },
];

const STATE_LABEL: Record<string, string> = { done: "Done", progress: "In Progress", pending: "Pending" };
const STATE_COLOR: Record<string, string> = { done: "#10b981", progress: "#d4a843", pending: "#5a6a7a" };

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex flex-col gap-6 py-14"
      style={{ borderBottom: "1px solid rgba(212,168,67,0.12)" }}
    >
      <div className="flex flex-col gap-2">
        <span
          className="text-xs tracking-[0.25em] uppercase font-body"
          style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
        >
          {kicker}
        </span>
        <h2
          className="font-heading text-2xl md:text-3xl"
          style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
        >
          {title}
        </h2>
      </div>
      <div
        className="flex flex-col gap-4 font-body text-base leading-relaxed max-w-3xl"
        style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function StakeholdersPage() {
  return (
    <main style={{ background: "#0d1b2a", minHeight: "100vh" }}>
      {/* Internal banner */}
      <div
        className="flex items-center justify-between px-6 py-3 sticky top-0 z-50"
        style={{ background: "#152535", borderBottom: "1px solid rgba(212,168,67,0.15)" }}
      >
        <a href="/" className="font-heading text-sm" style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}>
          Seven Days, Seven Wanderers
        </a>
        <span
          className="text-[0.65rem] tracking-[0.15em] uppercase font-body px-3 py-1 rounded-full"
          style={{
            color: "rgba(253,246,227,0.4)",
            border: "1px solid rgba(253,246,227,0.15)",
            fontFamily: "var(--font-body)",
          }}
        >
          Internal · Not Indexed
        </span>
      </div>

      {/* Header */}
      <div className="px-6 pt-20 pb-16" style={{ borderBottom: "1px solid rgba(212,168,67,0.12)" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <span
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            Stakeholder Briefing
          </span>
          <h1
            className="font-heading text-3xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            What Seven Days, Seven Wanderers is,<br />
            where it stands, and what we need next.
          </h1>
          <p
            className="font-body text-lg leading-relaxed max-w-2xl"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            Written so you can get current on the project without a call —
            the idea, what is built, where it is going, and how to get involved
            as an early supporter, illustrator, or partner.
          </p>
          <div className="flex items-center gap-3 flex-wrap text-sm font-body" style={{ fontFamily: "var(--font-body)" }}>
            <span style={{ color: "rgba(253,246,227,0.35)" }}>Last updated: June 8, 2026</span>
            <span style={{ color: "rgba(253,246,227,0.15)" }}>·</span>
            <span style={{ color: "rgba(253,246,227,0.35)" }}>George Ngengwe</span>
            <span style={{ color: "rgba(253,246,227,0.15)" }}>·</span>
            <a href="mailto:gngengwe@gmail.com" style={{ color: "#d4a843", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              gngengwe@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pb-28">
        <div className="max-w-3xl mx-auto flex flex-col">

          <Section id="what-we-build" kicker="The Idea" title="What we're building">
            <p>
              <strong style={{ color: "#fdf6e3" }}>Seven Days, Seven Wanderers</strong> is a
              children&rsquo;s picture book — and, over time, a personalization platform —
              built on a single observation: the names of the days of the week were given
              by ancient sky-watchers to the seven visible &ldquo;wanderers&rdquo; (Sun, Moon,
              Mars, Mercury, Jupiter, Venus, Saturn). Every language that adopted that
              seven-day week encoded the memory differently — some kept it in plain sight
              (Spanish <em>Lunes</em>, from <em>Luna</em>), some disguised it through Norse
              mythology (English <em>Wednesday</em>, from Woden standing in for Mercury),
              and some erased it entirely (German <em>Mittwoch</em>, &ldquo;middle of the
              week&rdquo;).
            </p>
            <p>
              The book tells that story through the relationship between a child and the
              adult who loves them — looking up at the same sky that named their week.
              The long-term vision is a platform where any family can generate their own
              edition: their language, narrator, cultural setting, and art style, while
              the underlying sky-story stays the same.
            </p>
          </Section>

          <Section id="how-we-got-here" kicker="Progress" title="How we got here">
            <p>
              The project started as a blank repo and a concept: prove the idea publicly,
              collect early interest, and build the systems that let the book scale into
              a series. In the months since:
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "A full narrative landing page went live at wanderers.ngengwe.com — the hook, the story, the reveal, and the platform vision, in deliberate order.",
                "A typed etymology data layer was built — 13 language editions seeded, each day mapped to its planet and the linguistic path that name took (direct, Norse-substituted, liturgical, descriptive, or erased).",
                "A /generate prototype shipped — readers can already pick a language, a narrator, a child's name, and a day, and see a rendered spread driven by that data.",
                "The 28-page book was structured into a typed template system — every page, spread pairing, illustration slot, and parametric narrative string ({child}/{narrator}/{day}/{planet}) is now defined and machine-readable.",
                "A complete illustration brief was written and stress-tested — 42 distinct assets across two art styles (84 files total), staged into a Phase 1 minimum set of ~27 files for a working English-edition preview.",
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: "#d4a843" }} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="the-platform" kicker="Architecture" title="The platform underneath the book">
            <p>
              The book is being built less as a single static product and more as a
              <em> system that produces editions</em>. Four choice axes drive every
              generated copy:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-1">
              {[
                { label: "Language", detail: "13 editions seeded — Romance, Germanic, Japonic, Koreanic, Indo-Aryan, Semitic, Slavic, Bantu families" },
                { label: "Narrator", detail: "6 figures — grandmother, grandfather, mother, father, uncle, aunt — each with matched pronoun strings" },
                { label: "Cultural setting", detail: "12 backgrounds planned — the figure stays neutral; the world around them carries the culture" },
                { label: "Art style", detail: "Watercolor Warm and Graphic Bold — same layered-asset system, two finished looks" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="rounded-lg p-4 flex flex-col gap-1"
                  style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.12)" }}
                >
                  <span className="font-heading text-base" style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}>
                    {row.label}
                  </span>
                  <span className="text-sm" style={{ color: "#a8987a" }}>{row.detail}</span>
                </div>
              ))}
            </div>
            <p>
              Underneath, illustrations are produced as layered PNGs (background, figure,
              planet) that a compositing engine assembles at order time into a complete
              28-page PDF — rather than hand-painting every possible combination. That
              architecture is what lets one well-illustrated template scale into hundreds
              of personalized editions.
            </p>
          </Section>

          <Section id="where-we-are" kicker="Status" title="Where we are">
            <p>
              The narrative and data layers are largely done. The remaining work is
              concentrated in two places: producing the illustration set, and building
              the backend that turns a reader&rsquo;s choices into a printed book.
            </p>
            <div className="flex flex-col gap-1.5 mt-1">
              {STATUS.map((row) => (
                <div
                  key={row.item}
                  className="flex items-center gap-3 rounded-md px-4 py-2.5"
                  style={{ background: "rgba(212,168,67,0.04)" }}
                >
                  <span className="shrink-0 w-2 h-2 rounded-full" style={{ background: STATE_COLOR[row.state] }} />
                  <span className="text-sm flex-1" style={{ color: "#c4b490" }}>{row.item}</span>
                  <span
                    className="text-[0.65rem] tracking-[0.1em] uppercase shrink-0 px-2.5 py-1 rounded-full"
                    style={{ color: STATE_COLOR[row.state], border: `1px solid ${STATE_COLOR[row.state]}40`, background: `${STATE_COLOR[row.state]}14` }}
                  >
                    {STATE_LABEL[row.state]}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="whats-next" kicker="Roadmap" title="What comes next">
            <ol className="flex flex-col gap-4 mt-1">
              {[
                {
                  h: "A self-produced learning slice (this weekend)",
                  b: "Before deciding how the full illustration set gets sourced, three assets — one planet hero, the shared day-reveal scene, and one figure silhouette — get produced solo. The goal isn't the art; it's firsthand judgment on timing, consistency, and revision loops, so the brief for outsourcing (or the AI pipeline) is sharp rather than guessed at.",
                },
                {
                  h: "Phase 1 illustration set — ~27 files",
                  b: "All 12 shared scene templates, all 7 planet heroes, one cultural setting, the narrator and child figures, and back matter — enough for a complete, working English-edition preview in the Watercolor Warm style.",
                },
                {
                  h: "Backend shift",
                  b: "Move off static export, add Cloudflare Pages route handlers for compositing and PDF assembly — the architecture change that turns the site from a brochure into a generator.",
                },
                {
                  h: "Compositing engine + preview UI",
                  b: "A Cloudflare Worker that selects the right layers per reader's choices, assembles the 28-page PDF, and a /preview/[bookId] page-turner so a family can see their edition before buying.",
                },
                {
                  h: "Commerce — Stripe + Peecho",
                  b: "Checkout, pricing ($9.99 PDF / $24.99 softcover / $34.99 hardcover), and print-on-demand fulfillment so a generated edition becomes a real book on someone's shelf.",
                },
              ].map((row, i) => (
                <li key={row.h} className="flex gap-4">
                  <span className="font-heading text-xl shrink-0" style={{ fontFamily: "var(--font-heading)", color: "#a07830" }}>
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-lg" style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}>
                      {row.h}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#a8987a" }}>{row.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <section id="contact" className="flex flex-col gap-6 pt-14">
            <div className="flex flex-col gap-2">
              <span className="text-xs tracking-[0.25em] uppercase font-body" style={{ color: "#a07830", fontFamily: "var(--font-body)" }}>
                Get Involved
              </span>
              <h2 className="font-heading text-2xl md:text-3xl" style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}>
                Reach George
              </h2>
            </div>
            <p className="font-body text-base leading-relaxed max-w-2xl" style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}>
              If you&rsquo;d like to support the project early, illustrate a scene,
              advise on languages or cultural settings, or just want to talk through
              where this is headed — the fastest path is direct.
            </p>
            <div
              className="rounded-xl p-6 flex flex-col gap-3 max-w-md"
              style={{ background: "rgba(212,168,67,0.05)", border: "1px solid rgba(212,168,67,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.1em] uppercase shrink-0 w-16" style={{ color: "#a07830" }}>Email</span>
                <a href="mailto:gngengwe@gmail.com" style={{ color: "#fdf6e3", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  gngengwe@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.1em] uppercase shrink-0 w-16" style={{ color: "#a07830" }}>Phone</span>
                <a href="tel:+18163098526" style={{ color: "#fdf6e3", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  +1 (816) 309-8526
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.1em] uppercase shrink-0 w-16" style={{ color: "#a07830" }}>Entity</span>
                <span style={{ color: "#fdf6e3" }}>HK Clearway LLC, powered by becomiNG</span>
              </div>
            </div>
            <p className="text-sm italic" style={{ color: "#8a7a5e" }}>
              This page is internal and not indexed or linked from navigation.
              If you received this link, you&rsquo;re part of the early circle George
              has chosen to brief directly. Please don&rsquo;t share it publicly.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
