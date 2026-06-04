export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 px-6"
      style={{ background: "#060e18", borderTop: "1px solid rgba(212,168,67,0.12)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="font-heading text-lg"
            style={{ fontFamily: "var(--font-heading)", color: "#d4a843" }}
          >
            Seven Days, Seven Wanderers
          </span>
          <span
            className="font-body text-xs"
            style={{ color: "#6b7280", fontFamily: "var(--font-body)" }}
          >
            Project Wanderers — Days of the Week
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex gap-6">
          {[
            { label: "The Story",  href: "#story" },
            { label: "The Week",   href: "#signup" },
            { label: "Join List",  href: "#signup" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm transition-colors hover:text-gold"
              style={{
                color: "#8a9db5",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="font-body text-xs text-center md:text-right"
          style={{ color: "#4a5568", fontFamily: "var(--font-body)" }}
        >
          &copy; {year} becomiNG / HK Clearway LLC.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
