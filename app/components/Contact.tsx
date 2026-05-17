"use client";
import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

const contactInfo = [
  { label: "Phone", value: "+44 7561 325182" },
  { label: "Email", value: "haroonbutt1662@gmail.com" },
  { label: "Location", value: "London, United Kingdom" },
  { label: "Hours", value: "Monday – Friday · 9am – 6pm GMT" },
  { label: "Calendar", value: "calendly.com/drexcfo/30min" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 pb-12 md:py-[140px] md:pb-[100px]"
      style={{ background: "var(--navy-900)", color: "var(--paper)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,116,.08), transparent 60%)",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-10 md:gap-20">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2
              className="mt-[18px] mb-5"
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: "clamp(2.4rem, 4.6vw, 4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Let's talk about{" "}
              <em className="not-italic font-medium" style={{ color: "var(--champagne)" }}>your business.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)", maxWidth: 520, fontSize: "1.04rem", lineHeight: 1.7 }}>
              Schedule a free 30-minute consultation. No commitment — just a direct conversation about how we can help you achieve financial clarity, smarter reporting, and measurable growth.
            </p>

            <div className="grid gap-5 mt-10">
              {contactInfo.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-6 py-[18px]"
                  style={{
                    gridTemplateColumns: "120px 1fr",
                    borderBottom: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <span
                    className="self-center"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--champagne)",
                    }}
                  >
                    {row.label}
                  </span>
                  <span style={{ color: "rgba(255,255,255,.9)", fontSize: "1rem" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay="d1">
            <div
              className="rounded-[28px] p-6 md:p-10 backdrop-blur-[10px]"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: "1.35rem",
                  letterSpacing: "-0.025em",
                }}
              >
                Book a free 30-min consultation
              </h3>
              <p className="mb-7" style={{ color: "rgba(255,255,255,.65)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                We'll reply within one business day to schedule a call.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="text-[3rem] mb-4"
                    style={{ color: "var(--champagne)" }}
                  >
                    ✓
                  </div>
                  <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.85)" }}>
                    Thank you! We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {[
                    { label: "Name", type: "text", placeholder: "Your full name", name: "name" },
                    { label: "Company", type: "text", placeholder: "Where you work", name: "company" },
                    { label: "Email", type: "email", placeholder: "you@business.com", name: "email" },
                  ].map((field) => (
                    <div key={field.name} className="mb-[18px]">
                      <label
                        className="block mb-2"
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,.5)",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent outline-none py-2 transition-colors duration-300"
                        style={{
                          border: "none",
                          borderBottom: "1px solid rgba(255,255,255,.18)",
                          color: "var(--paper)",
                          fontFamily: "var(--font-manrope)",
                          fontSize: "1rem",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
                      />
                    </div>
                  ))}
                  <div className="mb-[18px]">
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.5)",
                      }}
                    >
                      What you'd like to discuss
                    </label>
                    <textarea
                      name="message"
                      placeholder="A few lines about your business and where you'd like more clarity"
                      rows={3}
                      className="w-full bg-transparent outline-none py-2 resize-none transition-colors duration-300"
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,.18)",
                        color: "var(--paper)",
                        fontFamily: "var(--font-manrope)",
                        fontSize: "1rem",
                        height: 80,
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full justify-center mt-2"
                  >
                    Request consultation
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
