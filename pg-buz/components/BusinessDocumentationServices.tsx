"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: 1,
    icon: "🏠",
    name: "Rental Agreement",
    description:
      "Professional rental agreement drafting and registration services",
    slug: "rental-agreement",
  },
  {
    id: 2,
    icon: "📄",
    name: "Lease Agreement",
    description: "Comprehensive lease agreement documentation and support",
    slug: "lease-agreement",
  },
  {
    id: 3,
    icon: "🏢",
    name: "Commercial Lease Agreement",
    description: "Specialized commercial property lease documentation",
    slug: "commercial-lease-agreement",
  },
  {
    id: 4,
    icon: "🤝",
    name: "PG Management Agreement",
    description: "PG business management and partnership agreements",
    slug: "pg-management-agreement",
  },
  {
    id: 5,
    icon: "📝",
    name: "PG Operator Agreement",
    description: "Operator contracts and agreements for PG businesses",
    slug: "pg-operator-agreement",
  },
  {
    id: 6,
    icon: "📋",
    name: "Leave & License Agreement",
    description: "Leave and license agreement documentation services",
    slug: "leave-license-agreement",
  },
  {
    id: 7,
    icon: "🏛️",
    name: "GST Registration",
    description: "Complete GST registration and compliance support",
    slug: "gst-registration",
  },
  {
    id: 8,
    icon: "🏪",
    name: "MSME Registration",
    description: "MSME/UDYAM registration and certification services",
    slug: "msme-registration",
  },
  {
    id: 9,
    icon: "📑",
    name: "Business Documentation",
    description: "Complete business documentation and legal paperwork",
    slug: "business-documentation",
  },
  {
    id: 10,
    icon: "📜",
    name: "Affidavit Services",
    description: "Notarized affidavits and legal declaration services",
    slug: "affidavit-services",
  },
  {
    id: 11,
    icon: "🏦",
    name: "Loan Documentation Support",
    description: "Assistance with business and property loan documents",
    slug: "loan-documentation-support",
  },
  {
    id: 12,
    icon: "⚖️",
    name: "Legal Documentation Assistance",
    description: "Comprehensive legal documentation support services",
    slug: "legal-documentation-assistance",
  },
];

export default function BusinessDocumentationServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="py-16 bg-gray-50">
      {/* Marketing Banner */}
      <div className="bg-navy-dark text-white py-8 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Rental Agreement Made Easy!
            </h3>
            <p className="text-gray-300">
              Submit Documents Online • Document Pickup Available • Same-Day
              Processing Available • Doorstep Delivery Available
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">🚚</div>
              <div className="text-sm">Doorstep Collection</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-sm">Same-Day Pickup</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">🏍️</div>
              <div className="text-sm">Rapido Collection</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">📦</div>
              <div className="text-sm">Home Delivery</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">📄</div>
              <div className="text-sm">Soft Copy</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">🖨️</div>
              <div className="text-sm">Printed Copy</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-3">
              <div className="text-2xl mb-1">📬</div>
              <div className="text-sm">Courier (Karnataka)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-dark mb-4">
            BUSINESS & DOCUMENTATION SERVICES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional documentation and compliance services for your PG and
            real estate business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-navy-dark mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`/${service.slug}-bangalore`}
                  className="w-full bg-navy-dark text-white py-2 px-4 rounded-lg font-semibold hover:bg-navy transition text-center"
                >
                  Learn More
                </a>
                <button
                  onClick={() => {
                    setSelectedService(service.name);
                    setIsModalOpen(true);
                  }}
                  className="w-full border border-navy-dark text-navy-dark py-2 px-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <ServiceRequestForm
          service={selectedService}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}

function ServiceRequestForm({
  service,
  onClose,
}: {
  service: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobileNumber,
          email,
          city,
          serviceRequired: service,
          message,
        }),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-navy-dark mb-2">
            Request Submitted!
          </h3>
          <p className="text-gray-600 mb-6">
            Our team will contact you shortly to assist with your {service}{" "}
            request.
          </p>
          <button
            onClick={onClose}
            className="bg-navy-dark text-white py-2 px-6 rounded-lg font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-navy-dark">{service}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="Enter your city"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Service Required
            </label>
            <input
              type="text"
              value={service}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              placeholder="Tell us more about your requirements..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Documents (PDF, JPG, PNG, DOC, DOCX)
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              multiple
              className="w-full"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-6 bg-navy-dark text-white rounded-lg font-semibold hover:bg-navy transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
