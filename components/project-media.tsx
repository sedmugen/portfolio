"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MediaItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  media: MediaItem;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  videoClassName?: string;
  aspectRatio?: string;
}

export function ProjectMedia({
  media,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  imageClassName,
  videoClassName,
  aspectRatio = "aspect-[16/9]",
}: ProjectMediaProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-canvas-subtle",
        aspectRatio,
        className
      )}
    >
      {media.type === "video" ? (
        prefersReducedMotion && media.poster ? (
          <Image
            src={media.poster}
            alt={media.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        ) : (
          <video
            src={media.src}
            poster={media.poster}
            muted
            loop={!prefersReducedMotion}
            playsInline
            autoPlay={!prefersReducedMotion}
            className={cn("h-full w-full object-cover", videoClassName)}
            aria-label={media.alt}
          />
        )
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      )}

      {/* Editorial Hover Overlay & Inset Corner Brackets */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100"
      >
        {/* Top-Left Corner Bracket */}
        <span className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 h-3 w-3 sm:h-3.5 sm:w-3.5 border-t-[1.5px] border-l-[1.5px] border-white -translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

        {/* Top-Right Corner Bracket */}
        <span className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 h-3 w-3 sm:h-3.5 sm:w-3.5 border-t-[1.5px] border-r-[1.5px] border-white translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

        {/* Bottom-Left Corner Bracket */}
        <span className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 h-3 w-3 sm:h-3.5 sm:w-3.5 border-b-[1.5px] border-l-[1.5px] border-white -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

        {/* Bottom-Right Corner Bracket */}
        <span className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 h-3 w-3 sm:h-3.5 sm:w-3.5 border-b-[1.5px] border-r-[1.5px] border-white translate-x-1 translate-y-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
    </div>
  );
}

interface ProjectGalleryProps {
  items: MediaItem[];
  className?: string;
  sizes?: string;
}

export function ProjectGallery({
  items,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ProjectGalleryProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2", className)}>
      {items.map((item, index) => (
        <ProjectMedia
          key={`${item.src}-${index}`}
          media={item}
          sizes={sizes}
        />
      ))}
    </div>
  );
}
