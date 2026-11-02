import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a call with DreX. Offices in Dallas, Texas and London, UK. Serving businesses and advisory firms in the US, UK and internationally.",
  openGraph: {
    title: "Contact | DreX",
    description: "Book a call with DreX.",
  },
};

const offices = [
  {
    city: "Dallas",
    region: "Texas, US",
    email: "hello@drexfinancialadvisors.com",
    phone: "[CONFIRM: Dallas number]",
    hours: "9am – 6pm CT, Mon–Fri",
    note: "For businesses and advisory firms in the US",
  },
  {
    city: "London",
    region: "UK",
    email: "hello@drexfinancialadvisors.com",
    phone: "+44 7561 325182",
    hours: "9am – 6pm GMT/BST, Mon–Fri",
    note: "For businesses and advisory firms in the UK and internationally",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const isFirm = params.type === "firm";

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[160px] pb-16 md:pb-[100px]"
        style={{ background: "var(--navy-900)", color: "var(--paper)" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ top: -200, right: -80, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,165,116,.07), transparent 60%)" }}
        />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-start">
            <div>
              <span className="eyebrow">Contact</span>
              <h1
                className="mt-[18px] mb-5"
                style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(2.2rem, 4.8vw, 3.8rem)", lineHeight: 1.04, letterSpacing: "-0.04em", color: "var(--paper)", maxWidth: "18ch" }}
              >
                {isFirm ? (
                  <>Tell us about your firm. <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>We'll take it from there.</em></>
                ) : (
                  <>Let's talk about where your numbers should be.</>
                )}
              </h1>
              <p style={{ color: "rgba(255,255,255,.78)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 500 }}>
                {isFirm
                  ? "Advisory, accounting and private equity firms work with us to extend their capacity and deliver finance services to their clients under their brand."
                  : "Whether you are a growing business or an advisory firm, book a call and we will work out together what would make the most difference."}
              </p>
            </div>

            <Reveal delay="d1">
              <div className="flex flex-col gap-4">
                {offices.map((o) => (
                  <div
                    key={o.city}
                    className="rounded-[20px] px-6 py-6"
                    style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "1.05rem", color: "var(--paper)" }}>{o.city}</span>
                        <span
                          className="ml-2 px-2 py-[3px] rounded-full"
                          style={{ background: "rgba(212,165,116,.15)", color: "var(--champagne)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                        >
                          {o.region}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`mailto:${o.email}`}
                        style={{ color: "rgba(255,255,255,.8)", fontSize: "0.88rem", textDecoration: "none" }}
                        className="hover:text-[var(--champagne)] transition-colors"
                      >
                        {o.email}
                      </a>
                      <span style={{ color: "rgba(255,255,255,.6)", fontSize: "0.86rem" }}>{o.phone}</span>
                      <span style={{ color: "rgba(255,255,255,.4)", fontSize: "0.82rem", fontFamily: "var(--font-jetbrains-mono)" }}>{o.hours}</span>
                    </div>
                    <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
                      <span style={{ color: "rgba(255,255,255,.45)", fontSize: "0.8rem" }}>{o.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 md:py-[100px]" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-[860px] mx-auto px-5 md:px-8">
          <Reveal>
            <span className="eyebrow">Send us a message</span>
            <h2
              className="mt-[18px] mb-10"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "var(--paper)" }}
            >
              {isFirm
                ? <>Partner enquiry — <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>we will reply within one business day.</em></>
                : <>We will reply within <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>one business day.</em></>
              }
            </h2>
          </Reveal>
          <Reveal delay="d1">
            <ContactForm
              heading=""
              subheading=""
              defaultType={isFirm ? "firm" : "business"}
            />
          </Reveal>
        </div>
      </section>

      {/* Footer nav strip */}
      <section className="py-10" style={{ background: "var(--cream)", borderTop: "1px solid rgba(11,30,63,.08)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                Want to learn more before reaching out?
              </span>
              <div className="flex flex-wrap gap-4">
                {[
                  { href: "/services", label: "Our services" },
                  { href: "/how-we-deliver", label: "How we deliver" },
                  { href: "/for-firms", label: "For advisory firms" },
                  { href: "/about", label: "About DreX" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[0.88rem] font-medium hover:text-[var(--champagne)] transition-colors"
                    style={{ color: "var(--navy-900)" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
