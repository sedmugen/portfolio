"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
  { label: "EM", full: "Email", href: "mailto:contact@saadmughal.dev" },
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="w-full bg-canvas">
      {/* Top Banner: Minimal Margins, Large Typography, Time & Location on Left of Photo */}
      <div className="w-full px-2 sm:px-4 md:px-6 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-end justify-between gap-3 sm:gap-6">
        {/* Name Display */}
        <Link href="/" className="group block select-none flex-1 min-w-0">
          <h1 className="font-display text-[12vw] sm:text-[11vw] md:text-[10.5vw] lg:text-[10vw] font-normal uppercase tracking-[-0.04em] leading-[0.8] text-ink group-hover:text-accent transition-colors duration-300 truncate sm:overflow-visible">
            SAAD MUGHAL
          </h1>
        </Link>

        {/* Right Info Box: Time & Location on the LEFT of the Photo */}
        <div className="flex items-end gap-3 sm:gap-4 shrink-0 self-end">
          {/* Time (top) & Location (bottom) */}
          <div className="flex flex-col items-end justify-between self-stretch text-right py-0.5">
            <div className="text-[10px] sm:text-xs font-mono font-medium text-ink-muted uppercase tracking-widest whitespace-nowrap">
              <LiveTime /> <span className="text-ink-faint">PKT</span>
            </div>

            <div className="whitespace-nowrap">
              <span className="block text-[10px] sm:text-[11px] font-medium text-ink-muted uppercase tracking-wider">
                Based in <strong className="text-ink font-semibold">Lahore, PK</strong>
              </span>
            </div>
          </div>

          {/* Large Profile Picture on Far Right */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-sm overflow-hidden bg-border-subtle border border-border shrink-0 shadow-sm">
            <Image
              src="/images/profile-pictures/1.jpg"
              alt="Saad Mughal"
              fill
              priority
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Sub-Navigation Bar */}
      <div className="border-t border-border-subtle">
        <div className="w-full px-2 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          <nav
            aria-label="Main Navigation"
            className="flex-1"
            onMouseLeave={() => setHoveredLink(null)}
          >
            <ul className="flex items-center gap-8 sm:gap-16 md:gap-24 lg:gap-32 text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-ink">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href} className="py-0.5">
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHoveredLink(item.href)}
                      className={cn(
                        "relative inline-block py-0.5 transition-colors duration-200",
                        isActive ? "text-ink font-semibold" : "text-ink-muted hover:text-ink"
                      )}
                    >
                      <span>{item.label}</span>

                      {/* Animated underline on hover or active */}
                      {(hoveredLink === item.href || (isActive && hoveredLink === null)) && (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute left-0 bottom-0 block h-[1.5px] w-full bg-ink"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Socials abbreviation bar on the far right */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-ink-muted shrink-0">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group py-0.5 hover:text-ink transition-colors duration-150"
                title={social.full}
              >
                <span>{social.label}</span>
                <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-ink group-hover:w-full transition-all duration-200 ease-out" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
