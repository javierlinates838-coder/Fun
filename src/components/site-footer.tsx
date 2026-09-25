import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark">{site.name}</p>
          <p className="footer-role">{site.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer">
            {site.githubLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
