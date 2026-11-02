import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "DreX | Senior Financial Leadership, Delivered",
  description:
    "DreX combines senior financial judgment with AI-enabled delivery. Fractional CFO, accounting, financial modeling and more — for growing businesses in the US and UK.",
};

const industries = [
  "Professional Services", "Technology and SaaS", "Healthcare",
  "Real Estate", "E-Commerce", "Manufacturing", "Media and Creative", "Non-Profits",
];

export default function Page() {
  return (
    <>
      <Hero />

      {/* navy → paper */}
      <SectionDivider
        from="#06152E"
        layers={["#102A56", "#3D5A88", "#A8B6CC", "#FBFAF7"]}
      />

      {/* About teaser */}
      <section
        id="about"
        className="py-16 md:py-[100px]"
        style={{ background: "var(--paper)" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-20 items-center">
            <Reveal>
              <span className="eyebrow">About DreX</span>
              <h2
                className="mt-[18px] mb-5"
                style={{
                  fontFamily: "var(--font-manrope)", fontWeight: 600,
                  fontSize: "clamp(1.9rem, 4vw, 3.2rem)", lineHeight: 1.06,
                  letterSpacing: "-0.035em", color: "var(--navy-900)",
                }}
              >
                Senior financial judgment, delivered by a firm built for{" "}
                <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>scale.</em>
              </h2>
              <p className="mb-6" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75 }}>
                DreX pairs senior financial expertise with AI-enabled automation. We serve growing businesses directly,
                and we run finance and accounting delivery for advisory, accounting and private equity firms behind their brand.
                Offices in Dallas and London.
              </p>
              <Link href="/about" className="btn btn-dark">Learn about us →</Link>
            </Reveal>

            <Reveal delay="d1">
              <div className="grid gap-3">
                {[
                  { title: "Clarity over chaos", desc: "Every number on every report answers a real question." },
                  { title: "Insight, not just data", desc: "We translate movement in your numbers into decisions." },
                  { title: "AI-assisted delivery", desc: "Automation handles the volume; our team handles the judgment." },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="rounded-[16px] px-5 py-5"
                    style={{ background: "var(--cream)", border: "1px solid rgba(11,30,63,.06)" }}
                  >
                    <h3 className="mb-1" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "0.98rem", color: "var(--navy-900)", letterSpacing: "-0.01em" }}>
                      {p.title}
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.86rem", lineHeight: 1.55 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* paper → navy */}
      <SectionDivider
        from="#FBFAF7"
        layers={["#D4D8D2", "#8FA4BE", "#3D5A88", "#06152E"]}
      />

      <Services />

      {/* navy → cream */}
      <SectionDivider
        from="#06152E"
        layers={["#102A56", "#3D5A88", "#B5B5A7", "#F5F1EA"]}
      />

      <Process />

      {/* cream → paper */}
      <SectionDivider
        from="#F5F1EA"
        layers={["#EFE9DC", "#F2EDE0", "#FBFAF7", "#FBFAF7"]}
        height={20}
        viewBoxHeight={100}
      />

      {/* For Firms teaser */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
            <Reveal delay="d1">
              <div className="rounded-[28px] px-7 py-10" style={{ background: "var(--navy-900)" }}>
                <span className="eyebrow">Partner model</span>
                <h3 className="mt-4 mb-4" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.4rem", lineHeight: 1.2, letterSpacing: "-0.025em", color: "var(--paper)" }}>
                  Three ways advisory firms work with DreX.
                </h3>
                <div className="flex flex-col gap-3">
                  {["Capacity extension — you brand it, we deliver", "Referral — we engage directly, you earn a referral", "Project support — fixed scope, fixed price"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span style={{ color: "var(--champagne)", fontWeight: 600, flexShrink: 0 }}>→</span>
                      <span style={{ color: "rgba(255,255,255,.72)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/for-firms" className="btn btn-primary">Learn about partnering →</Link>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <span className="eyebrow">For Advisory Firms</span>
              <h2
                className="mt-[18px] mb-5"
                style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--navy-900)" }}
              >
                Expand your capacity.{" "}
                <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>Not your headcount.</em>
              </h2>
              <p className="mb-6" style={{ color: "var(--muted)", fontSize: "0.98rem", lineHeight: 1.72 }}>
                Advisory, accounting and private equity firms run DreX finance and accounting services behind their brand. You bring the client relationship. We deliver the work. No new hires required.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/for-firms" className="btn btn-dark">How it works →</Link>
                <Link href="/contact?type=firm" className="btn" style={{ background: "var(--cream)", color: "var(--navy-900)", border: "1px solid rgba(11,30,63,.1)" }}>
                  Enquire now
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="py-12 md:py-[70px]" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="eyebrow">Industries</span>
                <h2 className="mt-3" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.2, letterSpacing: "-0.025em", color: "var(--navy-900)" }}>
                  Finance expertise across key sectors.
                </h2>
              </div>
              <Link href="/industries" className="btn btn-dark flex-shrink-0">All industries →</Link>
            </div>
          </Reveal>
          <Reveal delay="d1">
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-full"
                  style={{ background: "var(--paper)", border: "1px solid rgba(11,30,63,.08)", color: "var(--navy-900)", fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: "0.88rem" }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* paper → navy */}
      <SectionDivider
        from="#F5F1EA"
        layers={["#D4D8D2", "#8FA4BE", "#3D5A88", "#06152E"]}
      />

      <Testimonials />

      {/* Contact teaser */}
      <section
        id="contact"
        className="relative overflow-hidden py-16 md:py-[100px]"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ bottom: -200, right: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,.06), transparent 60%)" }}
        />
        <div className="max-w-[860px] mx-auto px-5 md:px-8 relative z-[2]">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2
              className="mt-[18px] mb-10"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--paper)" }}
            >
              Ready to see what{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>DreX can do?</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <ContactForm heading="" subheading="" compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
