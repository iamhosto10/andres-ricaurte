import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Andrés Ricaurte | Estratega en Marketing y Ventas con IA",
  description:
    "Factura más con un sistema de marketing y ventas automatizadas.",
  metadataBase: new URL("https://andresricaurte.com"),
  openGraph: {
    title: "Andrés Ricaurte | Estratega en Marketing y Ventas",
    description:
      "Factura más con un sistema de marketing y ventas automatizadas.",
    url: "https://andresricaurte.com",
    siteName: "Andrés Ricaurte",
    images: [
      {
        url: "/AndresRicaurteTeams.webp",
        width: 1822,
        height: 2256,
        alt: "Andrés Ricaurte Portada",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EDXD4WBTZP`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EDXD4WBTZP');
        `}
      </Script>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton />
    </>
  );
}
