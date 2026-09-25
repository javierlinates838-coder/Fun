import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Skidagger — I design and build websites.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#161411",
          color: "#F4EFE6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#C8BEB0" }}>
          SKIDAGGER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 0.96, letterSpacing: -2, maxWidth: 860 }}>
            I design and build websites.
          </div>
          <div style={{ fontSize: 28, color: "#C8BEB0", maxWidth: 760 }}>
            Web design and development for businesses and products.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
