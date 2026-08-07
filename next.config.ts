import type { NextConfig } from "next";

// Deployed as a static export to GitHub Pages (project site), which can
// only serve static files — no server, so custom headers() and the
// next/image optimizer both have to be disabled here. Both work again if
// this ever moves to a host that runs Next.js server-side (e.g. Vercel).
//
// basePath is driven by NEXT_PUBLIC_BASE_PATH (set only in the GitHub
// Pages build) rather than hardcoded, so `npm run dev`/a Vercel deploy
// both still work at the root path with zero changes.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
