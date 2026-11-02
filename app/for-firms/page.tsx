import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "For Firms",
  description:
    "Advisory, accounting and private equity firms run DreX services behind their brand. Expand capacity without hiring. Explore our partner model.",
  openGraph: {
    title: "For Firms | DreX",
    description: "Advisory, accounting and private equity firms run DreX services behind their brand.",
  },
};

const problems = [
  { num: "01", text: "Clients need fractional CFO or accounting support but you cannot staff it yourself." },
  { num: "02", text: "Hiring is slow and expensive. You lose mandates you should be winning." },
  { num: "03", text: "Junior delivery teams need supervision. Senior time is your scarcest resource." },
  { num: "04", text: "Some engagements are one-off projects. Permanent headcount does not fit." },
];

const partnerModes = [
  {
    title: "Capacity extension",
    label: "White-glove delivery",
    desc: "You sell the engagement under your brand. We deliver the work. Your client team sees your name. You invoice and own the relationship.",
    steps: ["You scope and sell the mandate", "We staff and deliver the work", "Your brand stays front and centre", "You invoice your client directly"],
  },
  {
    title: "Referral",
    label: "Pass-through",
    desc: "You introduce the client to us. We engage directly. You receive a referral arrangement for the introduction. No delivery responsibility for you.",
    steps: ["You make the introduction", "We engage and invoice directly", "Client is served under DreX brand", "You receive a referral arrangement"],
  },
  {
    title: "Project support",
    label: "Ad hoc",
    desc: "A specific piece of work — a model, a valuation, a data room build — that you want supported or completed. Fixed scope, fixed price.",
    steps: ["You bring a specific deliverable", "We quote a fixed scope and price", "We deliver the output", "You use it within your engagement"],
  },
];

const workflow = [
  { step: "01", title: "Intro call", desc: "We learn your firm's focus, client profile and the kind of work you want supported. No commitment required." },
  { step: "02", title: "Pilot mandate", desc: "We agree a first engagement — usually an existing or incoming client that fits the model. You observe the delivery closely." },
  { step: "03", title: "Handover protocol", desc: "We agree naming, email formats and reporting templates. Your client sees a seamless experience." },
  { step: "04", title: "Ongoing delivery", desc: "Your team and ours communicate directly. You stay updated on every engagement through a shared reporting layer." },
  { step: "05", title: "Billing and margin", desc: "You invoice your client at your rate. We invoice you at the agreed wholesale rate. Your margin is the difference." },
  { step: "06", title: "Scale", desc: "As your referral or delivery volume grows, we allocate a dedicated pod to your firm — the same people, every time." },
];

const suitedFor = [
  { label: "Accounting firms", desc: "CPA practices and general accountancy firms looking to offer CFO or strategic finance services without a full hire." },
  { label: "Management consultants", desc: "Strategy and operations consultants whose clients also need finance execution and financial modeling." },
  { label: "Fractional executives", desc: "Fractional CFOs and COOs who need a delivery team behind their strategic recommendations." },
  { label: "M&A advisors", desc: "Deal advisors who need QoE prep, data room builds and financial modeling as part of their transaction support." },
  { label: "Private equity", desc: "PE firms that need portfolio company finance leadership and reporting without placing a permanent hire." },
  { label: "Business brokers", desc: "Business brokers who want to offer sellers transaction readiness support before going to market." },
];

export default function ForFirmsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[160px] pb-16 md:pb-[100px]"
        style={{ background: "var(--navy-900)", color: "var(--paper)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ top: -200, right: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,.07), transparent 60%)" }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-20 items-start">
            <Reveal>
              <span className="eyebrow">For Advisory Firms</span>
              <h1
                className="mt-[18px] mb-6"
                style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2.2rem, 4.8vw, 4rem)", lineHeight: 1.03, letterSpacing: "-0.04em", color: "var(--paper)", maxWidth: "18ch" }}
              >
                Expand your capacity.{" "}
                <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>Not your headcount.</em>
              </h1>
              <p className="mb-8" style={{ color: "rgba(255,255,255,.78)", fontSize: "1.02rem", lineHeight: 1.75, maxWidth: 560 }}>
                Advisory, accounting and private equity firms run DreX finance and accounting services behind their brand. You bring the client relationship. We deliver the work.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact?type=firm" className="btn btn-primary">Talk to us about partnering →</Link>
                <Link
                  href="#how-it-works"
                  className="btn"
                  style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}
                >
                  How it works
                </Link>
              </div>
            </Reveal>

            <Reveal delay="d1">
              <div className="rounded-[28px] px-7 py-7" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)" }}>
                <span className="block mb-5" style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--champagne)" }}>
                  The problem we solve
                </span>
                <div className="flex flex-col gap-4">
                  {problems.map((p) => (
                    <div key={p.num} className="flex items-start gap-4">
                      <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(255,255,255,.3)", flexShrink: 0, paddingTop: 3 }}>{p.num}</span>
                      <p style={{ color: "rgba(255,255,255,.78)", fontSize: "0.9rem", lineHeight: 1.6 }}>{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner modes */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[640px] mb-14">
            <span className="eyebrow">How we partner</span>
            <h2 className="mt-[18px]" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--navy-900)" }}>
              Three ways to work with{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>DreX.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {partnerModes.map((m, i) => (
              <Reveal key={m.title} delay={i === 1 ? "d1" : i === 2 ? "d2" : undefined}>
                <div
                  className="h-full rounded-[24px] px-7 py-8"
                  style={{ background: i === 0 ? "var(--navy-900)" : "var(--cream)", border: i === 0 ? "none" : "1px solid rgba(11,30,63,.07)" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ background: i === 0 ? "rgba(212,165,116,.15)" : "rgba(11,30,63,.08)", color: i === 0 ? "var(--champagne)" : "var(--navy-500)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                    >
                      {m.label}
                    </span>
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.3rem", lineHeight: 1.2, letterSpacing: "-0.02em", color: i === 0 ? "var(--paper)" : "var(--navy-900)" }}>
                    {m.title}
                  </h3>
                  <p className="mb-6" style={{ color: i === 0 ? "rgba(255,255,255,.72)" : "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    {m.desc}
                  </p>
                  <div className="flex flex-col gap-2">
                    {m.steps.map((s, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span style={{ color: i === 0 ? "var(--champagne)" : "var(--navy-500)", fontSize: "0.9rem", flexShrink: 0 }}>→</span>
                        <span style={{ color: i === 0 ? "rgba(255,255,255,.68)" : "var(--muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-[100px]" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[640px] mb-14">
            <span className="eyebrow">Process</span>
            <h2 className="mt-[18px]" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--navy-900)" }}>
              From first call to{" "}
              <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>live delivery.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflow.map((w, i) => (
              <Reveal key={w.step} delay={i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : undefined}>
                <div className="rounded-[20px] px-7 py-7" style={{ background: "var(--paper)", border: "1px solid rgba(11,30,63,.06)" }}>
                  <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--champagne)" }}>{w.step}</span>
                  <h3 className="mt-3 mb-2" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.2, letterSpacing: "-0.015em", color: "var(--navy-900)" }}>
                    {w.title}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Suited for */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[640px] mb-14">
            <span className="eyebrow">Who this is for</span>
            <h2 className="mt-[18px]" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--navy-900)" }}>
              Built for firms that advise{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>growing businesses.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {suitedFor.map((s, i) => (
              <Reveal key={s.label} delay={i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : undefined}>
                <div className="rounded-[20px] px-6 py-6" style={{ background: "var(--cream)", border: "1px solid rgba(11,30,63,.06)" }}>
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem", color: "var(--navy-900)", letterSpacing: "-0.01em" }}>
                    {s.label}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot strip */}
      <section className="py-14 md:py-[80px]" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="eyebrow">Getting started</span>
                <h2 className="mt-4 mb-3" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--paper)" }}>
                  Start with a pilot engagement.
                </h2>
                <p style={{ color: "rgba(255,255,255,.72)", fontSize: "0.96rem", lineHeight: 1.65, maxWidth: 540 }}>
                  No long-term commitment required to get started. We agree a first mandate together — usually an existing or incoming client that fits the model — and let the quality of the delivery speak for itself.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact?type=firm" className="btn btn-primary">
                  Talk to us about partnering →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="relative overflow-hidden py-16 md:py-[100px]" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[860px] mx-auto px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Partner with DreX</span>
            <h2 className="mt-[18px] mb-10" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--paper)" }}>
              Tell us about your firm.{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>We'll take it from there.</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <ContactForm heading="" subheading="" defaultType="firm" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
