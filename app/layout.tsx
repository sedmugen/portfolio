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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saadmughal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saad Mughal — Software Engineer & Builder",
    template: "%s — Saad Mughal",
  },
  description:
    "Curated digital exhibition of software systems, desktop applications, games, AI schedulers, and design work by Saad Mughal.",
  keywords: [
    "Saad Mughal",
    "sedmugen",
    "Software Engineer",
    "Full-Stack Developer",
    "Game Designer",
    "AI Systems",
    "Next.js",
    "React",
    "TypeScript",
    "Tauri",
    "Unity",
  ],
  authors: [{ name: "Saad Mughal", url: "https://github.com/sedmugen" }],
  creator: "Saad Mughal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Saad Mughal",
    title: "Saad Mughal — Software Engineer & Builder",
    description:
      "Curated digital exhibition of software systems, desktop applications, games, AI schedulers, and design work by Saad Mughal.",
    images: [
      {
        url: "/images/bench/hero.png",
        width: 1200,
        height: 630,
        alt: "Saad Mughal Showcase Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Mughal — Software Engineer & Builder",
    description:
      "Curated digital exhibition of software systems, desktop applications, games, AI schedulers, and design work by Saad Mughal.",
    images: ["/images/bench/hero.png"],
    creator: "@sedmugen",
  },
  robots: {
    index: true,
    follow: true,
  },
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
