"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import MarqueeTicker from "@/components/MarqueeTicker";

// Sample news data
const sampleNews = [
  {
    id: "1",
    aiTitle: "Whitefield PG Demand Expected To Rise Following Metro Expansion",
    aiContent:
      "The new metro line in Whitefield is set to boost PG occupancy rates by 15-20% in the next 6 months, according to industry experts.",
    city: "Bangalore",
    category: "Market Updates",
    isBreaking: true,
    isTrending: true,
    createdAt: new Date(),
    slug: "whitefield-pg-demand-expected-to-rise-following-metro-expansion",
  },
  {
    id: "2",
    aiTitle: "Student Housing Market Booms in Hyderabad Amid IT Hiring Surge",
    aiContent:
      "Increased hiring by tech companies in Hyderabad has led to a 25% jump in demand for student housing and PG accommodations.",
    city: "Hyderabad",
    category: "Student Housing",
    isBreaking: false,
    isTrending: true,
    createdAt: new Date(Date.now() - 86400000),
    slug: "student-housing-market-booms-in-hyderabad-amid-it-hiring-surge",
  },
  {
    id: "3",
    aiTitle: "Mumbai PG Investors Eye Thane and Navi Mumbai Opportunities",
    aiContent:
      "Rising property prices in South Mumbai have pushed investors towards Thane and Navi Mumbai for PG investments.",
    city: "Mumbai",
    category: "Investment",
    isBreaking: false,
    isTrending: false,
    createdAt: new Date(Date.now() - 172800000),
    slug: "mumbai-pg-investors-eye-thane-and-navi-mumbai-opportunities",
  },
  {
    id: "4",
    aiTitle: "Chennai Commercial PG Properties Report 92% Occupancy",
    aiContent:
      "Chennai's commercial PG segment is seeing unprecedented demand with occupancy rates touching 92% in key locations.",
    city: "Chennai",
    category: "Market Updates",
    isBreaking: false,
    isTrending: false,
    createdAt: new Date(Date.now() - 259200000),
    slug: "chennai-commercial-pg-properties-report-92-occupancy",
  },
  {
    id: "5",
    aiTitle: "Pune PG Owners Report 10% Rental Growth in 2026",
    aiContent:
      "PG owners in Pune have reported an average 10% increase in rental rates for the first quarter of 2026.",
    city: "Pune",
    category: "Market Updates",
    isBreaking: false,
    isTrending: true,
    createdAt: new Date(Date.now() - 345600000),
    slug: "pune-pg-owners-report-10-rental-growth-in-2026",
  },
  {
    id: "6",
    aiTitle: "Delhi NCR Co-living Sector Sees New Investments",
    aiContent:
      "Venture capital firms are investing heavily in the co-living sector in Delhi NCR, boosting the PG market.",
    city: "Delhi NCR",
    category: "Investment",
    isBreaking: false,
    isTrending: false,
    createdAt: new Date(Date.now() - 432000000),
    slug: "delhi-ncr-co-living-sector-sees-new-investments",
  },
];

const cities = [
  "All Cities",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Mumbai",
  "Delhi NCR",
];
const categories = [
  "All Categories",
  "News",
  "Market Updates",
  "Investment",
  "Student Housing",
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredNews = sampleNews.filter((item) => {
    const matchesSearch =
      item.aiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.aiContent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity =
      selectedCity === "All Cities" || item.city === selectedCity;
    const matchesCategory =
      selectedCategory === "All Categories" || item.category === selectedCategory;
    return matchesSearch && matchesCity && matchesCategory;
  });

  const breakingNews = sampleNews.filter((item) => item.isBreaking);
  const trendingNews = sampleNews.filter((item) => item.isTrending);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MarqueeTicker news={sampleNews} />
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy-dark mb-2">
          Latest PG News
        </h1>
        <p className="text-gray-600 mb-10">
          Stay updated with the latest news from India's PG industry
        </p>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search News
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
                placeholder="Search for news..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter By City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter By Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-dark mb-6">
              All News
            </h2>
            <div className="space-y-6">
              {filteredNews.length === 0 ? (
                <div className="bg-gray-50 rounded-xl p-10 text-center">
                  <p className="text-gray-500">No news found.</p>
                </div>
              ) : (
                filteredNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {item.isBreaking && (
                          <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold">
                            Breaking
                          </span>
                        )}
                        {item.isTrending && (
                          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold">
                            Trending
                          </span>
                        )}
                        <span className="text-xs text-premium-gold font-semibold">
                          {item.city} •{" "}
                          {new Date(item.createdAt).toLocaleDateString("en-IN")}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-dark mb-3 hover:text-premium-gold">
                        {item.aiTitle}
                      </h3>
                      <p className="text-gray-600">{item.aiContent}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Breaking News */}
            {breakingNews.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                  🚨 Breaking News
                </h3>
                <div className="space-y-4">
                  {breakingNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="block"
                    >
                      <h4 className="font-semibold text-navy-dark hover:text-premium-gold">
                        {item.aiTitle}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(item.createdAt).toLocaleDateString("en-IN")}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Trending News */}
            {trendingNews.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
                  🔥 Trending News
                </h3>
                <div className="space-y-4">
                  {trendingNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="block"
                    >
                      <h4 className="font-semibold text-navy-dark hover:text-premium-gold">
                        {item.aiTitle}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.city}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-gray-400">
            © 2026 PG BUZ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
