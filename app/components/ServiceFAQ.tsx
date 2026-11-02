"use client";
import { useState } from "react";
import type { ServiceFaqItem } from "@/app/content/services";

export default function ServiceFAQ({ items }: { items: ServiceFaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid gap-[2px]" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(11,30,63,.08)" }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="cursor-pointer transition-colors duration-300"
          style={{ background: open === i ? "var(--cream)" : "var(--paper)" }}
        >
          <button
            className="w-full px-6 py-5 flex items-start justify-between gap-4 bg-transparent border-0 cursor-pointer text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span
              className="font-semibold text-[1rem] leading-snug"
              style={{ color: "var(--navy-900)", fontFamily: "var(--font-manrope)", letterSpacing: "-0.01em" }}
            >
              {item.q}
            </span>
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full grid place-items-center transition-all duration-300 mt-0.5"
              style={{
                background: open === i ? "var(--navy-900)" : "rgba(11,30,63,.08)",
                color: open === i ? "var(--champagne)" : "var(--navy-700)",
              }}
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d={open === i ? "M18 12H6" : "M12 6v12M6 12h12"} />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-6">
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
