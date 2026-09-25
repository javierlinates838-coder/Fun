# Skidagger

A personal portfolio for website design and development. The page is meant to show live work, explain the practice, and give a client a direct way to write.

## Edit the site

- Name, email, about, services, and process: `src/content/site.ts`
- Projects and case studies: `src/content/projects.ts`
- Screenshots: `public/work/`

The public name is the account display name **Skidagger**. Change `name` in `src/content/site.ts` if clients should see something else.

If a fact is not known, leave it off the public page. Do not add placeholder notes, metrics, or implementation commentary.

Projects listed today:

- [SRL Painting](https://srl-painting.vercel.app) — business website
- [PC Flip Pro](https://pc-two-pink.vercel.app) — product interface, credited as an independent product until you say otherwise

Other repositories on the account are empty or not publicly reachable, so they are not shown.

## Contact

The form opens the visitor’s email app addressed to the inbox in `site.ts`. It does not store messages. A hosted inbox is not connected.

## Design system

`design-system/personal-portfolio/MASTER.md` is the visual source of truth. The page is a light portfolio: Outfit and Work Sans, stone and ink, and the live websites as the composition.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```
