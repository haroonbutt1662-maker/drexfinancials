import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "DreX | Senior Financial Leadership for Growing Businesses",
    template: "%s | DreX",
  },
  description:
    "DreX pairs senior financial judgment with AI-enabled delivery. Fractional CFO, accounting, financial modeling, tax, and transaction readiness for growing businesses and advisory firms. Offices in Dallas and London.",
  openGraph: {
    siteName: "DreX",
    images: [{ url: "/Logo2.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
