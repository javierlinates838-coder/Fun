import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="eyebrow">Missing page</p>
      <h1>That page is not on this site.</h1>
      <p>The address does not match a project or a section.</p>
      <Link href="/" className="button">
        Back to the work
      </Link>
    </div>
  );
}
