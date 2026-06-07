import { NextResponse } from "next/server";
import Parser from "rss-parser";
import prisma from "@/lib/prisma";

const parser = new Parser();

// List of RSS feeds to fetch from
const RSS_FEEDS = [
  {
    name: "Google News - Bangalore Real Estate",
    url: "https://news.google.com/rss/search?q=bangalore+real+estate+student+housing&hl=en-IN&gl=IN&ceid=IN:en",
    city: "Bangalore",
  },
  {
    name: "Google News - Hyderabad Real Estate",
    url: "https://news.google.com/rss/search?q=hyderabad+real+estate+student+housing&hl=en-IN&gl=IN&ceid=IN:en",
    city: "Hyderabad",
  },
  {
    name: "Google News - Mumbai Real Estate",
    url: "https://news.google.com/rss/search?q=mumbai+real+estate+student+housing&hl=en-IN&gl=IN&ceid=IN:en",
    city: "Mumbai",
  },
  {
    name: "Google News - Pune Real Estate",
    url: "https://news.google.com/rss/search?q=pune+real+estate+student+housing&hl=en-IN&gl=IN&ceid=IN:en",
    city: "Pune",
  },
  {
    name: "Google News - Chennai Real Estate",
    url: "https://news.google.com/rss/search?q=chennai+real+estate+student+housing&hl=en-IN&gl=IN&ceid=IN:en",
    city: "Chennai",
  },
  {
    name: "Google News - Delhi NCR Real Estate",
    url: "https://news.google.com/rss/search?q=delhi+noida+gurugram+real+estate+student+housing&hl=en-IN&gl=IN&ceid=IN:en",
    city: "Delhi NCR",
  },
];

// Simple function to generate slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Function to process a single news item
async function processNewsItem(item: any, feedCity: string) {
  // Check if we already have this article
  const existing = await prisma.article.findUnique({
    where: { originalUrl: item.link },
  });

  if (existing) {
    console.log(`Skipping duplicate: ${item.title}`);
    return null;
  }

  // For now, let's just create a basic article (we'll add AI processing later)
  const slug = generateSlug(item.title);

  return prisma.article.create({
    data: {
      originalUrl: item.link,
      originalTitle: item.title,
      originalContent: item.contentSnippet || item.content || "",
      aiTitle: item.title, // Placeholder for AI-generated title
      aiContent: item.contentSnippet || item.content || "", // Placeholder for AI-generated content
      slug: slug,
      metaTitle: `${item.title} | PG BUZ`,
      metaDescription: `Read the latest update: ${item.title}`,
      city: feedCity,
      topic: "Real Estate",
      category: "News",
      tags: JSON.stringify([]),
      canonicalUrl: `https://pg-buz.online/news/${slug}`,
      status: "DRAFT",
    },
  });
}

export async function GET() {
  try {
    console.log("Starting news fetch...");

    let processedCount = 0;

    for (const feed of RSS_FEEDS) {
      console.log(`Fetching feed: ${feed.name}`);
      try {
        const feedData = await parser.parseURL(feed.url);

        for (const item of feedData.items.slice(0, 5)) {
          // Process first 5 items per feed for now
          await processNewsItem(item, feed.city);
          processedCount++;
        }
      } catch (feedError) {
        console.error(`Error fetching feed ${feed.name}:`, feedError);
      }
    }

    console.log(`Processed ${processedCount} articles!`);

    return NextResponse.json({ success: true, processed: processedCount });
  } catch (error) {
    console.error("Error in news API:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
