import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  need?: string;
  message?: string;
  consent?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const needs = new Set(["Sécurité incendie", "Désenfumage", "Formation incendie", "Maintenance", "Autre"]);

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json() as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  if (
    !body.name?.trim() || !body.company?.trim() || !body.phone?.trim() ||
    !body.email || !emailPattern.test(body.email) || !body.postalCode?.match(/^\d{5}$/) ||
    !body.need || !needs.has(body.need) || !body.message || body.message.trim().length < 20 ||
    body.consent !== "accepted"
  ) {
    return NextResponse.json({ message: "Vérifiez les champs obligatoires et le format des informations saisies." }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { message: "Le canal d’envoi n’est pas encore configuré. Ajoutez CONTACT_WEBHOOK_URL dans l’environnement de production." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, source: "website-contact-form", submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Webhook error");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Le service de contact est temporairement indisponible." }, { status: 502 });
  }
}
