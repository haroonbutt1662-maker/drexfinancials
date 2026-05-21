import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    name: "Free Consultation",
    desc: "A free discovery call to understand your business, your goals, and where DreX CFO can add the most value. No commitment, no pressure — just an honest conversation.",
  },
  {
    num: "02",
    name: "Financial Assessment",
    desc: "A thorough review of your financial position — cash flow, reporting systems, expenses, and operational metrics — to identify gaps, risks, and opportunities.",
  },
  {
    num: "03",
    name: "Custom Strategy & Roadmap",
    desc: "A tailored financial strategy aligned with your business model, goals, and growth plans. Automated reporting tools are set up to give you real-time visibility from day one.",
  },
  {
    num: "04",
    name: "Implementation & Integration",
    desc: "We embed with your team and existing systems — deploying enhanced reporting, automated dashboards, financial controls, and performance metrics with minimal disruption.",
  },
  {
    num: "05",
    name: "Ongoing Monitoring & Support",
    desc: "Continuous performance monitoring, regular strategy reviews, and proactive guidance — adjusting course as your business grows, your goals evolve, and market conditions change.",
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-16 pb-12 md:py-[140px] md:pb-[120px]"
      style={{ background: "var(--cream)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: -200,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(11,30,63,.05), transparent 70%)",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] items-start md:items-end mb-8 md:mb-[60px]">
          <Reveal>
            <span className="eyebrow">How it works</span>
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
              A five-step path from{" "}
              <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>questions</em> to clarity.
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <p style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.7 }}>
              No long onboarding. No mystery. Every engagement follows the same structured rhythm — so you know exactly what happens, and when.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="grid gap-[2px] rounded-[24px] overflow-hidden"
            style={{
              background: "rgba(11,30,63,.08)",
              border: "1px solid rgba(11,30,63,.06)",
            }}
          >
            {steps.map((step) => (
              <div
                key={step.num}
                className="proc-row group cursor-pointer px-5 md:px-9 py-6 md:py-[42px]
                           grid grid-cols-[44px_1fr_auto] md:grid-cols-[80px_1.4fr_2fr_auto]
                           gap-x-4 md:gap-x-9 gap-y-1 items-start md:items-center"
              >
                <div
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                    color: "var(--champagne)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    color: "var(--navy-900)",
                  }}
                >
                  {step.name}
                </div>
                {/* Arrow: spans 2 rows on mobile, 1 row on desktop */}
                <div
                  className="proc-arrow-btn row-span-2 md:row-span-1 self-center w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full grid place-items-center transition-all duration-300"
                  style={{ border: "1px solid rgba(11,30,63,.18)", color: "var(--navy-700)" }}
                >
                  <ArrowIcon />
                </div>
                {/* Description: row 2 col 2 on mobile, row 1 col 3 on desktop */}
                <div
                  className="col-start-2 md:col-start-auto"
                  style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
