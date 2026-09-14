import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`} aria-label="FUMEXIS — Accueil">
      <span className="brand-mark-frame">
        <Image src="/brand/fumexis-mark.png" alt="" width={710} height={710} className="brand-mark" priority />
      </span>
      {inverse ? (
        <span className="brand-name" aria-hidden="true">FUMEX<span>iS</span></span>
      ) : (
        <Image src="/brand/fumexis-wordmark.png" alt="" width={1300} height={220} className="brand-wordmark" priority />
      )}
    </Link>
  );
}
