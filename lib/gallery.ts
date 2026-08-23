import fs from "fs";
import path from "path";
import { MediaItem, Project } from "@/lib/types";

/**
 * Formats a raw file basename into a human-readable title caption.
 * e.g. "ui-screens-overview" -> "Ui Screens Overview"
 */
function formatCaption(filename: string): string {
  const base = path.parse(filename).name;
  return base
    .replace(/[-_]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

const galleryCache = new Map<string, MediaItem[]>();

/**
 * Automatically detects all media assets (images and videos) for a project
 * from public/images/[folder] and public/videos/[folder].
 *
 * Scans directories dynamically at build time (Static Site Generation),
 * merges optional explicit overrides, and caches results.
 */
export function getAutomaticProjectGallery(project: Project): MediaItem[] {
  if (galleryCache.has(project.slug)) {
    return galleryCache.get(project.slug)!;
  }

  const heroSrc = project.heroMedia?.src;
  const folderCandidates = [
    heroSrc ? heroSrc.split("/")[2] : undefined,
    project.slug,
    project.slug.replace(/-render|-logo/g, ""),
  ].filter(Boolean) as string[];

  // Determine existing directory
  const folder =
    folderCandidates.find(
      (f) =>
        fs.existsSync(path.join(process.cwd(), "public", "images", f)) ||
        fs.existsSync(path.join(process.cwd(), "public", "videos", f))
    ) || project.slug;

  const items: MediaItem[] = [];
  const seenSrc = new Set<string>();

  // 1. Scan public/images/[folder]
  const imgDir = path.join(process.cwd(), "public", "images", folder);
  if (fs.existsSync(imgDir)) {
    try {
      const files = fs.readdirSync(imgDir);
      for (const file of files) {
        if (file === ".gitkeep" || file === "hero.svg") continue;
        const relPath = `/images/${folder}/${file}`;
        if (relPath === heroSrc) continue; // Do not duplicate primary hero image
        if (/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(file)) {
          if (!seenSrc.has(relPath)) {
            seenSrc.add(relPath);
            items.push({
              type: "image",
              src: relPath,
              alt: formatCaption(file),
            });
          }
        }
      }
    } catch {
      // Graceful fallback for non-existent or inaccessible directories
    }
  }

  // 2. Scan public/videos/[folder]
  const vidDir = path.join(process.cwd(), "public", "videos", folder);
  if (fs.existsSync(vidDir)) {
    try {
      const files = fs.readdirSync(vidDir);
      for (const file of files) {
        if (file === ".gitkeep") continue;
        const relPath = `/videos/${folder}/${file}`;
        if (relPath === heroSrc) continue; // Do not duplicate primary hero video
        if (/\.(mp4|webm|mov)$/i.test(file)) {
          if (!seenSrc.has(relPath)) {
            seenSrc.add(relPath);
            items.push({
              type: "video",
              src: relPath,
              alt: formatCaption(file),
            });
          }
        }
      }
    } catch {
      // Graceful fallback for non-existent or inaccessible directories
    }
  }

  let finalItems = items;

  // Merge explicit metadata/alt overrides from project.gallery if defined
  if (project.gallery && project.gallery.length > 0) {
    const customMap = new Map<string, MediaItem>();
    project.gallery.forEach((item) => customMap.set(item.src, item));

    finalItems = items.map((item) => {
      const custom = customMap.get(item.src);
      return custom ? { ...item, ...custom } : item;
    });
  }

  galleryCache.set(project.slug, finalItems);
  return finalItems;
}
