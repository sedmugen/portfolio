"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <header className="w-full bg-canvas select-none relative z-50">
      {/* ========================================================= */}
      {/* 1. MOBILE HEADER (Screens < md)                           */}
      {/* All secondary items strictly use text-[10.5px] font-bold   */}
      {/* ========================================================= */}
      <div className="md:hidden w-full px-2 sm:px-4">
        {/* Row 1: "SAAD MUGHAL" + Close button (when collapsed) */}
        <div className="w-full pt-3 pb-2 flex items-start justify-between">
          <Link href="/" className="inline-block" onClick={() => setIsOpen(false)}>
            <motion.h1
              layout
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className={cn(
                "font-display uppercase tracking-[-0.04em] text-ink leading-[0.82] transition-colors duration-200",
                isOpen
                  ? "text-[13.5vw] xs:text-[14vw]"
                  : "text-3xl xs:text-4xl leading-none"
              )}
            >
              SAAD MUGHAL
            </motion.h1>
          </Link>

          {/* Collapsed '+' button */}
          {!isOpen && (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="p-1 text-ink cursor-pointer hover:opacity-75 active:scale-90 transition-all focus:outline-none shrink-0"
            >
              <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <span className="absolute w-4 h-[1.75px] bg-ink rounded-full" />
                <span className="absolute h-4 w-[1.75px] bg-ink rounded-full" />
              </div>
            </button>
          )}
        </div>

        {/* Animated Extended Drawer for Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="w-full overflow-hidden flex flex-col"
            >
              {/* Row 2: Pic on LEFT, Time & Location on RIGHT, '+' button top-right with solid black divider below */}
              <div className="w-full border-t border-black pt-2 pb-2 flex items-start justify-between">
                <div className="flex items-stretch gap-3">
                  {/* Profile Picture */}
                  <div className="relative w-[5.5rem] h-[5.5rem] xs:w-24 xs:h-24 rounded-sm overflow-hidden bg-border-subtle border border-black shrink-0 shadow-sm">
                    <Image
                      src="/images/profile-pictures/1.jpg"
                      alt="Saad Mughal"
                      fill
                      priority
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Time & Location: text-[10.5px] */}
                  <div className="flex flex-col items-start justify-between self-stretch text-left py-0.5">
                    <div className="text-[10.5px] font-mono font-bold text-ink uppercase tracking-[0.14em] whitespace-nowrap">
                      <LiveTime /> <span className="text-ink">PKT</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <span className="block text-[10.5px] font-bold text-ink uppercase tracking-[0.14em]">
                        BASED IN LAHORE, PK
                      </span>
                    </div>
                  </div>
                </div>

                {/* '+' button aligned to top */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-1 -mr-1 text-ink cursor-pointer hover:opacity-75 active:scale-90 transition-all focus:outline-none shrink-0 self-start"
                >
                  <motion.div
                    animate={{ rotate: 45 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="relative w-5 h-5 flex items-center justify-center pointer-events-none"
                  >
                    <span className="absolute w-4 h-[1.75px] bg-ink rounded-full" />
                    <span className="absolute h-4 w-[1.75px] bg-ink rounded-full" />
                  </motion.div>
                </button>
              </div>

              {/* Row 3: HOME, WORK, ABOUT, CONTACT */}
              <nav aria-label="Mobile Navigation" className="w-full border-t border-black pt-2 pb-2">
                <ul className="flex flex-col items-start gap-1 text-[10.5px] font-bold tracking-[0.14em] uppercase text-ink">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative inline-block py-0.5 text-ink"
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

              {/* Row 4: GH, LI, EM */}
              <div className="flex items-center gap-5 border-t border-black pt-2 pb-3 text-[10.5px] font-bold tracking-[0.14em] uppercase text-ink">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative py-0.5 text-ink"
                    title={social.full}
                  >
                    <span>{social.label}</span>
                    <span
                      aria-hidden="true"
                      className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP & TABLET HEADER (Screens ≥ md)                 */}
      {/* All secondary items strictly use text-xs font-bold        */}
      {/* ========================================================= */}
      <div className="hidden md:block w-full">
        {/* Top Banner: Name on Left, Info Box on Right */}
        <div className="w-full px-2 sm:px-4 md:px-6 pt-3 sm:pt-4 pb-2 sm:pb-2.5 flex items-end justify-between gap-4 sm:gap-8">
          {/* Name Display */}
          <div className="flex-1 min-w-0">
            <Link href="/" className="inline-block w-full">
              <h1 className="font-display text-[11vw] md:text-[10.5vw] lg:text-[10vw] font-normal uppercase tracking-[-0.04em] leading-[0.8] text-ink truncate sm:overflow-visible transition-opacity duration-200 hover:opacity-85">
                SAAD MUGHAL
              </h1>
            </Link>
          </div>

          {/* Right Info Box: Time & Location strictly text-xs */}
          <div className="flex items-end gap-3 sm:gap-4 shrink-0 self-end">
            <div className="flex flex-col items-end justify-between self-stretch text-right py-0.5">
              {/* Time: text-xs font-bold */}
              <div className="text-xs font-mono font-bold text-ink uppercase tracking-[0.16em] whitespace-nowrap">
                <LiveTime /> <span className="text-ink">PKT</span>
              </div>

              {/* Location: text-xs font-bold */}
              <div className="whitespace-nowrap">
                <span className="block text-xs font-bold text-ink uppercase tracking-[0.16em]">
                  BASED IN LAHORE, PK
                </span>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-sm overflow-hidden bg-border-subtle border border-black shrink-0 shadow-sm">
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

        {/* Sub-Navigation Bar: Solid Black Divider matching footer with identical tight margins */}
        <div className="border-t border-black">
          <div className="w-full px-2 sm:px-4 md:px-6 pt-2 sm:pt-2.5 pb-2 sm:pb-2.5 flex items-center justify-between gap-4 sm:gap-8">
            {/* Navigation Items: text-xs font-bold */}
            <nav aria-label="Main Navigation" className="flex-1 min-w-0">
              <ul className="flex items-center justify-between w-full max-w-[70%] text-xs font-bold tracking-[0.16em] uppercase text-ink">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href} className="py-0.5">
                    <Link
                      href={item.href}
                      className="group relative inline-block py-0.5 text-ink transition-colors duration-200"
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

            {/* Socials abbreviation bar: text-xs font-bold */}
            <div className="flex items-center justify-end space-x-4 sm:space-x-6 text-xs font-bold tracking-[0.16em] uppercase text-ink shrink-0">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative py-0.5 text-ink transition-colors duration-150"
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
