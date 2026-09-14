"use client";

import { useState } from "react";
import Image from "next/image";
import { additionalServices, services, type ServiceCategory } from "@/data/services";
import { ServiceCard } from "@/components/service-card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { additionalServiceVisuals, serviceVisuals } from "@/data/service-visuals";

const filters: Array<"Tous" | ServiceCategory> = ["Tous", "Incendie", "Désenfumage", "Sûreté", "Formation", "Maintenance"];

export function ServiceFilter() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tous");
  const visible = filter === "Tous" ? services : services.filter((service) => service.category === filter);
  const additional = filter === "Tous" ? additionalServices : additionalServices.filter((service) => service.category === filter);

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filtrer les services">
        {filters.map((item) => (
          <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <div className="services-grid services-grid--all">
        {visible.map((service, index) => {
          const visual = serviceVisuals[service.slug];
          return <ServiceCard key={service.slug} service={service} index={index} image={visual.src} imagePosition={visual.position} />;
        })}
        {additional.map((service, index) => {
          const Icon = service.icon;
          const originalIndex = additionalServices.findIndex((item) => item.title === service.title);
          const visual = additionalServiceVisuals[originalIndex];
          return (
            <Link href={service.href} className="service-card service-card--visual" key={service.title}>
              <span className="service-card-media" aria-hidden="true">
                <Image src={visual.src} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: visual.position }} />
              </span>
              <div className="service-card-top"><span>{String(visible.length + index + 1).padStart(2, "0")}</span><Icon size={27} /></div>
              <div><small>{service.category}</small><h3>{service.title}</h3><p>Étude, installation, contrôle et maintenance selon les besoins du bâtiment.</p></div>
              <ArrowUpRight className="service-card-arrow" />
            </Link>
          );
        })}
      </div>
      {visible.length === 0 && additional.length === 0 ? <p className="empty-filter">Aucun service dans cette catégorie.</p> : null}
    </div>
  );
}
