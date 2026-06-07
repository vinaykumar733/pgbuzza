"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewArticlePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    aiTitle: "",
    aiContent: "",
    metaTitle: "",
    metaDescription: "",
    city: "Bangalore",
    topic: "PG Business",
    category: "News",
    tags: "",
    status: "DRAFT",
    isBreaking: false,
    isTrending: false,
    featuredImageUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(",").map((t) => t.trim()),
        }),
      });

      if (response.ok) {
        router.push("/admin/news");
      }
    } catch (error) {
      console.error("Error creating article:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-navy-dark mb-2">
          Create New Article
        </h1>
        <button
          onClick={() => router.back()}
          className="text-premium-gold hover:underline"
        >
          ← Back to News Management
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-sm p-6 space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Article Title
          </label>
          <input
            type="text"
            value={formData.aiTitle}
            onChange={(e) =>
              setFormData({ ...formData, aiTitle: e.target.value })
            }
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
            placeholder="Enter article title"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Article Content
          </label>
          <textarea
            value={formData.aiContent}
            onChange={(e) =>
              setFormData({ ...formData, aiContent: e.target.value })
            }
            required
            rows={15}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
            placeholder="Write your article content here..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>
            <select
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
            >
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi NCR">Delhi NCR</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
            >
              <option value="News">News</option>
              <option value="Market Updates">Market Updates</option>
              <option value="Investment">Investment</option>
              <option value="Student Housing">Student Housing</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
            placeholder="PG, Bangalore, Rental, Student Housing"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Meta Title
            </label>
            <input
              type="text"
              value={formData.metaTitle}
              onChange={(e) =>
                setFormData({ ...formData, metaTitle: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="SEO meta title"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Meta Description
            </label>
            <input
              type="text"
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData({ ...formData, metaDescription: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="SEO meta description"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Featured Image URL
          </label>
          <input
            type="url"
            value={formData.featuredImageUrl}
            onChange={(e) =>
              setFormData({ ...formData, featuredImageUrl: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex items-center gap-6 pt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isBreaking}
              onChange={(e) =>
                setFormData({ ...formData, isBreaking: e.target.checked })
              }
              className="w-5 h-5"
            />
            <span className="font-medium text-gray-700">
              Mark as Breaking News
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isTrending}
              onChange={(e) =>
                setFormData({ ...formData, isTrending: e.target.checked })
              }
              className="w-5 h-5"
            />
            <span className="font-medium text-gray-700">Mark as Trending</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Status
          </label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
          >
            <option value="DRAFT">Draft</option>
            <option value="PENDING_APPROVAL">Pending Approval</option>
            <option value="PUBLISHED">Publish Now</option>
          </select>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-navy-dark text-white rounded-lg font-semibold hover:bg-navy disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Article"}
          </button>
        </div>
      </form>
    </div>
  );
}
