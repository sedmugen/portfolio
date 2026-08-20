"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="w-full bg-canvas select-none">
      {/* Top Banner: Name on Left, Info Box on Right */}
      <div className="w-full px-2 sm:px-4 md:px-6 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-end justify-between gap-4 sm:gap-8">
        {/* Name Display: Defines the exact left-to-right boundary */}
        <div className="flex-1 min-w-0">
          <Link href="/" className="group inline-block w-full">
            <h1 className="font-display text-[12vw] sm:text-[11vw] md:text-[10.5vw] lg:text-[10vw] font-normal uppercase tracking-[-0.04em] leading-[0.8] text-ink group-hover:text-accent transition-colors duration-300 truncate sm:overflow-visible">
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

      {/* Sub-Navigation Bar: HOME aligned to 'S', CONTACT aligned to 'L', evenly distributed */}
      <div className="border-t border-border-subtle">
        <div className="w-full px-2 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-8">
          {/* Navigation Items: Exactly matches the width of 'SAAD MUGHAL' above */}
          <nav aria-label="Main Navigation" className="flex-1 min-w-0">
            <ul className="flex items-center justify-between w-full text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-ink">
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

          {/* Socials abbreviation bar: Aligned with the right Info Box */}
          <div className="flex items-center justify-end space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-ink shrink-0">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative py-1 text-ink hover:text-accent transition-colors duration-150"
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
    </header>
  );
}
