import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/browser-frame";

export function CaseStudy({ project }: { project: Project }) {
  const desktop = project.images.find((image) => image.label === "Desktop") ?? project.images[0];
  const phone = project.images.find((image) => image.label === "Phone");
  const supporting = project.images.filter((image) => image !== desktop && image !== phone);

  return (
    <article className={`case case--${project.slug}`}>
      <header className="case-header">
        <div className="wrap case-intro">
          <p className="eyebrow">
            <Link href={`/#${project.slug}`} className="back-link">
              <Icon name="back" />
              <span>All work</span>
            </Link>
          </p>
          <p className="mono">{project.index}</p>
          <h1>{project.name}</h1>
          <p className="lede">{project.summary}</p>
          <dl className="meta-grid">
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>{project.industry}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
          </dl>
          {project.liveUrl ? (
            <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">
              Visit the live site
              <Icon name="external" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
        <div className="wrap case-stage">
          <BrowserFrame
            image={desktop}
            url={project.liveUrl ?? project.name}
            liveUrl={project.liveUrl}
            priority
            sizes="(min-width: 1100px) 70vw, 100vw"
          />
          {phone ? (
            <div className="phone-float phone-float--case">
              <PhoneFrame image={phone} sizes="220px" />
            </div>
          ) : null}
        </div>
      </header>

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
          <h2>What I built</h2>
          <p>{project.caseStudy.solution}</p>
        </section>
        <section>
          <h2>Design</h2>
          <p>{project.caseStudy.design}</p>
        </section>
        <section>
          <h2>Development</h2>
          <p>{project.caseStudy.development}</p>
          <p className="tech-line">{project.technologies.join(" · ")}</p>
        </section>
        <section>
          <h2>Important features</h2>
          <ul className="feature-list">
            {project.caseStudy.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Final result</h2>
          <p>{project.caseStudy.result}</p>
        </section>

        {supporting.length > 0 ? (
          <section className="case-shots">
            <h2>Screenshots</h2>
            <div className="shot-layout">
              {supporting.map((image) => (
                <figure key={image.src}>
                  <BrowserFrame
                    image={image}
                    url={project.liveUrl ?? project.name}
                    sizes="(min-width: 960px) 720px, 100vw"
                  />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
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
