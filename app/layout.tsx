import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Cemre Acar | Kişisel Portfolio",
  description: "Cemre Acar'ın kişisel portfolio sayfası. Projeler, deneyimler ve iletişim bilgileri.",
  keywords: ["Cemre Acar", "portfolio", "kişisel", "web geliştirici", "projeler", "frontend", "yazılım"],
  authors: [{ name: "Cemre Acar" }],
  creator: "Cemre Acar",
  openGraph: {
    title: "Cemre Acar | Kişisel Portfolio",
    description: "Cemre Acar'ın kişisel portfolio sayfası.",
    url: "https://cmracar.github.io/", // kendi domainini ekleyebilirsin
    siteName: "Cemre Acar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
