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

Revision: the first live pass used zinc and blue (`#FAFAFA`, `#18181B`, `#2563EB`) with Space Grotesk. It read as a plain document. The current field is warm paper and ink, with a dark opening and a dark close. Blue and glass are still out.

| Role | Token | Paper field | Ink field |
|------|--------|-------------|-----------|
| Paper | `--color-paper` | `#F4EFE6` | — |
| Ink | `--color-ink` | `#161411` | — |
| Primary button | `--color-primary` | `#161411` | `#F4EFE6` |
| On primary | `--color-on-primary` | `#F4EFE6` | `#161411` |
| Secondary text | `--color-secondary` | `#4A453F` | `#C8BEB0` |
| Accent | `--color-accent` | `#7A332A` | `#E8A79F` |
| Background | `--color-background` | `#F4EFE6` | `#161411` |
| Foreground | `--color-foreground` | `#161411` | `#F4EFE6` |
| Muted foreground | `--color-muted-foreground` | `#5C564E` | `#C8BEB0` |
| Input border | `--color-input-border` | `#8A7F72` | `#8A8175` |

Checked pairs: `#161411` on `#F4EFE6` is 16.3:1, `#4A453F` on `#F4EFE6` is 8.3:1, `#5C564E` on `#F4EFE6` is 6.3:1, `#7A332A` on `#F4EFE6` is 7.9:1, `#C8BEB0` on `#161411` is 10.2:1, `#E8A79F` on `#161411` is 9.3:1.

Ink surfaces are the header, the opening stage, the contact band, the footer, and the mobile menu. The middle of the page stays paper. This is not a second theme toggle.

## Typography

- Headings, wordmark, email, and the mobile menu: Playfair Display, weight 500. Not 900, and not on buttons or index numbers.
- Body, buttons, eyebrows, and indexes: Archivo.
- Loaded with `next/font`, not a remote stylesheet.
- The headline tops out near 5.25rem. It leads the opening and stays a sentence.

## Spacing

4 / 8 rhythm. Page gutter grows from 20px to 32px to 48px. Section padding grows from 80px to 104px to 128px. Text column 76rem. The opening screenshot may run wider, up to 96rem. Long copy measure 40rem.

## Shape and depth

Control radius 2px. No shadow system. The opening screenshot sits directly on the ink field, wider than the text column. Later screenshots sit in an ink mat, not a 1px hairline. No glass, no gradient washes, no icon badges.

## Layout

- Home: dark opening (headline plus the first live project), the next project on paper, about, services, process, dark contact.
- Work is editorial: the first project is the opening visual; the second reverses into a split. They are not a repeated card grid.
- Case study: recorded facts, explicit gaps, then screenshots.
- Navigation: Work, About, Services, Contact. Sticky solid header. Full-screen dialog on small screens.

## Motion

One 12px / 400ms reveal on the hero, only when `prefers-reduced-motion` is not set. Linked screenshots scale to 1.025 over 700ms on hover, same condition. Link icons move 4px on hover. Nothing is hidden from the document by default.

## Interaction rules

- Visible focus ring on every control.
- Touch targets at least 44px, primary controls 48px.
- Form labels are visible. Errors are inline and summarized, and focus moves to the summary.
- External links say that they open a new tab.
- Icons are Phosphor, regular weight, 20px, `aria-hidden` beside visible text.
- Color is not the only state: links keep an underline or a text label.

## Anti-patterns in force

No fake metrics, review widgets, emoji icons, pricing tables, glass panels, or identical project cards.
