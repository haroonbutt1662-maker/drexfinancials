import Image from "next/image";
import Reveal from "./Reveal";

const qualifications = ["ACCA", "CFA", "MSc Business Analytics", "BSc Accounting & Finance"];

export default function Team() {
  return (
    <section
      id="team"
      className="py-16 pb-12 md:py-[140px] md:pb-[120px]"
      style={{ background: "var(--paper)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <Reveal className="max-w-[720px]">
          <span className="eyebrow">Team</span>
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
            Led by a chartered hand and a{" "}
            <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>builder's instinct.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-start md:items-center mt-8 md:mt-[60px]">
          {/* Founder image placeholder */}
          <Reveal>
            <div
              className="relative rounded-[32px] overflow-hidden"
              style={{
                aspectRatio: "4/5",
                boxShadow: "0 30px 80px rgba(11,30,63,.15)",
              }}
            >
              <Image
                src="/Profile Pic.png"
                alt="Haroon — Founder, DreX CFO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              {/* Name overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(11,30,63,.55) 100%)" }}
              />
              <div
                className="absolute bottom-6 left-6 right-6"
                style={{
                  color: "var(--paper)",
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Haroon
                <small
                  className="block mt-1"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontStyle: "normal",
                    fontSize: "0.72rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--champagne-soft)",
                  }}
                >
                  Founder · DreX CFO
                </small>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay="d1">
            <div>
              <span
                className="block mb-5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--champagne)",
                }}
              >
                Founder · Lead Advisor
              </span>
              <h3
                className="mb-[18px]"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "2.2rem",
                  lineHeight: 1.05,
                  color: "var(--navy-900)",
                  letterSpacing: "-0.035em",
                }}
              >
                Ten years of{" "}
                <em className="not-italic font-medium" style={{ color: "var(--navy-500)" }}>finance,</em> built into one practice.
              </h3>
              <p className="mb-[18px]" style={{ color: "var(--navy-700)", lineHeight: 1.75 }}>
                Haroon is a chartered financial professional with more than a decade of experience across accounting, financial analysis, valuation, and strategic advisory. He has partnered with everyone from pre-seed founders to institutional investors — and built DreX CFO to give them all access to the same quality of financial thinking.
              </p>
              <p style={{ color: "var(--navy-700)", lineHeight: 1.75 }}>
                His approach combines technical depth with practical empathy for what it actually takes to run and grow a business — and a conviction that modern automation should serve judgement, not replace it.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {qualifications.map((q) => (
                  <span
                    key={q}
                    className="px-[14px] py-2 rounded-full"
                    style={{
                      background: "var(--cream)",
                      fontSize: "0.82rem",
                      color: "var(--navy-700)",
                      border: "1px solid rgba(11,30,63,.06)",
                    }}
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
