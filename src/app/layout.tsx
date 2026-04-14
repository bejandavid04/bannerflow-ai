import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BannerFlow AI - Generate Ad Banners with AI",
  description: "Create stunning ad banners for Meta, Google, and LinkedIn in seconds. AI-powered banner generation, editing, resizing, and export.",
  keywords: ["AI", "banner generator", "ad creative", "Meta ads", "Google ads", "LinkedIn ads", "design automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
