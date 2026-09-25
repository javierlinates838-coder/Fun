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
          background: "#100E0C",
          color: "#F3EEE6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ fontSize: 28, letterSpacing: 2, color: "#CFC6BA" }}>SKIDAGGER</div>
          <div style={{ fontSize: 28, color: "#F0CFC6" }}>01 — 02</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -2 }}>Web design and development.</div>
          <div style={{ width: 180, height: 8, background: "#3C1816" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
