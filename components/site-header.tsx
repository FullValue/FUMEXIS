"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Flame, HeartPulse, Menu, X } from "lucide-react";
import { expertiseLinks, navigation } from "@/data/site";
import { securityTopics } from "@/data/security-topics";
import { preventionTopics } from "@/data/prevention-topics";
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
                    <div className="mega-panel mega-panel--services">
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
                  ) : (
                    <div className="mega-panel">
                      <div className="mega-intro">
                        <span className="micro-label">EXPERTISES / 03</span>
                        <p>Une lecture globale du bâtiment, de ses usages et de ses risques.</p>
                      </div>
                      <div className="mega-links">
                        {expertiseLinks.map((expertise) => (
                          <Link href={expertise.href} key={expertise.href}>
                            <small>{expertise.code}</small>
                            <span>{expertise.label}</span>
                            <ArrowUpRight size={17} />
                          </Link>
                        ))}
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
            <div className="mobile-expertise-links">
              {expertiseLinks.slice(1).map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}
            </div>
            <div className="mobile-service-links">
              <span>Services / Sécurité</span>
              {securityTopics.map((topic) => { const Icon = topic.icon; return <Link key={topic.href} href={topic.href} onClick={() => setMobileOpen(false)}><Icon size={18} strokeWidth={1.6} aria-hidden="true" />{topic.menuLabel}</Link>; })}
              <span>Services / Prévention</span>
              <Link href="/prevention" onClick={() => setMobileOpen(false)}>Tous les thèmes</Link>
              {preventionTopics.map((topic) => { const Icon = topic.icon; return <Link key={topic.href} href={topic.href} onClick={() => setMobileOpen(false)}><Icon size={18} strokeWidth={1.6} aria-hidden="true" />{topic.menuLabel}</Link>; })}
            </div>
            <Link href="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>Demander un devis <ArrowUpRight /></Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
