import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#0a0a0a", color: "#f5f5f4", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "84px", fontFamily: "sans-serif" }}>
      <div style={{ color: "#60a5fa", fontSize: 28, display: "flex" }}>FULL STACK DEVELOPER</div>
      <div style={{ fontSize: 88, fontWeight: 700, marginTop: 22, display: "flex" }}>Madhurima Panigrahi</div>
      <div style={{ color: "#a8a29e", fontSize: 32, marginTop: 22, display: "flex" }}>Next.js · MERN · Java</div>
    </div>,
    size,
  );
}
