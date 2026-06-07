import Link from "next/link";
import Header from "@/components/Header";
import MarqueeTicker from "@/components/MarqueeTicker";

const sampleNews = [
  {
    id: "1",
    aiTitle: "Investment Opportunities Growing",
    aiContent: "",
    city: "Bangalore",
    createdAt: new Date(),
    slug: "",
  },
];

const investmentOpportunities = [
  {
    id: "1",
    title: "Prime PG Property in Whitefield, Bangalore",
    city: "Bangalore",
    price: "₹2.5 Crore",
    roi: "18%",
    occupancy: "95%",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    title: "Student Housing Complex in Gachibowli, Hyderabad",
    city: "Hyderabad",
    price: "₹1.8 Crore",
    roi: "20%",
    occupancy: "92%",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    title: "Commercial PG in Andheri, Mumbai",
    city: "Mumbai",
    price: "₹4 Crore",
    roi: "15%",
    occupancy: "98%",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80",
  },
];

const marketReports = [
  {
    title: "Q1 2026 PG Market Report",
    description: "Comprehensive analysis of PG market trends across India",
    date: "Jan 2026",
  },
  {
    title: "Student Housing Investment Guide 2026",
    description: "Complete guide to investing in student housing properties",
    date: "Feb 2026",
  },
  {
    title: "ROI Analysis for PG Properties",
    description: "Detailed ROI calculations and projections for PG investments",
    date: "Mar 2026",
  },
];

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MarqueeTicker news={sampleNews} />
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-navy-dark mb-2">
          PG Investments
        </h1>
        <p className="text-gray-600 mb-10">
          Discover the best PG investment opportunities, market reports, and
          ROI insights across India
        </p>

        {/* Hero Section for StayBroker */}
        <section className="bg-gradient-to-br from-navy-dark to-navy text-white rounded-2xl p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">
                StayBroker Featured Opportunities
              </h2>
              <p className="text-gray-300 mb-6">
                Explore verified PG deals, buildings for sale, and connect with
                investors through StayBroker
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://staybroker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-premium-gold text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
                >
                  View PG Buildings For Sale
                </a>
                <a
                  href="https://staybroker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy-dark transition"
                >
                  Explore Verified PG Deals
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy-dark mb-8">
            Featured Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={opp.image}
                  alt={opp.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-premium-gold font-semibold mb-2">
                    {opp.city}
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark mb-4">
                    {opp.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Price</div>
                      <div className="font-bold text-navy-dark">{opp.price}</div>
                    </div>
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">ROI</div>
                      <div className="font-bold text-green-600">{opp.roi}</div>
                    </div>
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Occupancy</div>
                      <div className="font-bold text-premium-gold">
                        {opp.occupancy}
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-navy-dark text-white py-3 px-4 rounded-lg font-semibold hover:bg-navy transition">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Reports */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy-dark mb-8">
            Market Reports & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketReports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <div className="text-xs text-premium-gold font-semibold mb-3">
                  {report.date}
                </div>
                <h3 className="text-lg font-bold text-navy-dark mb-3">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {report.description}
                </p>
                <button className="text-premium-gold font-semibold hover:underline">
                  Download Report →
                </button>
              </div>
            ))}
          </div>
        </section>
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
