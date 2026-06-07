import Link from "next/link";
import prisma from "@/lib/prisma";
import MarqueeTicker from "@/components/MarqueeTicker";
import BusinessDocumentationServices from "@/components/BusinessDocumentationServices";
import Header from "@/components/Header";

const cities = [
  {
    name: "Bangalore",
    slug: "bangalore-pg-news",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hyderabad",
    slug: "hyderabad-pg-news",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chennai",
    slug: "chennai-pg-investments",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pune",
    slug: "pune-student-housing",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mumbai",
    slug: "mumbai-pg-market",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Delhi NCR",
    slug: "delhi-ncr-pg-news",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
];

async function getLatestNews() {
  const articles = await prisma.article.findMany({
    take: 8,
    orderBy: { createdAt: "desc" },
  });

  // If no articles in DB, return sample data
  if (articles.length === 0) {
    return [
      {
        id: "1",
        aiTitle:
          "Whitefield PG Demand Expected To Rise Following Metro Expansion",
        aiContent:
          "The new metro line in Whitefield is set to boost PG occupancy rates by 15-20% in the next 6 months, according to industry experts.",
        city: "Bangalore",
        createdAt: new Date(),
        slug: "whitefield-pg-demand-expected-to-rise-following-metro-expansion",
      },
      {
        id: "2",
        aiTitle:
          "Student Housing Market Booms in Hyderabad Amid IT Hiring Surge",
        aiContent:
          "Increased hiring by tech companies in Hyderabad has led to a 25% jump in demand for student housing and PG accommodations.",
        city: "Hyderabad",
        createdAt: new Date(Date.now() - 86400000),
        slug: "student-housing-market-booms-in-hyderabad-amid-it-hiring-surge",
      },
      {
        id: "3",
        aiTitle: "Mumbai PG Investors Eye Thane and Navi Mumbai Opportunities",
        aiContent:
          "Rising property prices in South Mumbai have pushed investors towards Thane and Navi Mumbai for PG investments.",
        city: "Mumbai",
        createdAt: new Date(Date.now() - 172800000),
        slug: "mumbai-pg-investors-eye-thane-and-navi-mumbai-opportunities",
      },
      {
        id: "4",
        aiTitle: "Chennai Commercial PG Properties Report 92% Occupancy",
        aiContent:
          "Chennai's commercial PG segment is seeing unprecedented demand with occupancy rates touching 92% in key locations.",
        city: "Chennai",
        createdAt: new Date(Date.now() - 259200000),
        slug: "chennai-commercial-pg-properties-report-92-occupancy",
      },
    ];
  }

  return articles;
}

export default async function Home() {
  const news = await getLatestNews();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Breaking News Ticker */}
      <MarqueeTicker news={news} />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark to-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            India's Largest PG Business News & Community Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Daily PG market intelligence, investment opportunities, student
            housing insights, and industry updates from across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/investments"
              className="bg-premium-gold text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
            >
              Explore PG Deals
            </Link>
            <a
              href="https://staybroker.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              View StayBroker Listings
            </a>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-navy-dark">
              Latest PG News
            </h2>
            <Link
              href="/news"
              className="text-premium-gold font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-6">
                  <div className="text-xs text-premium-gold font-semibold mb-2">
                    {item.city} •{" "}
                    {new Date(item.createdAt).toLocaleDateString("en-IN")}
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-3 hover:text-premium-gold">
                    {item.aiTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.aiContent?.slice(0, 120)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City Intelligence Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
            City Intelligence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Link key={city.name} href={`/${city.slug}`} className="group">
                <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {city.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <span className="bg-premium-gold/20 px-3 py-1 rounded-full">
                        Occupancy: 90%
                      </span>
                      <span className="bg-green-600/20 px-3 py-1 rounded-full">
                        Growth: +8%
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BusinessDocumentationServices />

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-premium-gold rounded flex items-center justify-center font-bold text-navy-dark">
                  PB
                </div>
                <div className="text-2xl font-bold">PG BUZ</div>
              </div>
              <p className="text-gray-400">
                News. Insights. Investments. Community.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-premium-gold">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-premium-gold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-premium-gold">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/cities" className="hover:text-premium-gold">
                    Cities
                  </Link>
                </li>
                <li>
                  <Link href="/investments" className="hover:text-premium-gold">
                    Investments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-premium-gold">Cities</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/bangalore-pg-news"
                    className="hover:text-premium-gold"
                  >
                    Bangalore
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hyderabad-pg-news"
                    className="hover:text-premium-gold"
                  >
                    Hyderabad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mumbai-pg-market"
                    className="hover:text-premium-gold"
                  >
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pune-student-housing"
                    className="hover:text-premium-gold"
                  >
                    Pune
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-premium-gold">StayBroker</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://staybroker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-premium-gold"
                  >
                    PG Buildings For Sale
                  </a>
                </li>
                <li>
                  <a
                    href="https://staybroker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-premium-gold"
                  >
                    Verified PG Deals
                  </a>
                </li>
                <li>
                  <a
                    href="https://staybroker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-premium-gold"
                  >
                    Connect With Investors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            © 2026 PG BUZ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
