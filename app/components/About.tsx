import type React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

// viewBox 480×620 — taller than wide so the orbit spans the full text column height
// Center at (240, 310) = 50% / 50% of viewBox
const ORBIT_SERVICES = [
  { label: "Fractional CFO",     style: { top: "11%", left: "50%",  transform: "translateX(-50%)" } as React.CSSProperties },
  { label: "Accounting",         style: { top: "37%", right: "1%"  } as React.CSSProperties },
  { label: "Audit Readiness",    style: { top: "77%", right: "2%"  } as React.CSSProperties },
  { label: "Financial Packages", style: { top: "77%", left:  "1%"  } as React.CSSProperties },
  { label: "Financial Modelling",style: { top: "37%", left:  "1%"  } as React.CSSProperties },
];

function OrbitPreview() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "480/620", maxWidth: 480 }}>
      {/* SVG: orbit ring + dashed lines + node dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 480 620"
        aria-hidden="true"
      >
        <defs>
          <marker id="ab-arr" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,1.5 L8.5,5 L0,8.5 Z" fill="rgba(212,165,116,0.65)" />
          </marker>
        </defs>
        {/* Orbit ring */}
        <circle cx="240" cy="310" r="220" fill="none"
          stroke="rgba(212,165,116,0.12)" strokeWidth="1" strokeDasharray="3 7" />
        {/* Subtle glow behind center */}
        <circle cx="240" cy="310" r="80" fill="rgba(212,165,116,0.04)" />
        {/* Lines: circle edge → ~12px before each node */}
        <g fill="none" stroke="rgba(212,165,116,0.45)" strokeWidth="1.2" strokeDasharray="4 5">
          {/* Top */}
          <line x1="240" y1="245" x2="240" y2="102" markerEnd="url(#ab-arr)" />
          {/* Upper-right */}
          <line x1="302" y1="290" x2="438" y2="246" markerEnd="url(#ab-arr)" />
          {/* Lower-right */}
          <line x1="278" y1="363" x2="362" y2="478" markerEnd="url(#ab-arr)" />
          {/* Lower-left */}
          <line x1="202" y1="363" x2="118" y2="478" markerEnd="url(#ab-arr)" />
          {/* Upper-left */}
          <line x1="178" y1="290" x2="42"  y2="246" markerEnd="url(#ab-arr)" />
        </g>
        {/* Node dots */}
        <g fill="rgba(212,165,116,0.75)">
          <circle cx="240" cy="90"  r="4.5" />
          <circle cx="449" cy="242" r="4.5" />
          <circle cx="369" cy="488" r="4.5" />
          <circle cx="111" cy="488" r="4.5" />
          <circle cx="31"  cy="242" r="4.5" />
        </g>
      </svg>

      {/* Service labels near each node */}
      {ORBIT_SERVICES.map((s) => (
        <div key={s.label} className="absolute" style={{ ...s.style, zIndex: 2 }}>
          <span
            className="block whitespace-nowrap rounded-full px-3 py-[5px]"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--champagne)",
              background: "rgba(212,165,116,0.08)",
              border: "1px solid rgba(212,165,116,0.22)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}

      {/* Center circle with logo — at 50%/50% since center=(240,310) in 480×620 */}
      <div
        className="absolute grid place-items-center"
        style={{
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 130, height: 130,
          borderRadius: "50%",
          background: "var(--navy-900)",
          border: "1px solid rgba(212,165,116,.3)",
          boxShadow: "0 20px 60px rgba(6,21,46,.35), 0 0 0 12px rgba(212,165,116,.04)",
          zIndex: 3,
        }}
      >
        <Image
          src="/Logo2.png"
          alt="DreX CFO"
          width={88}
          height={88}
          quality={100}
          className="object-contain"
          style={{ width: 88, height: 88 }}
        />
      </div>
    </div>
  );
}

function PullQuote() {
  return (
    <div
      className="max-w-[1280px] mx-auto px-5 md:px-8 py-10 md:py-[60px]"
    >
      <div
        className="rounded-[28px] px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row gap-8 md:gap-14 items-start md:items-center"
        style={{
          background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)",
          border: "1px solid rgba(212,165,116,.3)",
          boxShadow: "0 8px 40px rgba(6,21,46,.25)",
        }}
      >
        {/* Big quote mark */}
        <span
          className="flex-shrink-0 leading-none select-none"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "5rem",
            color: "var(--champagne)",
            opacity: 0.6,
            lineHeight: 1,
          }}
        >
          "
        </span>

        <div className="flex-1">
          <span
            className="block mb-4"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--champagne)",
            }}
          >
            A note from the founder
          </span>
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              lineHeight: 1.45,
              letterSpacing: "-0.015em",
              color: "var(--paper)",
            }}
          >
            The best financial decisions are made with{" "}
            <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>clarity</em>{" "}
            — not chaos. We give every client the data, the insight, and the strategy to move forward with confidence.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-px" style={{ background: "rgba(212,165,116,.5)" }} />
            <div>
              <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, color: "var(--paper)", fontSize: "0.95rem" }}>
                Haroon
              </div>
              <div style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginTop: 3 }}>
                Founder · DreX CFO
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Principles() {
  const principles = [
    {
      num: "01",
      mark: "circle",
      eyebrow: "Foundation",
      title: "Clarity over chaos",
      desc: "Every number on every dashboard answers a real question. We replace spreadsheet sprawl with a single source of financial truth — one that you, your board, and your investors all read the same way.",
      tagline: "no jargon · no surprises",
      cream: false,
    },
    {
      num: "02",
      mark: "diamond",
      eyebrow: "Direction",
      title: "Insight, not just data",
      desc: "Reporting is the baseline. We translate movement in your numbers into the next decision worth making — and the one to avoid. The output is judgement, backed by evidence.",
      tagline: "decisions · not dashboards alone",
      cream: true,
    },
    {
      num: "03",
      mark: "square",
      eyebrow: "Leverage",
      title: "Automation as leverage",
      desc: "Modern tools handle what they should — reconciliation, reporting, refresh cycles. Our time goes where it matters: strategy, scenario planning, and the call you need to make this quarter.",
      tagline: "software for speed · humans for judgement",
      cream: false,
    },
  ];

  return (
    <div className="py-10 pb-16 md:py-[60px] md:pb-[140px]" style={{ background: "var(--paper)" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <Reveal className="max-w-[700px] mx-auto mb-14 text-center principles-head">
          <span className="eyebrow eyebrow-centered" style={{ justifyContent: "center" }}>What we stand for</span>
          <h3
            className="mt-[14px]"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 600,
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--navy-900)",
            }}
          >
            Three principles guide every{" "}
            <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>engagement.</em>
          </h3>
        </Reveal>

        <Reveal delay="d1">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden"
            style={{
              borderRadius: 32,
              background: "var(--paper)",
              border: "1px solid rgba(11,30,63,.08)",
            }}
          >
            {principles.map((p, i) => (
              <div
                key={i}
                className={`principle-card ${p.cream ? "cream" : ""} relative overflow-hidden transition-colors duration-[400ms] px-6 py-10 pb-8 md:px-9 md:py-14 md:pb-10`}
                style={{
                  background: p.cream ? "var(--cream)" : "var(--paper)",
                  borderRight: i < 2 ? "1px solid rgba(11,30,63,.06)" : "none",
                  color: "var(--navy-900)",
                }}
              >
                <span
                  className="absolute pointer-events-none select-none"
                  style={{
                    top: -36,
                    right: -12,
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: "11rem",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    color: p.cream ? "rgba(11,30,63,.06)" : "rgba(11,30,63,.045)",
                  }}
                >
                  {p.num}
                </span>
                <div className="mb-7 relative z-[2] h-6 flex items-center gap-[10px]">
                  {p.mark === "circle" && (
                    <span className="inline-block w-[18px] h-[18px] rounded-full" style={{ background: "var(--navy-800)" }} />
                  )}
                  {p.mark === "diamond" && (
                    <span className="inline-block w-[14px] h-[14px] rotate-45" style={{ background: "var(--navy-800)" }} />
                  )}
                  {p.mark === "square" && (
                    <span className="inline-block w-[16px] h-[16px] rounded-[3px]" style={{ background: "var(--navy-800)" }} />
                  )}
                  <span className="flex-1 h-px max-w-[60px]" style={{ background: "rgba(11,30,63,.12)" }} />
                </div>
                <span
                  className="block mb-[14px] relative z-[2]"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--champagne)",
                  }}
                >
                  {p.eyebrow}
                </span>
                <h4
                  className="mb-[14px] relative z-[2]"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    fontSize: "1.35rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.025em",
                    color: "var(--navy-900)",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  className="mb-7 relative z-[2]"
                  style={{ fontSize: "0.94rem", color: "var(--muted)", lineHeight: 1.65 }}
                >
                  {p.desc}
                </p>
                <div
                  className="relative z-[2] pt-[18px]"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.66rem",
                    letterSpacing: "0.12em",
                    color: "var(--navy-500)",
                    borderTop: "1px solid rgba(11,30,63,.08)",
                    textTransform: "uppercase",
                  }}
                >
                  {p.tagline}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="pt-8 md:pt-[140px]" style={{ background: "var(--paper)" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20 items-start">
          <Reveal className="about-story">
            <span className="eyebrow">About / Our story</span>
            <h2
              className="mt-[18px] mb-6"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                color: "var(--navy-900)",
              }}
            >
              Senior financial leadership,{" "}
              <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>finally accessible.</em>
            </h2>
            <p className="mb-5" style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.7 }}>
              Founded by Haroon — a chartered financial professional with 10+ years across accounting, valuation, and strategic advisory — DreX CFO closes the gap between bookkeeping and a full-time CFO.
            </p>
            <p className="first mb-5" style={{ color: "var(--navy-700)", fontSize: "1rem", lineHeight: 1.75 }}>
              DreX CFO was founded with one goal: to make senior CFO-level financial leadership genuinely accessible — combining deep expertise with modern automation tools to deliver faster, smarter, more impactful results.
            </p>
            <p className="mb-5" style={{ color: "var(--navy-700)", fontSize: "1rem", lineHeight: 1.75 }}>
              We go beyond traditional advisory. We integrate intelligent automation into every engagement — from reporting dashboards and real-time cash-flow models to data-driven KPI tracking and scenario forecasting. Clients get the same quality of insight as a world-class finance team, delivered more efficiently and at a fraction of the cost of a full-time hire.
            </p>
            <p style={{ color: "var(--navy-700)", fontSize: "1rem", lineHeight: 1.75 }}>
              Over 100 clients across multiple industries and countries have trusted DreX CFO to manage, analyse, and optimise their finances. Whether you're a freelancer needing structure or an SME preparing for your next investment round — we're the partner you've been looking for.
            </p>
          </Reveal>

          <Reveal delay="d2">
            <OrbitPreview />
          </Reveal>
        </div>
      </div>

      <Reveal>
        <PullQuote />
      </Reveal>

      <Principles />
    </section>
  );
}
