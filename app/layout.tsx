import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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

// export const metadata: Metadata = {
//   title: "Snax सा | Premium Roasted Makhana — Healthy Crunch, Royal Taste",
//   description:
//     "Snax सा makes premium roasted makhana (fox nuts) in Jaipur, Rajasthan. High in protein, roasted not fried, no preservatives, gluten free. Free delivery in Jaipur.",
//   keywords: [
//     "makhana",
//     "fox nuts",
//     "roasted makhana",
//     "healthy snacks Jaipur",
//     "Snax सा",
//     "premium snacks Rajasthan",
//   ],
//   openGraph: {
//     title: "Snax सा | Healthy Crunch. Royal Taste.",
//     description:
//       "Premium roasted makhana, made in Jaipur. High in protein, roasted not fried, no preservatives.",
//     type: "website",
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://snaxsa.com"),

  title: {
    default: "Snax सा | Premium Roasted Makhana",
    template: "%s | Snax सा",
  },

  description:
    "Snax सा offers premium roasted makhana made in Jaipur. Healthy, crunchy, protein-rich snacks with bold flavors, no preservatives, and free delivery in Jaipur.",

  keywords: [
    "Snax Sa",
    "Snax सा",
    "makhana",
    "fox nuts",
    "roasted makhana",
    "healthy snacks",
    "protein snacks",
    "gluten free snacks",
    "healthy snacks Jaipur",
    "premium makhana",
    "Jaipur snacks",
    "Rajasthan snacks",
  ],

  authors: [{ name: "Snax सा" }],
  creator: "Snax सा",
  publisher: "Snax सा",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // openGraph: {
  //   type: "website",
  //   url: "https://snaxsa.com",
  //   siteName: "Snax सा",
  //   title: "Snax सा | Premium Roasted Makhana",
  //   description:
  //     "Healthy Crunch. Royal Taste. Premium roasted makhana crafted in Jaipur.",
  //   locale: "en_IN",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Snax सा Premium Roasted Makhana",
  //     },
  //   ],
  // },

  openGraph: {
    type: "website",
    url: "https://snaxsa.com",
    siteName: "Snax सा",
    title: "Snax सा | Premium Roasted Makhana",
    description:
      "Healthy Crunch. Royal Taste. Premium roasted makhana crafted in Jaipur.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Snax सा | Premium Roasted Makhana",
    description:
      "Healthy Crunch. Royal Taste. Premium roasted makhana from Jaipur.",
    // images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://snaxsa.com",
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

      <GoogleAnalytics gaId="G-CJ0X4LQD1M" />
    </html>
  );
}