"use client";

import { useState } from "react";

const AREAS = [
  "whitefield",
  "marathahalli",
  "hsr-layout",
  "electronic-city",
  "koramangala",
  "btm-layout",
  "bellandur",
  "sarjapur-road",
  "kr-puram",
  "indiranagar",
  "yelahanka",
];

const SERVICES = [
  "rental-agreement",
  "lease-agreement",
  "commercial-lease-agreement",
  "pg-management-agreement",
  "leave-license-agreement",
  "gst-registration",
  "msme-registration",
  "business-documentation",
  "affidavit-services",
  "loan-documentation-support",
  "legal-documentation-assistance",
];

export default function ServiceAreaPage({ params }: { params: { service: string; area: string } }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const areaName = params.area
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const serviceName = params.service
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const pageTitle = `${serviceName} in ${areaName}, Bangalore`;
  const metaDescription = `Get ${serviceName.toLowerCase()} in ${areaName}, Bangalore. Doorstep pickup, same-day processing, WhatsApp support available.`;

  const faqs = [
    {
      question: `How to get ${serviceName.toLowerCase()} in ${areaName}?`,
      answer: `Contact PG Buz for ${serviceName.toLowerCase()} in ${areaName}. We offer doorstep pickup and same-day processing.`,
    },
    {
      question: `What documents are required for ${serviceName.toLowerCase()}?`,
      answer: `Please contact us for a complete list of documents required for ${serviceName.toLowerCase()}.`,
    },
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${areaName}?`,
      answer: `Our pricing is competitive and transparent. Contact us for a quote for ${serviceName.toLowerCase()}.`,
    },
    {
      question: `What is the processing time for ${serviceName.toLowerCase()}?`,
      answer: `We offer same-day processing for most services in ${areaName}.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-navy-dark text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-premium-gold rounded flex items-center justify-center font-bold text-navy-dark">
              PB
            </div>
            <div>
              <div className="text-2xl font-bold">PG BUZ</div>
              <div className="text-xs text-gray-300">The Voice of India's PG Industry</div>
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark to-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Professional {serviceName.toLowerCase()} services in {areaName}, Bangalore. Doorstep pickup and delivery!
          </p>

          {/* Features Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-premium-gold/20 rounded-lg p-4">
              <div className="text-3xl mb-2">🚚</div>
              <div className="text-sm">Doorstep Document Collection</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm">Same-Day Pickup Available</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-4">
              <div className="text-3xl mb-2">🏍️</div>
              <div className="text-sm">Rapido Collection Available</div>
            </div>
            <div className="bg-premium-gold/20 rounded-lg p-4">
              <div className="text-3xl mb-2">📦</div>
              <div className="text-sm">Home Delivery Available</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-premium-gold text-navy-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
            >
              Get Started Now
            </button>
            <a
              href="https://wa.me/916363223446"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center gap-2"
            >
              <span>WhatsApp Us</span>
              <span>📱</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-6">{pageTitle}</h2>
              <p className="text-gray-600 text-lg mb-4">
                Looking for {serviceName.toLowerCase()} in {areaName}? PG Buz offers professional document services with doorstep pickup and delivery across Bangalore.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                We serve {areaName} and surrounding areas with quick, reliable, and affordable document services. Our team is dedicated to making your documentation process smooth and hassle-free.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-navy-dark mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Doorstep document collection in {areaName}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Same-day pickup available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Document collection through Rapido</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Home delivery available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Soft copy delivery available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Printed copy delivery available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Courier delivery across Karnataka</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600">✅</span>
                    <span>Express processing available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {/* Quick Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-navy-dark mb-6">Request Your {serviceName}</h3>
                <LeadForm
                  defaultService={serviceName}
                  defaultLocation={areaName}
                  onSuccess={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-navy-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © 2026 PG BUZ. All rights reserved.
        </div>
      </footer>

      {isFormOpen && (
        <ServiceRequestModal
          service={serviceName}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}

function LeadForm({
  defaultService,
  defaultLocation,
  onSuccess,
}: {
  defaultService: string;
  defaultLocation: string;
  onSuccess: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(defaultLocation);
  const [service, setService] = useState(defaultService);
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
          mobileNumber: phone,
          city: location,
          serviceRequired: service,
        }),
      });

      setIsSuccess(true);
      onSuccess();
    } catch (error) {
      console.error("Error submitting request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-navy-dark mb-2">Request Submitted!</h3>
        <p className="text-gray-600 mb-4">Our team will contact you shortly.</p>
        <a
          href="https://wa.me/916363223446"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
        >
          Contact on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Location *</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-dark focus:border-transparent"
          placeholder="Enter your location"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Required *</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Documents</label>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" multiple className="w-full" />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy-dark text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy transition disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Get Your Quote"}
      </button>
      <div className="text-center">
        <a
          href="https://wa.me/916363223446"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:underline"
        >
          Or contact us on WhatsApp →
        </a>
      </div>
    </form>
  );
}

function ServiceRequestModal({
  service,
  onClose,
}: {
  service: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-navy-dark">{service}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">
            ×
          </button>
        </div>
        <LeadForm
          defaultService={service}
          defaultLocation="Bangalore"
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
}
