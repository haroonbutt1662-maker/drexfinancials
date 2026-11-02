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
    style: { top: "10%", right: "2%" },
    delay: "orbit-float-d1",
  },
  {
    pos: 3, num: "03 · Service",
    title: "Payables & Receivables",
    desc: "Accurate, timely AP and AR management. Vendor payments, client invoicing and reconciliations handled end-to-end.",
    slug: "payables-receivables",
    style: { top: "50%", right: "0%", transform: "translateY(-50%)" },
    delay: "orbit-float-d2",
  },
  {
    pos: 4, num: "04 · Service",
    title: "Strategic Financial Modelling",
    desc: "Three-statement models, scenario forecasts, unit economics and valuations — built to drive real decisions, not just live in a deck.",
    slug: "financial-modeling",
    style: { bottom: "10%", right: "2%" },
    delay: "orbit-float-d3",
  },
  {
    pos: 5, num: "05 · Service",
    title: "Transaction Readiness",
    desc: "Quality of earnings, data room build and investor-grade financial preparation for businesses heading into a transaction.",
    slug: "transaction-readiness",
    style: { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
    delay: "orbit-float-d4",
  },
  {
    pos: 6, num: "06 · Service",
    title: "Tax & Compliance",
    desc: "Tax filings, regulatory deadlines and compliance reporting handled accurately and on time, so nothing falls through the cracks.",
    slug: "tax-compliance",
    style: { bottom: "10%", left: "2%" },
    delay: "orbit-float-d5",
  },
  {
    pos: 7, num: "07 · Service",
    title: "Audit Readiness",
    desc: "From document trail to control framework, we prepare your business for audit calmly and confidently — a routine review, not a stressful event.",
    slug: "audit-readiness",
    style: { top: "50%", left: "0%", transform: "translateY(-50%)" },
    delay: "orbit-float-d6",
  },
  {
    pos: 8, num: "08 · Service",
    title: "Financial Packages",
    desc: "Structured entry-level engagements for businesses not yet ready for full ongoing services. Fixed scope, fixed timeframe, high-impact result.",
    slug: "financial-packages",
    style: { top: "10%", left: "2%" },
    delay: "orbit-float-d7",
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
                See all 8 services →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay="d1">
          {/* Desktop orbit layout */}
          <div
            className="relative w-full mx-auto hidden lg:block"
            style={{ maxWidth: 1100, aspectRatio: "1.05 / 1", minHeight: 640 }}
          >
            {/* Glow */}
            <div className="orbit-glow" />

            {/* SVG orbital lines — 8 spokes, ~45° apart */}
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
              {/* center (550, 524), core r=105, line end r=300 */}
              <g fill="none" stroke="rgba(212,165,116,0.55)" strokeWidth="1.5" strokeDasharray="5 6">
                {/* 01 — 90°  straight up */}
                <line x1="550" y1="419" x2="550" y2="224" markerEnd="url(#orb-arr)" />
                {/* 02 — 47°  upper-right */}
                <line x1="622" y1="447" x2="755" y2="304" markerEnd="url(#orb-arr)" />
                {/* 03 — 0°   right */}
                <line x1="655" y1="524" x2="850" y2="524" markerEnd="url(#orb-arr)" />
                {/* 04 — -47° lower-right */}
                <line x1="622" y1="601" x2="755" y2="744" markerEnd="url(#orb-arr)" />
                {/* 05 — -90° straight down */}
                <line x1="550" y1="629" x2="550" y2="824" markerEnd="url(#orb-arr)" />
                {/* 06 — -133° lower-left */}
                <line x1="478" y1="601" x2="345" y2="744" markerEnd="url(#orb-arr)" />
                {/* 07 — 180°  left */}
                <line x1="445" y1="524" x2="250" y2="524" markerEnd="url(#orb-arr)" />
                {/* 08 — 133°  upper-left */}
                <line x1="478" y1="447" x2="345" y2="304" markerEnd="url(#orb-arr)" />
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
