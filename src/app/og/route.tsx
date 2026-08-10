import { ImageResponse } from "next/og";

// Deliberately not named `opengraph-image.tsx` — Next's magic-filename
// convention for that name always auto-generates its own og:image tag
// using a basePath-naive URL, silently overriding the explicit one set in
// layout.tsx's metadata (confirmed by testing against the live deploy).
// A plain route handler avoids that auto-detection entirely.
export const dynamic = "force-static";

export async function GET() {
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
          iOS Developer for Startups &amp; Businesses
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          Md Maruf Prodhan
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
          Swift · SwiftUI · AI Integration
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
