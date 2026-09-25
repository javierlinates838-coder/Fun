# Personal Portfolio — Design System

Verified against UI UX Pro Max, then rewritten. The previous Swiss / warm-paper pass and the generator’s first matches were not used.

## Rejected directions

Two `--design-system` passes were run and set aside:

- Premium portfolio, variance 7, motion 7: **Liquid Glass**, gold accent, Cormorant + Montserrat, `back.out` stagger. Glass, jewelry-gold, and overshoot easing read as a template. The user asked for a studio portfolio, not an Apple-system material or a luxury shop.
- Creative studio portfolio, variance 8: **Brutalism**, zinc + blue, Archivo + Space Grotesk, hard corners, weight 700. That is the earlier safe page, plus anti-design. It was already rejected.

Style search also returned OLED neon, cyberpunk, Bauhaus hard-shadow, neumorphism, and Playfair/Inter editorial pairs. Those were not taken. Playfair was the previous typeface.

## Chosen direction

**Pattern:** Scroll-Triggered Storytelling. Intro, then one chapter per real project, then a practice sequence, then a contact climax. A progress mark in the header and the current chapter name in the nav. The story is still readable with motion off: no scroll-jacking, full DOM order, chapters show their final images.

**Style:** Motion-driven portfolio behavior (one entrance, pointer depth on the opening frame, a scroll crossfade inside a project) on an editorial composition. Not a card grid, not glass, not a bento.

**Color:** Ink `#100E0C`, bone `#F3EEE6`, dim `#CFC6BA`. Chapter 1 (SRL Painting) sits on oxblood `#3C1816`. Chapter 2 (PC Flip Pro) sits on graphite `#15191E`. Signal `#F0CFC6` is for links and the scroll mark. Checked pairs are all above 9:1 for text. Input borders `#9A9086` on ink are above 3:1.

**Type:**

- Names and the closing line: Fraunces, weight about 520, soft/wonk only on those names. Not weight 900.
- Reading, navigation, buttons: Public Sans.
- Indexes, URLs, section labels: IBM Plex Mono.
- Loaded with `next/font`.

**Motion:** 640ms entrance on the opening only. Pointer shift of about 12px / 18px on the opening frame and phone, fine pointer only. SRL chapter crossfades the desktop shot into project photography as the chapter scrolls. PC chapter lets the phone drift 28px. Hover scale on a linked shot is 1.02 over 700ms. `prefers-reduced-motion` removes parallax, crossfade, drift, and smooth scroll, and shows the second SRL image in place.

**Layout:** The opening is one viewport: identity and two real buttons, the live site in a browser frame, a phone breaking the frame, and a project jump. Chapters keep the frame sticky beside the facts. About, services, and process are typographic sequences, not cards. Contact is a full closing viewport.

## Interaction

- Nav: Work, About, Services, Contact, plus a Start a project button. Mobile menu lists those links and both projects.
- Touch targets at least 44px. Primary buttons are 52px.
- Focus ring is bone on ink.
- Form keeps inline errors, a summary, and focus on that summary.
- Icons are Phosphor, regular weight, `aria-hidden` beside text.

## Anti-patterns in force

No fake metrics, reviews, emoji icons, glass, traffic-light browser chrome, bounce easing, or repeated project cards.
