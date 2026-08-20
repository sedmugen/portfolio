"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-sm border-b border-border-subtle transition-colors">
      <div className="mx-auto max-w-site px-6 sm:px-8 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <Link
          href="/"
          className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-200"
        >
          SAAD MUGHAL
        </Link>

        {/* Navigation Items */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center space-x-2 sm:space-x-4 text-xs font-medium tracking-[0.14em] uppercase text-ink-muted">
            {NAV_LINKS.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <li key={link.href} className="flex items-center">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-2 sm:mx-3 text-ink-faint select-none font-normal"
                    >
                      ·
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className={cn(
                      "transition-colors duration-200 py-1",
                      isActive
                        ? "text-ink font-semibold"
                        : "hover:text-ink text-ink-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
