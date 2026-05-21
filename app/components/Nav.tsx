"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#team", label: "Team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] py-[22px] transition-all duration-400 ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-[10px] text-[var(--paper)] no-underline"
            onClick={close}
          >
            <Image
              src="/Logo 2.png"
              alt="DreX CFO"
              width={200}
              height={115}
              className="object-contain"
              style={{ height: 115, width: "auto" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 no-underline text-[0.88rem] tracking-[0.02em] transition-colors duration-300 hover:text-[var(--champagne)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-[10px] border border-white/20 rounded-full text-[0.85rem] text-[var(--paper)] no-underline transition-all duration-300 hover:bg-[var(--champagne)] hover:text-[var(--navy-900)] hover:border-[var(--champagne)]"
            >
              Book a call →
            </a>
          </div>

          {/* Mobile: Book a call + hamburger */}
          <div className="sm:hidden flex items-center gap-3">
            <a
              href="#contact"
              onClick={close}
              className="px-4 py-2 border border-white/20 rounded-full text-[0.8rem] text-[var(--paper)] no-underline transition-all duration-300 hover:bg-[var(--champagne)] hover:text-[var(--navy-900)] hover:border-[var(--champagne)]"
            >
              Book a call
            </a>
            <button
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-[var(--paper)]"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span
                className="block h-px w-5 bg-current transition-all duration-300"
                style={{ transformOrigin: "center", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }}
              />
              <span
                className="block h-px w-5 bg-current transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-px w-5 bg-current transition-all duration-300"
                style={{ transformOrigin: "center", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="sm:hidden fixed left-0 right-0 z-[99] transition-all duration-300 overflow-hidden"
        style={{
          top: 68,
          background: "rgba(11,30,63,.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          maxHeight: menuOpen ? 320 : 0,
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="py-3 text-white/80 no-underline text-[1rem] tracking-[0.01em] transition-colors duration-300 hover:text-[var(--champagne)] border-b border-white/[0.06] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
