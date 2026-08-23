# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-08-24

### Added
- Complete Next.js 15 (App Router) and React 19 architecture setup.
- TypeScript content model with 15 initial projects (6 Featured, 9 Projects-tier).
- Automatic server-side media and gallery discovery engine in `lib/gallery.ts`.
- Unified `ProjectMedia` component supporting WebP images and H.264 video with intersection observer autoplay management and `prefers-reduced-motion` fallbacks.
- Global navigation header with animated mobile slide-out drawer and real-time PKT (`Asia/Karachi`) clock.
- Responsive editorial layouts: Homepage (`/`), Project Index (`/work`), Case Study Detail (`/work/[slug]`), Profile (`/about`), and Contact Gateway (`/contact`).
- Custom Tailwind design system tokens (canvas `#F7F6F3`, ink `#141414`, accent `#C44D34`, editorial typography scale).
- Standard repository documentation (`README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md`, `.env.example`).
