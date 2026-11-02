import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "DreX serves growing businesses across professional services, technology, healthcare, real estate, e-commerce, manufacturing, media, and non-profits.",
  openGraph: {
    title: "Industries | DreX",
    description: "Finance and accounting for growing businesses across key sectors.",
  },
};

const industries = [
  {
    slug: "professional-services",
    name: "Professional Services",
    desc: "Law firms, consulting practices and staffing agencies need real-time visibility into utilization, billing efficiency and partner profitability. We bring the financial rigor that service businesses require.",
    needs: ["Project profitability tracking", "WIP and billing analysis", "Partner and team margin reporting", "Cash flow management"],
  },
  {
    slug: "technology",
    name: "Technology and SaaS",
    desc: "Software companies and digital businesses need SaaS metric reporting, investor-grade models and a finance function that scales with their growth trajectory.",
    needs: ["ARR, MRR and churn reporting", "SaaS financial modeling", "Investor-ready board packs", "Runway and burn analysis"],
  },
  {
    slug: "healthcare",
    name: "Healthcare and Life Sciences",
    desc: "Healthcare providers and life sciences businesses operate under revenue cycle complexity and compliance requirements. We bring financial clarity without adding administrative burden.",
    needs: ["Revenue cycle analysis", "Payer mix reporting", "Practice profitability", "Multi-entity consolidation"],
  },
  {
    slug: "real-estate",
    name: "Real Estate and Property",
    desc: "Property investors, developers and managers need entity-level reporting, deal modeling and investor distributions managed accurately and on time.",
    needs: ["Property-level P&L", "Investor distribution tracking", "Deal financial modeling", "Multi-entity accounting"],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce and Retail",
    desc: "Product businesses need clear visibility into unit economics, inventory accounting and margin by channel. We bring the financial structure that growth-stage retail requires.",
    needs: ["Unit economics and margin", "Inventory accounting", "Channel profitability", "COGS and fulfillment tracking"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing and Distribution",
    desc: "Manufacturers and distributors face complex cost structures and supply chain variables. We bring the financial models and accounting practices to manage them.",
    needs: ["Job costing and variance", "COGS and overhead allocation", "Inventory valuation", "Working capital management"],
  },
  {
    slug: "media",
    name: "Media and Creative",
    desc: "Studios, agencies and content businesses need financial management that reflects the project-based nature of their work and supports growth and investment decisions.",
    needs: ["Project-based accounting", "Revenue recognition", "IP and royalty tracking", "Profitability by client"],
  },
  {
    slug: "nonprofits",
    name: "Non-Profit Organizations",
    desc: "Non-profits and foundations need clean fund accounting, grant tracking and the financial reporting their donors and boards require.",
    needs: ["Fund accounting", "Grant tracking and reporting", "Board financial reporting", "Budget vs actuals"],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[160px] pb-16 md:pb-[100px]"
        style={{ background: "var(--navy-900)", color: "var(--paper)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ top: -200, left: "50%", transform: "translateX(-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,.06), transparent 60%)" }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[2]">
          <span className="eyebrow">Industries</span>
          <h1
            className="mt-[18px] mb-5"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.03, letterSpacing: "-0.04em", color: "var(--paper)", maxWidth: "20ch" }}
          >
            Finance expertise for the sectors{" "}
            <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>that drive growth.</em>
          </h1>
          <p className="mb-8" style={{ color: "rgba(255,255,255,.78)", fontSize: "1.02rem", lineHeight: 1.75, maxWidth: 560 }}>
            We work across a range of industries. Each has its own financial drivers, reporting requirements and growth challenges. Our team brings both financial expertise and sector familiarity to every engagement.
          </p>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i % 2 === 1 ? "d1" : undefined}>
                <div
                  className="h-full rounded-[24px] px-8 py-8"
                  style={{ background: i % 4 < 2 ? "var(--cream)" : "var(--paper)", border: "1px solid rgba(11,30,63,.07)" }}
                >
                  <h2
                    className="mb-3"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.3rem", lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--navy-900)" }}
                  >
                    {ind.name}
                  </h2>
                  <p className="mb-5" style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                    {ind.desc}
                  </p>
                  <div
                    className="pt-5"
                    style={{ borderTop: "1px solid rgba(11,30,63,.07)" }}
                  >
                    <span
                      className="block mb-3"
                      style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--champagne)" }}
                    >
                      Common needs
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.needs.map((need) => (
                        <span
                          key={need}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{ background: "rgba(11,30,63,.07)", color: "var(--navy-900)", fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: "0.78rem" }}
                        >
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Not listed strip */}
      <section className="py-14" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h3 className="mb-2" style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.3rem", color: "var(--navy-900)", letterSpacing: "-0.02em" }}>
                  Your industry not listed?
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.6 }}>
                  We work with businesses across many sectors. If your industry is not listed here, book a call and we will tell you whether we are a good fit.
                </p>
              </div>
              <Link href="/contact" className="btn btn-dark flex-shrink-0">Book a call →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden py-16 md:py-[100px]" style={{ background: "var(--navy-900)" }}>
        <div
          className="absolute pointer-events-none"
          style={{ bottom: -150, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,.07), transparent 60%)" }}
        />
        <div className="max-w-[860px] mx-auto px-5 md:px-8 relative z-[2]">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2
              className="mt-[18px] mb-10"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--paper)" }}
            >
              Tell us about your business.{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>We'll tell you what fits.</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <ContactForm heading="" subheading="" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
