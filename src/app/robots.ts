import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/utils";

// Required under output: "export" — see src/app/og/route.tsx for the same
// pattern and why it's needed.
export const dynamic = "force-static";

const siteUrl = "https://mdmarufprodhan.github.io/maruf-portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: withBasePath("/"),
        disallow: withBasePath("/style-guide"),
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
