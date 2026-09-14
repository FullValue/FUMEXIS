import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Process } from "@/components/process";
import { Faq, type FaqItem } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { ArrowLink } from "@/components/arrow-link";

type Solution = { title: string; text: string; href?: string };

export function ExpertisePage({
  eyebrow,
  title,
  italic,
  intro,
  image,
  statement,
  body,
  solutions,
  stepsTitle,
  points,
  faq,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  image: string;
  statement: string;
  body: string;
  solutions: Solution[];
  stepsTitle: string;
  points: string[];
  faq: FaqItem[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={<>{title}<br /><em>{italic}</em></>} text={intro} image={image} compact />
      <section className="expertise-intro section-pad" id="content">
        <div className="container-wide expertise-intro-grid">
          <Reveal><div className="eyebrow"><span />NOTRE APPROCHE</div><h2>{statement}</h2></Reveal>
          <Reveal className="expertise-intro-body" delay={0.1}><p>{body}</p><ArrowLink href="/contact" variant="text">Échanger sur votre site</ArrowLink></Reveal>
        </div>
      </section>
      <section className="solutions-section section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="SOLUTIONS" title={<>Un ensemble cohérent.<br /><em>Un suivi lisible.</em></>} />
          <div className="solutions-list">
            {solutions.map((solution, index) => {
              const content = <><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{solution.title}</h3><p>{solution.text}</p></div><ArrowUpRight /></>;
              return solution.href ? <Link href={solution.href} key={solution.title}>{content}</Link> : <article key={solution.title}>{content}</article>;
            })}
          </div>
        </div>
      </section>
      <section className="expertise-image-break">
        <Image src={image} alt="" fill sizes="100vw" />
        <div className="container-wide">
          <Reveal><span className="micro-label">SUR LE TERRAIN</span><h2>{stepsTitle}</h2></Reveal>
          <Reveal className="image-points" delay={0.1}>{points.map((point) => <span key={point}><Check />{point}</span>)}</Reveal>
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="container-wide"><SectionHeading light eyebrow="INTERVENTION" title={<>Une méthode claire,<br /><em>à chaque étape.</em></>} /><Process /></div>
      </section>
      <section className="faq-section section-pad"><div className="container-wide faq-layout"><SectionHeading eyebrow="QUESTIONS FRÉQUENTES" title={<>Comprendre<br /><em>avant d’agir.</em></>} /><Faq items={faq} /></div></section>
      <FinalCta />
    </>
  );
}
