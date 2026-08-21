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
  return (
    <article className={cn("group w-full", className)}>
      <Link href={`/work/${project.slug}`} className="block">
        <ProjectMedia
          media={project.heroMedia}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aspectRatio="aspect-[16/10]"
          className="mb-2 sm:mb-2.5 w-full overflow-hidden"
          imageClassName="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />

        <div className="flex items-baseline gap-2 text-xs pt-1">
          <h3 className="font-bold uppercase tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="text-ink-muted text-[11px] sm:text-xs font-normal">
            {project.category}
          </span>
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
