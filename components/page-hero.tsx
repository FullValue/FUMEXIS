"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ArrowLink } from "@/components/arrow-link";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  compact = false,
  cta = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
  compact?: boolean;
  cta?: boolean;
}) {
  const reduced = useReducedMotion();
  const animation = (delay: number) => ({
    initial: { opacity: 0, y: 34 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.85, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section className={`page-hero ${compact ? "page-hero--compact" : ""}`}>
      <motion.div
        className="page-hero-image"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={image} alt="" fill priority sizes="100vw" />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="page-hero-content container-wide">
        <motion.div className="eyebrow eyebrow--light" {...animation(0.12)}><span />{eyebrow}</motion.div>
        <motion.h1 {...animation(0.2)}>{title}</motion.h1>
        <motion.p {...animation(0.31)}>{text}</motion.p>
        {cta ? (
          <motion.div className="hero-actions" {...animation(0.4)}>
            <ArrowLink href="/contact" variant="primary">Demander un devis</ArrowLink>
            <ArrowLink href="/services" variant="light">Découvrir nos services</ArrowLink>
          </motion.div>
        ) : null}
      </div>
      {!compact ? <a href="#content" className="scroll-cue"><span>Explorer</span><ArrowDown size={17} /></a> : null}
    </section>
  );
}
