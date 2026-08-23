"use client";

import { useEffect, useRef, useState, memo } from "react";
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
  showControls?: boolean;
  showHoverOverlay?: boolean;
}

/**
 * Responsive media component rendering WebP/AVIF images and H.264/AV1 looping videos.
 * Features viewport intersection management, reduced-motion fallbacks, and editorial hover brackets.
 */
export function ProjectMedia({
  media,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  imageClassName,
  videoClassName,
  aspectRatio,
  showControls = false,
  showHoverOverlay = true,
}: ProjectMediaProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const effectiveAspectRatio = aspectRatio || media.aspectRatio || "aspect-[16/9]";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Viewport Observer: Pre-warm and play/pause videos based on visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (videoRef.current && !showControls) {
          if (inView && !prefersReducedMotion) {
            videoRef.current.play().catch(() => {
              // Autoplay policy or interrupt catch
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: "250px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [showControls, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden bg-transparent transform-gpu",
        effectiveAspectRatio,
        className
      )}
    >
      {media.type === "video" ? (
        showControls ? (
          <video
            ref={videoRef}
            src={media.src}
            poster={media.poster}
            controls
            playsInline
            preload={priority ? "auto" : "metadata"}
            className={cn("h-full w-full object-cover bg-transparent", videoClassName)}
            aria-label={media.alt}
          />
        ) : prefersReducedMotion && media.poster ? (
          <Image
            src={media.poster}
            alt={media.alt}
            fill
            sizes={sizes}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={cn("object-cover", imageClassName)}
          />
        ) : (
          <video
            ref={videoRef}
            src={isInView || priority ? media.src : undefined}
            poster={media.poster}
            muted
            loop={!prefersReducedMotion}
            playsInline
            autoPlay={!prefersReducedMotion && (isInView || priority)}
            preload={priority ? "auto" : "none"}
            className={cn("h-full w-full object-cover bg-transparent", videoClassName)}
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
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("object-cover", imageClassName)}
        />
      )}

      {/* Editorial Hover Overlay & Inset Corner Brackets */}
      {showHoverOverlay && !showControls && (
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
      )}
    </div>
  );
}

const GalleryItemCard = memo(function GalleryItemCard({
  item,
}: {
  item: MediaItem;
}) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (videoRef.current) {
          if (!inView) {
            videoRef.current.pause();
          }
        }
      },
      {
        rootMargin: "250px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      ref={containerRef}
      className="break-inside-avoid mb-6 md:mb-8 inline-block w-full align-top bg-transparent transition-transform duration-300 [content-visibility:_auto] [contain-intrinsic-size:_1px_360px]"
    >
      <div className="relative w-full bg-transparent overflow-hidden">
        {item.type === "video" ? (
          <video
            ref={videoRef}
            src={isInView ? item.src : undefined}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="block w-full h-auto max-h-[85vh] min-h-[100px] object-contain bg-transparent"
            aria-label={item.alt}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto max-h-[85vh] min-h-[100px] object-contain bg-transparent transition-transform duration-300 ease-out hover:scale-[1.01] transform-gpu"
          />
        )}
      </div>

      {item.alt && (
        <figcaption className="pt-2.5 pb-1 text-3xs sm:text-2xs font-mono text-ink-muted uppercase tracking-[0.14em] break-words select-none">
          {item.alt}
        </figcaption>
      )}
    </figure>
  );
});

interface ProjectGalleryProps {
  items: MediaItem[];
  className?: string;
}

/**
 * Masonry gallery component rendering project media items in balanced columns.
 */
export function ProjectGallery({ items, className }: ProjectGalleryProps) {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={cn(
        "columns-[280px] sm:columns-[320px] lg:columns-[360px] gap-6 md:gap-8 [column-fill:_balance] w-full",
        className
      )}
    >
      {items.map((item, index) => (
        <GalleryItemCard key={`${item.src}-${index}`} item={item} />
      ))}
    </div>
  );
}
