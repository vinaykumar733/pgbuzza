"use client";

import { useEffect, useState } from "react";

interface ServiceRequest {
  id: string;
  name: string;
  mobileNumber: string;
  email?: string;
  city: string;
  serviceRequired: string;
  message?: string;
  status: string;
  createdAt: string;
}

export default function DocumentRequests() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/service-requests")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/service-requests/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setRequests(
      requests.map((req) => (req.id === id ? { ...req, status } : req))
    );
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-navy-dark mb-2">Document Service Requests</h1>
      <p className="text-gray-600 mb-6">Manage incoming service requests</p>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{req.name}</p>
                  <p className="text-sm text-gray-600">{req.mobileNumber}</p>
                  {req.email && (
                    <p className="text-xs text-gray-500">{req.email}</p>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {req.serviceRequired}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{req.city}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      req.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : req.status === "IN_PROGRESS"
                        ? "bg-blue-100 text-blue-800"
                        : req.status === "COMPLETED"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(req.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-medium space-x-2">
                  {req.status !== "IN_PROGRESS" && (
                    <button
                      onClick={() => updateStatus(req.id, "IN_PROGRESS")}
                      className="text-blue-600 hover:underline"
                    >
                      Start
                    </button>
                  )}
                  {req.status !== "COMPLETED" && (
                    <button
                      onClick={() => updateStatus(req.id, "COMPLETED")}
                      className="text-green-600 hover:underline"
                    >
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {requests.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No service requests yet
          </div>
        )}
      </div>
    </div>
  );
}
