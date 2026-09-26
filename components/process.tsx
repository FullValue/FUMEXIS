"use client";

import { useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { ScanSearch, ClipboardCheck, Wrench, ShieldCheck, Pause, Play } from "lucide-react";
import { processSteps } from "@/data/site";

const icons = [ScanSearch, ClipboardCheck, Wrench, ShieldCheck];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.25 });
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const running = visible && !reduced && !paused && !hovered;

  return (
    <div ref={ref} className={`method-sequence ${running ? "is-running" : ""}`}>
      <div className="method-toolbar"><span>DU DIAGNOSTIC AU SUIVI</span><button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Relancer l’animation de la méthode" : "Mettre l’animation de la méthode en pause"} aria-pressed={paused}>{paused ? <Play size={14} /> : <Pause size={14} />}</button></div>
      <div className="method-steps" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setPaused(true)}>
        {processSteps.map((step, index) => {
          const Icon = icons[index];
          return (
            <article className={`method-step ${index === active ? "is-active" : ""} ${index < active ? "is-complete" : ""}`} key={step.number}>
              <div className="method-connector" aria-hidden="true"><span key={`${active}-${index}`} onAnimationEnd={() => { if (index === active && running) setActive((step) => (step + 1) % processSteps.length); }} /></div>
              <button type="button" className="method-select" aria-pressed={index === active} onClick={() => { setActive(index); setPaused(true); }}>
                <span className="method-icon"><Icon size={27} strokeWidth={1.3} aria-hidden="true" /></span><span className="method-number">{step.number}</span><span className="method-title">{step.title}</span>
              </button>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
