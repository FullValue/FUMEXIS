"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function FirePanel() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className={`fire-index fire-index--animated ${visible ? "is-visible" : ""}`}>
      <span>01 — 04</span>
      <div className="fire-emblem" aria-hidden="true"><ShieldCheck strokeWidth={0.8} /><i /><i /></div>
      <strong>SÉCURITÉ<br />INCENDIE</strong>
      <div className="fire-trace" aria-hidden="true" />
    </div>
  );
}
