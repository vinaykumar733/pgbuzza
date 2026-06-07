"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export default function ChintuChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      text: "Hi, I'm Chintu 👋\n\nI can help you with:\n• PG News\n• PG Investments\n• Student Housing\n• StayBroker Opportunities\n• Rental Agreements\n• Documentation Services\n\nHow can I help you today?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadRequirement, setLeadRequirement] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showLeadForm]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: inputText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Check if we should show lead form
    const lowerInput = inputText.toLowerCase();
    const shouldGetLead =
      lowerInput.includes("investment") ||
      lowerInput.includes("pg for sale") ||
      lowerInput.includes("rental agreement") ||
      lowerInput.includes("service") ||
      lowerInput.includes("help me") ||
      lowerInput.includes("contact") ||
      lowerInput.includes("call me") ||
      lowerInput.includes("i need") ||
      lowerInput.includes("i want");

    if (shouldGetLead) {
      setShowLeadForm(true);
    } else {
      // Generate a response
      setTimeout(() => {
        const responses = [
          "Great question! I can help you with that. Could you tell me a bit more about what you're looking for?",
          "I'd be happy to help! Let me connect you with our team. Can you share your details?",
          "That's a common query! Let me gather some information to assist you better.",
          "I understand! Let's get your requirements first so we can help you effectively.",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            role: "assistant",
            text: randomResponse,
          },
        ]);
        setShowLeadForm(true);
      }, 500);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/chintu-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          phone: leadPhone,
          requirement: leadRequirement,
        }),
      });

      setLeadSubmitted(true);
      setShowLeadForm(false);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          text: "Thank you! We've received your details and our team will contact you shortly! 😊",
        },
      ]);
    } catch (error) {
      console.error("Error submitting lead:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-premium-gold text-navy-dark w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:bg-yellow-400 transition-all hover:scale-110"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-[90vw] flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="bg-navy-dark text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-premium-gold rounded-full flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <div className="font-bold text-lg">Chintu</div>
                <div className="text-xs text-gray-300">
                  Your PG Assistant
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:text-premium-gold transition"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-xl ${msg.role === "user" ? "bg-premium-gold text-navy-dark" : "bg-white text-gray-800 shadow-md"}`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Lead Form */}
            {showLeadForm && !leadSubmitted && (
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="font-bold text-navy-dark mb-4">
                  Let's help you! Share your details:
                </h3>
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Requirement *
                    </label>
                    <textarea
                      value={leadRequirement}
                      onChange={(e) => setLeadRequirement(e.target.value)}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy-dark text-white py-2 px-4 rounded-lg font-semibold hover:bg-navy transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-navy-dark focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-premium-gold text-navy-dark w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
