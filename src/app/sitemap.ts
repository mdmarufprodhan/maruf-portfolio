import type { MetadataRoute } from "next";

// Required under output: "export" — see src/app/og/route.tsx for the same
// pattern and why it's needed.
export const dynamic = "force-static";

const siteUrl = "https://mdmarufprodhan.github.io/maruf-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
