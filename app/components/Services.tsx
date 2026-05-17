import Reveal from "./Reveal";

const services = [
  {
    pos: 1,
    num: "01 · Service",
    title: "Fractional CFO Services",
    desc: "Senior CFO leadership on a flexible basis. Board-ready reporting, strategic planning, and the calls only an experienced operator can make.",
    style: { top: 0, left: "50%", transform: "translateX(-50%)" },
    delay: "orbit-float-d0",
  },
  {
    pos: 2,
    num: "02 · Service",
    title: "Accounting Services",
    desc: "Month-end close, management accounts, statutory compliance — handled with rigour and the responsiveness of a partner who knows your business.",
    style: { top: "30%", right: 0 },
    delay: "orbit-float-d1",
  },
  {
    pos: 3,
    num: "03 · Service",
    title: "Strategic Financial Modelling",
    desc: "Three-statement models, scenario forecasts, unit economics, and valuations — built to drive real decisions, not just live in a deck.",
    style: { bottom: 0, right: "9%" },
    delay: "orbit-float-d2",
  },
  {
    pos: 4,
    num: "04 · Service",
    title: "Audit Readiness",
    desc: "From document trail to control framework, we prepare your business for audit calmly and confidently — a routine review, not a stressful event.",
    style: { bottom: 0, left: "9%" },
    delay: "orbit-float-d3",
  },
  {
    pos: 5,
    num: "05 · Service",
    title: "Financial Packages",
    desc: "Structured entry-level engagements for businesses not yet ready for full ongoing services. Fixed scope, fixed timeframe, high-impact result.",
    style: { top: "30%", left: 0 },
    delay: "orbit-float-d4",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-6 lg:py-[140px] services-blob-tr"
      style={{ background: "var(--navy-900)", color: "var(--paper)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[60px] items-start md:items-end mb-4 md:mb-8 lg:mb-[60px]">
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
              Five ways DreX CFO{" "}
              <em className="not-italic" style={{ color: "var(--champagne)" }}>moves your numbers.</em>
            </h2>
          </Reveal>
          <Reveal delay="d1" className="hidden md:block">
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: "1.02rem", lineHeight: 1.7, maxWidth: 560 }}>
              Each engagement applies across all industries — technology, retail, professional services, and beyond. Built modularly, so you take exactly what you need.
            </p>
          </Reveal>
        </div>

        <Reveal delay="d1">
          {/* Desktop orbit layout */}
          <div
            className="relative w-full mx-auto hidden lg:block"
            style={{ maxWidth: 1100, aspectRatio: "1.15 / 1", minHeight: 680 }}
          >
            {/* Glow */}
            <div className="orbit-glow" />

            {/* SVG orbital lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
              viewBox="0 0 1100 1000"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="orb-arr"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="9"
                  markerHeight="9"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L10,5 L0,10 Z" fill="#D4A574" />
                </marker>
                <linearGradient id="orb-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#D4A574" stopOpacity=".25" />
                  <stop offset="1" stopColor="#D4A574" stopOpacity=".9" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#orb-line)" strokeWidth="1.5" strokeDasharray="5 6">
                <path d="M540,240 C548,290 552,335 550,378" markerEnd="url(#orb-arr)" />
                <path d="M820,400 Q740,430 660,470" markerEnd="url(#orb-arr)" />
                <path d="M770,790 Q700,690 625,580" markerEnd="url(#orb-arr)" />
                <path d="M330,790 Q400,690 475,580" markerEnd="url(#orb-arr)" />
                <path d="M280,400 Q360,430 440,470" markerEnd="url(#orb-arr)" />
              </g>
            </svg>

            {/* Core */}
            <div
              className="absolute z-[3] grid place-items-center text-center"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, var(--navy-700) 0%, var(--navy-900) 70%)",
                border: "1px solid rgba(212,165,116,.35)",
                boxShadow: "0 30px 80px rgba(6,21,46,.7), inset 0 0 60px rgba(212,165,116,.08)",
              }}
            >
              <div className="orbit-core-ring-inner" />
              <div className="orbit-core-ring-outer" />
              <div className="flex flex-col items-center justify-center gap-[6px] z-[2] px-[14px]">
                <div
                  className="w-16 h-16 rounded-full grid place-items-center mb-1"
                  style={{
                    background: "linear-gradient(135deg, var(--champagne), var(--champagne-soft))",
                    color: "var(--navy-900)",
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    fontSize: "1.9rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  D
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    letterSpacing: "-0.015em",
                    color: "var(--paper)",
                    whiteSpace: "nowrap",
                  }}
                >
                  DreX CFO
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.22em",
                    color: "var(--champagne)",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    marginTop: 2,
                  }}
                >
                  at the centre
                </div>
              </div>
            </div>

            {/* Service cards */}
            {services.map((svc) => (
              <div
                key={svc.pos}
                className="absolute z-[4]"
                style={svc.style}
              >
                <article
                  className={`orbit-svc-card orbit-float ${svc.delay} w-[250px] rounded-[18px] px-[22px] py-[22px] pb-5 backdrop-blur-sm cursor-pointer`}
                >
                  <span
                    className="block mb-[10px]"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.22em",
                      color: "var(--champagne)",
                      textTransform: "uppercase",
                    }}
                  >
                    {svc.num}
                  </span>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: "var(--paper)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,.62)", lineHeight: 1.55 }}>
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
