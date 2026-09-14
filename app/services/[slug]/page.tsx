import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, CircleAlert } from "lucide-react";
import { getService, services } from "@/data/services";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Process } from "@/components/process";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.short} FUMEXIS accompagne les professionnels pour l’installation, la vérification et la maintenance.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | FUMEXIS`, description: service.short },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;
  const image = "/images/hero-fumexis.jpg";
  const faq = [
    { question: `À quoi sert la solution ${service.title} ?`, answer: service.purpose },
    { question: "Pouvez-vous intervenir sur un équipement existant ?", answer: "Oui. Une première analyse permet d’identifier l’état de l’équipement, les informations disponibles et le périmètre d’intervention pertinent." },
    { question: "Comment la maintenance est-elle organisée ?", answer: service.maintenance },
    { question: "Comment demander une étude ou une intervention ?", answer: "Utilisez le formulaire de contact avec le type de bâtiment, les équipements concernés et votre code postal. L’équipe pourra alors qualifier la demande." },
  ];

  return (
    <>
      <PageHero eyebrow={`SERVICE / ${service.category.toUpperCase()}`} title={<>{service.title}<br /><em>Suivi dans la durée.</em></>} text={service.short} image={image} compact />
      <section className="service-detail-intro section-pad" id="content">
        <div className="container-wide service-detail-grid">
          <Reveal className="service-detail-icon"><Icon size={58} strokeWidth={1.2} /><span>{service.category}</span></Reveal>
          <Reveal delay={0.08}><div className="eyebrow"><span />RÔLE DE LA SOLUTION</div><h2>{service.purpose}</h2></Reveal>
        </div>
      </section>

      <section className="service-columns section-pad">
        <div className="container-wide">
          <article><span>01</span><h2>Installation</h2><p>{service.installation}</p></article>
          <article><span>02</span><h2>Maintenance</h2><p>{service.maintenance}</p></article>
        </div>
      </section>

      <section className="attention-section section-pad">
        <div className="container-wide attention-grid">
          <SectionHeading light eyebrow="POINTS D’ATTENTION" title={<>Ce que nous regardons<br /><em>avec précision.</em></>} />
          <div className="attention-list">
            {service.attention.map((item, index) => <Reveal key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><CircleAlert /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="buildings-section section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="BÂTIMENTS CONCERNÉS" title={<>Une solution à intégrer<br /><em>dans son contexte.</em></>} />
          <div className="building-chips">{service.buildings.map((building) => <span key={building}><Check />{building}</span>)}</div>
        </div>
      </section>

      <section className="process-section section-pad"><div className="container-wide"><SectionHeading light eyebrow="DÉROULEMENT" title={<>De l’état des lieux<br /><em>au suivi.</em></>} /><Process /></div></section>
      <section className="faq-section section-pad"><div className="container-wide faq-layout"><SectionHeading eyebrow="FAQ" title={<>Les réponses<br /><em>utiles.</em></>} /><Faq items={faq} /></div></section>
      <FinalCta title={<>Un besoin en {service.title.toLowerCase()}&nbsp;?<br />Construisons la suite.</>} />
    </>
  );
}
