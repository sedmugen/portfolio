import { Metadata } from "next";
import { getAllProjects } from "@/content/projects";
import { FeaturedProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated index of software, games, AI systems, and design projects by Saad Mughal.",
};

export default function WorkPage() {
  const allProjects = getAllProjects();

  const formattedCount =
    allProjects.length < 10 ? `0${allProjects.length}` : `${allProjects.length}`;

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* 1. Projects Header Row */}
      <ScrollReveal
        as="section"
        className="w-full pt-32 sm:pt-44 md:pt-56 lg:pt-64 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-8"
      >
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.03em] leading-none text-ink">
            PROJECTS.
          </h1>
        </div>

        <div className="shrink-0 text-left md:text-right self-end">
          <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink whitespace-nowrap">
            All Projects <span className="font-mono text-ink-faint">({formattedCount})</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* 2. Unified 3-Column Project Grid */}
      <ScrollReveal as="section" className="w-full pb-20 sm:pb-28 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-4 sm:gap-y-5 md:gap-y-6">
          {allProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              priority={index < 3}
            />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
