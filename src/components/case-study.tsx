import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/icon";

export function CaseStudy({ project }: { project: Project }) {
  const desktop = project.images.find((image) => image.label === "Desktop") ?? project.images[0];
  const phone = project.images.find((image) => image.label === "Phone");
  const detail = project.images.find((image) => image.label === "Selected section");
  const meta = project.place ? `${project.industry} — ${project.place}` : project.industry;

  return (
    <article className={`case case--${project.slug}`}>
      <header className="case-mast">
        <div className="wrap">
          <p className="eyebrow">
            <Link href={`/#${project.slug}`} className="back-link">
              <Icon name="back" />
              <span>All work</span>
            </Link>
          </p>
          <div className="case-mast-row">
            <div>
              <p className="piece-index">{project.index}</p>
              <h1>{project.name}</h1>
              <p className="piece-meta">{meta}</p>
            </div>
            <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">
              View the live site
              <Icon name="external" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="piece-summary">{project.summary}</p>
          <p className="piece-role">
            <span>My role</span>
            {project.role.join(" · ")}
          </p>
        </div>
      </header>

      <div className="case-stage">
        <a className="shot shot-main" href={project.liveUrl} target="_blank" rel="noreferrer">
          <Image
            src={desktop.src}
            alt={desktop.alt}
            fill
            priority
            sizes="100vw"
            className="shot-img"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        {phone ? (
          <a className="shot shot-phone" href={project.liveUrl} target="_blank" rel="noreferrer">
            <Image
              src={phone.src}
              alt={phone.alt}
              width={phone.width}
              height={phone.height}
              sizes="240px"
              className="shot-img"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>

      {detail ? (
        <figure className="case-detail">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <Image
              src={detail.src}
              alt={detail.alt}
              width={detail.width}
              height={detail.height}
              sizes="(min-width: 900px) 92vw, 100vw"
              className="shot-img"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <figcaption>{detail.label}</figcaption>
        </figure>
      ) : null}

      <div className="wrap case-notes">
        <ul className="highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link href="/#contact" className="button button-ghost">
          Start a project
          <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}
