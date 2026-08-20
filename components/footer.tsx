import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-subtle mt-auto bg-canvas">
      <div className="mx-auto max-w-site px-6 sm:px-8 md:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-6 text-center sm:text-left">
          <span className="text-xs tracking-[0.14em] uppercase text-ink font-medium">
            Saad Mughal
          </span>
          <span className="text-2xs text-ink-muted tracking-wider uppercase">
            © {currentYear} · Lahore, Pakistan
          </span>
        </div>

        <div className="flex items-center space-x-6 text-2xs tracking-[0.14em] uppercase text-ink-muted">
          <Link
            href="https://github.com/sedmugen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/sedmugen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:contact@saadmughal.dev"
            className="hover:text-ink transition-colors duration-200"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
