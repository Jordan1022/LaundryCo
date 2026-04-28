import type { Metadata } from "next";
import { Alfa_Slab_One, Inter, Lobster } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const alfaSlab = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laundry Co | Fresh Starts Daily",
  description:
    "Laundry Co offers modern washing and folding services with a bright, inviting space. Get in touch to learn more about our updates.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lobster.variable} ${alfaSlab.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
