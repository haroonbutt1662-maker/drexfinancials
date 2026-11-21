import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const services = [
  {
    pos: 1, num: "01 · Service",
    title: "Fractional CFO Services",
    desc: "Senior CFO leadership on a flexible basis. Board-ready reporting, strategic planning, and the calls only an experienced operator can make.",
    slug: "fractional-cfo",
    style: { top: "2%", left: "50%", transform: "translateX(-50%)" },
    delay: "orbit-float-d0",
  },
  {
    pos: 2, num: "02 · Service",
    title: "Accounting Services",
    desc: "Month-end close, management accounts, statutory compliance — handled with rigour and the responsiveness of a partner who knows your business.",
    slug: "accounting",
    style: { top: "26%", right: "10%" },
    delay: "orbit-float-d1",
  },
  {
    pos: 3, num: "03 · Service",
    title: "Tax & Compliance",
    desc: "Tax filings, regulatory deadlines and compliance reporting handled accurately and on time, so nothing falls through the cracks.",
    slug: "tax-compliance",
    style: { bottom: "14%", right: "14%" },
    delay: "orbit-float-d2",
  },
  {
    pos: 4, num: "04 · Service",
    title: "Strategic Financial Modelling",
    desc: "Three-statement models, scenario forecasts, unit economics and valuations — built to drive real decisions, not just live in a deck.",
    slug: "financial-modeling",
    style: { bottom: "14%", left: "14%" },
    delay: "orbit-float-d3",
  },
  {
    pos: 5, num: "05 · Service",
    title: "Financial Packages",
    desc: "Structured entry-level engagements for businesses not yet ready for full ongoing services. Fixed scope, fixed timeframe, high-impact result.",
    slug: "financial-packages",
    style: { top: "26%", left: "10%" },
    delay: "orbit-float-d4",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-6 lg:py-[70px] services-blob-tr"
      style={{ background: "var(--navy-900)", color: "var(--paper)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[60px] items-start md:items-end mb-4 md:mb-8 lg:mb-[30px]">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h2
              className="mt-3 md:mt-[18px] mb-3 md:mb-6"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(1.6rem, 4.2vw, 3.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "var(--paper)",
              }}
            >
              Our services,{" "}
              <em className="not-italic" style={{ color: "var(--champagne)" }}>built to work together.</em>
            </h2>
          </Reveal>
          <Reveal delay="d1" className="hidden md:block">
            <div>
              <p style={{ color: "rgba(255,255,255,.65)", fontSize: "1.02rem", lineHeight: 1.7, maxWidth: 560 }}>
                Each engagement applies across all industries — technology, retail, professional services, and beyond. Built modularly, so you take exactly what you need.
              </p>
              <Link href="/services" className="btn btn-primary mt-5 inline-flex">
                See all services →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay="d1">
          {/* Desktop orbit layout */}
          <div
            className="relative w-full mx-auto hidden lg:block"
            style={{ maxWidth: 900, aspectRatio: "1.05 / 1", minHeight: 560 }}
          >
            {/* Glow */}
            <div className="orbit-glow" />

            {/* SVG orbital lines — 5 spokes, 72° apart */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
              viewBox="0 0 1100 1048"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="orb-arr"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M0,1 L9,5 L0,9 Z" fill="#D4A574" />
                </marker>
              </defs>
              {/* center (550, 524), core r=105, line end r=240 — pentagon, 72° apart */}
              <g fill="none" stroke="rgba(212,165,116,0.55)" strokeWidth="1.5" strokeDasharray="5 6">
                {/* 01 — 90°  straight up */}
                <line x1="550" y1="419" x2="550" y2="284" markerEnd="url(#orb-arr)" />
                {/* 02 — 18°  upper-right */}
                <line x1="650" y1="492" x2="778" y2="450" markerEnd="url(#orb-arr)" />
                {/* 03 — -54° lower-right */}
                <line x1="612" y1="609" x2="691" y2="718" markerEnd="url(#orb-arr)" />
                {/* 04 — -126° lower-left */}
                <line x1="488" y1="609" x2="409" y2="718" markerEnd="url(#orb-arr)" />
                {/* 05 — 162°  upper-left */}
                <line x1="450" y1="492" x2="322" y2="450" markerEnd="url(#orb-arr)" />
              </g>
            </svg>

            {/* Core */}
            <div
              className="absolute z-[3] grid place-items-center text-center"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 210,
                height: 210,
                borderRadius: "50%",
                background: "var(--navy-900)",
                border: "1px solid rgba(212,165,116,.35)",
                boxShadow: "0 30px 80px rgba(6,21,46,.7)",
                overflow: "hidden",
              }}
            >
              <div className="orbit-core-ring-inner" />
              <div className="orbit-core-ring-outer" />
              <Image
                src="/Logo2.png"
                alt="DreX CFO"
                width={120}
                height={120}
                quality={100}
                className="object-contain z-[2]"
                style={{ width: 120, height: 120 }}
              />
            </div>

            {/* Service cards */}
            {services.map((svc) => (
              <div
                key={svc.pos}
                className="absolute z-[4]"
                style={svc.style}
              >
                <article
                  className={`orbit-svc-card orbit-float ${svc.delay} w-[210px] rounded-[18px] px-[18px] py-[18px] pb-[14px] backdrop-blur-sm cursor-pointer`}
                >
                  <span
                    className="block mb-[8px]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.22em",
                      color: "var(--champagne)",
                      textTransform: "uppercase",
                    }}
                  >
                    {svc.num}
                  </span>
                  <h3
                    className="mb-[6px]"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontWeight: 600,
                      fontSize: "0.98rem",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: "var(--paper)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,.60)", lineHeight: 1.5 }}>
                    {svc.desc}
                  </p>
                </article>
              </div>
            ))}
          </div>

          {/* Mobile/tablet: 2-column compact grid */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {services.map((svc) => (
              <article
                key={svc.pos}
                className="rounded-[14px] px-4 py-4"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.09)",
                }}
              >
                <span
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: "var(--champagne)",
                    textTransform: "uppercase",
                  }}
                >
                  {svc.num}
                </span>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    color: "var(--paper)",
                  }}
                >
                  {svc.title}
                </h3>
                <p className="line-clamp-3" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,.62)", lineHeight: 1.5 }}>
                  {svc.desc}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
