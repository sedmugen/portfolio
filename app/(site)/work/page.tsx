import { Metadata } from "next";
import { getAllProjects } from "@/content/projects";
import { FeaturedProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects — Saad Mughal",
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
      <section className="w-full pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-8">
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
      </section>

      {/* 2. Unified 4-Column Project Grid */}
      <section className="w-full pb-20 sm:pb-28 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1.5 sm:gap-x-2 md:gap-x-2.5 gap-y-3 sm:gap-y-4 md:gap-y-5">
          {allProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              priority={index < 4}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
