import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { SecurityTopicNav } from "@/components/security-topic-nav";
import { SectionHeading } from "@/components/section-heading";
import { FinalCta } from "@/components/final-cta";
import { securityTopics, type SecurityTopic } from "@/data/security-topics";
import type { ExpertiseTopic } from "@/data/expertise-topic";

export function TopicDetailPage({ topic, topics, navigation }: { topic: ExpertiseTopic; topics: ExpertiseTopic[]; navigation: ReactNode }) {
  const related = topics.filter((item) => item.slug !== topic.slug).slice(0, 3);
  return (
    <>
      {navigation}
      <section className="security-detail-hero">
        <Image src={topic.image} alt={topic.imageAlt} fill priority sizes="100vw" />
        <div className="security-detail-hero-shade" aria-hidden="true" />
        <div className="container-wide security-detail-hero-content">
          <span className="security-detail-kicker">{topic.kicker}</span>
          <h1>{topic.title}</h1>
          <p>{topic.intro}</p>
          <a href="#comprendre" className="security-detail-discover">Comprendre la solution <ArrowDown size={18} /></a>
        </div>
      </section>

      <section className="security-detail-overview section-pad" id="comprendre">
        <div className="container-wide security-detail-overview-grid">
          <div>
            <div className="eyebrow"><span />LE PRINCIPE</div>
            <h2>{topic.statement}</h2>
          </div>
          <div className="security-detail-overview-copy">
            <p>{topic.explanation}</p>
            <Link href="/contact" className="security-detail-text-link">Parler de votre bâtiment <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="security-detail-features section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="REPÈRES CLÉS" title={<>Trois points<br /><em>à relier.</em></>} />
          <div className="security-detail-feature-grid">
            {topic.features.map((feature, index) => (
              <article key={feature.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-detail-checks section-pad">
        <div className="container-wide security-detail-checks-grid">
          <div>
            <div className="eyebrow eyebrow--light"><span />SUR LE TERRAIN</div>
            <h2>Des points concrets<br /><em>à vérifier.</em></h2>
            <p>La portée de la démarche dépend du site et de ses objectifs. Un bilan clair aide à décider des suites à donner.</p>
          </div>
          <ul>
            {topic.checks.map((check, index) => <li key={check}><span>{String(index + 1).padStart(2, "0")}</span>{check}<Check size={18} /></li>)}
          </ul>
        </div>
      </section>

      <section className="security-detail-related section-pad">
        <div className="container-wide">
          <SectionHeading eyebrow="EXPLORER" title={<>D’autres sujets<br /><em>à découvrir.</em></>} />
          <div className="security-related-grid">
            {related.map((item) => (
              <Link href={item.href} key={item.slug} className="security-related-card">
                <Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" />
                <span>{item.kicker}</span>
                <strong>{item.menuLabel}</strong>
                <ArrowUpRight size={21} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title={<>Un bâtiment, des usages.<br />Une réponse à construire.</>} />
    </>
  );
}

export function SecurityDetailPage({ topic }: { topic: SecurityTopic }) {
  return <TopicDetailPage topic={topic} topics={securityTopics} navigation={<SecurityTopicNav currentPath={topic.href} />} />;
}
