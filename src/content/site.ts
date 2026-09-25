/**
 * Public copy only. If a fact is not known, leave it out of the page.
 * The display name is Skidagger. Change `name` if clients should see another name.
 */
export const site = {
  name: "Skidagger",
  role: "Web design and development",
  email: "javierlinates838@gmail.com",
  github: "https://github.com/javierlinates838-coder",
  githubLabel: "GitHub",
  description:
    "Skidagger designs and builds websites for businesses and products — clear pages, considered type, and a straightforward way to get in touch.",
  intro: {
    eyebrow: "Web design and development",
    line: "I design and build websites for businesses that need to explain the work, and for products people actually have to use.",
    primaryCta: "See the work",
    secondaryCta: "Start a project",
  },
  services: {
    heading: "What I can build",
    intro: "A site with a job: show the work, explain the offer, and make the next step obvious.",
    items: [
      {
        title: "Business websites",
        text: "A site that introduces the work, explains the services, and gives someone a direct way to get in touch.",
      },
      {
        title: "Product interfaces",
        text: "A screen people can use for a specific job, not a brochure wrapped around a tool.",
      },
      {
        title: "Redesigns",
        text: "An existing site rebuilt when the structure, the writing, or the presentation no longer holds up.",
      },
    ],
  },
  about: {
    heading: "One person, from the first conversation to launch.",
    paragraphs: [
      "I design the page and I build it. The sequence, the type, and how it feels on a phone are decided together, then shipped as a site you can use.",
      "The work is for independent businesses that need to be understood quickly, and for products that need a clear place to do their job.",
    ],
  },
  contact: {
    heading: "Start a project",
    summary: "Tell me what the business does and what the site needs to do. If you already have a site, mention that too.",
    formNote: "Sending opens your email app with the note ready. This site does not store the message.",
  },
} as const;
