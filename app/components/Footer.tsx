import Link from "next/link";
import Image from "next/image";

const FOR_BUSINESSES = [
  { label: "Fractional CFO", href: "/services/fractional-cfo" },
  { label: "Accounting", href: "/services/accounting" },
  { label: "Financial Modeling", href: "/services/financial-modeling" },
  { label: "Tax and Compliance", href: "/services/tax-compliance" },
  { label: "Financial Packages", href: "/services/financial-packages" },
];

const FOR_FIRMS = [
  { label: "Partner with us", href: "/for-firms" },
  { label: "How we deliver", href: "/how-we-deliver" },
  { label: "Start a pilot", href: "/contact?type=firm" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Client work", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const CONTACT = [
  { label: "Dallas · London", href: "#" },
  { label: "hello@drexfinancialadvisors.com", href: "mailto:hello@drexfinancialadvisors.com" },
  { label: "partners@drexfinancialadvisors.com", href: "mailto:partners@drexfinancialadvisors.com" },
  { label: "+44 7561 325182", href: "tel:+447561325182" },
  { label: "[CONFIRM: Dallas number]", href: "#" },
];

function ColHead({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </h4>
  );
}

function FootLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal || href === "#") {
    return (
      <a
        href={href}
        className="block py-[5px] no-underline transition-colors duration-300 hover:text-[var(--champagne)]"
        style={{ color: "rgba(255,255,255,.62)", fontSize: "0.9rem" }}
      >
        {label}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="block py-[5px] no-underline transition-colors duration-300 hover:text-[var(--champagne)]"
      style={{ color: "rgba(255,255,255,.62)", fontSize: "0.9rem" }}
    >
      {label}
    </Link>
  );
}

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
          className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-8 lg:gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center no-underline" aria-label="DreX home">
              <Image src="/Logo2.png" alt="DreX" width={80} height={50} className="object-contain" style={{ height: 50, width: "auto" }} />
            </Link>
            <p
              className="mt-5"
              style={{ color: "rgba(255,255,255,.5)", fontSize: "0.88rem", lineHeight: 1.65, maxWidth: 320 }}
            >
              Senior financial judgment, delivered by a dedicated team. With offices in Dallas and London, serving clients in the US, UK and internationally.
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full text-[0.8rem] no-underline transition-all duration-300 hover:bg-[var(--champagne)] hover:text-[var(--navy-900)]"
                style={{ border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.75)" }}
              >
                Book a call →
              </Link>
            </div>
          </div>

          {/* For Businesses */}
          <div>
            <ColHead>For Businesses</ColHead>
            {FOR_BUSINESSES.map((l) => <FootLink key={l.href} {...l} />)}
          </div>

          {/* For Firms */}
          <div>
            <ColHead>For Firms</ColHead>
            {FOR_FIRMS.map((l) => <FootLink key={l.href} {...l} />)}
            <div className="mt-6">
              <ColHead>Company</ColHead>
              {COMPANY.map((l) => <FootLink key={l.label} {...l} />)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <ColHead>Contact</ColHead>
            {CONTACT.map((l) => <FootLink key={l.label} {...l} />)}
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p style={{ color: "rgba(255,255,255,.35)", fontSize: "0.8rem", lineHeight: 1.6 }}>
            Offices in Dallas and London. Serving clients in the US, UK and internationally.
            <br />
            © 2026 DreX · DreX Financial Services [CONFIRM: exact US legal entity name] ·{" "}
            <a href="/privacy" className="hover:text-[var(--champagne)] transition-colors no-underline" style={{ color: "rgba(255,255,255,.35)" }}>Privacy Policy</a>
            {" "}·{" "}
            <a href="/terms" className="hover:text-[var(--champagne)] transition-colors no-underline" style={{ color: "rgba(255,255,255,.35)" }}>Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
