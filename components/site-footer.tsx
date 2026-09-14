import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { expertiseLinks, siteConfig } from "@/data/site";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta container-wide">
        <div>
          <span className="micro-label">PARLONS DE VOTRE SITE</span>
          <h2>Un besoin identifié.<br />Une réponse construite.</h2>
        </div>
        <Link href="/contact" aria-label="Demander un devis"><ArrowUpRight /></Link>
      </div>
      <div className="footer-grid container-wide">
        <div className="footer-brand">
          <Logo inverse />
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h3>Expertises</h3>
          {expertiseLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.title}</Link>)}
          <Link href="/services">Voir tous les services</Link>
          <Link href="/blog">Conseils & articles</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <span>{siteConfig.phone}</span>
          <span>{siteConfig.email}</span>
          <span>{siteConfig.address}</span>
          <Link href="/contact">Demander un devis <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className="footer-bottom container-wide">
        <span>© {new Date().getFullYear()} FUMEXIS</span>
        <span>Installer · Contrôler · Maintenir</span>
        <div><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link></div>
      </div>
    </footer>
  );
}
