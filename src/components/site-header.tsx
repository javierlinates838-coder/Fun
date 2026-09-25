"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Icon } from "@/components/icon";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: Event) => {
      event.preventDefault();
      dialog.close();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-chapter]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setStatus(visible.target.getAttribute("data-chapter") ?? "");
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      bar.style.transform = `scaleX(${progress})`;
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

  function openMenu() {
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="site-header">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="wrap header-bar">
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <p className="nav-status" aria-live="polite">
          {status}
        </p>
        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#contact" className="button button-nav">
          {site.hero.secondaryCta}
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-haspopup="dialog"
          onClick={openMenu}
        >
          <Icon name="menu" />
          <span>Menu</span>
        </button>
      </div>
      <dialog ref={dialogRef} className="nav-dialog" aria-labelledby={titleId}>
        <div className="nav-dialog-bar">
          <p id={titleId} className="wordmark">
            {site.name}
          </p>
          <button type="button" className="menu-button" onClick={closeMenu}>
            <Icon name="close" />
            <span>Close</span>
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="menu-label">Projects</p>
          <ul className="menu-projects">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/#${project.slug}`} onClick={closeMenu}>
                  <span className="mono">{project.index}</span>
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-close-cta">
          <Link href="/#contact" className="button" onClick={closeMenu}>
            {site.hero.secondaryCta}
            <Icon name="arrow" />
          </Link>
        </div>
      </dialog>
      <noscript>
        <style>{`
          @media (max-width: 899px) {
            .nav-desktop { display: flex !important; }
            .menu-button, .button-nav { display: none !important; }
          }
        `}</style>
      </noscript>
    </header>
  );
}
