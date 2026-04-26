import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalH - Version 1.0.2",
  description: "Expertise IT & Marketing Digital à Lomé (Togo) et Dakar (Sénégal). Starlink, VSAT, Développement d'applications et SEO international.",
  openGraph: {
    title: "DigitalH | Agence Marketing Digital & Services IT",
    description: "Expertise IT & Marketing Digital à Lomé (Togo) et Dakar (Sénégal).",
    url: "https://digitalh.net",
    siteName: "DigitalH",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalH | Agence Marketing Digital & Services IT",
    description: "Expertise IT & Marketing Digital à Lomé (Togo) et Dakar (Sénégal).",
  },
};

// v1.0.4 - Force fresh deployment for brand assets
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
