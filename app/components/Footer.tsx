import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-8"
      style={{
        background: "#040D1F",
        color: "var(--paper)",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div
          className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-[60px] pb-10 md:pb-[60px]"
          style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#top"
              className="inline-flex items-center gap-[10px] no-underline"
              style={{ color: "var(--paper)" }}
            >
              <Image
                src="/Logo2.png"
                alt="DreX CFO"
                width={90}
                height={56}
                className="object-contain"
                style={{ height: 56, width: "auto" }}
              />
            </a>
            <p
              className="mt-5"
              style={{ color: "rgba(255,255,255,.55)", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: 340 }}
            >
              Expert fractional CFO services, accounting, financial modelling, and audit readiness — powered by intelligent automation. Based in London. Serving businesses of all sizes across all industries, nationally and internationally.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-[18px]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--champagne)",
              }}
            >
              Services
            </h4>
            {["Fractional CFO", "Accounting", "Financial Modelling", "Audit Readiness", "Financial Packages"].map((link) => (
              <a
                key={link}
                href="#services"
                className="block py-[6px] no-underline transition-colors duration-300 hover:text-[var(--champagne)]"
                style={{ color: "rgba(255,255,255,.65)", fontSize: "0.92rem" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-[18px]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--champagne)",
              }}
            >
              Company
            </h4>
            {[
              { label: "About", href: "#about" },
              { label: "How it works", href: "#process" },
              { label: "For Firms", href: "/for-firms" },
              { label: "Client work", href: "#testimonials" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-[6px] no-underline transition-colors duration-300 hover:text-[var(--champagne)]"
                style={{ color: "rgba(255,255,255,.65)", fontSize: "0.92rem" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-[18px]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--champagne)",
              }}
            >
              Contact
            </h4>
            {[
              { label: "+44 7561 325182", href: "tel:+447561325182" },
              { label: "Haroon1662@drexfinancialadvisors.com", href: "mailto:Haroon1662@drexfinancialadvisors.com" },
              { label: "London · Dallas, Texas", href: "#" },
              { label: "Book a call →", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-[6px] no-underline transition-colors duration-300 hover:text-[var(--champagne)]"
                style={{ color: "rgba(255,255,255,.65)", fontSize: "0.92rem" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="pt-8 flex justify-between items-center flex-wrap gap-4"
        >
          <p style={{ color: "rgba(255,255,255,.4)", fontSize: "0.82rem" }}>
            © 2026 DreX CFO. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 500,
              color: "var(--champagne-soft)",
              fontSize: "0.92rem",
              letterSpacing: "-0.01em",
            }}
          >
            Smarter finances. Automated insights. Measurable growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
