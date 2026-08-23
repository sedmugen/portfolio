import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { Project } from "@/lib/types";
import { ProjectMedia, ProjectGallery } from "@/components/project-media";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getAutomaticProjectGallery } from "@/lib/gallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

/**
 * Project Detail Page (Editorial Two-Column Showcase Layout)
 */
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const galleryItems = getAutomaticProjectGallery(project);

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* 1. Intentional White Space & Project Header Row (Title on Left, Metadata on Right) */}
      <ScrollReveal
        as="header"
        className="w-full pt-32 sm:pt-44 md:pt-56 lg:pt-64 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12"
      >
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal uppercase tracking-[-0.03em] leading-none text-ink">
            {project.title}
          </h1>
        </div>

        {/* Metadata columns horizontally aligned side-by-side */}
        <div className="flex flex-wrap items-end gap-6 sm:gap-10 md:gap-12 shrink-0 pb-1">
          {project.category && (
            <div className="space-y-1">
              <span className="block text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Category
              </span>
              <span className="block text-xs sm:text-sm font-semibold uppercase tracking-tight text-ink">
                {project.category}
              </span>
            </div>
          )}

          {project.role && (
            <div className="space-y-1">
              <span className="block text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Role
              </span>
              <span className="block text-xs sm:text-sm font-semibold uppercase tracking-tight text-ink">
                {project.role}
              </span>
            </div>
          )}

          {project.year && (
            <div className="space-y-1">
              <span className="block text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Year
              </span>
              <span className="block text-xs sm:text-sm font-semibold uppercase tracking-tight text-ink font-mono">
                {project.year}
              </span>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* 2. Main Showcase & Info Grid (Left: Showcase Window, Right: Summary & Details Table) */}
      <ScrollReveal
        as="section"
        className="w-full pt-2 sm:pt-4 pb-20 sm:pb-28 md:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
      >
        {/* Left Column: Showcase Window */}
        <div className="lg:col-span-8 w-full">
          <ProjectMedia
            media={project.heroMedia}
            priority
            showControls
            showHoverOverlay={false}
            aspectRatio={project.heroMedia.aspectRatio || "aspect-[16/9]"}
            sizes="(max-width: 1024px) 100vw, 68vw"
            className="w-full"
          />
        </div>

        {/* Right Column: Descriptions & Details Table */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 sm:space-y-10">
          {/* Summary / Description */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-ink font-normal leading-relaxed">
              {project.shortDescription}
            </p>

            {project.longDescription &&
              project.longDescription !== project.shortDescription && (
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-normal whitespace-pre-line pt-2">
                  {project.longDescription}
                </p>
              )}
          </div>

          {/* Details / Credits Table */}
          <div className="space-y-3 border-t border-black/20 pt-6">
            <h2 className="text-3xs sm:text-2xs font-semibold uppercase tracking-[0.16em] text-ink">
              Details
            </h2>

            <dl className="divide-y divide-black/10 text-xs sm:text-sm">
              {project.category && (
                <div className="py-2.5 flex justify-between items-baseline gap-4">
                  <dt className="text-ink-muted uppercase tracking-[0.12em] text-3xs sm:text-2xs">
                    Category
                  </dt>
                  <dd className="font-semibold text-ink uppercase tracking-tight text-right">
                    {project.category}
                  </dd>
                </div>
              )}

              {project.role && (
                <div className="py-2.5 flex justify-between items-baseline gap-4">
                  <dt className="text-ink-muted uppercase tracking-[0.12em] text-3xs sm:text-2xs">
                    Role
                  </dt>
                  <dd className="font-semibold text-ink uppercase tracking-tight text-right">
                    {project.role}
                  </dd>
                </div>
              )}

              {project.year && (
                <div className="py-2.5 flex justify-between items-baseline gap-4">
                  <dt className="text-ink-muted uppercase tracking-[0.12em] text-3xs sm:text-2xs">
                    Year
                  </dt>
                  <dd className="font-mono font-semibold text-ink text-right">
                    {project.year}
                  </dd>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div className="py-2.5 flex justify-between items-baseline gap-4">
                  <dt className="text-ink-muted uppercase tracking-[0.12em] text-3xs sm:text-2xs">
                    Technology
                  </dt>
                  <dd className="font-mono text-ink text-2xs sm:text-xs text-right max-w-[65%]">
                    {project.technologies.join(" · ")}
                  </dd>
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div className="py-2.5 flex justify-between items-baseline gap-4">
                  <dt className="text-ink-muted uppercase tracking-[0.12em] text-3xs sm:text-2xs">
                    Links
                  </dt>
                  <dd className="flex flex-wrap justify-end gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-semibold uppercase tracking-[0.14em] text-xs text-ink hover:text-ink/75 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ink-muted">
                          ↗
                        </span>
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Supporting Standalone Gallery (automatically detected from assets) */}
      {galleryItems && galleryItems.length > 0 && (
        <ScrollReveal
          as="section"
          className="w-full pb-20 sm:pb-28 md:pb-36 border-t border-black/70 pt-12 sm:pt-16"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Gallery &amp; Process
            </h2>
          </div>
          <ProjectGallery items={galleryItems} />
        </ScrollReveal>
      )}

      {/* 4. Flexible Content Sections (if present) */}
      {project.contentSections?.map((section, idx) => (
        <ScrollReveal
          key={section.heading || idx}
          as="section"
          className="w-full pb-20 sm:pb-28 md:pb-36 border-t border-black/70 pt-12 sm:pt-16 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
        >
          <div className="md:col-span-4">
            {section.heading && (
              <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                {section.heading}
              </h2>
            )}
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            <p className="text-sm sm:text-base md:text-lg text-ink leading-relaxed max-w-prose font-normal whitespace-pre-line">
              {section.body}
            </p>
            {section.media && section.media.length > 0 && (
              <ProjectGallery items={section.media} />
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
