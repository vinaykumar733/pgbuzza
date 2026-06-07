import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
  const articles = await prisma.article.count();
  const serviceRequests = await prisma.serviceRequest.count();
  const pendingRequests = await prisma.serviceRequest.count({
    where: { status: "PENDING" },
  });
  const completedRequests = await prisma.serviceRequest.count({
    where: { status: "COMPLETED" },
  });
  const publishedArticles = await prisma.article.count({
    where: { status: "PUBLISHED" },
  });

  const recentRequests = await prisma.serviceRequest.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  const recentArticles = await prisma.article.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-6">
      <header className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-navy-dark">Dashboard</h1>
        <p className="text-gray-600">Welcome to PG BUZ Admin Panel</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total News Articles</p>
              <p className="text-3xl font-bold text-navy-dark">{articles}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              📰
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">
            {publishedArticles} published
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Service Requests</p>
              <p className="text-3xl font-bold text-navy-dark">{serviceRequests}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
              📋
            </div>
          </div>
          <p className="text-yellow-600 text-sm mt-2">
            {pendingRequests} pending
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed Requests</p>
              <p className="text-3xl font-bold text-navy-dark">{completedRequests}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
              ✅
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Document Uploads</p>
              <p className="text-3xl font-bold text-navy-dark">0</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
              📄
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Service Requests */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-navy-dark mb-4">Recent Service Requests</h2>
          <div className="space-y-3">
            {recentRequests.map((req) => (
              <div
                key={req.id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{req.name}</p>
                    <p className="text-sm text-gray-600">{req.serviceRequired}</p>
                    <p className="text-xs text-gray-500 mt-1">{req.mobileNumber}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      req.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : req.status === "IN_PROGRESS"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
            {recentRequests.length === 0 && (
              <p className="text-gray-500 text-center py-4">No recent requests</p>
            )}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-navy-dark mb-4">Recent Articles</h2>
          <div className="space-y-3">
            {recentArticles.map((article) => (
              <div
                key={article.id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 line-clamp-2">
                      {article.aiTitle}
                    </p>
                    <p className="text-sm text-gray-600">{article.city}</p>
                  </div>
                  <span
                    className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      article.status === "PUBLISHED"
                        ? "bg-green-100 text-green-800"
                        : article.status === "DRAFT"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {article.status}
                  </span>
                </div>
              </div>
            ))}
            {recentArticles.length === 0 && (
              <p className="text-gray-500 text-center py-4">No recent articles</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
