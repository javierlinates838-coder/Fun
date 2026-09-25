import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

export function ProjectMedia({
  image,
  priority = false,
  sizes,
}: {
  image: ProjectImage;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div
      className="frame"
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="frame-image"
      />
    </div>
  );
}
