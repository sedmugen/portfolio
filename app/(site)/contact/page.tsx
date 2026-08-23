"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/sedmugen", handle: "github.com/sedmugen" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sedmugen", handle: "linkedin.com/in/sedmugen" },
  { label: "Behance", href: "https://www.behance.net/sedmugen", handle: "behance.net/sedmugen" },
  { label: "Itch.io", href: "https://sedmugen.itch.io/", handle: "sedmugen.itch.io" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:saadmughal321@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("saadmughal321@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* 1. Page Header */}
      <ScrollReveal
        as="section"
        className="w-full pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-8 border-b border-black/70"
      >
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.03em] leading-none text-ink">
            CONTACT.
          </h1>
        </div>

        <div className="shrink-0 text-left md:text-right self-start md:self-end">
          <div className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink whitespace-nowrap">
            GET IN TOUCH
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Main Contact Grid */}
      <ScrollReveal
        as="section"
        className="w-full py-8 sm:py-12 md:py-16 pb-20 sm:pb-28 md:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
      >
        {/* Left Column: Direct Info & Social Links */}
        <div className="lg:col-span-5 space-y-8 sm:space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Direct Contact
            </h2>
            <div>
              <a
                href="mailto:saadmughal321@gmail.com"
                className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-ink hover:text-ink/75 transition-colors break-all"
              >
                saadmughal321@gmail.com
              </a>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-2xs sm:text-xs font-mono font-semibold uppercase tracking-[0.14em] text-ink-muted hover:text-ink transition-colors"
                >
                  {copied ? "✓ Copied to clipboard" : "Copy email address"}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Availability &amp; Location
            </h2>
            <p className="text-xs sm:text-sm text-ink leading-relaxed max-w-sm">
              Based in Lahore, Pakistan (PKT / UTC+5). Available for full-time software engineering roles, contracts, and technical projects.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Channels
            </h2>
            <ul className="space-y-2.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:text-ink/75 transition-colors"
                  >
                    <span className="relative">
                      {social.label}
                      <span className="absolute left-0 bottom-0 block h-[1px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ink-muted">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Borderless Contact Form */}
        <div className="lg:col-span-7">
          <div className="space-y-6">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  Name <span className="text-ink-faint">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-black/40 focus:border-black py-2 text-sm sm:text-base text-ink placeholder:text-ink-faint outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  Email <span className="text-ink-faint">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full bg-transparent border-b border-black/40 focus:border-black py-2 text-sm sm:text-base text-ink placeholder:text-ink-faint outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  Message <span className="text-ink-faint">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, role, or idea..."
                  className="w-full bg-transparent border-b border-black/40 focus:border-black py-2 text-sm sm:text-base text-ink placeholder:text-ink-faint outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-ink text-canvas hover:bg-ink/90 active:scale-[0.99] transition-all px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em]"
                >
                  <span>Send Message</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {submitted && (
                  <span className="text-2xs sm:text-xs text-ink-muted">
                    Opening email client with pre-filled message...
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
