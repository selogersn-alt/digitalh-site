import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalH | Créativité & Excellence IT pour vos Projets",
  description: "Propulsez votre entreprise avec DigitalH. Expertise en développement Web/Mobile, SEO international et solutions Starlink. L'innovation qui apporte du succès.",
  metadataBase: new URL("https://digitalh.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigitalH | Votre Partenaire Digital de Confiance",
    description: "Solutions IT innovantes et Marketing Digital haute performance au Togo, Sénégal et à l'International.",
    url: "https://digitalh.net",
    siteName: "DigitalH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DigitalH | Expertise IT & Marketing",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo_h.png" },
      { url: "/logo_h.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo_h.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalH | L'excellence Digitale à votre portée",
    description: "Expertise IT & Marketing Digital de pointe.",
    images: ["/og-image.png"],
  },
};

// v1.0.5 - Final brand asset verification and explicit metadata
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        {/* v1.0.1-final */}
        <Footer />
      </body>
    </html>
  );
}
