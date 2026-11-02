"use client";
import { FormEvent, useState } from "react";

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  defaultType?: "business" | "firm";
  compact?: boolean;
}

const INDUSTRIES = [
  "Healthcare and physician practices",
  "Imaging and diagnostics",
  "Professional services and law firms",
  "Nonprofits",
  "Construction, trades and home services",
  "Real estate and property management",
  "Technology and SaaS",
  "Retail and consumer brands",
  "Other",
];

export default function ContactForm({
  heading = "Let's talk about your numbers",
  subheading = "We reply within one business day.",
  defaultType = "business",
  compact = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState<"business" | "firm">(defaultType);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,.18)",
    color: "var(--paper)",
    fontFamily: "var(--font-manrope)",
    fontSize: "1rem",
    background: "transparent",
    width: "100%",
    outline: "none",
    paddingBottom: 8,
    paddingTop: 4,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains-mono)",
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,.5)",
    display: "block",
    marginBottom: 6,
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <div className="text-[3rem] mb-4" style={{ color: "var(--champagne)" }}>✓</div>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,.85)", fontFamily: "var(--font-manrope)" }}>
          Thank you. We will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-[28px] ${compact ? "p-6 md:p-8" : "p-7 md:p-10"} backdrop-blur-[10px]`}
      style={{
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.1)",
      }}
    >
      {heading && (
        <h3
          className="mb-2"
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: compact ? "1.2rem" : "1.4rem",
            letterSpacing: "-0.025em",
            color: "var(--paper)",
          }}
        >
          {heading}
        </h3>
      )}
      {subheading && (
        <p className="mb-7" style={{ color: "rgba(255,255,255,.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>
          {subheading}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Type selector */}
        <div className="mb-6">
          <span style={labelStyle}>I am</span>
          <div className="flex gap-4">
            {([["business", "A business"], ["firm", "An advisory or accounting firm"]] as const).map(([val, lbl]) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer" style={{ color: "rgba(255,255,255,.8)", fontSize: "0.92rem", fontFamily: "var(--font-manrope)" }}>
                <input
                  type="radio"
                  name="type"
                  value={val}
                  checked={type === val}
                  onChange={() => setType(val)}
                  className="accent-[var(--champagne)]"
                  style={{ width: 16, height: 16 }}
                />
                {lbl}
              </label>
            ))}
          </div>
        </div>

        {/* Name row */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 mb-5`}>
          {(["firstName", "lastName"] as const).map((k) => (
            <div key={k}>
              <label style={labelStyle}>{k === "firstName" ? "First name" : "Last name"}</label>
              <input
                type="text"
                placeholder={k === "firstName" ? "First" : "Last"}
                value={fields[k]}
                onChange={set(k)}
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mb-5">
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="you@business.com"
              value={fields.email}
              onChange={set("email")}
              required
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
            />
          </div>
          <div>
            <label style={labelStyle}>Phone <span style={{ color: "rgba(255,255,255,.35)" }}>(optional)</span></label>
            <input
              type="tel"
              placeholder="+1 or +44..."
              value={fields.phone}
              onChange={set("phone")}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
            />
          </div>
        </div>

        <div className="mb-5">
          <label style={labelStyle}>Company</label>
          <input
            type="text"
            placeholder="Where you work"
            value={fields.company}
            onChange={set("company")}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
          />
        </div>

        {!compact && (
          <div className="mb-5">
            <label style={labelStyle}>Industry</label>
            <select
              value={fields.industry}
              onChange={set("industry")}
              style={{
                ...inputStyle,
                color: fields.industry ? "var(--paper)" : "rgba(255,255,255,.4)",
              }}
            >
              <option value="" disabled>Select your industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind} style={{ background: "var(--navy-800)", color: "var(--paper)" }}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-6">
          <label style={labelStyle}>How can we help? *</label>
          <textarea
            placeholder="A few lines about your business and what you need"
            rows={3}
            value={fields.message}
            onChange={set("message")}
            required
            style={{ ...inputStyle, resize: "none", height: 80 }}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--champagne)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,.18)")}
          />
        </div>

        {error && (
          <p className="mb-4 text-[0.85rem]" style={{ color: "#f87171" }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full justify-center"
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
