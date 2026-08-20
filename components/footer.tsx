import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0E0D0D] text-[#F7F6F3] mt-auto">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 pt-20 sm:pt-28 pb-10 sm:pb-14">
        {/* Massive Artistic CTA Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 sm:pb-20">
          <Link href="/contact" className="group block select-none">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.88] text-white group-hover:text-accent transition-colors duration-300">
              Let’s work together.
            </h2>
          </Link>

          <p className="text-xs sm:text-sm text-[#8C8983] max-w-sm tracking-wide leading-relaxed lg:text-right font-light">
            Feel free to get in touch. Available for full-time roles, contracts, and technical projects.
          </p>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-white/10 pt-8 sm:pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase text-[#8C8983]">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <a
              href="mailto:contact@saadmughal.dev"
              className="relative group text-white hover:text-accent transition-colors duration-200"
            >
              <span>CONTACT@SAADMUGHAL.DEV</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-200 ease-out" />
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
        <div className="pt-8 text-[10px] tracking-widest text-[#4E4B46] uppercase">
          © {currentYear} Saad Mughal · Portfolio
        </div>
      </div>
    </footer>
  );
}
