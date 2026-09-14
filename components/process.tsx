"use client";

import { motion, useReducedMotion } from "motion/react";
import { processSteps } from "@/data/site";

export function Process() {
  const reduced = useReducedMotion();
  return (
    <div className="process-grid">
      <motion.span
        className="process-line"
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {processSteps.map((step, index) => (
        <motion.article
          key={step.number}
          initial={reduced ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <span className="process-dot" />
          <small>{step.number}</small>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </motion.article>
      ))}
    </div>
  );
}
