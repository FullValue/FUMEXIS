import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <span>ERREUR / 404</span>
      <h1>Cette page<br />reste introuvable.</h1>
      <p>Le lien suivi ne correspond à aucune page du site FUMEXIS.</p>
      <Link href="/"><ArrowLeft size={16} />Revenir à l’accueil</Link>
    </section>
  );
}
