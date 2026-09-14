"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "La demande n’a pas pu être envoyée.");
      setState("success");
      setMessage("Votre demande a bien été transmise. Nous reviendrons vers vous dès que possible.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue. Réessayez dans quelques instants.");
    }
  }

  if (state === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 />
        <span>Demande transmise</span>
        <h2>Merci pour votre message.</h2>
        <p>{message}</p>
        <button type="button" onClick={() => setState("idle")}>Envoyer une autre demande</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label><span>Nom et prénom *</span><input type="text" name="name" autoComplete="name" required placeholder="Votre nom" /></label>
        <label><span>Entreprise *</span><input type="text" name="company" autoComplete="organization" required placeholder="Votre entreprise" /></label>
        <label><span>Téléphone *</span><input type="tel" name="phone" autoComplete="tel" required placeholder="Votre numéro" /></label>
        <label><span>Email *</span><input type="email" name="email" autoComplete="email" required placeholder="vous@entreprise.fr" /></label>
        <label><span>Code postal *</span><input type="text" name="postalCode" inputMode="numeric" pattern="[0-9]{5}" required placeholder="75000" /></label>
        <label>
          <span>Type de besoin *</span>
          <select name="need" required defaultValue="">
            <option value="" disabled>Sélectionner</option>
            <option>Sécurité incendie</option><option>Désenfumage</option><option>Sûreté</option>
            <option>Formation</option><option>Maintenance</option><option>Autre</option>
          </select>
        </label>
        <label className="form-full"><span>Votre message *</span><textarea name="message" rows={6} required minLength={20} placeholder="Parlez-nous du bâtiment, des équipements concernés et de votre besoin…" /></label>
      </div>
      <label className="privacy-check"><input type="checkbox" name="consent" value="accepted" required /><span>J’accepte que mes informations soient utilisées pour répondre à ma demande. *</span></label>
      {state === "error" ? <p className="form-error" role="alert">{message}</p> : null}
      <button className="form-submit" type="submit" disabled={state === "loading"}>
        <span>{state === "loading" ? "Envoi en cours" : "Envoyer ma demande"}</span>
        {state === "loading" ? <LoaderCircle className="spin" /> : <ArrowUpRight />}
      </button>
    </form>
  );
}
