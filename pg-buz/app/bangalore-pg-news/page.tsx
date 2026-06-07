import Link from "next/link";

export default function BangalorePGNews() {
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
            <Link href="#" className="bg-premium-gold text-navy-dark px-4 py-2 rounded font-semibold hover:bg-yellow-400">Join Community</Link>
          </nav>
        </div>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-premium-gold">Home</Link>
            <span>›</span>
            <span className="text-navy-dark">Bangalore PG News</span>
          </div>
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Bangalore PG News & Market Intelligence</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Latest updates on PG demand, rental trends, student housing, and investment opportunities in Bangalore.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-dark mb-8">Key Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-premium-gold">
              <div className="text-3xl font-bold text-navy-dark">92%</div>
              <div className="text-gray-600">Average Occupancy Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
              <div className="text-3xl font-bold text-navy-dark">+12%</div>
              <div className="text-gray-600">Rental Growth YoY</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-navy-dark">50K+</div>
              <div className="text-gray-600">Students Inflow</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-navy-dark mb-8">Latest Bangalore PG News</h2>
          <div className="space-y-6">
            <article className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80" alt="Whitefield Metro" className="md:w-64 h-48 object-cover rounded-lg" />
              <div className="flex-1">
                <div className="text-sm text-premium-gold font-semibold mb-2">June 2, 2026 • Whitefield</div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">Whitefield PG Demand Expected To Rise Following Metro Expansion</h3>
                <p className="text-gray-600 mb-4">The new metro line in Whitefield is set to boost PG occupancy rates by 15-20% in the next 6 months, according to industry experts.</p>
                <Link href="#" className="text-premium-gold font-semibold hover:underline">Read More →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="bg-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © 2026 PG BUZ. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
