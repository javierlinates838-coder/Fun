import { site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";

export function About() {
  const [lead, ...rest] = site.about.paragraphs;
  return (
    <section id="about" className="band band--paper" data-chapter="About" aria-labelledby="about-heading">
      <div className="wrap about-grid">
        <header>
          <p className="eyebrow">About</p>
          <h2 id="about-heading" className="about-lead">
            {lead}
          </h2>
        </header>
        <div className="about-copy">
          {rest.map((paragraph) => (
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
    <section id="services" className="band band--paper" data-chapter="Services" aria-labelledby="services-heading">
      <div className="wrap">
        <header className="section-heading">
          <p className="eyebrow">Services</p>
          <h2 id="services-heading">{site.services.heading}</h2>
          <p>{site.services.intro}</p>
        </header>
        <ol className="service-list">
          {site.services.items.map((item, index) => (
            <li key={item.title}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
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
    <section className="band band--paper" data-chapter="Process" aria-labelledby="process-heading">
      <div className="wrap">
        <header className="section-heading">
          <p className="eyebrow">Process</p>
          <h2 id="process-heading">{site.process.heading}</h2>
          <p>{site.process.intro}</p>
        </header>
        <ol className="process-list">
          {site.process.steps.map((step, index) => (
            <li key={step.title}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
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
    <section id="contact" className="finale" data-chapter="Contact" aria-labelledby="contact-heading">
      <div className="wrap finale-grid">
        <header className="finale-copy">
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
