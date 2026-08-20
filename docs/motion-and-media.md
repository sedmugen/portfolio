# Motion & Media

## Motion principle

Subtle and purposeful. The site should feel **alive, not animated**, that distinction matters. Motion confirms an interaction happened or guides attention during scroll; it never performs for its own sake.

**Use:**
- Image/section reveal on scroll (slight fade + translate-up, ~16-24px travel, ~300-500ms, ease-out)
- Smooth hover states on project cards (slight scale ~1.02-1.03, or slight brightness shift)
- Page/route transitions (simple crossfade, ~200-300ms, nothing elaborate)
- Cursor interaction on Featured project cards if it fits the polish level (e.g. a small label following the cursor on hover), optional, not required for v1

**Avoid:**
- Parallax scrolling effects
- Bouncy/spring-heavy easing on anything but micro-interactions
- Staggered "everything animates in one by one" entrance sequences on every section
- Animated loading screens or intro sequences before the homepage renders
- Scroll-jacking (hijacking native scroll behavior)

Implementation: Framer Motion, using `whileInView` for scroll-reveal (with `once: true` so re-scrolling doesn't re-trigger it) and simple `layout`/`AnimatePresence` for route transitions. Keep all durations/easings as shared constants (a `motion.ts` tokens file), not per-component magic numbers.

## Media component

Single component, `ProjectMedia`, used everywhere a project's visual content appears (hero, gallery, section media). It accepts the `MediaItem` type from project-system.md and renders accordingly:

```
ProjectMedia
├── image   → <Image> (Next.js Image, responsive, lazy unless it's the LCP hero)
├── video   → <video> with poster, muted, loop, playsInline, autoPlay on viewport
             entry (respect prefers-reduced-motion, fall back to poster/static frame)
└── gallery → grid/stack of ProjectMedia items, same component reused per item
```

This is the mechanism that makes the "screenshots now, showreel later" plan work: today, every project's `heroMedia.type` is `"image"`. When Saad has an edited showcase clip for a project, the only change is flipping that one field to `"video"` and pointing `src` at the new asset, the page layout, spacing, and surrounding template don't change at all.

## Media guidelines (v1, screenshots-only)

- Export images as WebP (AVIF as a stretch goal) at 2x resolution for the largest size they'll display at, then let Next.js `<Image>` handle responsive `srcset` generation.
- Every image needs real `alt` text describing what's shown (not the filename), matters for accessibility and for anyone skimming with images off.
- No image over ~500KB after compression; hero images should target well under that.
- Crop screenshots deliberately, don't just paste a full raw window/browser chrome screenshot. A clean, cropped shot of the actual UI reads more intentional (this matters especially for Bench, ClassSync, Foreman Kanban, Ridgeline Pro, Giselle's Kitchen).
- Where a project only has a few screenshots (most of the Projects tier), that's fine, the lighter template only needs one strong hero image.

## Media guidelines (future, video)

- Compress showcase clips (H.264/AV1, target reasonable bitrate for web, no raw export files)
- Always include a `poster` frame so the layout doesn't shift/flash before video loads
- Autoplay only when muted, looped, and the user hasn't set `prefers-reduced-motion`, otherwise show the poster as a static image
- Keep individual showcase clips short (15-40s), this is a portfolio hero moment, not a full trailer; link out to the full YouTube upload (already true for Hitman Assassin / Urban Run) for anyone who wants more
