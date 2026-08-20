import type { Metadata } from "next";
import { Instrument_Serif, Inter, Syne } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const displayFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const displaySansFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-sans",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Mughal — Developer, Game Designer, Builder",
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
      className={`${displayFont.variable} ${displaySansFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-canvas text-ink antialiased flex flex-col font-body selection:bg-border selection:text-ink">
        <Nav />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
