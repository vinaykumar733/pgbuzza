import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Generate slug from title
    const slug = body.aiTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const article = await prisma.article.create({
      data: {
        aiTitle: body.aiTitle,
        aiContent: body.aiContent,
        slug,
        metaTitle: body.metaTitle || body.aiTitle,
        metaDescription: body.metaDescription || body.aiContent.slice(0, 150),
        city: body.city,
        topic: body.topic,
        category: body.category,
        tags: JSON.stringify(body.tags || []),
        canonicalUrl: `https://pg-buz.online/news/${slug}`,
        status: body.status || "DRAFT",
        isBreaking: body.isBreaking || false,
        isTrending: body.isTrending || false,
        featuredImageUrl: body.featuredImageUrl,
        publishedAt: body.status === "PUBLISHED" ? new Date() : null,
      },
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
