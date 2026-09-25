import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/icon";

function metaLine(project: Project) {
  return project.place ? `${project.industry} — ${project.place}` : project.industry;
}

function Stage({ project, priority = false }: { project: Project; priority?: boolean }) {
  const desktop = project.images.find((image) => image.label === "Desktop") ?? project.images[0];
  const detail = project.images.find((image) => image.label === "Selected section");
  const phone = project.images.find((image) => image.label === "Phone");

  return (
    <div className="stage">
      <a className="shot shot-main" href={project.liveUrl} target="_blank" rel="noreferrer">
        <Image
          src={desktop.src}
          alt={desktop.alt}
          fill
          sizes={priority ? "100vw" : "(min-width: 900px) 64vw, 100vw"}
          priority={priority}
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
            sizes="220px"
            className="shot-img"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
      {detail ? (
        <figure className="shot shot-detail">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <Image
              src={detail.src}
              alt={detail.alt}
              fill
              sizes="(min-width: 900px) 420px, 100vw"
              className="shot-img"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <figcaption>{detail.label}</figcaption>
        </figure>
      ) : null}
    </div>
  );
}

function Notes({ project }: { project: Project }) {
  return (
    <>
      <p className="piece-summary">{project.summary}</p>
      <p className="piece-role">
        <span>My role</span>
        {project.role.join(" · ")}
      </p>
      <ul className="highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export function ProjectNotes({ project }: { project: Project }) {
  return (
    <div className="wrap piece-follow">
      <Notes project={project} />
    </div>
  );
}

export function ProjectShow({
  project,
  lead = false,
}: {
  project: Project;
  lead?: boolean;
}) {
  if (lead) {
    return (
      <div className={`lead-frame piece--${project.slug}`} id={project.slug}>
        <div className="piece-title-block">
          <p className="piece-index">{project.index}</p>
          <h2>
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
          </h2>
          <p className="piece-meta">{metaLine(project)}</p>
        </div>
        <Stage project={project} priority />
        <a className="button piece-cta" href={project.liveUrl} target="_blank" rel="noreferrer">
          View the live site
          <Icon name="external" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    );
  }

  return (
    <article id={project.slug} className={`piece piece--next piece--${project.slug}`}>
      <div className="piece-layout">
        <div className="piece-title-block">
          <p className="piece-index">{project.index}</p>
          <h2>
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
          </h2>
          <p className="piece-meta">{metaLine(project)}</p>
        </div>
        <Stage project={project} />
        <a className="button piece-cta" href={project.liveUrl} target="_blank" rel="noreferrer">
          View the live site
          <Icon name="external" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <div className="piece-notes">
          <Notes project={project} />
        </div>
      </div>
    </article>
  );
}
