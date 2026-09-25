"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
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

  function openMenu() {
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="site-header">
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
      <dialog
        ref={dialogRef}
        className="nav-dialog"
        aria-labelledby={titleId}
      >
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
        </nav>
      </dialog>
      <noscript>
        <style>{`
          @media (max-width: 799px) {
            .nav-desktop { display: flex !important; }
            .menu-button { display: none !important; }
          }
        `}</style>
      </noscript>
    </header>
  );
}
