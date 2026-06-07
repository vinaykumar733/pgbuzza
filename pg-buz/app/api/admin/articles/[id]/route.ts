import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    await prisma.article.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting article:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: params.id },
    });
    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const body = await request.json();
    const article = await prisma.article.update({
      where: { id: params.id },
      data: {
        aiTitle: body.aiTitle,
        aiContent: body.aiContent,
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
        city: body.city,
        topic: body.topic,
        category: body.category,
        tags: JSON.stringify(body.tags || []),
        status: body.status,
        isBreaking: body.isBreaking,
        isTrending: body.isTrending,
        featuredImageUrl: body.featuredImageUrl,
        publishedAt: body.status === "PUBLISHED" ? new Date() : null,
      },
    });
    return NextResponse.json(article);
  } catch (error) {
    console.error("Error updating article:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
