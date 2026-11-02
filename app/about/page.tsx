import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "DreX is a finance and accounting firm that pairs senior financial judgment with AI automation. With offices in Dallas and London, we serve growing businesses and advisory firms.",
  openGraph: {
    title: "About | DreX",
    description: "Senior financial judgment, delivered by a firm built for scale.",
  },
};

const facts = [
  { label: "Offices", value: "Dallas, Texas and London, UK" },
  { label: "Sectors served", value: "Healthcare, professional services, technology, retail and more" },
  { label: "Engagement model", value: "Direct · Through partner firms · Project · Fixed package" },
  { label: "Coverage", value: "US, UK and international" },
];

const principles = [
  {
    num: "01",
    eyebrow: "Foundation",
    title: "Clarity over chaos",
    desc: "Every number on every report answers a real question. We replace spreadsheet sprawl with a single source of financial truth — one that you, your board, and your investors all read the same way.",
    tagline: "no jargon · no surprises",
  },
  {
    num: "02",
    eyebrow: "Direction",
    title: "Insight, not just data",
    desc: "Reporting is the baseline. We translate movement in your numbers into the next decision worth making — and the one to avoid. The output is judgment, backed by evidence.",
    tagline: "decisions · not dashboards alone",
  },
  {
    num: "03",
    eyebrow: "Leverage",
    title: "Automation as leverage",
    desc: "Modern tools handle what they should — reconciliation, reporting, refresh cycles. Our time goes where it matters: strategy, scenario planning, and the call you need to make this quarter.",
    tagline: "software for speed · humans for judgment",
  },
];

const diffs = [
  {
    icon: "+",
    title: "Senior expertise without overhead",
    desc: "Leadership with ACCA and CFA Program training and ten-plus years across accounting, valuation and strategic advisory. [CONFIRM: exact credentials wording]",
  },
  {
    icon: "~",
    title: "AI-enabled delivery",
    desc: "AI handles the repetitive work — transaction matching, variance flagging, first-draft reconciliations — so our people focus on judgment, client questions and sign-off.",
  },
  {
    icon: "→",
    title: "Decisions, not just data",
    desc: "We translate movement in your numbers into the next decision worth making. The output is judgment, backed by clean data.",
  },
  {
    icon: "✦",
    title: "Built for firms, not just businesses",
    desc: "Advisory and accounting firms run our services behind their brand. Businesses engage us directly. Both get the same quality of delivery.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[160px] pb-16 md:pb-[100px]"
        style={{ background: "var(--navy-900)", color: "var(--paper)" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-20 items-start">
            <div>
              <span className="eyebrow">About</span>
              <h1
                className="mt-[18px] mb-6"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  color: "var(--paper)",
                  maxWidth: "20ch",
                }}
              >
                Senior financial judgment, delivered by a firm built for{" "}
                <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>scale.</em>
              </h1>
              <p className="mb-5" style={{ color: "rgba(255,255,255,.75)", fontSize: "1.02rem", lineHeight: 1.75 }}>
                DreX is a finance and accounting firm that pairs senior financial judgment with AI-enabled automation.
                We serve growing businesses directly, and we run finance and accounting delivery for advisory, accounting
                and private equity firms behind their brand. With offices in Dallas and London, our team works across
                US and UK hours.
              </p>
              <div className="flex gap-3 flex-wrap mt-8">
                <Link href="/contact" className="btn btn-primary">Book a call →</Link>
                <Link href="/services" className="btn" style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}>
                  Our services
                </Link>
              </div>
            </div>

            <Reveal delay="d1">
              <div
                className="rounded-[28px] px-8 py-8"
                style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)" }}
              >
                <span className="eyebrow">Quick facts</span>
                <div className="mt-5 flex flex-col gap-5">
                  {facts.map((f, i) => (
                    <div
                      key={i}
                      className="pb-5"
                      style={{ borderBottom: i < facts.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none" }}
                    >
                      <span
                        className="block mb-1"
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.62rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--champagne)",
                        }}
                      >
                        {f.label}
                      </span>
                      <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: "0.96rem", color: "rgba(255,255,255,.9)" }}>
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[660px] mx-auto mb-14 text-center">
            <span className="eyebrow eyebrow-centered" style={{ justifyContent: "center" }}>What we stand for</span>
            <h2
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
            </h2>
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
                  className="principle-card relative overflow-hidden transition-colors duration-[400ms] px-7 py-12 pb-10"
                  style={{
                    background: i === 1 ? "var(--cream)" : "var(--paper)",
                    borderRight: i < 2 ? "1px solid rgba(11,30,63,.06)" : "none",
                    color: "var(--navy-900)",
                  }}
                >
                  <span
                    className="absolute pointer-events-none select-none"
                    style={{ top: -36, right: -12, fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: "11rem", letterSpacing: "-0.05em", lineHeight: 1, color: "rgba(11,30,63,.045)" }}
                  >
                    {p.num}
                  </span>
                  <span className="block mb-[14px] relative z-[2]" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--champagne)" }}>
                    {p.eyebrow}
                  </span>
                  <h3
                    className="mb-[14px] relative z-[2]"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.35rem", lineHeight: 1.2, letterSpacing: "-0.025em", color: "var(--navy-900)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mb-7 relative z-[2]" style={{ fontSize: "0.94rem", color: "var(--muted)", lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                  <div
                    className="relative z-[2] pt-[18px]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.66rem", letterSpacing: "0.12em", color: "var(--navy-500)", borderTop: "1px solid rgba(11,30,63,.08)", textTransform: "uppercase" }}
                  >
                    {p.tagline}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why DreX */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Why DreX</span>
            <h2
              className="mt-[18px] mb-6"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
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
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[32px] p-7 md:p-12"
                style={{ background: "linear-gradient(135deg, var(--navy-800), var(--navy-600))", color: "var(--paper)" }}
              >
                <h3
                  className="mb-5"
                  style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.6rem", lineHeight: 1.2, letterSpacing: "-0.025em" }}
                >
                  The problem we solve
                </h3>
                <p style={{ color: "rgba(255,255,255,.78)", fontSize: "0.98rem", lineHeight: 1.7 }}>
                  Most growing businesses are caught between a bookkeeper who keeps records but offers no strategy — and a full-time CFO they cannot yet justify or afford. That gap costs clarity, cash flow, and growth.
                </p>
                <div className="mt-8 flex items-center gap-[14px] p-5 rounded-2xl" style={{ background: "rgba(0,0,0,.2)" }}>
                  <div className="flex-1 text-center">
                    <span className="block mb-1" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>left of you</span>
                    <strong style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem" }}>Bookkeeper</strong>
                  </div>
                  <div className="px-4 py-[10px] rounded-full whitespace-nowrap" style={{ background: "var(--champagne)", color: "var(--navy-900)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    DreX · the bridge
                  </div>
                  <div className="flex-1 text-center">
                    <span className="block mb-1" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>right of you</span>
                    <strong style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem" }}>Full-time CFO</strong>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay="d1">
              <div className="grid gap-[14px]">
                {diffs.map((d, i) => (
                  <div
                    key={i}
                    className="diff-card grid gap-5 items-start rounded-[20px] px-7 py-6 transition-transform duration-300"
                    style={{ background: "var(--paper)", gridTemplateColumns: "auto 1fr" }}
                  >
                    <div
                      className="w-12 h-12 rounded-full grid place-items-center flex-shrink-0"
                      style={{ background: "var(--navy-800)", color: "var(--champagne)", fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: "1.2rem" }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <h4 className="mb-1" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.05rem", color: "var(--navy-900)", letterSpacing: "-0.015em" }}>
                        {d.title}
                      </h4>
                      <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership and delivery */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--navy-900)", color: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Leadership and delivery</span>
            <h2
              className="mt-[18px] mb-10"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--paper)",
              }}
            >
              The team behind the work.
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  label: "Credentials",
                  body: "Leadership with ACCA and CFA Program training and ten-plus years across accounting, valuation and strategic advisory. [CONFIRM: exact wording]",
                },
                {
                  label: "Dedicated delivery pods",
                  body: "Accountants and analysts assigned to your clients, so the same people learn your business month after month. [CONFIRM before adding: many trained at Big Four and global firms]",
                },
                {
                  label: "Public company experience",
                  body: "Financial reporting, audit support and control documentation for companies with public company obligations.",
                },
                {
                  label: "Transaction experience",
                  body: "Valuations, Quality of Earnings support and investor-grade models across M&A, fundraising and refinancing transactions.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] px-7 py-6"
                  style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)" }}
                >
                  <h3
                    className="mb-3"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.02rem", color: "var(--champagne)", letterSpacing: "-0.01em" }}
                  >
                    {item.label}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,.72)", fontSize: "0.94rem", lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <Link href="/contact" className="btn btn-primary">Book a call →</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
