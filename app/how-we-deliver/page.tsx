import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "How We Deliver",
  description:
    "Senior people, structured process, and AI-assisted tooling. How DreX delivers finance and accounting services at speed and at scale.",
  openGraph: {
    title: "How We Deliver | DreX",
    description: "Senior people, structured process, and AI-assisted tooling.",
  },
};

const layers = [
  {
    num: "01",
    title: "People",
    subtitle: "Senior judgment at every level",
    desc: "Every engagement has a lead with ACCA or CFA Program training and ten-plus years of experience. They set direction, review outputs and communicate with your team. Below them, a dedicated delivery pod handles execution — and stays on your account, month after month.",
    items: [
      "Engagement lead: accountable for every deliverable",
      "Delivery pod: dedicated accountants and analysts",
      "Same team every time: continuity, not a rota",
    ],
    dark: true,
  },
  {
    num: "02",
    title: "Process",
    subtitle: "Structured, documented, repeatable",
    desc: "Every service follows a defined methodology — from onboarding through monthly close to board pack delivery. Steps are documented, timelines are published, and sign-off gates are built in so nothing moves without a review.",
    items: [
      "Defined playbook per service type",
      "Shared timeline for every close cycle",
      "Sign-off gates before every client deliverable",
    ],
    dark: false,
  },
  {
    num: "03",
    title: "AI-assisted tooling",
    subtitle: "Speed without compromising control",
    desc: "AI handles the high-volume, low-judgment work: transaction matching, variance flagging, first-draft reconciliations, and report population. That frees our senior team for the decisions, client questions, and final sign-off that still need human eyes.",
    items: [
      "Transaction matching and categorization",
      "Variance flagging between periods",
      "First-draft reconciliations and schedules",
      "Human review and sign-off on every output",
    ],
    dark: true,
  },
];

const comparisonRows = [
  { label: "Continuity", drex: "Dedicated pod — same people every time", typical: "Different analyst each month" },
  { label: "Turnaround", drex: "AI-assisted drafting cuts cycle time", typical: "Manual process, variable timing" },
  { label: "Oversight", drex: "Senior lead signs off every deliverable", typical: "Junior-heavy with light review" },
  { label: "Transparency", drex: "Shared timelines and status updates", typical: "Email when it is ready" },
  { label: "Scalability", drex: "Same model across multiple clients", typical: "Linear headcount growth needed" },
  { label: "Advisory layer", drex: "Judgment and recommendations included", typical: "Records only — no commentary" },
];

const deliverables = [
  { label: "Monthly close", items: ["Reconciled trial balance", "P&L and balance sheet", "Variance commentary", "Cash position summary"] },
  { label: "Board pack", items: ["KPI dashboard", "Financial statements", "Narrative highlights", "Rolling forecast"] },
  { label: "Management accounts", items: ["Full double-entry ledger", "Departmental breakdown", "Actuals vs budget", "Year-to-date view"] },
  { label: "Fractional CFO", items: ["Weekly advisory call", "Board-ready materials", "Scenario planning models", "Strategic financial input"] },
];

export default function HowWeDeliverPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[160px] pb-16 md:pb-[100px]"
        style={{ background: "var(--paper)" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">How We Deliver</span>
            <h1
              className="mt-[18px] mb-6"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.03, letterSpacing: "-0.04em", color: "var(--navy-900)", maxWidth: "20ch" }}
            >
              People, process and{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>AI-assisted tooling.</em>
            </h1>
            <p className="mb-8" style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.75, maxWidth: 580 }}>
              We do not automate your finance function. We use AI to handle the high-volume, low-judgment work — so our senior team spends their time where it matters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three layers */}
      <section className="py-4 md:py-8" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col gap-5">
            {layers.map((l, i) => (
              <Reveal key={l.num} delay={i === 1 ? "d1" : undefined}>
                <div
                  className="rounded-[28px] px-7 md:px-12 py-10 md:py-14"
                  style={{ background: l.dark ? "var(--navy-900)" : "var(--cream)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-manrope)",
                          fontWeight: 700,
                          fontSize: "5.5rem",
                          lineHeight: 1,
                          letterSpacing: "-0.06em",
                          color: l.dark ? "rgba(255,255,255,.1)" : "rgba(11,30,63,.08)",
                          display: "block",
                          width: "3ch",
                        }}
                      >
                        {l.num}
                      </span>
                    </div>
                    <div>
                      <span
                        className="block mb-2"
                        style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: l.dark ? "var(--champagne)" : "var(--champagne)" }}
                      >
                        {l.subtitle}
                      </span>
                      <h2
                        className="mb-4"
                        style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: l.dark ? "var(--paper)" : "var(--navy-900)" }}
                      >
                        {l.title}
                      </h2>
                      <p className="mb-6" style={{ color: l.dark ? "rgba(255,255,255,.75)" : "var(--muted)", fontSize: "0.98rem", lineHeight: 1.72, maxWidth: 560 }}>
                        {l.desc}
                      </p>
                      <div className="flex flex-col gap-3">
                        {l.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span style={{ color: "var(--champagne)", fontWeight: 600, fontSize: "1rem", flexShrink: 0 }}>→</span>
                            <span style={{ color: l.dark ? "rgba(255,255,255,.72)" : "var(--muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[640px] mb-14">
            <span className="eyebrow">What you receive</span>
            <h2 className="mt-[18px]" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--navy-900)" }}>
              The deliverables that come with{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>every engagement.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliverables.map((d, i) => (
              <Reveal key={d.label} delay={i % 4 === 1 ? "d1" : i % 4 === 2 ? "d2" : i % 4 === 3 ? "d3" : undefined}>
                <div className="h-full rounded-[20px] px-6 py-7" style={{ background: "var(--cream)", border: "1px solid rgba(11,30,63,.06)" }}>
                  <h3 className="mb-4" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem", color: "var(--navy-900)", letterSpacing: "-0.01em" }}>
                    {d.label}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {d.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span style={{ color: "var(--champagne)", fontSize: "0.75rem", flexShrink: 0, paddingTop: 3 }}>✦</span>
                        <span style={{ color: "var(--muted)", fontSize: "0.86rem", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[640px] mb-14">
            <span className="eyebrow">The difference</span>
            <h2 className="mt-[18px]" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--navy-900)" }}>
              DreX vs a typical finance{" "}
              <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>outsource.</em>
            </h2>
          </Reveal>

          <Reveal delay="d1">
            <div className="rounded-[24px] overflow-hidden" style={{ border: "1px solid rgba(11,30,63,.08)" }}>
              <div className="grid grid-cols-[1.5fr_1fr_1fr] text-xs" style={{ background: "var(--navy-900)" }}>
                <div className="px-6 py-4" style={{ color: "rgba(255,255,255,.4)", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Dimension</div>
                <div className="px-6 py-4" style={{ color: "var(--champagne)", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>DreX</div>
                <div className="px-6 py-4" style={{ color: "rgba(255,255,255,.4)", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Typical outsource</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.5fr_1fr_1fr]"
                  style={{ background: i % 2 === 0 ? "var(--paper)" : "var(--cream)", borderTop: "1px solid rgba(11,30,63,.06)" }}
                >
                  <div className="px-6 py-4" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "0.88rem", color: "var(--navy-900)" }}>{row.label}</div>
                  <div className="px-6 py-4" style={{ fontSize: "0.88rem", color: "var(--navy-900)", lineHeight: 1.5 }}>{row.drex}</div>
                  <div className="px-6 py-4" style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5 }}>{row.typical}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="mb-3" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--paper)" }}>
                  See the delivery model in action.
                </h2>
                <p style={{ color: "rgba(255,255,255,.7)", fontSize: "0.96rem", lineHeight: 1.65, maxWidth: 500 }}>
                  Book a call and we will walk you through how a typical engagement runs, from onboarding to monthly close.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="btn btn-primary">Book a call →</Link>
                <Link href="/services" className="btn" style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}>
                  Our services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
