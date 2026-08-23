import Link from "next/link";
import { Project } from "@/lib/types";
import { ProjectMedia } from "@/components/project-media";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

/**
 * Featured tier project card rendering large media, title, and category label.
 */
export function FeaturedProjectCard({
  project,
  priority = false,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group w-full transform-gpu [content-visibility:_auto] [contain-intrinsic-size:_1px_280px]",
        className
      )}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <ProjectMedia
          media={project.heroMedia}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          aspectRatio="aspect-[16/9]"
          className="mb-1 sm:mb-1.5 w-full overflow-hidden"
          imageClassName="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />

        <div className="flex items-baseline gap-2 text-xs pt-0.5">
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

/**
 * Projects tier card rendering compact media, title, category, and year metadata.
 */
export function ProjectsTierCard({
  project,
  priority = false,
  className,
}: ProjectCardProps) {
  const metadata = [project.category, project.year].filter(Boolean).join(" · ");

  return (
    <article
      className={cn(
        "group w-full transform-gpu [content-visibility:_auto] [contain-intrinsic-size:_1px_280px]",
        className
      )}
    >
      <Link href={`/work/${project.slug}`} className="block">
        <ProjectMedia
          media={project.heroMedia}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aspectRatio="aspect-[16/9]"
          className="mb-1 sm:mb-1.5 w-full overflow-hidden"
          imageClassName="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />

        <div className="flex items-baseline gap-2 text-xs pt-0.5">
          <h3 className="font-bold uppercase tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="text-ink-muted text-[11px] sm:text-xs font-normal">
            {metadata}
          </span>
        </div>
      </Link>
    </article>
  );
}

interface DynamicProjectCardProps extends ProjectCardProps {
  variant?: "featured" | "projects";
}

/**
 * Polymorphic card selector dynamically rendering Featured or Projects-tier card variant.
 */
export function ProjectCard({
  project,
  variant,
  priority = false,
  className,
}: DynamicProjectCardProps) {
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
