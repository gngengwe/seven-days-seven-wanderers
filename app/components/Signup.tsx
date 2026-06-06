"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Signup() {
  const [state, setState] = useState<FormState>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");

    // TODO: Replace with email provider (Resend, ConvertKit, Mailchimp, etc.)
    // Payload: { email }
    await new Promise((res) => setTimeout(res, 800));
    setState("success");
  }

  return (
    <section
      id="signup"
      className="relative py-28 px-6"
      style={{ background: "#0d1b2a" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)" }}
      />

      <div className="max-w-xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            In Development
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Follow the build.
          </h2>
          <div className="gold-rule" />
          <p
            className="font-body text-base leading-relaxed max-w-md"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            The book is in development. The platform is being designed.
            Leave your email and we&rsquo;ll share progress as it happens —
            no noise, just the moments worth sharing.
          </p>
        </div>

        {/* What you'll get */}
        <div className="flex flex-col gap-2 w-full">
          {[
            { text: "A free printable day-name activity sheet",  star: true },
            { text: "First look at the cover illustration",       star: true },
            { text: "Updates on new language editions",           star: false },
            { text: "Early access when the platform launches",    star: false },
          ].map(({ text, star }) => (
            <div
              key={text}
              className="flex items-center gap-3 px-4 py-2 rounded-lg font-body text-sm"
              style={{
                background: star ? "rgba(212,168,67,0.10)" : "rgba(212,168,67,0.04)",
                border: star ? "1px solid rgba(212,168,67,0.3)" : "1px solid rgba(212,168,67,0.10)",
                color: star ? "#fdf6e3" : "#c4b490",
                fontFamily: "var(--font-body)",
              }}
            >
              <span style={{ color: "#d4a843" }}>{star ? "★" : "✦"}</span>
              {text}
            </div>
          ))}
        </div>

        {/* Form */}
        {state === "success" ? (
          <div
            className="w-full rounded-2xl p-10 flex flex-col items-center gap-4 text-center"
            style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.3)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.4)" }}
            >
              ☽
            </div>
            <h3
              className="font-heading text-2xl"
              style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
            >
              You&rsquo;re in.
            </h3>
            <p
              className="font-body text-base"
              style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
            >
              We&rsquo;ll share the wanderers&rsquo; progress as it happens.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row gap-3"
            noValidate
          >
            <input
              type="email"
              className="signup-input flex-1"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn-primary text-base shrink-0"
              style={{ opacity: state === "submitting" ? 0.7 : 1, pointerEvents: state === "submitting" ? "none" : "auto" }}
            >
              {state === "submitting" ? "Joining…" : "Follow the Build"}
            </button>

            {state === "error" && (
              <p
                className="text-sm text-center font-body w-full"
                style={{ color: "#dc4c2a", fontFamily: "var(--font-body)" }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
