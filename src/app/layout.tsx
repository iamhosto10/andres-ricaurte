import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="es" className="light" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-surface font-body text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
