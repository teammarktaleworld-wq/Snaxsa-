import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";
import CursorGlow from "@/components/ui/CursorGlow";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snax सा | Premium Roasted Makhana — Healthy Crunch, Royal Taste",
  description:
    "Snax सा makes premium roasted makhana (fox nuts) in Jaipur, Rajasthan. High in protein, roasted not fried, no preservatives, gluten free. Free delivery in Jaipur.",
  keywords: [
    "makhana",
    "fox nuts",
    "roasted makhana",
    "healthy snacks Jaipur",
    "Snax सा",
    "premium snacks Rajasthan",
  ],
  openGraph: {
    title: "Snax सा | Healthy Crunch. Royal Taste.",
    description:
      "Premium roasted makhana, made in Jaipur. High in protein, roasted not fried, no preservatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-body bg-cream text-ink antialiased overflow-x-hidden">
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
