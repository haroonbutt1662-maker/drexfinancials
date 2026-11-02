"use client";
import { useEffect, useRef } from "react";

function ArrowIcon() {
  return (
    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function HeroDot() {
  return (
    <span
      className="w-[6px] h-[6px] rounded-full bg-[var(--champagne)] flex-shrink-0"
      style={{ boxShadow: "0 0 12px var(--champagne)", animation: "pulse 2s infinite" }}
    />
  );
}

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 12 + "s";
      p.style.animationDuration = 8 + Math.random() * 8 + "s";
      p.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
      container.appendChild(p);
    }
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#06152E", color: "var(--paper)" }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/sky-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 30% 50%, rgba(6,21,46,.35), rgba(6,21,46,.18) 50%, rgba(6,21,46,.05) 100%),
            linear-gradient(180deg, rgba(6,21,46,.15) 0%, rgba(11,30,63,.08) 35%, rgba(6,21,46,.55) 100%),
            linear-gradient(110deg, rgba(11,30,63,.12) 0%, rgba(6,21,46,.18) 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 -160px 180px rgba(6,21,46,.7), inset 0 0 40px rgba(6,21,46,.15)" }}
      />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[5] max-w-[1280px] mx-auto px-5 sm:px-8 w-full pb-[140px] md:pb-[160px]">
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-[var(--champagne-soft)] mb-8"
          style={{
            background: "rgba(212,165,116,.12)",
            border: "1px solid rgba(212,165,116,.25)",
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <HeroDot /> Dallas · London · Serving clients worldwide
        </div>
        <h1
          className="font-semibold mb-7 max-w-[16ch]"
          style={{ fontSize: "clamp(2.6rem, 5.8vw, 5.2rem)", lineHeight: 1.02, letterSpacing: "-0.04em", color: "var(--paper)" }}
        >
          Smarter financial <em className="not-italic text-[var(--champagne)]">leadership.</em>
          <br />Automated. Always on.
        </h1>
        <p
          className="mb-3 font-light"
          style={{ fontSize: "1.05rem", lineHeight: 1.65, maxWidth: 540, color: "rgba(255,255,255,.78)" }}
        >
          DreX combines senior financial judgment with AI-enabled delivery — giving growing businesses real-time clarity, strategic insight, and measurable results, without the cost of a full-time CFO.
        </p>
        <p
          className="mb-10 font-light"
          style={{ fontSize: "0.96rem", lineHeight: 1.65, maxWidth: 500, color: "rgba(255,255,255,.58)" }}
        >
          For growing businesses, and for the advisory firms that serve them.
        </p>
        <div className="flex gap-[14px] flex-wrap">
          <a className="btn btn-primary" href="/contact">
            Schedule a free consultation <ArrowIcon />
          </a>
          <a className="btn btn-ghost" href="/for-firms">
            Partner with us
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute left-0 right-0 bottom-[42px] z-[8] hidden md:flex justify-center px-6 pointer-events-none">
        <div
          className="flex items-center px-3 py-5 pointer-events-auto"
          style={{
            background: "rgba(6,21,46,.5)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,.1)",
            borderRadius: 999,
          }}
        >
          {[
            { num: "100+", lbl: "Clients served" },
            { num: "$50M+", lbl: "Revenue analyzed" },
            { num: "100%", lbl: "5‑star satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="px-9 text-center flex flex-col items-center relative">
              {i > 0 && (
                <span
                  className="absolute left-0 top-[10px] bottom-[10px] w-px"
                  style={{ background: "rgba(255,255,255,.14)" }}
                />
              )}
              <div
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "2rem",
                  letterSpacing: "-0.03em",
                  color: "var(--champagne)",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                className="mt-[10px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.78)",
                }}
              >
                {stat.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
