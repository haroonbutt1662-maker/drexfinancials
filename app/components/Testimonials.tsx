"use client";
import { useCallback, useEffect, useRef, useState } from "react";

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

const INTERVAL = 6500;

export default function Testimonials() {
  const [pos, setPos] = useState(0);
  const [perView, setPerView] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [fillKey, setFillKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const updatePerView = useCallback(() => {
    const w = window.innerWidth;
    setPerView(w < 700 ? 1 : w < 1000 ? 2 : 3);
  }, []);

  useEffect(() => {
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, [updatePerView]);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setPos((p) => ((p + dir + total) % total));
      setFillKey((k) => k + 1);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, total]
  );

  const goTo = useCallback(
    (i: number) => {
      if (isAnimating || i === pos) return;
      setIsAnimating(true);
      setPos(i);
      setFillKey((k) => k + 1);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, pos]
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), INTERVAL);
  }, [go]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) startTimer();
    else stopTimer();
    return stopTimer;
  }, [isPaused, startTimer, stopTimer]);

  const visibleCards = Array.from({ length: perView }, (_, i) => testimonials[(pos + i) % total]);

  const trackOffset = 0;

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
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[1]">
        <div className="text-center max-w-[720px] mx-auto mb-[60px]">
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

        <div
          className={`testi-frame relative ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Meta row */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-[14px]">
              <span className="w-9 h-px" style={{ background: "rgba(212,165,116,.4)" }} />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--champagne)",
                }}
              >
                Verified reviews
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,.55)",
              }}
            >
              <span
                className="transition-opacity duration-300"
                style={{ color: "var(--paper)", fontWeight: 600, fontSize: "0.92rem" }}
              >
                {String(pos + 1).padStart(2, "0")}
              </span>{" "}
              <span style={{ opacity: 0.4 }}>/</span>{" "}
              <span>0{total}</span>
            </div>
          </div>

          {/* Cards */}
          <div
            className="grid gap-5 transition-all duration-[600ms]"
            style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}
          >
            {visibleCards.map((testi, i) => (
              <article
                key={`${pos}-${i}`}
                className="rounded-[22px] px-[30px] py-[34px] backdrop-blur-sm flex flex-col gap-[14px] transition-all duration-[400ms] min-h-[380px] hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.09)",
                  flexShrink: 0,
                  animation: "fadeIn 0.4s ease both",
                }}
              >
                <div style={{ color: "var(--champagne)", letterSpacing: "0.18em", fontSize: "0.98rem", lineHeight: 1 }}>
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
                    fontSize: "1.02rem",
                    lineHeight: 1.55,
                    letterSpacing: "-0.005em",
                    color: "rgba(255,255,255,.92)",
                  }}
                >
                  {testi.quote}
                </blockquote>
                <div
                  className="flex items-center gap-[14px] pt-[18px]"
                  style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}
                >
                  <div
                    className="w-11 h-11 rounded-full grid place-items-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--blue-400), var(--navy-500))",
                      fontFamily: "var(--font-manrope)",
                      fontWeight: 600,
                      color: "var(--paper)",
                      fontSize: "1rem",
                    }}
                  >
                    {testi.initial}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.95rem", color: "var(--paper)" }}>{testi.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,.55)", letterSpacing: "0.02em", marginTop: 2 }}>{testi.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-9 grid gap-6 items-center" style={{ gridTemplateColumns: "auto 1fr auto" }}>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`testi-dot transition-all duration-[400ms] ${i === pos ? "active" : ""}`}
                />
              ))}
            </div>
            <div className="h-[2px] rounded-full overflow-hidden relative" style={{ background: "rgba(255,255,255,.08)" }}>
              <div
                key={fillKey}
                className="testi-progress-fill run"
                style={{ "--testi-interval": `${INTERVAL}ms` } as React.CSSProperties}
              />
            </div>
            <div className="flex gap-[10px]">
              <button
                onClick={() => { go(-1); }}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full grid place-items-center border border-white/20 bg-transparent text-[var(--paper)] cursor-pointer transition-all duration-300 hover:bg-[var(--champagne)] hover:border-[var(--champagne)] hover:text-[var(--navy-900)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M19 12H5m6-6-6 6 6 6" />
                </svg>
              </button>
              <button
                onClick={() => { go(1); }}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full grid place-items-center border border-white/20 bg-transparent text-[var(--paper)] cursor-pointer transition-all duration-300 hover:bg-[var(--champagne)] hover:border-[var(--champagne)] hover:text-[var(--navy-900)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}
