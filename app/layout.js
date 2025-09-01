import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zorg van de Zussun - Professionele Thuiszorg",
  description:
    "Hoogwaardige thuiszorg en ondersteuning voor u en uw dierbaren. Onze ervaren zorgverleners staan 24/7 voor u klaar.",
  keywords:
    "thuiszorg, ouderenzorg, medicatiebeheer, verzorging, Amsterdam, Nederland",
  authors: [{ name: "Zorg van de Zussun" }],
  openGraph: {
    title: "Zorg van de Zussun - Professionele Thuiszorg",
    description:
      "Hoogwaardige thuiszorg en ondersteuning voor u en uw dierbaren.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
