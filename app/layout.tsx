import { Icon } from "@/components/icon";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Florida Pool Co. | Professional Pool Service South Florida", template: "%s | Florida Pool Co." },
  description: "Florida Pool Co. offers professional pool cleaning, maintenance, green pool recovery, and equipment repair across South Florida. Get your free pool inspection today!",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Florida Pool Co.",
  "description": "Professional pool cleaning and maintenance service in South Florida",
  "url": "https://floridapoolco.com",
  "telephone": "(561) 646-4886",
  "email": "contact@floridapoolco.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.2234",
    "longitude": "-80.1732"
  },
  "areaServed": [
    "Coral Springs", "Boca Raton", "Deerfield Beach",
    "Lighthouse Point", "Parkland", "Fort Lauderdale", "Broward County"
  ],
  "sameAs": [
    "https://www.instagram.com/floridapoolco/",
    "https://share.google/j7F00HBP1K6OQptaM"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Sa 08:00-18:00"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preserve the reference fonts without requiring network access during builds. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="announce-bar">
          <Icon name="waves" />
          <span>{"FREE Pool Inspection"}</span>{" for South Florida Homeowners — Call Now: "}<span>{"(561) 646-4886"}</span>
        </div>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\u003c") }} />
      </body>
    </html>
  );
}
