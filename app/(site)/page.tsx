import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { FeaturedProjectCard } from "@/components/project-card";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* 1. Intro & Selected Work Header Row */}
      <section className="w-full pt-32 sm:pt-44 md:pt-56 lg:pt-64 pb-3 sm:pb-4 md:pb-5 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-8">
        <p className="text-sm sm:text-base md:text-lg text-ink font-normal max-w-2xl leading-relaxed">
          I’m Saad, a developer, game designer, and builder who creates simple, thoughtful solutions to everyday problems.
        </p>

        <div className="shrink-0 text-left md:text-right self-end">
          <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink whitespace-nowrap">
            Selected Work <span className="font-mono text-ink-faint">(0{featuredProjects.length})</span>
          </h2>
        </div>
      </section>

      {/* 2. Selected Work Section */}
      <section className="w-full pb-20 sm:pb-28 md:pb-36">
        <div className="flex flex-col space-y-16 sm:space-y-24 md:space-y-36">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>

        {/* 3. Quiet "View all work" Link */}
        <div className="pt-12 sm:pt-16 md:pt-20 flex justify-start sm:justify-end">
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-2xs sm:text-xs uppercase tracking-[0.16em] font-semibold text-ink-muted hover:text-ink transition-colors duration-200"
          >
            <span>View all work</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
