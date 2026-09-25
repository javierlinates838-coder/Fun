import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Icon } from "@/components/icon";
import { ContactForm } from "@/components/contact-form";
import { ProjectMedia } from "@/components/project-media";

export function Hero() {
  const project = projects[0];
  const image = project.images[0];
  const caseHref = `/work/${project.slug}`;

  return (
    <section className="stage" id="work" aria-labelledby="hero-heading">
      <div className="wrap stage-grid">
        <div className="hero-copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 id="hero-heading">
            {site.hero.titleLead}
            <span className="h1-break"> </span>
            {site.hero.titleEnd}
          </h1>
        </div>
        <div className="hero-aside">
          <p className="lede">{site.hero.summary}</p>
          <div className="cta-row">
            <Link href={caseHref} className="button">
              {site.hero.primaryCta}
              <Icon name="arrow" />
            </Link>
            <Link href="/#contact" className="text-link text-link--strong">
              {site.hero.secondaryCta}
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
      <div className="stage-project">
        <div className="stage-bleed">
          <Link href={caseHref} className="work-media">
            <ProjectMedia
              image={image}
              priority
              sizes="(min-width: 1200px) 1600px, 100vw"
            />
          </Link>
        </div>
        <div className="wrap stage-caption">
          <p className="work-index">{project.index}</p>
          <h2>
            <Link href={caseHref}>{project.name}</Link>
          </h2>
          <p className="work-meta">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </p>
          <p className="work-summary">{project.summary}</p>
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
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="wrap about-grid">
        <header>
          <p className="eyebrow">About</p>
          <h2 id="about-heading">{site.about.heading}</h2>
        </header>
        <div className="about-copy">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3>Focus</h3>
          <ul className="plain-list">
            {site.about.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Approach</h3>
          <p>{site.about.approach}</p>
          <h3>Who I work with</h3>
          <p>{site.about.clients}</p>
          <div className="open-note">
            <h3>Needs your input</h3>
            <p>{site.about.openNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="wrap">
        <header className="section-heading">
          <p className="eyebrow">Services</p>
          <div className="section-heading-row">
            <h2 id="services-heading">{site.services.heading}</h2>
            <p>{site.services.intro}</p>
          </div>
        </header>
        <ol className="service-list">
          {site.services.items.map((item, index) => (
            <li key={item.title}>
              <span className="row-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section" aria-labelledby="process-heading">
      <div className="wrap">
        <header className="section-heading">
          <p className="eyebrow">Process</p>
          <div className="section-heading-row">
            <h2 id="process-heading">{site.process.heading}</h2>
            <p>{site.process.intro}</p>
          </div>
        </header>
        <ol className="process-list">
          {site.process.steps.map((step, index) => (
            <li key={step.title}>
              <span className="row-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section band" aria-labelledby="contact-heading">
      <div className="wrap contact-grid">
        <header>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">{site.contact.heading}</h2>
          <p className="lede">{site.contact.summary}</p>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
