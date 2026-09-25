import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/icon";
import { ProjectMedia } from "@/components/project-media";

export function CaseStudy({ project }: { project: Project }) {
  const [primary, ...rest] = project.images;
  const phone = rest.find((image) => image.label === "Phone");
  const supporting = rest.filter((image) => image !== phone);

  return (
    <article className="case">
      <header className="wrap case-header">
        <p className="eyebrow">
          <Link href="/#work" className="back-link">
            <Icon name="back" />
            <span>All work</span>
          </Link>
        </p>
        <h1>{project.name}</h1>
        <p className="lede">{project.summary}</p>
        <dl className="case-meta">
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Industry</dt>
            <dd>{project.industry}</dd>
          </div>
        </dl>
        {project.liveUrl ? (
          <a
            className="button"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit the live site
            <Icon name="external" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </header>

      <div className="wrap case-hero-media">
        <figure>
          <div className="mat">
            <ProjectMedia
              image={primary}
              priority
              sizes="(min-width: 1200px) 1152px, 100vw"
            />
          </div>
          <figcaption>{primary.label}</figcaption>
        </figure>
      </div>

      <div className="wrap case-body">
        <section>
          <h2>Client</h2>
          <p>{project.caseStudy.client}</p>
        </section>
        <section>
          <h2>Problem</h2>
          <p className="missing">
            Needs your input. The original brief is not published on this page.
          </p>
        </section>
        <section>
          <h2>Objective</h2>
          <p className="missing">
            Needs your input. A written objective is not published on this page.
          </p>
        </section>
        <section>
          <h2>Solution</h2>
          <p>{project.caseStudy.solution}</p>
        </section>
        <section>
          <h2>Design approach</h2>
          <p>{project.caseStudy.design}</p>
        </section>
        <section>
          <h2>Development approach</h2>
          <p>{project.caseStudy.development}</p>
          <p className="tech-line">{project.technologies.join(", ")}</p>
        </section>
        <section>
          <h2>Important features</h2>
          <ul className="plain-list">
            {project.caseStudy.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Final result</h2>
          <p>{project.caseStudy.result}</p>
        </section>

        {supporting.length > 0 || phone ? (
          <section>
            <h2>Screenshots</h2>
            <div
              className={
                supporting.length > 0 ? "shot-layout" : "shot-layout shot-layout--single"
              }
            >
              {supporting.length > 0 ? (
                <div className="shot-stack">
                  {supporting.map((image) => (
                    <figure key={image.src}>
                      <div className="mat">
                        <ProjectMedia
                          image={image}
                          sizes="(min-width: 960px) 720px, 100vw"
                        />
                      </div>
                      <figcaption>{image.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
              {phone ? (
                <figure className="shot-phone">
                  <div className="mat">
                    <ProjectMedia
                      image={phone}
                      sizes="(min-width: 960px) 320px, 70vw"
                    />
                  </div>
                  <figcaption>{phone.label}</figcaption>
                </figure>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="open-note">
          <h2>Needs your input</h2>
          <ul>
            {project.caseStudy.openItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
