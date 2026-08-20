# Information Architecture

## Navigation

Flat, 3 items, always visible:

```
SAAD MUGHAL          WORK · ABOUT · CONTACT
```

No dropdowns. No mega-menu. No blog/resources link. If a "Resume" link is added later it goes here too, but per current scope it's omitted.

## Sitemap

```
/                     Homepage, hero + Selected Work (Featured tier) + entry to full Work
/work                 All projects, Featured tier (large) + Projects tier (compact grid)
/work/[slug]          Individual project page (Featured projects get full case-study template;
                      Projects-tier items get a lighter single-scroll template, see project-system.md)
/about                About page
/contact              Contact page (or a contact section anchor, see below)
```

Keep `/contact` as a real route with a page (name/email/message + direct email + LinkedIn/GitHub links), not just a footer mailto. It reads more intentional for a career-focused site and gives Antigravity a clean route to build against.

## Homepage structure (top to bottom)

1. **Hero**, name, role line, one-sentence positioning statement. No large paragraph.
2. **Selected Work**, Featured-tier projects only (6), full visual treatment, in the order Saad sets (order is a manual field per project, not auto-sorted by date).
3. **View all work**, link/button to `/work`, understated, not a big CTA block.
4. **About preview** (optional, short), 2-3 lines + link to `/about`. Skip this if it feels redundant with the hero.
5. **Contact**, closing section, name/email, link to `/contact` or LinkedIn/GitHub.

No skills section on the homepage. No client logos section (this isn't Eizo's freelance-service structure). No testimonials section, nothing here currently supports it, and manufacturing one would undercut the site's credibility.

## /work structure

Two zones, visually distinct but sharing the same design language:

- **Selected Work**, the 6 Featured projects, same large treatment as the homepage.
- **More Work**, the remaining ~9 Projects-tier items, compact cards (image + title + one-line category + year). Grid, not list. This is where Foreman Kanban, Super Pong, Ridgeline Pro, Sunbird, Urban Run, and the smaller design pieces (Rakat Counter, Himalayan Salt, Blender Sword, Climate Action logo) live.

No filtering/tagging system (e.g. "filter by: code / design / game"), with ~15 projects total, filters are overhead the site doesn't need yet. Revisit only if the project count roughly doubles.

## /about structure

Answers, in order:
1. Who is Saad (2-3 sentences, not a bio essay)
2. What does he build / areas of focus (Software · Game Development · AI/Technical Projects · Design), as a short list, not a skills bar
3. What he cares about / how he works (optional, 1 short paragraph, e.g. iterative, spec-driven, ships things)
4. Education/experience, presented plainly further down: BS Computer Science, Beaconhouse National University (final year), plus freelance and independent work as brief context, not a full work-history timeline
5. Contact links (LinkedIn, GitHub, email)

## Project page depth by tier

- **Featured** → full case-study page at `/work/[slug]` (see project-system.md for template)
- **Projects tier** → still gets its own `/work/[slug]` page for a permanent link, but using the lighter single-section template, hero image, short description, tech/tools, links. No "Process" or multi-section breakdown required.

## Routing/slugs

Slugs are lowercase-hyphenated project names (e.g. `/work/bench`, `/work/class-sync-ai`, `/work/moral-matrix`). Keep them stable once set, they'll be shared as direct links to employers.
