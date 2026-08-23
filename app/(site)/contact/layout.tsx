import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Saad",
  description:
    "Get in touch with Saad Mughal for software engineering, game design, and technical collaboration.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
