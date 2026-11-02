import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for does not exist.",
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 text-center"
      style={{ background: "var(--navy-900)", color: "var(--paper)", paddingTop: 160 }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--champagne)",
          display: "block",
          marginBottom: 24,
        }}
      >
        404 · Page not found
      </span>
      <h1
        style={{
          fontFamily: "var(--font-manrope)",
          fontWeight: 600,
          fontSize: "clamp(2.4rem, 6vw, 5rem)",
          lineHeight: 1.04,
          letterSpacing: "-0.04em",
          color: "var(--paper)",
          maxWidth: "14ch",
          marginBottom: 24,
        }}
      >
        This page does not{" "}
        <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>exist.</em>
      </h1>
      <p style={{ color: "rgba(255,255,255,.62)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 400, marginBottom: 40 }}>
        The page you were looking for could not be found. It may have been moved, renamed or removed.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn btn-primary">Go to home →</Link>
        <Link href="/services" className="btn" style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}>
          Our services
        </Link>
        <Link href="/contact" className="btn" style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}>
          Contact
        </Link>
      </div>
    </main>
  );
}
