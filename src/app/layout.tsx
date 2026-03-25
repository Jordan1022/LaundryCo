import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laundry Co | Fresh Starts Daily",
  description:
    "Laundry Co in League City, TX — open daily with modern washers, drop-off service, and a bright, welcoming space. Stop by today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
