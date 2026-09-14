import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/reveal";

export function FinalCta({ title = <>Un projet&nbsp;?<br />Parlons de vos installations.</> }: { title?: React.ReactNode }) {
  return (
    <section className="final-cta">
      <div className="final-cta-grid" aria-hidden="true" />
      <div className="container-wide">
        <Reveal>
          <div className="eyebrow eyebrow--light"><span />PREMIER ÉCHANGE</div>
          <h2>{title}</h2>
        </Reveal>
        <Reveal className="final-cta-side" delay={0.1}>
          <p>Décrivez votre site, vos installations ou votre besoin. Nous structurerons la suite avec vous.</p>
          <div><ArrowLink href="/contact" variant="primary">Demander un devis</ArrowLink><ArrowLink href="/contact" variant="light">Nous contacter</ArrowLink></div>
        </Reveal>
      </div>
    </section>
  );
}
