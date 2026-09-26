import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AdditionalService, Service } from "@/data/services";

export function ServiceCard({
  service,
  index,
  image,
  imagePosition = "center",
}: {
  service: Service;
  index: number;
  image?: string;
  imagePosition?: string;
}) {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.slug}`} className={`service-card ${image ? "service-card--visual" : ""}`}>
      {image ? (
        <span className="service-card-media" aria-hidden="true">
          <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: imagePosition }} />
        </span>
      ) : null}
      <div className="service-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <Icon size={27} strokeWidth={1.35} aria-hidden="true" />
      </div>
      <div>
        <small>{service.category}</small>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
      </div>
      <ArrowUpRight className="service-card-arrow" aria-hidden="true" />
    </Link>
  );
}

export function AdditionalServiceCard({
  service,
  index,
  image,
  imagePosition,
}: {
  service: AdditionalService;
  index: number;
  image: string;
  imagePosition: string;
}) {
  const Icon = service.icon;
  return (
    <Link href={service.href} className="service-card service-card--visual">
      <span className="service-card-media" aria-hidden="true">
        <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: imagePosition }} />
      </span>
      <div className="service-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <Icon size={27} strokeWidth={1.35} aria-hidden="true" />
      </div>
      <div>
        <small>{service.category}</small>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
      </div>
      <ArrowUpRight className="service-card-arrow" aria-hidden="true" />
    </Link>
  );
}
