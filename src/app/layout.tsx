import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Maruf Prodhan — Founder & Product Builder";
const description =
  "Founder of Movexa and iOS product builder. I build AI-powered products that turn complex problems into simple, useful experiences.";
const siteUrl = "https://mdmarufprodhan.github.io/maruf-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://mdmarufprodhan.github.io"),
  title,
  description,
  authors: [{ name: "Maruf Prodhan" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Maruf Prodhan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08080b" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maruf Prodhan",
  jobTitle: "Founder & Product Builder",
  description,
  sameAs: [
    "https://www.linkedin.com/in/md-maruf-prodhan-187948b8",
    "https://github.com/mdmarufprodhan",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
