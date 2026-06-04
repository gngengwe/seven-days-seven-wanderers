"use client";

import { useEffect, useRef } from "react";

const WANDERERS = [
  { label: "Sun",     color: "#f59e0b", size: 52, top: "22%", left: "12%" },
  { label: "Moon",    color: "#cbd5e1", size: 38, top: "12%", left: "26%" },
  { label: "Mars",    color: "#dc4c2a", size: 30, top: "8%",  left: "42%" },
  { label: "Mercury", color: "#94a3b8", size: 24, top: "10%", left: "56%" },
  { label: "Jupiter", color: "#d4874a", size: 44, top: "15%", left: "68%" },
  { label: "Venus",   color: "#f472b6", size: 34, top: "24%", left: "80%" },
  { label: "Saturn",  color: "#c89b3c", size: 40, top: "28%", left: "90%" },
];

function Starfield() {
  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    top:  `${Math.sin(i * 7.3) * 50 + 50}%`,
    left: `${Math.cos(i * 5.7) * 50 + 50}%`,
    size: Math.abs(Math.sin(i * 2.1)) * 2.5 + 0.5,
    duration: `${3 + (i % 4)}s`,
    delay:    `${(i * 0.31) % 4}s`,
  }));

  return (
    <>
      {stars.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            "--duration": s.duration,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

function SkyIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80 select-none pointer-events-none">
      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(212,168,67,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Wanderer orbs */}
      {WANDERERS.map((w) => (
        <div
          key={w.label}
          className="planet-orb absolute flex flex-col items-center gap-1"
          style={{
            top: w.top,
            left: w.left,
            width: w.size,
            height: w.size,
            background: `radial-gradient(circle at 35% 35%, white 0%, ${w.color} 35%, ${w.color}99 100%)`,
            boxShadow: `0 0 ${w.size * 0.8}px ${w.size * 0.3}px ${w.color}66`,
            color: w.color,
            "--float-dur": `${5 + WANDERERS.indexOf(w) * 0.8}s`,
            "--float-delay": `${WANDERERS.indexOf(w) * 0.5}s`,
          } as React.CSSProperties}
          aria-label={w.label}
        />
      ))}

      {/* Grandmother + grandson silhouettes */}
      <svg
        viewBox="0 0 320 160"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-80 opacity-90"
        aria-label="Grandmother and grandson looking at the sky"
      >
        {/* Ground */}
        <ellipse cx="160" cy="155" rx="140" ry="10" fill="rgba(212,168,67,0.12)" />

        {/* Grandson (left, smaller) */}
        <g fill="#152535" stroke="none">
          {/* body */}
          <rect x="90" y="90" width="22" height="50" rx="4" />
          {/* head */}
          <circle cx="101" cy="82" r="13" />
          {/* arm raised */}
          <line x1="90" y1="105" x2="72" y2="82" stroke="#152535" strokeWidth="6" strokeLinecap="round"/>
          {/* legs */}
          <rect x="90" y="135" width="9" height="22" rx="3" />
          <rect x="103" y="135" width="9" height="22" rx="3" />
        </g>

        {/* Grandmother (right, taller) */}
        <g fill="#1c3348" stroke="none">
          {/* body / dress */}
          <path d="M168 88 Q163 110 158 140 L185 140 Q181 110 178 88 Z" />
          {/* head */}
          <circle cx="173" cy="78" r="14" />
          {/* shawl / shoulder drape */}
          <path d="M158 92 Q160 80 173 78 Q186 80 188 92 Q180 98 173 95 Q166 98 158 92 Z" fill="#1c3348" />
          {/* cane */}
          <line x1="188" y1="105" x2="200" y2="148" stroke="#1c3348" strokeWidth="5" strokeLinecap="round"/>
          {/* legs */}
          <rect x="161" y="135" width="9" height="22" rx="3" />
          <rect x="173" y="135" width="9" height="22" rx="3" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  function handleScrollDown() {
    const next = sectionRef.current?.nextElementSibling;
    next?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: "linear-gradient(180deg, #060e18 0%, #0d1b2a 40%, #152535 100%)" }}
    >
      <Starfield />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <p
          className="text-gold tracking-[0.25em] text-xs uppercase font-body"
          style={{ fontFamily: "var(--font-body)" }}
        >
          A children&rsquo;s picture book &mdash; Coming Soon
        </p>

        {/* Main heading */}
        <h1
          className="font-heading text-5xl md:text-7xl leading-tight text-cream"
          style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
        >
          What if the days of the week were really{" "}
          <em className="text-gold-shimmer not-italic">stories from the sky?</em>
        </h1>

        {/* Sub */}
        <p
          className="font-body text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
        >
          Before Sunday was just Sunday. Before Monday meant back to school.
          Before Friday meant the weekend was almost here, people looked up.
          They watched seven bright wanderers move across the stars.
          From those wanderers came the names of the days we still use today.
        </p>

        {/* Book title */}
        <div className="flex flex-col items-center gap-2">
          <div className="gold-rule" />
          <h2
            className="font-heading text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
          >
            Seven Days, Seven Wanderers
          </h2>
          <p className="font-body text-sm tracking-wide" style={{ color: "#c4b490" }}>
            A beautifully illustrated children&rsquo;s book about a grandmother,
            her curious grandson, and the secret sky-story hidden inside the week.
          </p>
          <div className="gold-rule" />
        </div>

        {/* Sky illustration */}
        <SkyIllustration />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
          <a href="#signup" className="btn-primary text-base">
            Join the Launch List
          </a>
          <a href="#story" className="btn-secondary text-base">
            Discover the Story
          </a>
        </div>

        {/* Scroll cue */}
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="mt-8 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
          style={{ color: "#d4a843" }}
        >
          <span className="text-xs tracking-widest uppercase font-body" style={{ fontFamily: "var(--font-body)" }}>
            Explore
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
