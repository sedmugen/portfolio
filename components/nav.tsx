"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "GH", full: "GitHub", href: "https://github.com/sedmugen" },
  { label: "LI", full: "LinkedIn", href: "https://linkedin.com/in/sedmugen" },
  { label: "EM", full: "Email", href: "mailto:saadmughal321@gmail.com" },
];

function LiveTime() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{timeStr || "12:00:00 AM"}</span>;
}

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full bg-canvas select-none border-b border-border-subtle md:border-b-0">
      {/* ========================================================= */}
      {/* 1. MOBILE HEADER (Visible on screens < md)                */}
      {/* ========================================================= */}
      <div className="md:hidden w-full">
        {/* Collapsed Bar: "SAAD MUGHAL" + Animated "+" Button */}
        <div className="w-full px-3 py-3 flex items-center justify-between">
          <Link href="/" className="inline-block" onClick={() => setIsOpen(false)}>
            <h1 className="font-display text-3xl xs:text-4xl font-normal uppercase tracking-[-0.03em] leading-none text-ink hover:opacity-85 transition-opacity">
              SAAD MUGHAL
            </h1>
          </Link>

          {/* Animated Toggle Button (+ that rotates to ×) */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 flex items-center justify-center text-ink rounded-sm border border-border bg-canvas-subtle/50 active:scale-95 transition-transform"
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-4 h-4 flex items-center justify-center"
            >
              {/* Horizontal line */}
              <span className="absolute w-4 h-[1.5px] bg-ink" />
              {/* Vertical line */}
              <span className="absolute h-4 w-[1.5px] bg-ink" />
            </motion.div>
          </button>
        </div>

        {/* Animated Extended Drawer for Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden border-t border-border-subtle bg-canvas"
            >
              <div className="px-3 pt-4 pb-6 flex flex-col gap-6">
                {/* Identity Block: Photo + Time & Location */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-mono font-bold text-ink uppercase tracking-widest">
                      <LiveTime /> <span className="text-ink">PKT</span>
                    </div>
                    <span className="text-[11px] font-bold text-ink uppercase tracking-wider">
                      BASED IN LAHORE, PK
                    </span>
                  </div>

                  <div className="relative w-16 h-16 rounded-sm overflow-hidden bg-border-subtle border border-border shadow-sm">
                    <Image
                      src="/images/profile-pictures/1.jpg"
                      alt="Saad Mughal"
                      fill
                      priority
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <nav aria-label="Mobile Navigation">
                  <ul className="flex flex-col gap-3.5 text-sm font-bold tracking-[0.18em] uppercase text-ink">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group relative inline-block py-1 text-ink"
                        >
                          <span className="relative z-10">{item.label}</span>
                          <span
                            aria-hidden="true"
                            className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Social Links */}
                <div className="flex items-center gap-6 border-t border-border-subtle pt-4 text-xs font-bold tracking-[0.16em] uppercase text-ink">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative py-1 text-ink"
                      title={social.full}
                    >
                      <span>{social.full}</span>
                      <span
                        aria-hidden="true"
                        className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP & TABLET HEADER (Visible on md and above)      */}
      {/* ========================================================= */}
      <div className="hidden md:block w-full">
        {/* Top Banner: Name on Left, Info Box on Right */}
        <div className="w-full px-2 sm:px-4 md:px-6 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-end justify-between gap-4 sm:gap-8">
          {/* Name Display */}
          <div className="flex-1 min-w-0">
            <Link href="/" className="inline-block w-full">
              <h1 className="font-display text-[11vw] md:text-[10.5vw] lg:text-[10vw] font-normal uppercase tracking-[-0.04em] leading-[0.8] text-ink truncate sm:overflow-visible transition-opacity duration-200 hover:opacity-85">
                SAAD MUGHAL
              </h1>
            </Link>
          </div>

          {/* Right Info Box: Time & Location + Profile Photo */}
          <div className="flex items-end gap-3 sm:gap-4 shrink-0 self-end">
            <div className="flex flex-col items-end justify-between self-stretch text-right py-0.5">
              <div className="text-[10px] sm:text-xs font-mono font-bold text-ink uppercase tracking-widest whitespace-nowrap">
                <LiveTime /> <span className="text-ink">PKT</span>
              </div>

              <div className="whitespace-nowrap">
                <span className="block text-[10px] sm:text-[11px] font-bold text-ink uppercase tracking-wider">
                  BASED IN LAHORE, PK
                </span>
              </div>
            </div>

            <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-sm overflow-hidden bg-border-subtle border border-border shrink-0 shadow-sm">
              <Image
                src="/images/profile-pictures/1.jpg"
                alt="Saad Mughal"
                fill
                priority
                sizes="(max-width: 1024px) 144px, 176px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Sub-Navigation Bar */}
        <div className="border-t border-border-subtle">
          <div className="w-full px-2 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-8">
            {/* Navigation Items */}
            <nav aria-label="Main Navigation" className="flex-1 min-w-0">
              <ul className="flex items-center justify-between w-full max-w-[70%] text-xs font-bold tracking-[0.18em] uppercase text-ink">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} className="py-0.5">
                    <Link
                      href={item.href}
                      className="group relative inline-block py-1 text-ink transition-colors duration-200"
                    >
                      <span className="relative z-10">{item.label}</span>

                      {/* Underline animates ONLY when hovered */}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials abbreviation bar on the far right */}
            <div className="flex items-center justify-end space-x-4 sm:space-x-6 text-[11px] font-bold tracking-[0.16em] uppercase text-ink shrink-0">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative py-1 text-ink transition-colors duration-150"
                  title={social.full}
                >
                  <span>{social.label}</span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
