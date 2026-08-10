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

const title = "Md Maruf Prodhan — iOS Developer for Startups & Businesses";
const description =
  "iOS developer for startups and businesses — Swift & SwiftUI apps, idea to App Store launch, with AI integrations. Available for freelance and agency work.";
const siteUrl = "https://mdmarufprodhan.github.io/maruf-portfolio";
const ogImageUrl = `${siteUrl}/og`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "iOS developer",
    "Swift developer",
    "SwiftUI developer",
    "iOS app development",
    "iOS developer for startups",
    "iOS MVP development",
    "AI iOS developer",
    "freelance iOS developer",
    "iOS development agency partner",
  ],
  authors: [{ name: "Md Maruf Prodhan" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Md Maruf Prodhan",
    type: "website",
    images: [{ url: ogImageUrl, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl],
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
  name: "Md Maruf Prodhan",
  jobTitle: "iOS Developer",
  description,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Asia Pacific",
  },
  knowsAbout: [
    "iOS Development",
    "Swift",
    "SwiftUI",
    "UIKit",
    "AI Integration",
    "Mobile App Development",
    "Startup MVP Development",
    "App Store Deployment",
  ],
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
