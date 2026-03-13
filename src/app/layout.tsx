import type { Metadata } from "next";
import "./globals.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Timshel Global | Building Commissioning & Owner's Representative Services | Lubbock TX",
  description: "Timshel Global Services — 16 years of building commissioning excellence in Lubbock, Texas. New construction Cx, Continuous Commissioning®, owner's representative services, and data center commissioning. 400+ projects completed.",
  keywords: "building commissioning Lubbock Texas, commissioning engineer Texas, continuous commissioning Texas A&M, owner's representative services Texas, data center commissioning Texas, building envelope commissioning",
  openGraph: {
    title: "Timshel Global | Building Commissioning & Owner's Representative Services",
    description: "16 years of building commissioning excellence. 400+ projects across aviation, healthcare, higher education, and more.",
    url: "https://timshelglobal.com",
    siteName: "Timshel Global Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timshel Global | Building Commissioning",
    description: "16 years of building commissioning excellence in Lubbock, Texas. 400+ projects completed.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://timshelglobal.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Timshel Global Services LLC",
  description: "Building Commissioning & Owner's Representative Services",
  url: "https://timshelglobal.com",
  telephone: "(806) 433-8115",
  email: "david@timshelglobal.com",
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
