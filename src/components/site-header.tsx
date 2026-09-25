"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Icon } from "@/components/icon";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

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
          {site.intro.secondaryCta}
        </Link>
        <button type="button" className="menu-button" aria-haspopup="dialog" onClick={openMenu}>
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
                  <span>{project.index}</span>
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-close-cta">
          <Link href="/#contact" className="button" onClick={closeMenu}>
            {site.intro.secondaryCta}
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
