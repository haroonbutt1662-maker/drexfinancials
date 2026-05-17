import Reveal from "./Reveal";

const diffs = [
  {
    icon: "+",
    title: "Senior expertise without overhead",
    desc: "ACCA · CFA · MSc-credentialed leadership, engaged at the level your business needs — not at the cost of a full-time hire.",
  },
  {
    icon: "~",
    title: "Automation built into every engagement",
    desc: "Reporting dashboards, real-time cash-flow models, KPI tracking — running from day one, accurate around the clock.",
  },
  {
    icon: "→",
    title: "Decisions, not just data",
    desc: "We don't deliver reports. We deliver the next move — backed by clean data and ten years of judgement across sectors.",
  },
  {
    icon: "✦",
    title: "Sector-agnostic, founder-fluent",
    desc: "From SaaS to retail to professional services — the model adapts. The standard doesn't.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-16 pb-12 md:py-[140px] md:pb-[120px]"
      style={{ background: "var(--paper)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <Reveal>
          <span className="eyebrow">Why DreX CFO</span>
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
            Closing the gap between{" "}
            <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>records and results.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-10 md:gap-20 mt-8 md:mt-[60px]">
          {/* Problem card */}
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[32px] p-7 md:p-12"
              style={{
                background: "linear-gradient(135deg, var(--navy-800), var(--navy-600))",
                color: "var(--paper)",
              }}
            >
              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "1.6rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.025em",
                }}
              >
                The problem we solve
              </h3>
              <p style={{ color: "rgba(255,255,255,.78)", fontSize: "0.98rem", lineHeight: 1.7 }}>
                Most growing businesses are caught between a bookkeeper who keeps records but offers no strategy — and a full-time CFO they can't yet justify or afford. That gap costs clarity, cash flow, and growth.
              </p>
              <div
                className="mt-8 flex items-center gap-[14px] p-5 rounded-2xl"
                style={{ background: "rgba(0,0,0,.2)" }}
              >
                <div className="flex-1 text-center">
                  <span
                    className="block mb-1"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    left of you
                  </span>
                  <strong
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.01em" }}
                  >
                    Bookkeeper
                  </strong>
                </div>
                <div
                  className="px-4 py-[10px] rounded-full whitespace-nowrap"
                  style={{
                    background: "var(--champagne)",
                    color: "var(--navy-900)",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  DreX · the bridge
                </div>
                <div className="flex-1 text-center">
                  <span
                    className="block mb-1"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    right of you
                  </span>
                  <strong
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.01em" }}
                  >
                    Full-time CFO
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Differentiators */}
          <Reveal delay="d1">
            <div className="grid gap-[14px]">
              {diffs.map((d, i) => (
                <div
                  key={i}
                  className="diff-card grid gap-5 items-start rounded-[20px] px-7 py-6 transition-transform duration-300"
                  style={{
                    background: "var(--cream)",
                    gridTemplateColumns: "auto 1fr",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full grid place-items-center flex-shrink-0"
                    style={{
                      background: "var(--navy-800)",
                      color: "var(--champagne)",
                      fontFamily: "var(--font-manrope)",
                      fontWeight: 500,
                      fontSize: "1.2rem",
                    }}
                  >
                    {d.icon}
                  </div>
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        color: "var(--navy-900)",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {d.title}
                    </h4>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
