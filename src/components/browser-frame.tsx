import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "@/content/projects";
import { Icon } from "@/components/icon";

export function BrowserFrame({
  image,
  overlay,
  url,
  liveUrl,
  caseHref,
  priority = false,
  sizes,
}: {
  image: ProjectImage;
  overlay?: ProjectImage;
  url: string;
  liveUrl?: string;
  caseHref?: string;
  priority?: boolean;
  sizes: string;
}) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const shots = (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="shot shot-a"
      />
      {overlay ? (
        <Image
          src={overlay.src}
          alt={overlay.alt}
          fill
          sizes={sizes}
          className="shot shot-b"
        />
      ) : null}
    </>
  );

  return (
    <div className="browser">
      <div className="browser-bar">
        <p className="browser-url">{host}</p>
        {liveUrl ? (
          <a className="browser-live" href={liveUrl} target="_blank" rel="noreferrer">
            Live site
            <Icon name="external" size={16} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
      <div className="browser-screen">
        {caseHref ? (
          <Link href={caseHref} className="screen-link">
            {shots}
          </Link>
        ) : (
          shots
        )}
      </div>
    </div>
  );
}

export function PhoneFrame({
  image,
  caseHref,
  sizes,
}: {
  image: ProjectImage;
  caseHref?: string;
  sizes: string;
}) {
  const shot = (
    <Image src={image.src} alt={image.alt} fill sizes={sizes} className="shot shot-a" />
  );
  return (
    <div className="phone">
      <div className="phone-screen">
        {caseHref ? (
          <Link href={caseHref} className="screen-link" aria-label={`${image.alt}. View the project.`}>
            <Image src={image.src} alt="" fill sizes={sizes} className="shot shot-a" />
          </Link>
        ) : (
          shot
        )}
      </div>
    </div>
  );
}
