"use client";
import { useState } from "react";

const testimonials = [
  {
    stars: 5,
    label: "Business Valuation",
    quote: (
      <>
        Haroon delivered a valuation that held up under serious investor scrutiny. Calm, precise, and the model was{" "}
        <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>bulletproof</em> — we closed the round on stronger terms because of it.
      </>
    ),
    name: "Founder, Verified Client",
    role: "Series A · Technology",
    initial: "M",
  },
  {
    stars: 5,
    label: "FP&A",
    quote: (
      <>
        For the first time we have monthly reporting we can actually trust. The dashboards{" "}
        <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>run themselves</em> and our board meetings are now about decisions — not reconciling numbers.
      </>
    ),
    name: "CEO, Verified Client",
    role: "Professional Services",
    initial: "S",
  },
  {
    stars: 5,
    label: "Forecasting & Cash Flow",
    quote: (
      <>
        The 13-week cash model is something I check every Monday morning. It has changed how we hire, how we invest, and{" "}
        <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>frankly how I sleep.</em>
      </>
    ),
    name: "Founder, Verified Client",
    role: "D2C Retail",
    initial: "J",
  },
  {
    stars: 5,
    label: "Pro Forma & Modelling",
    quote: (
      <>
        We needed an investor-grade model in three weeks. Got one in two.{" "}
        <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>Detailed, defensible,</em> and DreX walked our CFO through every assumption.
      </>
    ),
    name: "COO, Verified Client",
    role: "Healthcare Tech",
    initial: "A",
  },
];

// Triple the array so there's always content filling the track
const track = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 pb-12 md:py-[140px] md:pb-[120px]"
      style={{ background: "linear-gradient(180deg, var(--navy-900), var(--navy-800))", color: "var(--paper)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: -150,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,127,184,.18), transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: -200,
          right: -100,
          width: 540,
          height: 540,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,116,.08), transparent 60%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[1] mb-[52px]">
        <div className="text-center max-w-[720px] mx-auto">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Client voices</span>
          <h2
            className="mt-[18px]"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "var(--paper)",
            }}
          >
            A 5-star record,{" "}
            <em className="not-italic" style={{ color: "var(--champagne)" }}>earned engagement by engagement.</em>
          </h2>
        </div>
      </div>

      {/* Scroll track — full viewport width, edge-to-edge */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade masks on edges */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--navy-900), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--navy-800), transparent)" }} />

        <div
          className="flex gap-5 py-3"
          style={{
            width: "max-content",
            animation: "testi-scroll 36s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {track.map((testi, i) => (
            <article
              key={i}
              className="rounded-[22px] px-[28px] py-[30px] backdrop-blur-sm flex flex-col gap-[14px] flex-shrink-0 hover:-translate-y-1 transition-transform duration-300"
              style={{
                width: "min(360px, 80vw)",
                minHeight: 320,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.09)",
              }}
            >
              <div style={{ color: "var(--champagne)", letterSpacing: "0.18em", fontSize: "0.95rem", lineHeight: 1 }}>
                {"★".repeat(testi.stars)}
              </div>
              <span
                className="self-start rounded-full px-[11px] py-[5px]"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--champagne)",
                  background: "rgba(212,165,116,.1)",
                  border: "1px solid rgba(212,165,116,.25)",
                  marginTop: -4,
                }}
              >
                {testi.label}
              </span>
              <blockquote
                className="flex-1 mt-1"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 400,
                  fontSize: "0.98rem",
                  lineHeight: 1.55,
                  letterSpacing: "-0.005em",
                  color: "rgba(255,255,255,.92)",
                }}
              >
                {testi.quote}
              </blockquote>
              <div
                className="flex items-center gap-[14px] pt-[16px]"
                style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, var(--blue-400), var(--navy-500))",
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    color: "var(--paper)",
                    fontSize: "0.95rem",
                  }}
                >
                  {testi.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: "0.92rem", color: "var(--paper)" }}>{testi.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,.55)", letterSpacing: "0.02em", marginTop: 2 }}>{testi.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testi-scroll {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
