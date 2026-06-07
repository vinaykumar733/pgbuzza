import Link from "next/link";
import Header from "@/components/Header";
import MarqueeTicker from "@/components/MarqueeTicker";

const sampleNews = [
  {
    id: "1",
    aiTitle: "Whitefield PG Demand Expected To Rise",
    aiContent: "",
    city: "Bangalore",
    createdAt: new Date(),
    slug: "",
  },
];

const cities = [
  {
    name: "Bangalore",
    slug: "bangalore-pg-news",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
    occupancy: "90%",
    rentalGrowth: "+8%",
    demand: "High",
    studentInsights: "200,000+ students",
  },
  {
    name: "Hyderabad",
    slug: "hyderabad-pg-news",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    occupancy: "88%",
    rentalGrowth: "+10%",
    demand: "Very High",
    studentInsights: "150,000+ students",
  },
  {
    name: "Chennai",
    slug: "chennai-pg-investments",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80",
    occupancy: "92%",
    rentalGrowth: "+7%",
    demand: "High",
    studentInsights: "120,000+ students",
  },
  {
    name: "Pune",
    slug: "pune-student-housing",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    occupancy: "85%",
    rentalGrowth: "+12%",
    demand: "High",
    studentInsights: "180,000+ students",
  },
  {
    name: "Mumbai",
    slug: "mumbai-pg-market",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80",
    occupancy: "95%",
    rentalGrowth: "+5%",
    demand: "Very High",
    studentInsights: "250,000+ students",
  },
  {
    name: "Delhi NCR",
    slug: "delhi-ncr-pg-news",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    occupancy: "87%",
    rentalGrowth: "+9%",
    demand: "High",
    studentInsights: "220,000+ students",
  },
];

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MarqueeTicker news={sampleNews} />
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy-dark mb-2 text-center">
          City Intelligence
        </h1>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Get the latest insights on PG demand, occupancy rates, rental growth,
          and student housing trends for major Indian cities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={`/${city.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {city.name}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-xs text-gray-500 uppercase mb-1">
                      Occupancy
                    </div>
                    <div className="text-2xl font-bold text-premium-gold">
                      {city.occupancy}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-xs text-gray-500 uppercase mb-1">
                      Rental Growth
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {city.rentalGrowth}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">PG Demand</span>
                    <span className="font-semibold text-orange-600">
                      {city.demand}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Student Population</span>
                    <span className="font-semibold text-navy-dark">
                      {city.studentInsights}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-navy-dark text-white py-3 px-4 rounded-lg font-semibold hover:bg-navy transition">
                  View City Details →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-gray-400">
            © 2026 PG BUZ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
