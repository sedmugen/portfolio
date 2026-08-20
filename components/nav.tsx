"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
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
      // Format time in PKT (Asia/Karachi) or local
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

  return (
    <header className="w-full border-b border-border bg-canvas">
      {/* Top Banner: Huge Typography & Identity Card */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 pt-8 sm:pt-10 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Massive Name Display */}
        <Link href="/" className="group block select-none">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.88] uppercase text-ink group-hover:text-accent transition-colors duration-200">
            SAAD MUGHAL
          </h1>
        </Link>

        {/* Right Info Box: Time, Avatar, Location */}
        <div className="flex md:flex-col items-end justify-between md:justify-end gap-3 shrink-0 self-start md:self-end">
          <div className="text-right">
            <div className="text-2xs sm:text-xs font-mono font-medium text-ink-muted uppercase tracking-widest">
              <LiveTime /> <span className="text-ink-faint">PKT</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-border-subtle overflow-hidden border border-border flex items-center justify-center text-xs font-bold text-ink-muted shrink-0">
              {/* Avatar placeholder / image slot */}
              <span className="tracking-widest">SM</span>
            </div>
            <div className="text-right hidden sm:block">
              <span className="block text-2xs text-ink-muted tracking-wider uppercase">
                Based in
              </span>
              <span className="block text-xs font-semibold text-ink uppercase tracking-wider">
                Lahore, PK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Bar */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between">
          <nav aria-label="Main Navigation">
            <ul className="flex items-center space-x-6 sm:space-x-10 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-ink">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "transition-colors duration-150 py-1",
                    pathname === "/"
                      ? "text-ink border-b-2 border-ink"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  HOME
                </Link>
              </li>
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "transition-colors duration-150 py-1",
                        isActive
                          ? "text-ink border-b-2 border-ink"
                          : "text-ink-muted hover:text-ink"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Socials abbreviation bar on the right */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-2xs sm:text-xs font-bold tracking-[0.14em] uppercase text-ink-muted">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors duration-150"
                title={social.full}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
