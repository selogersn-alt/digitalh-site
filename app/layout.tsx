import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalH | Agence Marketing Digital & Services IT Premium",
  description: "Expertise IT & Marketing Digital à Lomé (Togo) et Dakar (Sénégal). Starlink, VSAT, Développement d'applications et SEO international.",
  metadataBase: new URL("https://digitalh.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigitalH | Agence Marketing Digital & Services IT",
    description: "Expertise IT & Marketing Digital à Lomé (Togo) et Dakar (Sénégal).",
    url: "https://digitalh.net",
    siteName: "DigitalH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DigitalH | Agence Marketing Digital & Services IT",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalH | Agence Marketing Digital & Services IT",
    description: "Expertise IT & Marketing Digital à Lomé (Togo) et Dakar (Sénégal).",
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
