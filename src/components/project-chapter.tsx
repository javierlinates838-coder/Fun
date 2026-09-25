"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/browser-frame";

export function ProjectChapter({
  project,
  tone,
}: {
  project: Project;
  tone: "srl" | "pc";
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const caseHref = `/work/${project.slug}`;
  const desktop = project.images.find((image) => image.label === "Desktop") ?? project.images[0];
  const detail = project.images.find((image) => image.label === "Project views");
  const phone = project.images.find((image) => image.label === "Phone");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total));
      section.style.setProperty("--p", progress.toFixed(4));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={project.slug}
      className={`chapter chapter--${tone}`}
      data-chapter={project.name}
      aria-labelledby={`${project.slug}-title`}
    >
      <div className="wrap chapter-grid">
        <div className="chapter-copy">
          <p className="mono chapter-index">{project.index}</p>
          <h2 id={`${project.slug}-title`} className="chapter-title">
            {project.name}
          </h2>
          <p className="chapter-summary">{project.summary}</p>
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
              <dt>Live website</dt>
              <dd>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  "Needs your input"
                )}
              </dd>
            </div>
          </dl>

          <div className="fact">
            <h3>What I built</h3>
            <p>{project.caseStudy.solution}</p>
          </div>
          <div className="fact">
            <h3>Problem</h3>
            <p className="missing">
              Needs your input. The original brief is not published on this page.
            </p>
          </div>
          <div className="fact">
            <h3>Design</h3>
            <p>{project.caseStudy.design}</p>
          </div>
          <div className="fact">
            <h3>Development</h3>
            <p>{project.caseStudy.development}</p>
            <p className="tech-line">{project.technologies.join(" · ")}</p>
          </div>
          <div className="fact">
            <h3>Important features</h3>
            <ul className="feature-list">
              {project.caseStudy.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="cta-row chapter-cta">
            <Link href={caseHref} className="button">
              Read the case study
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
        </div>
        <div className="chapter-visual">
          <BrowserFrame
            image={desktop}
            overlay={detail}
            url={project.liveUrl ?? project.name}
            liveUrl={project.liveUrl}
            caseHref={caseHref}
            sizes="(min-width: 960px) 58vw, 100vw"
          />
          {detail ? (
            <figure className="chapter-still">
              <BrowserFrame
                image={detail}
                url={project.liveUrl ?? project.name}
                sizes="(min-width: 960px) 58vw, 100vw"
              />
              <figcaption>{detail.label}</figcaption>
            </figure>
          ) : null}
          {phone ? (
            <div className="phone-float">
              <PhoneFrame image={phone} caseHref={caseHref} sizes="220px" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
