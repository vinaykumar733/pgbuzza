import type { Metadata } from "next";
import "./globals.css";
import ChintuChatbot from "@/components/ChintuChatbot";

export const metadata: Metadata = {
  title: "PG BUZ - The Voice of India's PG Industry",
  description:
    "India's Largest PG Business News & Community Platform. News. Insights. Investments. Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChintuChatbot />
      </body>
    </html>
  );
}
