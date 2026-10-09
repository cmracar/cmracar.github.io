import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  // Paylaşım görselleri (og:image) tam adrese çözülsün; yoksa localhost yazılıyor.
  metadataBase: new URL("https://cemreacar.com"),
  title: "Cemre Acar | Senior Front-End Developer",
  description:
    "Cemre Acar — Senior Front-End Developer. Kurumsal web arayüzleri, kendi mobil uygulamaları ve bağımsız projeler.",
  keywords: ["Cemre Acar", "portfolio", "front-end", "React", "Next.js", "React Native", "Yelken", "Kurultay"],
  authors: [{ name: "Cemre Acar" }],
  creator: "Cemre Acar",
  openGraph: {
    title: "Cemre Acar | Senior Front-End Developer",
    description: "Kurumsal web arayüzleri, kendi mobil uygulamaları ve bağımsız projeler.",
    url: "https://cemreacar.com/",
    siteName: "Cemre Acar",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} flex min-h-screen flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
