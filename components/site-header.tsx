"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Flame, HeartPulse, Menu, X } from "lucide-react";
import { navigation } from "@/data/site";
import { securityTopics } from "@/data/security-topics";
import { preventionTopics } from "@/data/prevention-topics";
import { serviceActions } from "@/data/service-actions";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="nav-shell">
          <Logo />
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((item) =>
              item.mega ? (
                <div className="nav-mega" key={item.label}>
                  <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                    {item.label}<ChevronDown size={13} />
                  </Link>
                  {item.mega === "services" ? (
                    <div className="mega-panel mega-panel--actions">
                      <div className="service-actions-menu">
                        <div className="service-mega-heading"><span className="micro-label">02 / PRESTATIONS</span><Link href="/services">Voir tous les services <ArrowUpRight size={15} /></Link></div>
                        <div className="service-actions-menu-links">
                          {serviceActions.map((action) => {
                            const Icon = action.icon;
                            return <Link href={`/services#${action.id}`} key={action.id}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /><span>{action.title}</span><ArrowUpRight size={16} aria-hidden="true" /></Link>;
                          })}
                        </div>
                      </div>
                      <div className="service-actions-aside">
                        <span className="micro-label">VOTRE BESOIN</span>
                        <p>Une intervention adaptée à votre site.</p>
                        <Link href="/contact">Parler de votre projet <ArrowUpRight size={17} /></Link>
                      </div>
                    </div>
                  ) : (
                    <div className="mega-panel mega-panel--expertises">
                      <div className="service-mega-security">
                        <div className="service-mega-heading"><span className="micro-label"><Flame size={21} strokeWidth={1.6} aria-hidden="true" />01 / SÉCURITÉ</span><Link href="/securite-incendie">Voir l’ensemble <ArrowUpRight size={15} /></Link></div>
                        <div className="service-mega-links">
                          {securityTopics.map((topic) => {
                            const Icon = topic.icon;
                            return <Link href={topic.href} key={topic.href}><Icon className="service-mega-link-icon" size={25} strokeWidth={1.55} aria-hidden="true" /><span>{topic.menuLabel}</span><ArrowUpRight className="service-mega-link-arrow" size={15} aria-hidden="true" /></Link>;
                          })}
                        </div>
                      </div>
                      <div className="service-mega-prevention">
                        <div className="service-mega-heading"><span className="micro-label"><HeartPulse size={21} strokeWidth={1.6} aria-hidden="true" />02 / PRÉVENTION</span><Link href="/prevention">Voir l’ensemble <ArrowUpRight size={15} /></Link></div>
                        <div className="service-mega-prevention-links">
                          {preventionTopics.map((topic) => {
                            const Icon = topic.icon;
                            return <Link href={topic.href} key={topic.href}><Icon className="service-mega-link-icon" size={24} strokeWidth={1.55} aria-hidden="true" /><span>{topic.menuLabel}</span><ArrowUpRight className="service-mega-link-arrow" size={15} aria-hidden="true" /></Link>;
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link href="/contact" className="nav-cta">Demander un devis <ArrowUpRight size={15} /></Link>
          <button
            className="menu-button"
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="mobile-menu"
            initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? undefined : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.58, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu-links">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.045 }}
                >
                  <Link href={item.href} onClick={() => setMobileOpen(false)}><span>0{index + 1}</span>{item.label}</Link>
                </motion.div>
              ))}
            </div>
            <div className="mobile-service-links mobile-topic-links">
              <span>Expertises / Sécurité incendie</span>
              <Link href="/securite-incendie" onClick={() => setMobileOpen(false)}>Vue d’ensemble</Link>
              {securityTopics.map((topic) => { const Icon = topic.icon; return <Link key={topic.href} href={topic.href} onClick={() => setMobileOpen(false)}><Icon size={18} strokeWidth={1.6} aria-hidden="true" />{topic.menuLabel}</Link>; })}
              <span>Expertises / Prévention</span>
              <Link href="/prevention" onClick={() => setMobileOpen(false)}>Vue d’ensemble</Link>
              {preventionTopics.map((topic) => { const Icon = topic.icon; return <Link key={topic.href} href={topic.href} onClick={() => setMobileOpen(false)}><Icon size={18} strokeWidth={1.6} aria-hidden="true" />{topic.menuLabel}</Link>; })}
            </div>
            <div className="mobile-service-links mobile-action-links">
              <span>Services / Prestations</span>
              {serviceActions.map((action) => { const Icon = action.icon; return <Link key={action.id} href={`/services#${action.id}`} onClick={() => setMobileOpen(false)}><Icon size={18} strokeWidth={1.6} aria-hidden="true" />{action.title}</Link>; })}
            </div>
            <Link href="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>Demander un devis <ArrowUpRight /></Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
