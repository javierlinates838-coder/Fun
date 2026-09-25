# Skidagger — design system

The public site is a freelance portfolio. A business owner should see the websites, understand what was built, and know how to start a project.

## Audit of the previous page

The previous direction was an internal case study. It published repository notes, missing-information placeholders, and implementation commentary. That copy does not belong on a client-facing site and has been removed. The dark chapter layout, browser-frame screenshots, and long fact columns made the work look like documentation.

## Generator results that were not used

`--design-system` for “freelance web designer creative developer portfolio” returned **Brutalism**, zinc plus blue, Archivo and Space Grotesk, instant transitions, and `back.out` stagger. That is a generic high-contrast template. It was rejected.

A narrower retry, “creative studio portfolio imagery,” returned **Motion-Driven** with pure black and white and the same type pair. Pure black and white is the generic portfolio the brief rules out. Archivo / Space Grotesk and bounce easing were not used.

Also set aside from domain search: portfolio card grids, bento, pink agency palettes, Poppins, and novelty display faces.

## What was kept

- **Style:** Motion-Driven. One entrance, image hover over about 480ms, a short reveal as the next project enters. `prefers-reduced-motion` shows the final state. Easing is `cubic-bezier(0.22, 1, 0.36, 1)`, not bounce.
- **Landing principle:** visuals first. The screenshot is the page. Copy is a short label.
- **Avoid:** heavy text and a weak image.

## Chosen system

**Color.** Warm stone `#F3F0EA`, ink `#1C1915`, muted `#5E584F`, clay `#9C3D22`. The project screenshots carry the color. Checked text pairs are above 5.9:1. Input borders `#6D675F` on stone are above 3:1.

**Type.** Outfit for names, navigation, and buttons. Work Sans for reading. Loaded with `next/font`. No serif costume.

**Projects.** The first screen is the website. SRL Painting is full-bleed under a short masthead, with the phone and a selected section layered on the image. PC Flip Pro sits beside a short column of client copy. No browser chrome. Unknown facts are omitted.

**Copy.** Client language only. Unknown briefs, metrics, and build notes are omitted, not labeled.
