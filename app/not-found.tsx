import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Saad",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <div className="w-full px-2 sm:px-4 md:px-6 pt-32 sm:pt-44 md:pt-56 lg:pt-64 pb-20 sm:pb-28 md:pb-36 flex flex-col items-start justify-start">
      <div className="text-3xs sm:text-2xs font-mono font-bold uppercase tracking-[0.16em] text-ink-muted mb-4">
        404 / ERROR
      </div>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-[-0.03em] leading-none text-ink mb-6">
        PAGE NOT FOUND.
      </h1>
      <p className="text-sm sm:text-base text-ink-muted font-normal max-w-md leading-relaxed mb-8">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink hover:text-ink/75 transition-colors"
      >
        <span>Return Home</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
