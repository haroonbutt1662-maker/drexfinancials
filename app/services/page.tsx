import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceOrder } from "@/app/content/services";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight ways DreX moves your numbers. Fractional CFO, accounting, payables and receivables, financial modeling, tax, transaction readiness, audit readiness and financial packages.",
  openGraph: {
    title: "Services | DreX",
    description: "Eight ways DreX moves your numbers.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[160px] pb-16 md:pb-[100px]"
        style={{ background: "var(--navy-900)", color: "var(--paper)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 900,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,165,116,.07), transparent 60%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[2]">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1
              className="mt-[18px] mb-5"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                color: "var(--paper)",
                maxWidth: "16ch",
              }}
            >
              Eight ways DreX moves your{" "}
              <em className="not-italic" style={{ color: "var(--champagne)" }}>numbers.</em>
            </h1>
            <p
              className="mb-8"
              style={{ color: "rgba(255,255,255,.72)", fontSize: "1.08rem", lineHeight: 1.7, maxWidth: 580 }}
            >
              Senior financial judgment, delivered by a dedicated team, with AI built into the process to make it faster.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceOrder.map((slug, i) => {
              const svc = services[slug];
              return (
                <Reveal key={slug} delay={i % 4 === 1 ? "d1" : i % 4 === 2 ? "d2" : i % 4 === 3 ? "d3" : undefined}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group block h-full rounded-[20px] px-6 py-6 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: "var(--cream)",
                      border: "1px solid rgba(11,30,63,.07)",
                    }}
                  >
                    <span
                      className="block mb-3"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--champagne)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} · Service
                    </span>
                    <h2
                      className="mb-3 group-hover:text-[var(--navy-500)] transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em",
                        color: "var(--navy-900)",
                      }}
                    >
                      {svc.title}
                    </h2>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {svc.tagline}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 mt-5 text-[0.82rem] font-medium transition-colors duration-300 group-hover:text-[var(--champagne)]"
                      style={{ color: "var(--navy-500)" }}
                    >
                      Learn more
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Firms strip */}
      <section className="py-14" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="eyebrow">Advisory firms</span>
            <p
              className="mt-3"
              style={{ color: "rgba(255,255,255,.82)", fontSize: "1.1rem", lineHeight: 1.65, maxWidth: 560 }}
            >
              Advisory or accounting firm? We run these services behind your brand.
            </p>
          </div>
          <Link
            href="/for-firms"
            className="btn flex-shrink-0"
            style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}
          >
            How partnering works →
          </Link>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact"
        className="relative overflow-hidden py-16 md:py-[100px]"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -200,
            right: -100,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,165,116,.06), transparent 60%)",
          }}
        />
        <div className="max-w-[860px] mx-auto px-5 md:px-8 relative z-[2]">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2
              className="mt-[18px] mb-10"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "var(--paper)",
              }}
            >
              Not sure which service fits?{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>Just ask.</em>
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
