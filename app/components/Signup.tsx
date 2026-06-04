"use client";

import { useState, type FormEvent } from "react";

const ROLES = [
  "Parent / Grandparent",
  "Teacher",
  "Librarian",
  "Homeschool Educator",
  "Museum / Science Center Buyer",
  "Curious Reader",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function Signup() {
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");

    // TODO: Replace this block with your email provider integration.
    // Options include: Mailchimp, ConvertKit/Kit, Resend, Buttondown, etc.
    // The form payload to send: { name, email, role, message }
    //
    // Example for Mailchimp:
    //   await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ name, email, role }) });
    //
    // For now, simulate a short delay then show success.
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

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <p
            className="text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#d4a843", fontFamily: "var(--font-body)" }}
          >
            Coming Soon
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "#fdf6e3" }}
          >
            Coming soon.
          </h2>
          <div className="gold-rule" />
          <p
            className="font-body text-base leading-relaxed max-w-lg"
            style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
          >
            The book is currently in development. Join the launch list and be
            first to receive:
          </p>
        </div>

        {/* Benefits list */}
        <div className="grid sm:grid-cols-2 gap-3 w-full">
          {[
            { text: "A free printable day-name activity sheet",   highlight: true },
            { text: "First look at the cover illustration",        highlight: true },
            { text: "Sample pages before publication",             highlight: false },
            { text: "Publication and preorder updates",            highlight: false },
            { text: "Parent and teacher resources",                highlight: false },
            { text: "Notification when the book ships",            highlight: false },
          ].map(({ text, highlight }) => (
            <div
              key={text}
              className="flex items-center gap-3 px-4 py-2 rounded-lg font-body text-sm"
              style={{
                background: highlight ? "rgba(212,168,67,0.10)" : "rgba(212,168,67,0.04)",
                border: highlight ? "1px solid rgba(212,168,67,0.3)" : "1px solid rgba(212,168,67,0.10)",
                color: highlight ? "#fdf6e3" : "#c4b490",
                fontFamily: "var(--font-body)",
              }}
            >
              <span style={{ color: "#d4a843" }}>{highlight ? "★" : "✦"}</span>
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
              You&rsquo;re on the list.
            </h3>
            <p
              className="font-body text-base"
              style={{ color: "#c4b490", fontFamily: "var(--font-body)" }}
            >
              Thank you, {name || "friend"}. We&rsquo;ll be in touch when the wanderers are ready.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="signup-name"
                  className="text-xs uppercase tracking-wider font-body"
                  style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                >
                  Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  className="signup-input"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="signup-email"
                  className="text-xs uppercase tracking-wider font-body"
                  style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  className="signup-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="signup-role"
                className="text-xs uppercase tracking-wider font-body"
                style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
              >
                I am a&hellip;
              </label>
              <select
                id="signup-role"
                className="signup-input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select your role</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="signup-message"
                className="text-xs uppercase tracking-wider font-body"
                style={{ color: "#a07830", fontFamily: "var(--font-body)" }}
              >
                Message{" "}
                <span style={{ color: "#6b7280" }}>(optional)</span>
              </label>
              <textarea
                id="signup-message"
                className="signup-input"
                rows={3}
                placeholder="Tell us why you're excited, or any questions you have…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn-primary text-base mt-2 text-center w-full sm:w-auto sm:self-center px-10"
              style={{ opacity: state === "submitting" ? 0.7 : 1, pointerEvents: state === "submitting" ? "none" : "auto" }}
            >
              {state === "submitting" ? "Joining…" : "Join the Launch List"}
            </button>

            {state === "error" && (
              <p
                className="text-sm text-center font-body"
                style={{ color: "#dc4c2a", fontFamily: "var(--font-body)" }}
              >
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
