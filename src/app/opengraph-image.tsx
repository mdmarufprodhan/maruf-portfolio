import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08080b",
          color: "#f5f5f7",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#8a8a93",
          }}
        >
          Founder of Movexa · iOS Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          Maruf Prodhan
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 40,
            fontWeight: 600,
            color: "#6366f1",
          }}
        >
          Founder &amp; Product Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
