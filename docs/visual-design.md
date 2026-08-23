# Visual Design

## Typography

Two typefaces, no more.

- **Display / heading typeface**: one distinctive serif or high-contrast sans (e.g. a grotesque like Neue Haas Grotesk / General Sans, or an editorial serif like Fraunces / Canela if Saad wants more warmth). Used for the hero name, project titles, section headers. Restrained weight use, one weight for headers is enough, don't mix 3 weights of the same face.
- **Body / UI typeface**: one highly readable sans (Inter, General Sans, or system-ui stack as a pragmatic starting point). Used for descriptions, nav, metadata, links.

Rules:
- Generous line-height on body copy (1.5-1.7).
- Text measure (line length) capped around 60-75 characters for any paragraph content, don't let longDescription/contentSections stretch full-width on desktop.
- Hierarchy comes from size and spacing, not from bolding everything. Category/year metadata lines are small, uppercase-tracked, muted, never competing with the title.
- No more than 3 distinct font sizes on any single screen (display, body, metadata/caption).

## Color

Neutral foundation, one accent, nothing else:

- Off-white / warm white background (e.g. `#F7F6F3` range), not pure `#FFFFFF`, it reads flat.
- Near-black text (e.g. `#141414` range), not pure `#000000`.
- One muted gray for secondary text/borders/dividers.
- **One accent color**, used sparingly, link hover states, an active nav indicator, maybe a cursor dot. Not used for section backgrounds or large blocks.

Explicitly avoid: gradients, per-project accent colors, colored section backgrounds, glassmorphism, drop shadows beyond subtle depth on hover states. The project imagery (a genetic-algorithm dashboard, a game still, a luxury dessert shot) already provides all the color variation the site needs, the UI shouldn't compete with it.

Optional dark mode: not required for v1. If added later, it should be a straight token swap (background/text/border tokens flip), not a separate design pass.

## Spacing

- Whitespace is a feature, not empty space to fill. Sections should feel roomy, err toward more vertical padding between sections than feels necessary at first.
- Use a consistent spacing scale (e.g. 4/8px base, 8, 16, 24, 32, 48, 64, 96, 128) rather than arbitrary pixel values per section.
- Content max-width container (e.g. ~1280-1440px) with consistent horizontal padding; hero media can break out to full-bleed where the template calls for it.

## Responsive design

Defined explicitly, not left to "it'll probably reflow fine":

- **Desktop** (≥1024px): full visual ambition, large Featured project imagery, generous whitespace, multi-column Projects-tier grid (2-3 cols).
- **Tablet** (768-1023px): Featured imagery scales down proportionally, Projects-tier grid drops to 2 columns, nav stays inline (no hamburger needed at this width unless testing says otherwise).
- **Mobile** (<768px): single column throughout. Featured project media goes full-width. Typography scale steps down (display size drops meaningfully, body stays readable, don't shrink body text below ~16px). Nav can collapse to a simple menu if 3 items don't fit inline, but try inline first, 3 items usually fit.
- Image aspect ratios should be defined per breakpoint where a project's hero image genuinely needs to recompose (e.g. a wide desktop screenshot vs. a portrait-friendly crop on mobile) rather than just scaling the same crop down.

## What "editorial and premium" means concretely here

- Fewer, larger images beat many small ones.
- Metadata (year/category/role) is present but quiet, small type, muted color, never the visual focus.
- Hover states are subtle (slight scale, slight opacity/brightness shift), not bouncy, not color-inverting.
- No decorative icons unless functional (e.g. an external-link arrow next to a link, not clip-art).
