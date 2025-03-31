import type { Metadata } from "next";
import "./globals.css";
import { Figtree, Urbanist } from "next/font/google";
import FlashSale from "@/components/FlashSale";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knight App",
  description: "Welcome Home ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable}`}>
      <body className="bg-black">
        <FlashSale />

        {children}
      </body>
    </html>
  );
}
