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
  place?: string;
  industry: string;
  summary: string;
  liveUrl: string;
  role: string[];
  highlights: string[];
  images: ProjectImage[];
};

/**
 * Only live sites that can be checked. Copy is written for a potential client.
 * Unknown briefs, metrics, and implementation notes are omitted.
 */
export const projects: Project[] = [
  {
    slug: "srl-painting",
    index: "01",
    name: "SRL Painting",
    client: "SRL Painting",
    place: "Bakersfield, CA",
    industry: "Painting contractor",
    summary:
      "A modern website built to showcase SRL Painting’s work, explain its services clearly, and make requesting an estimate simple.",
    liveUrl: "https://srl-painting.vercel.app",
    role: ["Web design", "Frontend development", "Responsive design"],
    highlights: [
      "Exterior, interior, cabinet, and commercial painting",
      "Photography of finished projects",
      "A direct way to request an estimate",
    ],
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
        alt: "Project photography on the SRL Painting website, including exterior painting and cabinet finishing.",
        width: 1440,
        height: 1000,
        label: "Selected section",
      },
      {
        src: "/work/srl-mobile.png",
        alt: "Phone view of the SRL Painting website.",
        width: 390,
        height: 844,
        label: "Phone",
      },
    ],
  },
  {
    slug: "pc-flip-pro",
    index: "02",
    name: "PC Flip Pro",
    client: "PC Flip Pro",
    industry: "PC reselling",
    summary:
      "A workspace for reselling computers: read a listing, check whether parts fit, estimate profit, and keep a record of flips.",
    liveUrl: "https://pc-two-pink.vercel.app",
    role: ["Product interface", "Frontend development", "Responsive design"],
    highlights: [
      "Notes from a pasted listing",
      "Checks for fit, power, and clearance",
      "A profit view and a record of flips",
    ],
    images: [
      {
        src: "/work/pc-desktop.png",
        alt: "Desktop view of PC Flip Pro, a workspace for deals, builds, profit, and inventory.",
        width: 1440,
        height: 1000,
        label: "Desktop",
      },
      {
        src: "/work/pc-mobile.png",
        alt: "Phone view of PC Flip Pro.",
        width: 390,
        height: 844,
        label: "Phone",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
