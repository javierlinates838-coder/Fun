import Link from "next/link";
import { site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";

export function Intro() {
  return (
    <section className="intro" aria-labelledby="hero-heading">
      <div className="wrap intro-grid">
        <div className="intro-identity">
          <p className="eyebrow">{site.intro.eyebrow}</p>
          <h1 id="hero-heading">{site.name}</h1>
        </div>
        <div className="intro-aside">
          <p className="intro-line">{site.intro.line}</p>
          <div className="cta-row">
            <a className="button" href="#work">
              {site.intro.primaryCta}
              <Icon name="arrow" />
            </a>
            <Link href="/#contact" className="button button-ghost">
              {site.intro.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="band" aria-labelledby="services-heading">
      <div className="wrap">
        <header className="band-head">
          <h2 id="services-heading">{site.services.heading}</h2>
          <p>{site.services.intro}</p>
        </header>
        <ol className="offer-list">
          {site.services.items.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="band band-about" aria-labelledby="about-heading">
      <div className="wrap about-grid">
        <h2 id="about-heading">{site.about.heading}</h2>
        <div>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-grid">
        <header>
          <h2 id="contact-heading">{site.contact.heading}</h2>
          <p>{site.contact.summary}</p>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
