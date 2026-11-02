import Link from "next/link";
import type { ServiceData } from "@/app/content/services";
import { services } from "@/app/content/services";
import ServiceFAQ from "./ServiceFAQ";

import Reveal from "./Reveal";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <div
      className="w-8 h-8 rounded-full grid place-items-center flex-shrink-0"
      style={{
        background: "var(--champagne)",
        color: "var(--navy-900)",
        fontFamily: "var(--font-manrope)",
        fontWeight: 600,
        fontSize: "0.85rem",
      }}
    >
      {n}
    </div>
  );
}

export default function ServicePage({ service }: { service: ServiceData }) {
  const relatedServices = service.related
    .map((slug) => services[slug])
    .filter(Boolean);

  return (
    <main>
      {/* ── 1. Hero ── */}
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
          <div>
            <span className="eyebrow">Service</span>
            <h1
              className="mt-[18px] mb-4"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                color: "var(--paper)",
                maxWidth: "18ch",
              }}
            >
              {service.title}
            </h1>
            <p
              className="mb-5 font-medium"
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "var(--champagne)",
                fontStyle: "italic",
              }}
            >
              {service.tagline}
            </p>
            <p
              className="mb-9"
              style={{ color: "rgba(255,255,255,.75)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 600 }}
            >
              {service.intro}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="btn btn-primary">Book a call →</Link>
              <Link href="/for-firms" className="btn btn-ghost">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What's included (or Packages for financial-packages) ── */}
      {service.packages ? (
        <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <Reveal>
              <span className="eyebrow">Our packages</span>
              <h2
                className="mt-[18px] mb-12"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--navy-900)",
                  maxWidth: "26ch",
                }}
              >
                Choose a starting point.
              </h2>
            </Reveal>
            <Reveal delay="d1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.packages.map((pkg, i) => (
                  <div
                    key={i}
                    className="rounded-[22px] px-8 py-8"
                    style={{
                      background: i % 2 === 0 ? "var(--cream)" : "var(--paper)",
                      border: "1px solid rgba(11,30,63,.08)",
                    }}
                  >
                    <h3
                      className="mb-3"
                      style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.2rem", color: "var(--navy-900)", letterSpacing: "-0.02em" }}
                    >
                      {pkg.title}
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.65 }}>
                      {pkg.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <Reveal>
              <span className="eyebrow">What&apos;s included</span>
              <h2
                className="mt-[18px] mb-12"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--navy-900)",
                  maxWidth: "26ch",
                }}
              >
                Everything you need, nothing you don&apos;t.
              </h2>
            </Reveal>
            <Reveal delay="d1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.included.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-[20px] px-6 py-6"
                    style={{
                      background: "var(--cream)",
                      border: "1px solid rgba(11,30,63,.06)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full grid place-items-center mb-4"
                      style={{ background: "var(--navy-900)" }}
                    >
                      <span style={{ color: "var(--champagne)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.7rem", fontWeight: 500 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className="mb-2"
                      style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1rem", color: "var(--navy-900)", letterSpacing: "-0.015em" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 3. How it works ── */}
      <section className="py-16 md:py-[80px]" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2
              className="mt-[18px] mb-12"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--paper)",
              }}
            >
              Four steps to{" "}
              <em className="not-italic" style={{ color: "var(--champagne)" }}>a clean result.</em>
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.howItWorks.map((step, i) => (
                <div
                  key={i}
                  className="rounded-[20px] px-6 py-7"
                  style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.09)" }}
                >
                  <StepNumber n={i + 1} />
                  <p
                    className="mt-4"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.05rem", color: "var(--paper)", letterSpacing: "-0.01em" }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 + 5. What you get / Who it's for ── */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <Reveal>
              <span className="eyebrow">What you get</span>
              <h2
                className="mt-[18px] mb-8"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--navy-900)",
                }}
              >
                The deliverables.
              </h2>
              <ul className="flex flex-col gap-4">
                {service.whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: "var(--navy-700)", fontSize: "1rem", lineHeight: 1.6 }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.proofPoint && (
                <div
                  className="mt-8 rounded-[16px] px-6 py-5"
                  style={{ background: "var(--cream)", border: "1px solid rgba(11,30,63,.08)" }}
                >
                  <span className="eyebrow" style={{ fontSize: "0.62rem" }}>Client result</span>
                  <p className="mt-2" style={{ color: "var(--navy-700)", fontSize: "0.94rem", lineHeight: 1.65, fontStyle: "italic" }}>
                    &ldquo;{service.proofPoint}&rdquo;
                  </p>
                </div>
              )}
            </Reveal>
            <Reveal delay="d1">
              <span className="eyebrow">Who it&apos;s for</span>
              <h2
                className="mt-[18px] mb-5"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--navy-900)",
                }}
              >
                The right fit.
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "1.02rem", lineHeight: 1.7 }}>
                {service.whoFor}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. For advisory firms ── */}
      <section
        className="py-12 md:py-[60px]"
        style={{ background: "var(--navy-900)" }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="eyebrow">Advisory firms</span>
              <p
                className="mt-3"
                style={{ color: "rgba(255,255,255,.82)", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: 640 }}
              >
                Run this behind your brand. We deliver under your name and your partners keep the sign-off.
              </p>
            </div>
            <Link
              href="/for-firms"
              className="btn flex-shrink-0"
              style={{ background: "rgba(255,255,255,.08)", color: "var(--paper)", border: "1px solid rgba(255,255,255,.2)" }}
            >
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="py-16 md:py-[100px]" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 md:gap-16 items-start">
            {/* Left: FAQ */}
            <div>
              <Reveal>
                <span className="eyebrow">FAQ</span>
                <h2
                  className="mt-[18px] mb-10"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 600,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "var(--navy-900)",
                  }}
                >
                  Common questions.
                </h2>
              </Reveal>
              <ServiceFAQ items={service.faq} />
            </div>

            {/* Right: Visual panel */}
            <Reveal delay="d1" className="lg:sticky lg:top-[120px]">
              <div
                className="relative overflow-hidden rounded-[28px] px-8 py-10"
                style={{ background: "var(--navy-900)", minHeight: 420 }}
              >
                {/* Abstract grid pattern */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id={`grid-${service.slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${service.slug})`} />
                </svg>

                {/* Glow */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: -80,
                    right: -80,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,165,116,.12), transparent 65%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-[2]">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--champagne)",
                      display: "block",
                      marginBottom: 20,
                    }}
                  >
                    {service.title}
                  </span>

                  <p
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontSize: "1.45rem",
                      lineHeight: 1.35,
                      color: "var(--paper)",
                      fontStyle: "italic",
                      marginBottom: 28,
                    }}
                  >
                    &ldquo;{service.tagline}&rdquo;
                  </p>

                  <div
                    className="mb-6 pt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.4)",
                        display: "block",
                        marginBottom: 12,
                      }}
                    >
                      What you get
                    </span>
                    <div className="flex flex-col gap-[10px]">
                      {service.whatYouGet.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            style={{
                              color: "var(--champagne)",
                              fontSize: "0.75rem",
                              flexShrink: 0,
                              paddingTop: 3,
                            }}
                          >
                            ✦
                          </span>
                          <span
                            style={{
                              color: "rgba(255,255,255,.72)",
                              fontSize: "0.88rem",
                              lineHeight: 1.5,
                              fontFamily: "var(--font-manrope)",
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex gap-3 pt-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
                  >
                    <Link href="/contact" className="btn btn-primary text-sm">
                      Book a call →
                    </Link>
                  </div>
                </div>

                {/* Large watermark number */}
                <span
                  className="absolute pointer-events-none select-none"
                  style={{
                    bottom: -20,
                    right: -10,
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: "10rem",
                    lineHeight: 1,
                    letterSpacing: "-0.06em",
                    color: "rgba(255,255,255,.035)",
                  }}
                >
                  DreX
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. Related services ── */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-[80px]" style={{ background: "var(--cream)" }}>
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <Reveal>
              <span className="eyebrow">Related services</span>
              <h2
                className="mt-[18px] mb-10"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--navy-900)",
                }}
              >
                You might also need.
              </h2>
            </Reveal>
            <Reveal delay="d1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="group rounded-[20px] px-7 py-7 no-underline transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "var(--paper)", border: "1px solid rgba(11,30,63,.08)" }}
                  >
                    <h3
                      className="mb-2 group-hover:text-[var(--navy-500)] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.05rem", color: "var(--navy-900)", letterSpacing: "-0.015em" }}
                    >
                      {svc.title}
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.86rem", lineHeight: 1.55 }}>
                      {svc.tagline}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 mt-4 text-[0.82rem] font-medium transition-colors duration-300 group-hover:text-[var(--champagne)]"
                      style={{ color: "var(--navy-500)" }}
                    >
                      Learn more
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 9. CTA strip ── */}
      <section
        className="relative overflow-hidden py-16 md:py-[80px]"
        style={{ background: "var(--navy-900)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(212,165,116,.07), transparent 65%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[2]">
          <Reveal className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <span className="eyebrow block mb-[14px]">Ready to start?</span>
              <h2
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--paper)",
                  maxWidth: "32ch",
                }}
              >
                Talk to us about{" "}
                <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>
                  {service.title.toLowerCase()}.
                </em>
              </h2>
              <p
                className="mt-3"
                style={{ color: "rgba(255,255,255,.55)", fontSize: "0.96rem", lineHeight: 1.65 }}
              >
                We reply within one business day.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap flex-shrink-0">
              <Link href="/contact" className="btn btn-primary">
                Book a call →
              </Link>
              <Link
                href="/services"
                className="btn"
                style={{
                  background: "rgba(255,255,255,.07)",
                  color: "var(--paper)",
                  border: "1px solid rgba(255,255,255,.15)",
                }}
              >
                All services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
