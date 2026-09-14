"use client";

import { useState } from "react";
import { additionalServices, services, type ServiceCategory } from "@/data/services";
import { AdditionalServiceCard, ServiceCard } from "@/components/service-card";
import { additionalServiceVisuals, serviceVisuals } from "@/data/service-visuals";

const filters: Array<"Tous" | ServiceCategory> = ["Tous", "Incendie", "Désenfumage", "Formation", "Maintenance"];

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
          const originalIndex = additionalServices.findIndex((item) => item.title === service.title);
          const visual = additionalServiceVisuals[originalIndex];
          return <AdditionalServiceCard key={service.title} service={service} index={visible.length + index} image={visual.src} imagePosition={visual.position} />;
        })}
      </div>
      {visible.length === 0 && additional.length === 0 ? <p className="empty-filter">Aucun service dans cette catégorie.</p> : null}
    </div>
  );
}
