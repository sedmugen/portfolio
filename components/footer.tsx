import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0E0D0D] text-[#F7F6F3] mt-auto">
      <div className="w-full px-2 sm:px-4 md:px-6 pt-10 sm:pt-14 pb-6 sm:pb-8">
        {/* CTA Headline & Description: Reduced font size & tighter vertical space */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8">
          <Link href="/contact" className="inline-block select-none">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal uppercase tracking-[-0.03em] leading-[0.9] text-white hover:opacity-85 transition-opacity duration-200">
              LET’S WORK TOGETHER.
            </h2>
          </Link>

          <p className="text-xs sm:text-sm text-[#8C8983] max-w-sm tracking-wide leading-relaxed lg:text-right font-light pb-0.5">
            Feel free to get in touch. Available for full-time roles, contracts, and technical projects.
          </p>
        </div>

        {/* Horizontal Divider with Reduced Spacing */}
        <div className="w-full border-t border-white/10 pt-4 sm:pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase text-[#8C8983]">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="mailto:contact@saadmughal.dev"
              className="relative group text-white transition-colors duration-200"
            >
              <span>CONTACT@SAADMUGHAL.DEV</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-200 ease-out" />
            </a>
            <span className="text-[#5C5954] hidden sm:inline">LAHORE, PK</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="https://github.com/sedmugen"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-[#8C8983] hover:text-white transition-colors duration-200"
            >
              <span>GITHUB</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-200 ease-out" />
            </a>
            <a
              href="https://linkedin.com/in/sedmugen"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-[#8C8983] hover:text-white transition-colors duration-200"
            >
              <span>LINKEDIN</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-200 ease-out" />
            </a>
            <a
              href="mailto:contact@saadmughal.dev"
              className="relative group text-[#8C8983] hover:text-white transition-colors duration-200"
            >
              <span>EMAIL</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-200 ease-out" />
            </a>
          </div>
        </div>

        {/* Small Bottom Copyright */}
        <div className="pt-4 sm:pt-6 text-[10px] tracking-widest text-[#4E4B46] uppercase">
          © {currentYear} Saad Mughal · Portfolio
        </div>
      </div>
    </footer>
  );
}
