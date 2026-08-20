import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0E0D0D] text-[#F7F6F3] mt-auto">
      {/* Generous outer container padding to increase footer section size */}
      <div className="w-full px-2 sm:px-4 md:px-6 pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-12">
        {/* CTA Headline & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 pb-2 sm:pb-2.5">
          <Link href="/contact" className="inline-block select-none">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[-0.03em] leading-[0.88] text-white hover:opacity-85 transition-opacity duration-200">
              LET’S WORK TOGETHER.
            </h2>
          </Link>

          <p className="text-[11px] xs:text-xs sm:text-[13px] text-[#8C8983] max-w-sm tracking-wide leading-snug lg:text-right font-light pb-0.5">
            Feel free to get in touch. Available for full-time roles, contracts, and technical projects.
          </p>
        </div>

        {/* Solid White Horizontal Divider with Clean Margins */}
        <div className="w-full border-t border-white pt-2 sm:pt-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-[10px] xs:text-[11px] sm:text-xs font-medium tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#8C8983]">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 md:gap-8">
            <a
              href="mailto:saadmughal321@gmail.com"
              className="relative group text-white transition-colors duration-200 break-all sm:break-normal"
            >
              <span>SAADMUGHAL321@GMAIL.COM</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-200 ease-out" />
            </a>
            <span className="text-[#5C5954] hidden xs:inline">LAHORE, PK</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-6">
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
              href="mailto:saadmughal321@gmail.com"
              className="relative group text-[#8C8983] hover:text-white transition-colors duration-200"
            >
              <span>EMAIL</span>
              <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-white group-hover:w-full transition-all duration-200 ease-out" />
            </a>
          </div>
        </div>

        {/* Small Bottom Copyright */}
        <div className="pt-2 sm:pt-2.5 text-[9px] xs:text-[10px] tracking-widest text-[#4E4B46] uppercase">
          © {currentYear} Saad Mughal · Portfolio
        </div>
      </div>
    </footer>
  );
}
