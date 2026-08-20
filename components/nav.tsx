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
      {/* Top Banner: Minimal Side Margins, Large Architectural Typography & Profile */}
      <div className="w-full px-3 sm:px-4 md:px-6 pt-6 sm:pt-8 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Aesthetic Name Display */}
        <Link href="/" className="group block select-none">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-normal uppercase tracking-[-0.04em] leading-[0.82] text-ink group-hover:text-accent transition-colors duration-300">
            SAAD MUGHAL
          </h1>
        </Link>

        {/* Right Info Box: Live PKT Time, Profile Picture, Location */}
        <div className="flex flex-col items-end gap-2.5 shrink-0 self-start md:self-end">
          <div className="text-right">
            <div className="text-[11px] font-mono font-medium text-ink-muted uppercase tracking-widest">
              <LiveTime /> <span className="text-ink-faint">PKT</span>
            </div>
          </div>

          <div className="flex items-end gap-3.5">
            <div className="text-right hidden sm:block pb-0.5">
              <span className="block text-[10px] text-ink-muted tracking-widest uppercase">
                Based in
              </span>
              <span className="block text-xs font-medium text-ink uppercase tracking-wider">
                Lahore, PK
              </span>
            </div>

            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-sm overflow-hidden bg-border-subtle border border-border shrink-0 shadow-sm">
              <Image
                src="/images/profile-pictures/1.jpg"
                alt="Saad Mughal"
                fill
                priority
                sizes="(max-width: 768px) 64px, 96px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Bar: Huge Gaps, Small Text, Animated Underline on Hover, No Bottom Section Break Line */}
      <div className="border-t border-border-subtle">
        <div className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 flex items-center justify-between">
          <nav
            aria-label="Main Navigation"
            className="flex-1"
            onMouseLeave={() => setHoveredLink(null)}
          >
            <ul className="grid grid-cols-2 sm:flex sm:items-center sm:gap-16 md:gap-24 lg:gap-32 text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-ink">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href} className="py-1">
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
