"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { href: "/services", label: "All services", desc: "" },
  { href: "/services/fractional-cfo", label: "Fractional CFO", desc: "Senior financial leadership, without the full-time salary" },
  { href: "/services/accounting", label: "Accounting and Monthly Close", desc: "Books closed on time, every number traced to source" },
  { href: "/services/payables-receivables", label: "Payables and Receivables", desc: "Cash comes in faster and goes out on time" },
  { href: "/services/financial-modeling", label: "Financial Modeling and FP&A", desc: "Models that hold up under investor and lender scrutiny" },
  { href: "/services/tax-compliance", label: "Tax and Compliance", desc: "Prepared by our team, filed by licensed partner CPAs" },
  { href: "/services/transaction-readiness", label: "Transaction Readiness", desc: "Clean books and an organized data room before buyers ask" },
  { href: "/services/audit-readiness", label: "Audit Readiness", desc: "Walk into your audit with documentation already in place" },
  { href: "/services/financial-packages", label: "Financial Packages", desc: "A fixed scope, a fixed price, a fixed timeframe" },
];

const TOP_LINKS = [
  { href: "/for-firms", label: "For Firms" },
  { href: "/how-we-deliver", label: "How We Deliver" },
  { href: "/industries", label: "Industries" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setDropOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/services") return pathname.startsWith("/services");
    return pathname === href;
  }

  function openDrop() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setDropOpen(true);
  }
  function closeDrop() {
    hoverTimer.current = setTimeout(() => setDropOpen(false), 140);
  }

  const navBg = scrolled || menuOpen
    ? "bg-[rgba(11,30,63,0.95)] backdrop-blur-[16px] border-b border-white/[0.06]"
    : "";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-[18px] ${navBg}`}>
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline" aria-label="DreX home">
            <Image
              src="/Logo2.png"
              alt="DreX"
              width={120}
              height={56}
              className="object-contain"
              style={{ height: 56, width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex gap-7 items-center">
            <Link
              href="/about"
              className={`text-[0.88rem] tracking-[0.02em] no-underline transition-colors duration-300 ${isActive("/about") ? "text-[var(--champagne)]" : "text-white/80 hover:text-[var(--champagne)]"}`}
            >
              About
            </Link>

            {/* Services dropdown trigger */}
            <div className="relative" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
              <button
                className={`flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0 text-[0.88rem] tracking-[0.02em] transition-colors duration-300 ${isActive("/services") ? "text-[var(--champagne)]" : "text-white/80 hover:text-[var(--champagne)]"}`}
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                Services
                <svg
                  className={`w-[14px] h-[14px] transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {dropOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] rounded-[20px] p-5"
                  style={{
                    background: "rgba(11,30,63,.97)",
                    border: "1px solid rgba(255,255,255,.1)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 24px 60px rgba(0,0,0,.55)",
                  }}
                  onMouseEnter={openDrop}
                  onMouseLeave={closeDrop}
                >
                  {/* All services header */}
                  <Link
                    href="/services"
                    className="block rounded-xl px-4 py-3 mb-2 no-underline hover:bg-white/[0.07] transition-colors duration-200"
                    style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}
                  >
                    <span
                      className="font-semibold text-[0.88rem]"
                      style={{ color: "var(--champagne)", fontFamily: "var(--font-manrope)", letterSpacing: "0.02em" }}
                    >
                      All services →
                    </span>
                  </Link>
                  <div className="grid grid-cols-2 gap-0.5">
                    {SERVICE_LINKS.slice(1).map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`rounded-xl px-4 py-[10px] no-underline transition-colors duration-200 hover:bg-white/[0.07] ${isActive(s.href) ? "bg-white/[0.06]" : ""}`}
                      >
                        <span className="block text-[0.86rem] font-medium" style={{ color: "var(--paper)", fontFamily: "var(--font-manrope)" }}>
                          {s.label}
                        </span>
                        <span className="block text-[0.74rem] mt-0.5 leading-tight" style={{ color: "rgba(255,255,255,.45)", fontFamily: "var(--font-manrope)" }}>
                          {s.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {TOP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.88rem] tracking-[0.02em] no-underline transition-colors duration-300 ${isActive(link.href) ? "text-[var(--champagne)]" : "text-white/80 hover:text-[var(--champagne)]"}`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-5 py-[10px] rounded-full text-[0.85rem] text-[var(--paper)] no-underline transition-all duration-300 hover:bg-[var(--champagne)] hover:text-[var(--navy-900)]"
              style={{ border: "1px solid rgba(255,255,255,.22)" }}
            >
              Book a call →
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-[0.8rem] text-[var(--paper)] no-underline transition-all duration-300 hover:bg-[var(--champagne)] hover:text-[var(--navy-900)]"
              style={{ border: "1px solid rgba(255,255,255,.22)" }}
            >
              Book a call
            </Link>
            <button
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-[var(--paper)]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="block h-px w-5 bg-current transition-all duration-300" style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
              <span className="block h-px w-5 bg-current transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-px w-5 bg-current transition-all duration-300" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="lg:hidden fixed left-0 right-0 z-[99] overflow-hidden transition-all duration-300"
        style={{
          top: 92,
          background: "rgba(11,30,63,.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          maxHeight: menuOpen ? "85vh" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="px-5 py-4 flex flex-col overflow-y-auto" style={{ maxHeight: "80vh" }}>
          <Link
            href="/about"
            className={`py-3 no-underline text-[1rem] tracking-[0.01em] transition-colors duration-300 border-b border-white/[0.06] ${isActive("/about") ? "text-[var(--champagne)]" : "text-white/80"}`}
          >
            About
          </Link>

          <div className="border-b border-white/[0.06]">
            <button
              className={`w-full py-3 flex items-center justify-between bg-transparent border-0 cursor-pointer text-[1rem] tracking-[0.01em] ${isActive("/services") ? "text-[var(--champagne)]" : "text-white/80"}`}
              onClick={() => setMobileServicesOpen((o) => !o)}
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pb-3 pl-4 flex flex-col">
                {SERVICE_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`py-2 text-[0.9rem] no-underline transition-colors duration-300 ${isActive(s.href) ? "text-[var(--champagne)]" : "text-white/65 hover:text-[var(--champagne)]"}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {TOP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 no-underline text-[1rem] tracking-[0.01em] transition-colors duration-300 border-b border-white/[0.06] last:border-b-0 ${isActive(link.href) ? "text-[var(--champagne)]" : "text-white/80"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
