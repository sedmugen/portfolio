# Development & Contributing Guide

This guide details the engineering standards, code conventions, motion systems, and quality bars for developing the **Saad Mughal Portfolio** (`sedmugen/portfolio`).

---

## 1. Code Quality & Standards Bar

In alignment with [`PORTFOLIO-STANDARDS.md`](../PORTFOLIO-STANDARDS.md):

- **No Dead Code or Debug Logs**: Remove commented-out blocks, scratch code, and raw `console.*` calls.
- **Explicit Typing**: Enforce strict TypeScript types; avoid `any` or implicit type coercion.
- **Descriptive Naming**: Variables and functions must describe intent clearly (no `temp`, `data2`, `foo`).
- **Accessibility (WCAG AA)**:
  - All interactive elements must support keyboard navigation with custom `:focus-visible` styling.
  - All images and videos require meaningful, descriptive `alt` text.
  - Reduced-motion fallbacks are mandatory for animated elements and looping videos.
- **Clean Git Workflow**: All commits must follow [Conventional Commits](https://www.conventionalcommits.org/).

---

## 2. Design System & Theme Tokens

The portfolio uses an editorial, token-driven palette defined in `tailwind.config.ts` and `app/globals.css`:

### Color Tokens
- `bg-canvas` (`#F7F6F3`): Warm off-white primary canvas background.
- `bg-canvas-subtle` (`#EFECE6`): Muted secondary background.
- `text-ink` (`#141414`): High-contrast near-black typography.
- `text-ink-muted` (`#6E6B65`): Muted secondary text and metadata.
- `text-ink-faint` (`#9E9B93`): Faint labels, borders, and counters.
- `border` (`#E2DFD8`): Muted structural borders.
- `accent` (`#C44D34`): Subtle editorial accent used strictly for hover highlights and active states.

### Typography Scale
- **Display**: `Syne` (Google Fonts via `next/font/google`). Used for large headlines and names.
- **Grotesk / Mono**: `Space Grotesk`. Used for live time, metadata lines, and technical tags.
- **Body**: `Inter`. High-legibility neutral sans for body copy and navigation.

---

## 3. Motion System & Shared Animation Tokens

All motion constants live in `lib/motion.ts` to prevent per-component magic numbers:

```ts
export const transitions = {
  default: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  slow: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  fast: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  pageTransition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
} as const;
```

### Motion Guidelines
- **Philosophy**: *"Alive, not animated."* Motion confirms interaction; it never performs for its own sake.
- **Scroll Reveal**: Use `<ScrollReveal>` for viewport-triggered reveals (`whileInView`, `once: true`, `18px` translation).
- **Reduced Motion**: Always query `useReducedMotion()` from Framer Motion and render static layouts when active.

---

## 4. Git Branching & Commit Conventions

### Branch Naming
```
<category>/<short-description>
```
Approved categories: `feature/`, `bugfix/`, `hotfix/`, `docs/`, `chore/`, `refactor/`, `perf/`, `test/`.

### Conventional Commits
```
<type>(optional-scope): <description>
```
Approved types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.

### Subject Line Rules
- Use imperative mood: `feat: add video playback fallback` (not `added` or `adds`).
- Max 72 characters.
- Never use generic messages like `Update`, `Changes`, `Fix`, `asdf`, `final`.

---

## 5. Pre-Commit Verification Checklist

Before opening a PR or merging to `main`:

- [ ] `npm run lint` passes with 0 warnings and 0 errors.
- [ ] `npm run build` compiles all 22 static pages with 0 errors.
- [ ] New images/videos have appropriate `alt` descriptions and poster fallbacks.
- [ ] Commit messages conform to Conventional Commits.
