import type { Metadata } from "next";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Timshel Global | Building Commissioning — Lubbock TX",
  description: "Building commissioning & owner's rep services in Lubbock, Texas. 16 years, 400+ projects. New construction Cx, retro-Cx, data centers & more.",
  keywords: "building commissioning Lubbock Texas, commissioning engineer Texas, continuous commissioning Texas A&M, owner's representative services Texas, data center commissioning, building envelope commissioning, Cx agent Lubbock",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Timshel Global | Building Commissioning — Lubbock TX",
    description: "Building commissioning & owner's rep services in Lubbock, Texas. 16 years, 400+ projects across aviation, healthcare, higher education & more.",
    url: "https://timshelcx.com",
    siteName: "Timshel Global Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://timshelcx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timshel Global — Building Commissioning Services in Lubbock, Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timshel Global | Building Commissioning — Lubbock TX",
    description: "Building commissioning & owner's rep services in Lubbock, Texas. 16 years, 400+ projects completed.",
    images: ["https://timshelcx.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://timshelcx.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Timshel Global Services LLC",
  description: "Building Commissioning & Owner's Representative Services",
  url: "https://timshelcx.com",
  telephone: "(806) 433-8115",
  email: "david@timshelcx.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13813 Quinton Ave",
    addressLocality: "Lubbock",
    addressRegion: "TX",
    postalCode: "79424",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4484,
    longitude: -101.8229,
  },
  areaServed: {
    "@type": "State",
    name: "Texas",
  },
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "David Sublett, PE",
    jobTitle: "Owner & Principal Engineer",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 1,
  },
  serviceType: [
    "Building Commissioning",
    "Continuous Commissioning",
    "Owner's Representative Services",
    "Data Center Commissioning",
    "Building Envelope Commissioning",
    "Energy Code Compliance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
