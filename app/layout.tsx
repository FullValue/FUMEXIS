import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/500.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "FUMEXIS | Sécurité incendie, désenfumage naturel et mécanique, audit et formation", template: "%s | FUMEXIS" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "FUMEXIS",
    title: "FUMEXIS | Sécurité incendie, désenfumage naturel et mécanique, audit et formation",
    description: siteConfig.description,
    images: [{ url: "/images/hero-fumexis.jpg", width: 1672, height: 935, alt: "Installation de sécurité incendie FUMEXIS" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0d0d0d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">Aller au contenu</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
