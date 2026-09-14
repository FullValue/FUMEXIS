import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact et demande de devis",
  description: "Contactez FUMEXIS pour une étude, une installation, une maintenance ou une formation en sécurité incendie et désenfumage.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT / DEMANDE DE DEVIS" title={<>Votre bâtiment.<br /><em>Votre besoin.</em></>} text="Donnez-nous les premiers éléments. Nous vous aiderons à cadrer la prochaine étape." image="/images/hero-fumexis.jpg" compact cta={false} />
      <section className="contact-section section-pad" id="content">
        <div className="container-wide contact-layout">
          <aside>
            <div className="eyebrow"><span />PREMIER CONTACT</div>
            <h2>Parlons de vos installations.</h2>
            <p>Une demande précise nous aide à vous orienter plus vite. Indiquez le type de bâtiment, les équipements concernés et le niveau d’urgence.</p>
            <div className="contact-details">
              <a href={siteConfig.phone.startsWith("{{") ? undefined : `tel:${siteConfig.phone}`}><Phone /><span><small>Téléphone</small>{siteConfig.phone}</span></a>
              <a href={siteConfig.email.startsWith("{{") ? undefined : `mailto:${siteConfig.email}`}><Mail /><span><small>Email</small>{siteConfig.email}</span></a>
              <div><MapPin /><span><small>Adresse / zone</small>{siteConfig.address}<br />{siteConfig.serviceArea}</span></div>
            </div>
            <p className="placeholder-note">Les coordonnées ci-dessus sont centralisées dans <code>data/site.ts</code> et restent volontairement en placeholder.</p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
