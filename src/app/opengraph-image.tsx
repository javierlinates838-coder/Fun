import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Skidagger — web design and development.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F3F0EA",
          color: "#1C1915",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ fontSize: 28, letterSpacing: 1 }}>SKIDAGGER</div>
          <div style={{ fontSize: 28, color: "#9C3D22" }}>Websites</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -2 }}>Web design and development.</div>
          <div style={{ width: 180, height: 8, background: "#9C3D22" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
