"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const slides = [
  {
    kind: "original",
    image: "/images/hero-fumexis.jpg",
    label: "FUMEXIS",
  },
  {
    kind: "expertise",
    image: "/images/hero-slides/alarme-incendie.jpg",
    label: "SÉCURITÉ INCENDIE",
    title: ["SÉCURITÉ", "INCENDIE", "PRÉVENTION"],
    text: "Des équipements installés, contrôlés et suivis pour protéger vos bâtiments.",
    href: "/securite-incendie",
    imagePosition: "center",
  },
  {
    kind: "expertise",
    image: "/images/hero-slides/extincteur-en-action.jpg",
    label: "PREMIÈRE INTERVENTION",
    title: ["EXTINCTEURS", "MOBILES"],
    text: "Des appareils adaptés aux risques de votre site et prêts à être utilisés.",
    href: "/services/extincteurs",
    imagePosition: "center",
  },
  {
    kind: "expertise",
    image: "/images/hero-slides/desenfumage.jpg",
    label: "DÉSENFUMAGE NATUREL ET MÉCANIQUE",
    title: ["MAÎTRISER", "LES FUMÉES"],
    text: "Des solutions de désenfumage naturel et mécanique pensées pour faciliter l’évacuation.",
    href: "/desenfumage",
    imagePosition: "center",
  },
  {
    kind: "expertise",
    image: "/images/hero-slides/formation-incendie.jpg",
    label: "AUDIT ET FORMATION",
    title: ["PRÉPARER", "LES ÉQUIPES"],
    text: "Évaluer les risques et préparer les équipes à agir avec méthode.",
    href: "/prevention",
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
    let expiredWhileHidden = false;
    const timer = window.setTimeout(() => {
      if (document.hidden) expiredWhileHidden = true;
      else setActive((index) => (index + 1) % slides.length);
    }, 6000);
    const resume = () => {
      if (!document.hidden && expiredWhileHidden) setActive((index) => (index + 1) % slides.length);
    };
    document.addEventListener("visibilitychange", resume);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [active, paused, reducedMotion]);

  return (
    <div className="home-hero-slider" role="region" aria-roledescription="diaporama" aria-label="Découvrir FUMEXIS et ses expertises">
      {slides.map((item, index) => (
        <div
          className={`home-hero-panel ${index === 0 ? "home-hero-panel--original" : ""} ${index === active ? "is-active" : ""}`}
          aria-hidden={index !== active}
          key={item.image}
        >
          {item.kind === "original" ? (
            <PageHero
              eyebrow="SÉCURITÉ INCENDIE · DÉSENFUMAGE NATUREL ET MÉCANIQUE · AUDIT ET FORMATION"
              title={<>Anticiper les risques.<br /><em>Protéger les lieux.</em></>}
              text="FUMEXIS accompagne les professionnels dans l’installation, la maintenance et le suivi de leurs équipements de sécurité."
              image="/images/hero-fumexis.jpg"
            />
          ) : (
            <section className="home-hero" aria-label={item.label}>
              <div className="home-hero-images" aria-hidden="true">
                <div className="home-hero-image is-active">
                  <Image src={item.image} alt="" fill loading="eager" sizes="100vw" style={{ objectPosition: item.imagePosition }} />
                </div>
              </div>
              <div className="home-hero-shade" aria-hidden="true" />
              <div className="home-hero-content container-wide">
                <div className="home-hero-eyebrow"><span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>{item.label}</div>
                <h2>{item.title.map((line) => <span key={line}>{line}</span>)}</h2>
                <p>{item.text}</p>
                <Link href={item.href} className="home-hero-link">Découvrir l’expertise <ArrowUpRight size={18} /></Link>
              </div>
              <a href="#content" className="home-hero-scroll"><span>Explorer</span><ArrowDown size={17} /></a>
            </section>
          )}
        </div>
      ))}
      <div className={`home-hero-controls ${paused ? "is-paused" : ""}`} aria-label="Choisir une image">
        {slides.map((item, index) => (
          <button
            type="button"
            key={item.image}
            className={index === active ? "is-active" : ""}
            aria-label={`Afficher l’image ${index + 1} : ${item.label.toLowerCase()}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => setActive(index)}
          ><span className="home-hero-control-track"><span key={index === active ? `active-${active}-${paused}` : `idle-${index}`} /></span></button>
        ))}
        <button
          type="button"
          className="home-hero-pause"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Relancer le diaporama" : "Mettre le diaporama en pause"}
        >{paused ? <Play size={15} fill="currentColor" /> : <Pause size={15} fill="currentColor" />}</button>
      </div>
    </div>
  );
}
