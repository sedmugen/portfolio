import Link from "next/link";
import { Project } from "@/lib/types";
import { ProjectMedia } from "@/components/project-media";
import { cn } from "@/lib/utils";

interface FeaturedProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function FeaturedProjectCard({
  project,
  priority = false,
  className,
}: FeaturedProjectCardProps) {
  const metadata = [project.year, project.category, project.role]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className={cn("group w-full", className)}>
      <Link href={`/work/${project.slug}`} className="block">
        <ProjectMedia
          media={project.heroMedia}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 100vw"
          aspectRatio="aspect-[16/9]"
          className="mb-4 sm:mb-6 md:mb-8"
        />

        <div className="flex flex-col space-y-1.5 sm:space-y-2">
          <div className="text-2xs sm:text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            {metadata}
          </div>

          <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-ink">
            {project.title}
          </h3>

          <p className="max-w-2xl text-xs sm:text-sm md:text-base text-ink-muted leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </article>
  );
}

interface ProjectsTierCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function ProjectsTierCard({
  project,
  priority = false,
  className,
}: ProjectsTierCardProps) {
  const metadata = [project.year, project.category].filter(Boolean).join(" · ");

  return (
    <article className={cn("group w-full", className)}>
      <Link href={`/work/${project.slug}`} className="block">
        <ProjectMedia
          media={project.heroMedia}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aspectRatio="aspect-[16/10]"
          className="mb-3"
        />

        <div className="flex flex-col space-y-1">
          <div className="text-3xs sm:text-2xs font-medium uppercase tracking-wider text-ink-muted">
            {metadata}
          </div>

          <h3 className="font-display text-base sm:text-lg font-medium tracking-tight text-ink">
            {project.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "projects";
  priority?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  variant,
  priority = false,
  className,
}: ProjectCardProps) {
  const tier = variant || project.tier;

  if (tier === "featured") {
    return (
      <FeaturedProjectCard
        project={project}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <ProjectsTierCard
      project={project}
      priority={priority}
      className={className}
    />
  );
}
