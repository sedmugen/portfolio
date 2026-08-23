import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { Project } from "@/lib/types";
import { ProjectMedia, ProjectGallery } from "@/components/project-media";
import { ScrollReveal } from "@/components/scroll-reveal";

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
      title: "Project Not Found — Saad Mughal",
    };
  }

  return {
    title: `${project.title} — Saad Mughal`,
    description: project.shortDescription,
  };
}

/**
 * Featured tier template (Full case-study depth)
 */
function FeaturedProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* 1. About / Long Description */}
      {project.longDescription && (
        <ScrollReveal
          as="section"
          className="w-full py-8 sm:py-12 border-t border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              About
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm sm:text-base md:text-lg text-ink leading-relaxed max-w-prose font-normal whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* 2. Standalone Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <ScrollReveal as="section" className="w-full py-8 sm:py-12 border-t border-black/70">
          <ProjectGallery items={project.gallery} />
        </ScrollReveal>
      )}

      {/* 3. Flexible Content Sections */}
      {project.contentSections?.map((section, idx) => (
        <ScrollReveal
          key={section.heading || idx}
          as="section"
          className="w-full py-8 sm:py-12 border-t border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
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
    </>
  );
}

/**
 * Projects tier template (Lighter single-scroll overview)
 */
function ProjectsTierDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Optional Short / Long Description */}
      {project.longDescription && (
        <ScrollReveal
          as="section"
          className="w-full py-8 sm:py-12 border-t border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              About
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm sm:text-base md:text-lg text-ink leading-relaxed max-w-prose font-normal whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </ScrollReveal>
      )}
    </>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isFeatured = project.tier === "featured";
  const metadataLine = isFeatured
    ? [project.year, project.category, project.role].filter(Boolean).join(" · ")
    : [project.year, project.category].filter(Boolean).join(" · ");

  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      {/* Top Breadcrumb / Back Link */}
      <div className="pt-6 sm:pt-8 md:pt-10 pb-4">
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 text-2xs sm:text-xs uppercase tracking-[0.16em] font-semibold text-ink-muted hover:text-ink transition-colors duration-200"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <ScrollReveal
        as="header"
        className="w-full pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 border-b border-black/70"
      >
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.03em] leading-[0.9] text-ink">
            {project.title}
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-ink font-normal leading-relaxed max-w-prose">
            {project.shortDescription}
          </p>
        </div>

        <div className="shrink-0 text-left md:text-right self-start md:self-end">
          <div className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink whitespace-nowrap">
            {metadataLine}
          </div>
        </div>
      </ScrollReveal>

      {/* Hero Media (Large) */}
      <ScrollReveal as="section" className="w-full pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16">
        <ProjectMedia
          media={project.heroMedia}
          priority
          sizes="(max-width: 768px) 100vw, 95vw"
          aspectRatio="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]"
          className="w-full overflow-hidden"
        />
      </ScrollReveal>

      {/* Tier-Specific Template Content */}
      {isFeatured ? (
        <FeaturedProjectDetail project={project} />
      ) : (
        <ProjectsTierDetail project={project} />
      )}

      {/* Technology List (Plain inline list, not badges/pills) */}
      {project.technologies && project.technologies.length > 0 && (
        <ScrollReveal
          as="section"
          className="w-full py-8 sm:py-12 border-t border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Technology
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm md:text-base text-ink font-mono tracking-wide">
              {project.technologies.join(" · ")}
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Understated Links (Text links, not heavy buttons) */}
      {project.links && project.links.length > 0 && (
        <ScrollReveal
          as="section"
          className="w-full py-8 sm:py-12 pb-20 sm:pb-28 md:pb-36 border-t border-black/70 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xs sm:text-2xs md:text-xs font-semibold uppercase tracking-[0.16em] text-ink">
              Links
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-wrap items-center gap-6 sm:gap-8">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:text-ink/75 transition-colors"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 bottom-0 block h-[1px] w-full bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ink-muted">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
