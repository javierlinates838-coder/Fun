/**
 * Site-wide copy.
 *
 * Needs your input:
 * - `name` is the account display name on file (Skidagger). Replace it if
 *   clients should see a different name.
 * - A personal biography, location, and portrait are not in the repository.
 * - Phone number and a hosted contact inbox are not in the repository.
 *   The contact form opens the visitor's email app. It does not store messages.
 */
export const site = {
  name: "Skidagger",
  role: "Web design and development",
  email: "javierlinates838@gmail.com",
  github: "https://github.com/javierlinates838-coder",
  githubLabel: "GitHub",
  description:
    "Skidagger designs and builds websites for businesses and products — clear structure, considered type, and pages that hold up on a phone.",
  hero: {
    eyebrow: "Web design and development",
    titleLead: "I design and build",
    titleEnd: "websites.",
    summary:
      "For businesses that need a site to explain the work, and for products that need an interface people can actually use.",
    primaryCta: "View selected work",
    secondaryCta: "Start a project",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I design the page and build the site. The work usually starts as a business that needs to be understood quickly, or a product that needs a clear place to do its job.",
      "I care about the order of information, the type, and how the page feels in the hand. A site should make the work look considered, then make the next step obvious.",
    ],
    focus: [
      "Marketing sites for service businesses",
      "Product interfaces with a specific job",
      "Pages composed for a phone, not only scaled down",
      "Forms, metadata, and a structure you can explain to someone else",
    ],
    approach:
      "Start with what the page has to say. Decide the sequence, then the type and spacing. Build it so the result is straightforward to use and straightforward to change.",
    clients:
      "Independent businesses that need a site to represent real work, and product ideas that need an interface rather than a brochure.",
    openNote:
      "Needs your input: a biography, where you are based, and a portrait. The name on this site is the account display name, Skidagger — change it in the site content if clients should see another name.",
  },
  services: {
    heading: "Services",
    intro: "Design and development for sites that have a job to do.",
    items: [
      {
        title: "Website design",
        text: "Layout, type, and the order of information, shaped around what a visitor needs to understand.",
      },
      {
        title: "Website development",
        text: "A production site built to match the design and stay maintainable after launch.",
      },
      {
        title: "Redesigns",
        text: "An existing site rebuilt when the structure, the writing, or the presentation no longer holds up.",
      },
      {
        title: "Responsive pages",
        text: "Layouts composed for a phone, with type, spacing, and images decided at that size.",
      },
      {
        title: "Landing pages",
        text: "A single page with one job: explain an offer and make the next step obvious.",
      },
      {
        title: "Business websites",
        text: "Sites for service businesses — the work, the offer, and a clear way to get in touch.",
      },
      {
        title: "Maintenance and improvements",
        text: "Updates after launch: content, layout fixes, and the changes that keep a site trustworthy.",
      },
    ],
  },
  process: {
    heading: "Process",
    intro: "A straightforward path from the first conversation to a site you can ship.",
    steps: [
      {
        title: "Discovery",
        text: "Learn the business, who the site is for, and what it has to accomplish.",
      },
      {
        title: "Direction",
        text: "Agree on structure, priorities, and the tone of the work.",
      },
      {
        title: "Design",
        text: "Set the type, the layout, and how each page should feel.",
      },
      {
        title: "Build",
        text: "Develop a responsive site that matches the design.",
      },
      {
        title: "Review",
        text: "Walk through the work together and refine the details.",
      },
      {
        title: "Launch",
        text: "Ship it, then check that the important paths still hold.",
      },
    ],
  },
  contact: {
    heading: "Start a project",
    summary:
      "Tell me what the business does and what the site needs to do. If you already have a site, send that too.",
    formNote:
      "Sending opens your email app with the note ready. This site does not store the message.",
  },
} as const;
