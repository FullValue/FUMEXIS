"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";

const slides = [
  {
    image: "/images/hero-slides/alarme-incendie.jpg",
    label: "SÉCURITÉ INCENDIE",
    title: ["SÉCURITÉ", "INCENDIE", "PRÉVENTION"],
    text: "Des équipements installés, contrôlés et suivis pour protéger vos bâtiments.",
    href: "/securite-incendie",
    imagePosition: "center",
  },
  {
    image: "/images/hero-slides/extincteur-en-action.jpg",
    label: "PREMIÈRE INTERVENTION",
    title: ["EXTINCTEURS", "MOBILES"],
    text: "Des appareils adaptés aux risques de votre site et prêts à être utilisés.",
    href: "/services/extincteurs",
    imagePosition: "center",
  },
  {
    image: "/images/hero-slides/desenfumage.jpg",
    label: "DÉSENFUMAGE",
    title: ["MAÎTRISER", "LES FUMÉES"],
    text: "Des solutions de désenfumage pensées pour faciliter l’évacuation.",
    href: "/desenfumage",
    imagePosition: "center",
  },
  {
    image: "/images/hero-slides/formation-incendie.jpg",
    label: "FORMATION INCENDIE",
    title: ["PRÉPARER", "LES ÉQUIPES"],
    text: "Des exercices concrets pour agir avec méthode face au risque incendie.",
    href: "/formation",
    imagePosition: "center",
  },
] as const;

export function HomeHeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const slide = slides[active];

  return (
    <section className="home-hero" aria-label="Découvrir les expertises FUMEXIS">
      <div className="home-hero-images" aria-hidden="true">
        {slides.map((item, index) => (
          <div className={`home-hero-image ${index === active ? "is-active" : ""}`} key={item.image}>
            <Image
              src={item.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: item.imagePosition }}
            />
          </div>
        ))}
      </div>
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-hero-content container-wide" key={active}>
        <div className="home-hero-eyebrow"><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>{slide.label}</div>
        <h1>{slide.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{slide.text}</p>
        <Link href={slide.href} className="home-hero-link">Découvrir l’expertise <ArrowUpRight size={18} /></Link>
      </div>
      <div className="home-hero-controls" aria-label="Choisir une image">
        {slides.map((item, index) => (
          <button
            type="button"
            key={item.image}
            className={index === active ? "is-active" : ""}
            aria-label={`Afficher l’image ${index + 1} : ${item.label.toLowerCase()}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
          ><span /></button>
        ))}
        <button
          type="button"
          className="home-hero-pause"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Relancer le diaporama" : "Mettre le diaporama en pause"}
        >{paused ? <Play size={15} fill="currentColor" /> : <Pause size={15} fill="currentColor" />}</button>
      </div>
      <a href="#content" className="home-hero-scroll"><span>Explorer</span><ArrowDown size={17} /></a>
    </section>
  );
}
