# Personal Portfolio — Design System

Verified against UI UX Pro Max for a personal website that presents website work to potential clients.

## Product

Portfolio/Personal. Primary recommendation: Motion-Driven + Minimalism & Swiss Style. Landing pattern: Portfolio Grid (Hero, then work, then about, then contact), adapted to the requested information architecture.

## Rejected generator matches

The first `--design-system` pass returned Brutalism. The retry returned Liquid Glass. Both were discarded:

- Brutalism conflicts with the brief (raw borders, anti-design, default type).
- Liquid Glass conflicts with the brief (no glassmorphism).

The retained direction is the Portfolio/Personal product record plus Minimalism & Swiss Style, with the portfolio color palette and the Minimalist Portfolio type pairing.

## Dials

- Variance 4–5: balanced, not brutalist or bento.
- Motion 3: one hero reveal, hover shifts that do not move layout.
- Density 2: spacious section rhythm.

## Color

| Role | Token | Value |
|------|--------|-------|
| Primary | `--color-primary` | `#18181B` |
| On primary | `--color-on-primary` | `#FFFFFF` |
| Secondary | `--color-secondary` | `#3F3F46` |
| Accent | `--color-accent` | `#2563EB` |
| Background | `--color-background` | `#FAFAFA` |
| Foreground | `--color-foreground` | `#09090B` |
| Card | `--color-card` | `#FFFFFF` |
| Muted | `--color-muted` | `#E8ECF0` |
| Muted foreground | `--color-muted-foreground` | `#475569` |
| Border | `--color-border` | `#E4E4E7` |
| Destructive | `--color-destructive` | `#DC2626` |
| Ring | `--color-ring` | `#18181B` |

Accent is for text links and the email hover. Primary buttons use near-black so the work, not a colored chrome, stays forward. Checked pairs: white on `#2563EB` is 5.17:1, `#2563EB` on `#FAFAFA` is 4.95:1, `#475569` on `#FAFAFA` is 7.26:1.

Light field only. A second dark theme is not part of this version; screenshots sit on the neutral ground the portfolio landing pattern asks for.

## Typography

- Headings: Space Grotesk (the pairing notes assign it to distinctive headers).
- Body: Archivo.
- Loaded with `next/font`, not a remote stylesheet.
- Headings use weight 500, not 700. Display size is large enough to lead the page and small enough to stay a sentence.

## Spacing

4 / 8 rhythm. Page gutter grows from 20px to 32px to 48px. Section padding grows from 80px to 104px to 128px. Content width 72rem. Long copy measure 40rem.

## Shape and depth

Control radius 2px. No shadow system. Project frames use a 1px border so a light screenshot does not dissolve into the page. No glass, no gradient washes, no icon badges.

## Layout

- Home: hero, selected work, about, services, process, contact.
- Work is editorial: the first project is a full-width frame; the second reverses into a split. They are not a repeated card grid.
- Case study: recorded facts, explicit gaps, then screenshots.
- Navigation: Work, About, Services, Contact. Sticky solid header. Full-screen dialog on small screens.

## Motion

One 12px / 400ms reveal on the hero, only when `prefers-reduced-motion` is not set. Link icons move 4px on hover. Nothing is hidden from the document by default.

## Interaction rules

- Visible focus ring on every control.
- Touch targets at least 44px, primary controls 48px.
- Form labels are visible. Errors are inline and summarized, and focus moves to the summary.
- External links say that they open a new tab.
- Icons are Phosphor, regular weight, 20px, `aria-hidden` beside visible text.
- Color is not the only state: links keep an underline or a text label.

## Anti-patterns in force

No fake metrics, review widgets, emoji icons, pricing tables, glass panels, or identical project cards.
