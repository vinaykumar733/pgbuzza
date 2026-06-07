"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  id: string;
  aiTitle: string;
  city: string;
  status: string;
  createdAt: string;
  isBreaking: boolean;
  isTrending: boolean;
}

export default function NewsManagement() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  const deleteArticle = async (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
      setArticles(articles.filter((a) => a.id !== id));
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-navy-dark">News Management</h1>
          <p className="text-gray-600">Manage your news articles</p>
        </div>
        <Link
          href="/admin/news/new"
          className="bg-navy-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy transition"
        >
          + Create New Article
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {article.isBreaking && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        Breaking
                      </span>
                    )}
                    {article.isTrending && (
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                        Trending
                      </span>
                    )}
                    <p className="font-medium text-gray-900 line-clamp-1">
                      {article.aiTitle}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{article.city}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.status === "PUBLISHED"
                        ? "bg-green-100 text-green-800"
                        : article.status === "DRAFT"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(article.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-medium space-x-2">
                  <Link
                    href={`/admin/news/${article.id}`}
                    className="text-navy-dark hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteArticle(article.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {articles.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No articles found. Create your first article!
          </div>
        )}
      </div>
    </div>
  );
}
