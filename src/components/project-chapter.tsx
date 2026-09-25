import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectImage } from "@/content/projects";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/browser-frame";

function PhotoPlate({ image, sizes }: { image: ProjectImage; sizes: string }) {
  return (
    <figure className="photo-plate">
      <div className="photo-plate-frame">
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="shot shot-a" />
      </div>
      <figcaption>{image.label}</figcaption>
    </figure>
  );
}

export function ProjectChapter({
  project,
  tone,
}: {
  project: Project;
  tone: "srl" | "pc";
}) {
  const caseHref = `/work/${project.slug}`;
  const desktop = project.images.find((image) => image.label === "Desktop") ?? project.images[0];
  const detail = project.images.find((image) => image.label === "Project views");
  const phone = project.images.find((image) => image.label === "Phone");
  const host = project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const picks = project.caseStudy.features.slice(0, 3);

  return (
    <section
      id={project.slug}
      className={`scene scene--${tone}`}
      data-chapter={project.name}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="wrap">
        <header className="scene-head">
          <div className="scene-title-block">
            <p className="mono scene-index">
              {project.index}
              <span aria-hidden="true"> — </span>
              {project.category}
            </p>
            <h2 id={`${project.slug}-title`} className="scene-title">
              {project.name}
            </h2>
          </div>
          <p className="scene-summary">{project.summary}</p>
          <div className="cta-row scene-links">
            <Link href={caseHref} className="button">
              Case study
              <Icon name="arrow" />
            </Link>
            {project.liveUrl ? (
              <a className="button button-ghost" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live site
                <Icon name="external" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </header>

        <div className="stage">
          <p className="scene-mark" aria-hidden="true">
            {project.index}
          </p>
          {detail ? (
            <div className="plate plate-back">
              <PhotoPlate image={detail} sizes="(min-width: 960px) 640px, 70vw" />
            </div>
          ) : null}
          <div className="plate plate-front">
            <BrowserFrame
              image={desktop}
              url={project.liveUrl ?? project.name}
              liveUrl={project.liveUrl}
              caseHref={caseHref}
              sizes="(min-width: 960px) 980px, 100vw"
            />
          </div>
          {phone ? (
            <div className="plate plate-phone">
              <PhoneFrame image={phone} caseHref={caseHref} sizes="220px" />
            </div>
          ) : null}
        </div>

        <footer className="scene-foot">
          <ul className="fact-row">
            <li>
              <span>Client</span>
              {project.client}
            </li>
            <li>
              <span>Industry</span>
              {project.industry}
            </li>
            <li>
              <span>Built with</span>
              {project.technologies.join(" · ")}
            </li>
            <li>
              <span>Live</span>
              {host ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  {host}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                "Needs your input"
              )}
            </li>
          </ul>
          <div className="feature-block">
            <h3>In the build</h3>
            <ul className="feature-picks">
              {picks.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <p className="scene-note">
            Needs your input: the brief and any result.{" "}
            <Link href={caseHref}>
              {project.caseStudy.features.length} features, design notes, and open questions
            </Link>{" "}
            are in the case study.
          </p>
        </footer>
      </div>
    </section>
  );
}
