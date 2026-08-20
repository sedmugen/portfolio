import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F0E0E] text-[#F7F6F3] mt-auto">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-10 sm:pb-14">
        {/* Massive Call-to-Action Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16">
          <Link href="/contact" className="group block">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white group-hover:text-accent transition-colors duration-200">
              LET’S WORK TOGETHER.
            </h2>
          </Link>

          <p className="text-xs sm:text-sm text-[#9E9B93] max-w-sm tracking-wide leading-relaxed lg:text-right">
            Feel free to get in touch. Available for full-time roles, contracts, and technical projects.
          </p>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-white/15 pt-8 sm:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-bold tracking-[0.14em] uppercase text-[#9E9B93]">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <a
              href="mailto:contact@saadmughal.dev"
              className="text-white hover:text-accent transition-colors duration-150"
            >
              CONTACT@SAADMUGHAL.DEV
            </a>
            <span className="text-[#6E6B65] hidden sm:inline">LAHORE, PK</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="https://github.com/sedmugen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/sedmugen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-150"
            >
              LINKEDIN
            </a>
            <a
              href="mailto:contact@saadmughal.dev"
              className="hover:text-white transition-colors duration-150"
            >
              EMAIL
            </a>
          </div>
        </div>

        {/* Small Bottom Copyright */}
        <div className="pt-8 text-2xs tracking-widest text-[#5E5B55] uppercase">
          © {currentYear} Saad Mughal · Built with Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
