"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: "📊" },
  { name: "News Management", href: "/admin/news", icon: "📰" },
  { name: "Auto News Control", href: "/admin/auto-news", icon: "🤖" },
  { name: "Homepage Control", href: "/admin/homepage", icon: "🏠" },
  { name: "Document Requests", href: "/admin/doc-requests", icon: "📋" },
  { name: "Chintu Leads", href: "/admin/chintu-leads", icon: "💬" },
  { name: "Media Library", href: "/admin/media", icon: "📁" },
  { name: "Buzz AI", href: "/admin/buzz-ai", icon: "🧠" },
  { name: "SEO Manager", href: "/admin/seo", icon: "🔍" },
  { name: "Advertisements", href: "/admin/ads", icon: "📢" },
  { name: "StayBroker", href: "/admin/staybroker", icon: "🏢" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check auth status (simple for now)
    const checkAuth = () => {
      const hasAuthCookie = document.cookie.includes("adminAuth=true");
      if (
        !hasAuthCookie &&
        pathname !== "/admin/login" &&
        pathname !== "/admin/setup"
      ) {
        router.push("/admin/login");
      } else if (hasAuthCookie) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Don't show sidebar on login or setup pages
  if (pathname === "/admin/login" || pathname === "/admin/setup") {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-dark text-white fixed h-full flex flex-col">
        <div className="p-6 border-b border-navy">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-premium-gold rounded flex items-center justify-center font-bold text-navy-dark">
              PB
            </div>
            <div>
              <div className="text-xl font-bold">PG BUZ</div>
              <div className="text-xs text-gray-400">Admin Panel</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                pathname === item.href
                  ? "bg-premium-gold/20 text-premium-gold"
                  : "text-gray-300 hover:bg-navy hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-navy">
          <button
            onClick={() => {
              document.cookie = "adminAuth=; path=/; max-age=0";
              router.push("/admin/login");
            }}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-navy hover:text-white transition"
          >
            <span className="text-xl">🚪</span>
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">{children}</main>
    </div>
  );
}
