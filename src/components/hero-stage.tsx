"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/browser-frame";

export function HeroStage() {
  const visualRef = useRef<HTMLDivElement>(null);
  const project = projects[0];
  const desktop = project.images[0];
  const phone = project.images.find((image) => image.label === "Phone");
  const caseHref = `/work/${project.slug}`;

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = visualRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    root.style.setProperty("--mx", x.toFixed(3));
    root.style.setProperty("--my", y.toFixed(3));
  }

  function onLeave() {
    const root = visualRef.current;
    if (!root) return;
    root.style.setProperty("--mx", "0");
    root.style.setProperty("--my", "0");
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-body">
        <div className="hero-intro">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 id="hero-heading" className="nameplate">
            {site.name}
          </h1>
          <p className="hero-line">{site.hero.summary}</p>
          <div className="cta-row">
            <Link href={caseHref} className="button">
              {site.hero.primaryCta}
              <Icon name="arrow" />
            </Link>
            <Link href="/#contact" className="button button-ghost">
              {site.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div
          className="hero-visual"
          ref={visualRef}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <div className="parallax parallax-frame">
            <div className="frame-mat" aria-hidden="true" />
            <BrowserFrame
              image={desktop}
              url={project.liveUrl ?? project.name}
              liveUrl={project.liveUrl}
              caseHref={caseHref}
              priority
              sizes="(min-width: 960px) 72vw, 100vw"
            />
            {phone ? (
              <div className="parallax parallax-phone">
                <PhoneFrame image={phone} caseHref={caseHref} sizes="190px" />
              </div>
            ) : null}
          </div>
        </div>
        <nav className="work-rail" aria-label="Selected work">
          <p className="mono">Selected work</p>
          {projects.map((item) => (
            <a key={item.slug} href={`#${item.slug}`}>
              <span className="mono">{item.index}</span>
              <span>{item.name}</span>
              {item.slug === project.slug ? <Icon name="down" /> : null}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
