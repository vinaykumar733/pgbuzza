import { MetadataRoute } from "next";

const AREAS = [
  "whitefield",
  "marathahalli",
  "hsr-layout",
  "electronic-city",
  "koramangala",
  "btm-layout",
  "bellandur",
  "sarjapur-road",
  "kr-puram",
  "indiranagar",
  "yelahanka",
];

const SERVICES = [
  "rental-agreement",
  "lease-agreement",
  "commercial-lease-agreement",
  "pg-management-agreement",
  "leave-license-agreement",
  "gst-registration",
  "msme-registration",
  "business-documentation",
  "affidavit-services",
  "loan-documentation-support",
  "legal-documentation-assistance",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: "https://pg-buz.online",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://pg-buz.online/bangalore-pg-news",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://pg-buz.online/hyderabad-pg-news",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://pg-buz.online/pune-student-housing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://pg-buz.online/chennai-pg-investments",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://pg-buz.online/mumbai-pg-market",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Add Bangalore service pages
  SERVICES.forEach((service) => {
    sitemapEntries.push({
      url: `https://pg-buz.online/${service}-bangalore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Add area-specific service pages
  SERVICES.forEach((service) => {
    AREAS.forEach((area) => {
      sitemapEntries.push({
        url: `https://pg-buz.online/${service}-${area}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  });

  return sitemapEntries;
}
