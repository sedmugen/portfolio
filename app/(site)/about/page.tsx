import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Saad Mughal",
  description:
    "Learn more about Saad Mughal, developer, game designer, and builder based in Lahore, PK.",
};

const DISCIPLINES = [
  {
    title: "Software Engineering",
    description:
      "Desktop applications, local-first architectures, performance optimization, and tools that respect user time.",
  },
  {
    title: "Game Development",
    description:
      "2.5D narrative adventures, arcade mechanics, custom dialogue systems, and physics-driven experiences in Unity.",
  },
  {
    title: "AI & Technical Systems",
    description:
      "Genetic algorithms, optimization pipelines, API design, and full-stack technical integrations.",
  },
  {
    title: "Design & Direction",
    description:
      "Editorial UI/UX, brand identity, concept storefronts, and storyboarded short-film production.",
  },
];

const CONNECT_LINKS = [
  { label: "Email", href: "mailto:saadmughal321@gmail.com", display: "saadmughal321@gmail.com" },
  { label: "GitHub", href: "https://github.com/sedmugen", display: "github.com/sedmugen" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sedmugen", display: "linkedin.com/in/sedmugen" },
  { label: "Behance", href: "https://www.behance.net/sedmugen", display: "behance.net/sedmugen" },
  { label: "Itch.io", href: "https://sedmugen.itch.io/", display: "sedmugen.itch.io" },
];

export default function AboutPage() {
  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* 1. Page Header */}
      <section className="w-full pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-8 border-b border-black/70">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.03em] leading-none text-ink">
            ABOUT.
          </h1>
        </div>

        <div className="shrink-0 text-left md:text-right self-start md:self-end">
          <div className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink whitespace-nowrap">
            PROFILE &amp; DISCIPLINES
          </div>
        </div>
      </section>

      {/* 2. Overview / Bio */}
      <section className="w-full py-8 sm:py-12 md:py-16 border-b border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Overview
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base sm:text-lg md:text-xl text-ink leading-relaxed max-w-prose font-normal">
            I’m a computer science student in my final year at Beaconhouse National University in Lahore. I build things: desktop apps, games, scheduling systems, and the occasional site for a client who needs one built right.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-ink leading-relaxed max-w-prose font-normal">
            I care about software that respects your time. No unnecessary decisions, no clutter, no waiting on something that should be instant.
          </p>
        </div>
      </section>

      {/* 3. Areas of Focus / Disciplines */}
      <section className="w-full py-8 sm:py-12 md:py-16 border-b border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Areas of Focus
          </h2>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {DISCIPLINES.map((item) => (
            <div key={item.title} className="space-y-1.5">
              <h3 className="font-bold uppercase tracking-tight text-xs sm:text-sm text-ink">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education & Background */}
      <section className="w-full py-8 sm:py-12 md:py-16 border-b border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Education
          </h2>
        </div>
        <div className="md:col-span-8 space-y-4">
          <div>
            <div className="text-sm sm:text-base font-bold text-ink uppercase tracking-tight">
              BS Computer Science
            </div>
            <div className="text-xs sm:text-sm text-ink-muted">
              Beaconhouse National University · Final Year (2022–2026)
            </div>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-prose leading-relaxed">
            Independent software development, coursework in algorithms, operating systems, DevOps, and interactive media design.
          </p>
        </div>
      </section>

      {/* 5. Direct Connect & Links */}
      <section className="w-full py-8 sm:py-12 md:py-16 pb-20 sm:pb-28 md:pb-36 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Connect
          </h2>
        </div>
        <div className="md:col-span-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8">
          {CONNECT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:text-ink/75 transition-colors"
            >
              <span className="relative">
                {link.label}
                <span className="absolute left-0 bottom-0 block h-[1px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ink-muted">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
