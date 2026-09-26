"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { expertiseLinks } from "@/data/site";

const expertiseImages = [
  "/images/hero-slides/alarme-incendie.jpg",
  "/images/hero-slides/desenfumage.jpg",
  "/images/hero-slides/formation-incendie.jpg",
];

export function ExpertiseCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [active, setActive] = useState(0);
  const [userControlled, setUserControlled] = useState(false);

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 640px)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setMobile(mobileMedia.matches);
      setReducedMotion(motionMedia.matches);
    };
    update();
    mobileMedia.addEventListener("change", update);
    motionMedia.addEventListener("change", update);
    return () => {
      mobileMedia.removeEventListener("change", update);
      motionMedia.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.45 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    const left = card.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft;
    rail.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
    activeRef.current = index;
    setActive(index);
  }

  useEffect(() => {
    if (!mobile || !visible || reducedMotion || userControlled) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      const next = (activeRef.current + 1) % expertiseLinks.length;
      const rail = railRef.current;
      const card = rail?.children[next] as HTMLElement | undefined;
      if (!rail || !card) return;
      const left = card.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft;
      rail.scrollTo({ left, behavior: "smooth" });
      activeRef.current = next;
      setActive(next);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [mobile, visible, reducedMotion, userControlled]);

  return (
    <div ref={sectionRef} className="expertise-carousel">
      <div
        ref={railRef}
        className="expertise-grid"
        onPointerDown={() => setUserControlled(true)}
        onFocusCapture={() => setUserControlled(true)}
        onScroll={() => {
          const rail = railRef.current;
          if (!rail || !mobile) return;
          const cards = Array.from(rail.children) as HTMLElement[];
          const closest = cards.reduce((best, card, index) => {
            const distance = Math.abs(card.getBoundingClientRect().left - rail.getBoundingClientRect().left);
            return distance < best.distance ? { index, distance } : best;
          }, { index: 0, distance: Number.POSITIVE_INFINITY });
          activeRef.current = closest.index;
          setActive(closest.index);
        }}
      >
        {expertiseLinks.map((item, index) => (
          <article className={`expertise-card expertise-card--${index + 1}`} key={item.href}>
            <Link href={item.href}>
              <Image src={expertiseImages[index]} alt="" fill sizes="(max-width: 640px) 82vw, (max-width: 900px) 50vw, 60vw" />
              <span className="expertise-overlay" />
              <div className="expertise-card-top"><small>{item.code}</small><ArrowUpRight /></div>
              <div className="expertise-card-copy"><h3>{item.label}</h3><p>{item.description}</p></div>
            </Link>
          </article>
        ))}
      </div>
      <div className="expertise-carousel-dots" aria-label="Choisir une expertise">
        {expertiseLinks.map((item, index) => (
          <button
            type="button"
            key={item.href}
            className={index === active ? "is-active" : ""}
            aria-label={`Afficher ${item.label}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => { setUserControlled(true); goTo(index); }}
          />
        ))}
      </div>
    </div>
  );
}
