export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  summary: string;
  liveUrl?: string;
  technologies: string[];
  images: ProjectImage[];
  layout: "feature" | "split";
  caseStudy: {
    client: string;
    problem?: string;
    objective?: string;
    solution: string;
    design: string;
    development: string;
    features: string[];
    result: string;
    openItems: string[];
  };
};

/**
 * Projects are limited to live sites that can be checked, plus facts from
 * their repositories. Other GitHub repositories under this account are empty,
 * unpublished, or return an error, so they are not listed.
 *
 * Needs your input on every project: the original brief, the agreed objective,
 * and any result you want stated. Do not add numbers that were not measured.
 */
export const projects: Project[] = [
  {
    slug: "srl-painting",
    index: "01",
    name: "SRL Painting",
    client: "SRL Painting",
    category: "Business website",
    industry: "Painting contractor",
    summary:
      "A marketing site for a licensed painting contractor in Bakersfield. It introduces the work, explains the services, and gives a direct way to request an estimate.",
    liveUrl: "https://srl-painting.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    layout: "feature",
    images: [
      {
        src: "/work/srl-desktop.png",
        alt: "Desktop view of the SRL Painting website, opening with the line “A fresh coat. A whole new feeling.”",
        width: 1440,
        height: 1000,
        label: "Desktop",
      },
      {
        src: "/work/srl-detail.png",
        alt: "A later section of the SRL Painting website, with project photography for exterior painting and cabinet finishing.",
        width: 1440,
        height: 1000,
        label: "Project views",
      },
      {
        src: "/work/srl-mobile.png",
        alt: "Phone view of the SRL Painting website homepage.",
        width: 390,
        height: 844,
        label: "Phone",
      },
    ],
    caseStudy: {
      client:
        "SRL Painting, a licensed California painting contractor (C-33, license #1108313) working in Bakersfield and nearby areas. That description comes from the live site and the project repository.",
      solution:
        "A single-page marketing site. It moves from an introduction, through services and project photography, into a written process and a way to request an estimate.",
      design:
        "Observed from the live site: a burgundy brand color, large photography, and short sections rather than a long brochure. The repository describes the design as brand-aligned. A separate design rationale was not written down.",
      development:
        "Built with Next.js, React, and TypeScript. The estimate form can email the business through Resend when those credentials are set. If they are not, the form does not pretend to send — it falls back to copying the request and opening an Instagram message. The repository also includes a sitemap, robots rules, Open Graph metadata, and structured data.",
      features: [
        "Exterior, interior, cabinet, and commercial painting services",
        "Project photography, including paired views of a space",
        "A four-step process from walkthrough to final review",
        "An estimate inquiry with a working fallback when email is not configured",
        "A link to verify the contractor license",
        "Search metadata for the public site",
      ],
      result:
        "The live site is the result that can be reviewed. No traffic, lead, or revenue figure is recorded in the repository, so none is stated here.",
      openItems: [
        "The problem you were asked to solve, in your words",
        "The objective you and the client agreed on",
        "Any outcome you want published — only if you have it",
      ],
    },
  },
  {
    slug: "pc-flip-pro",
    index: "02",
    name: "PC Flip Pro",
    client: "Independent product",
    category: "Product interface",
    industry: "PC reselling",
    summary:
      "A browser workspace for reselling computers: read a listing, check whether parts fit, estimate profit, and keep a record of flips on the device.",
    liveUrl: "https://pc-two-pink.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    layout: "split",
    images: [
      {
        src: "/work/pc-desktop.png",
        alt: "Desktop view of PC Flip Pro, a workspace with navigation for deals, builds, profit, and inventory.",
        width: 1440,
        height: 1000,
        label: "Desktop",
      },
      {
        src: "/work/pc-mobile.png",
        alt: "Phone view of PC Flip Pro, with the workspace tools in a compact layout.",
        width: 390,
        height: 844,
        label: "Phone",
      },
    ],
    caseStudy: {
      client:
        "The repository presents PC Flip Pro as an independent product, not as work for a named client. Needs your input if a client should be credited here.",
      solution:
        "A local-first workspace. Compatibility checks, pricing estimates, and saved flips run in the browser. A person can export a backup. Live marketplace prices are optional and only appear when API credentials are configured.",
      design:
        "Observed from the live app: a dark workspace with a persistent list of tools — overview, deal analyzer, builder, profit calculator, inventory, compatibility, parts, and a part scanner. A written design rationale is not in the repository.",
      development:
        "Next.js and TypeScript. Compatibility rules, a parts database, profit math, and inventory state live in the app. Inventory stays in the browser. Charts and a 3D build view are part of the product. eBay pricing is a later integration, not a requirement for the core checks.",
      features: [
        "Deal notes from a pasted listing",
        "Part compatibility checks, including socket, memory, clearance, and power",
        "A profit view for cost, fees, and resale",
        "An inventory of computers being flipped",
        "A parts database and a scanner that starts from text or a photo",
        "Data that stays on the device, with an export",
      ],
      result:
        "The workspace is live and can be used in the browser. The repository does not record usage or business results, so none are stated here.",
      openItems: [
        "Whether this should be credited to a client",
        "The problem and objective, if you want them stated",
        "Any outcome you want published — only if you have it",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
