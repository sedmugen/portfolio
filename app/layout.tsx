import type { Metadata } from "next";
import { Syne, Space_Grotesk, Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const displayFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-grotesk",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saad - Portfolio",
    template: "%s - Saad",
  },
  description:
    "Curated portfolio of software, games, AI systems, and design work by Saad Mughal.",
  keywords: [
    "Saad Mughal",
    "Portfolio",
    "Software Developer",
    "Game Designer",
    "AI",
    "Tauri",
    "Unity",
  ],
  authors: [{ name: "Saad Mughal" }],
  creator: "Saad Mughal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${monoFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-canvas text-ink antialiased flex flex-col font-body selection:bg-border selection:text-ink">
        <Nav />
        <main className="flex-1 w-full flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
