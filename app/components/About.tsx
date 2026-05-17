import { Fragment } from "react";
import Reveal from "./Reveal";

function FactBlock({
  label,
  value,
  sub,
  highlight = false,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`px-[22px] py-5 relative ${
        highlight
          ? "rounded-[18px] my-[6px] border"
          : "border-b last:border-b-0"
      }`}
      style={
        highlight
          ? {
              background: "var(--paper)",
              borderColor: "rgba(212,165,116,.45)",
              boxShadow: "0 8px 24px rgba(212,165,116,.08)",
            }
          : {
              borderColor: "rgba(11,30,63,.06)",
            }
      }
    >
      <span
        className="block mb-2"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: highlight ? "var(--champagne)" : "var(--muted)",
        }}
      >
        {label}
      </span>
      <strong
        className="block"
        style={{
          fontFamily: "var(--font-manrope)",
          fontWeight: 600,
          fontSize: "0.98rem",
          color: "var(--navy-900)",
          letterSpacing: "-0.01em",
          lineHeight: 1.35,
        }}
      >
        {value}
      </strong>
      {sub && (
        <small
          className="block mt-[6px]"
          style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.5, fontWeight: 400 }}
        >
          {sub}
        </small>
      )}
    </div>
  );
}

function PullQuote() {
  return (
    <div className="pullquote-wrap py-16 pb-12 md:py-[140px] md:pb-[100px]" style={{ background: "var(--paper)" }}>
      <div className="relative max-w-[1040px] mx-auto px-5 md:px-[60px] text-center">
        <div className="flex items-center justify-content-center gap-[18px] mb-8 relative" style={{ justifyContent: "center" }}>
          <span className="w-[60px] h-px" style={{ background: "rgba(11,30,63,.18)" }} />
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--champagne)",
            }}
          >
            A note from the founder
          </span>
          <span className="w-[60px] h-px" style={{ background: "rgba(11,30,63,.18)" }} />
        </div>
        <span
          className="block"
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontSize: "7rem",
            lineHeight: 0.5,
            color: "var(--champagne)",
            marginBottom: 20,
            opacity: 0.8,
          }}
        >
          "
        </span>
        <p
          className="mx-auto"
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "var(--navy-900)",
            maxWidth: "20ch",
          }}
        >
          The best financial decisions are made with{" "}
          <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>clarity</em>{" "}
          — not chaos. We give every client the data, the insight, and the strategy to move forward with confidence.
        </p>
        <div className="mt-10 inline-flex items-center gap-[18px]">
          <div className="w-[60px] h-px" style={{ background: "var(--navy-500)" }} />
          <div>
            <div
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                color: "var(--navy-900)",
                fontSize: "1rem",
                textAlign: "left",
              }}
            >
              Haroon
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: 4,
                textAlign: "left",
              }}
            >
              Founder · DreX CFO
            </div>
          </div>
        </div>
        <div
          className="mt-9 flex justify-center items-center gap-[14px] flex-wrap"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {["ACCA", "CFA", "MSc Business Analytics", "BSc Accounting & Finance"].map((cred, i, arr) => (
            <Fragment key={cred}>
              <span
                className="px-3 py-[6px] rounded-full"
                style={{
                  border: "1px solid rgba(11,30,63,.1)",
                  background: "rgba(212,165,116,.06)",
                }}
              >
                {cred}
              </span>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(11,30,63,.18)" }}>·</span>
              )}
            </Fragment>
          ))}
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
        <Reveal className="max-w-[880px] mb-10 md:mb-[72px]">
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
          <p style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.7, maxWidth: 560 }}>
            Founded by Haroon — a chartered financial professional with 10+ years across accounting, valuation, and strategic advisory — DreX CFO closes the gap between bookkeeping and a full-time CFO.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20 items-start">
          <Reveal delay="d1" className="about-story">
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
            <aside
              className="grid gap-0 rounded-[24px] p-[6px] md:sticky top-[120px]"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(11,30,63,.05)",
              }}
            >
              <FactBlock label="Founded" value="2025 · London, UK" />
              <FactBlock
                label="Founder"
                value="Haroon — ACCA, CFA"
                sub="10+ years across accounting, valuation, and strategic advisory"
              />
              <FactBlock
                label="Sectors served"
                value="Technology, retail, professional services, healthcare & more"
              />
              <FactBlock
                label="Engagement model"
                value="Fractional · Project · Fixed package"
              />
              <FactBlock
                label="Coverage"
                value="UK & international"
                sub="Remote-first · in-person available across Greater London"
                highlight
              />
            </aside>
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
