import Link from "next/link";

export default function HyderabadPGNews() {
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
            <span className="text-navy-dark">Hyderabad PG News</span>
          </div>
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Hyderabad PG News & Market Intelligence</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Latest updates on PG demand, rental trends, student housing, and investment opportunities in Hyderabad.</p>
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
