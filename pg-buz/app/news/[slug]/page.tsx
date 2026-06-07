import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Article Not Found</h1>
          <Link href="/" className="text-premium-gold hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-navy-dark text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-premium-gold rounded flex items-center justify-center font-bold text-navy-dark">PB</div>
            <div>
              <div className="text-2xl font-bold">PG BUZ</div>
              <div className="text-xs text-gray-300">The Voice of India's PG Industry</div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="hover:text-premium-gold">Home</Link>
            <Link href="#" className="hover:text-premium-gold">News</Link>
            <Link href="#" className="hover:text-premium-gold">Cities</Link>
            <Link href="#" className="hover:text-premium-gold">Investments</Link>
            <Link href="#" className="hover:text-premium-gold">Community</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-premium-gold">Home</Link>
          <span>›</span>
          <Link href="#" className="hover:text-premium-gold">News</Link>
          <span>›</span>
          <span className="text-navy-dark">{article.city}</span>
        </div>
        <h1 className="text-4xl font-bold text-navy-dark mb-4">{article.aiTitle}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>{article.city}</span>
          <span>•</span>
          <span>{new Date(article.createdAt).toLocaleDateString("en-IN")}</span>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">{article.aiContent}</p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Source:{" "}
            <a
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-premium-gold hover:underline"
            >
              {article.originalUrl}
            </a>
          </p>
        </div>
      </main>

      <footer className="bg-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © 2026 PG BUZ. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
