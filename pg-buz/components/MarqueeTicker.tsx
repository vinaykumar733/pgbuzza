"use client";

export default function MarqueeTicker({ news }: { news: any[] }) {
  return (
    <div className="bg-breaking-red text-white py-2 overflow-hidden">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        <span className="font-bold mr-8 px-3 py-1 bg-yellow-400 text-red-900 rounded">BREAKING NEWS</span>
        {news.map((item, index) => (
          <span key={index} className="mx-8">• {item.aiTitle}</span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
