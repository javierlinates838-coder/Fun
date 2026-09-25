import Link from "next/link";
import { projects } from "@/content/projects";
import { Icon } from "@/components/icon";
import { ProjectMedia } from "@/components/project-media";

export function SelectedWork() {
  const rest = projects.slice(1);

  return (
    <section className="section companion" aria-labelledby="companion-heading">
      <div className="wrap">
        <div className="work-list">
          {rest.map((project) => {
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
                  <div className="mat">
                    <ProjectMedia
                      image={image}
                      priority={false}
                      sizes={
                        project.layout === "feature"
                          ? "(min-width: 1200px) 1152px, 100vw"
                          : "(min-width: 960px) 640px, 100vw"
                      }
                    />
                  </div>
                </Link>
                <div className="work-copy">
                  <p className="work-index">{project.index}</p>
                  <h2 id="companion-heading">
                    <Link href={caseHref}>{project.name}</Link>
                  </h2>
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
