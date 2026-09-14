import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ArrowLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "dark" | "light" | "text";
  className?: string;
}) {
  return (
    <Link href={href} className={`arrow-link arrow-link--${variant} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}
