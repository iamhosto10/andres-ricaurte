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
    "Haz que tu negocio aparezca en ChatGPT, Google y redes sociales. Aplica el Método CRACS para dominar el mercado digital actual.",
  openGraph: {
    title: "Andrés Ricaurte | Estratega en Marketing y Ventas con IA",
    description: "Haz que tu negocio aparezca en ChatGPT, Google y redes sociales. Aplica el Método CRACS para dominar el mercado digital actual.",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Ricaurte | Estratega en Marketing y Ventas con IA",
    description: "Haz que tu negocio aparezca en ChatGPT, Google y redes sociales. Aplica el Método CRACS para dominar el mercado digital actual.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-surface font-body text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
