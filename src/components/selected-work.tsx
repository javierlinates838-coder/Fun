import Link from "next/link";
import { projects } from "@/content/projects";
import { Icon } from "@/components/icon";
import { ProjectMedia } from "@/components/project-media";

export function SelectedWork() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="wrap">
        <header className="section-heading">
          <p className="eyebrow">Work</p>
          <div className="section-heading-row">
            <h2 id="work-heading">Selected work</h2>
            <p>Two sites that are live now.</p>
          </div>
        </header>
        <div className="work-list">
          {projects.map((project, index) => {
            const image = project.images[0];
            const caseHref = `/work/${project.slug}`;
            return (
              <article
                key={project.slug}
                className={`work-item work-item--${project.layout}`}
              >
                <Link
                  href={caseHref}
                  className="work-media"
                  aria-label={`View the ${project.name} project`}
                >
                  <ProjectMedia
                    image={image}
                    priority={index === 0}
                    sizes={
                      project.layout === "feature"
                        ? "(min-width: 1200px) 1152px, 100vw"
                        : "(min-width: 960px) 640px, 100vw"
                    }
                  />
                </Link>
                <div className="work-copy">
                  <p className="work-index">{project.index}</p>
                  <h3>
                    <Link href={caseHref}>{project.name}</Link>
                  </h3>
                  <p className="work-meta">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.category}</span>
                  </p>
                  <p className="work-summary">{project.summary}</p>
                  <p className="tech-line">{project.technologies.join(", ")}</p>
                  <div className="work-actions">
                    <Link href={caseHref} className="text-link">
                      View project
                      <Icon name="arrow" />
                    </Link>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="text-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live site
                        <Icon name="external" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
