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
  title: "BlueHills AI - AI Solutions",
  description: "BlueHills AI provides cutting-edge AI solutions for businesses.",
  openGraph: {
    title: "BlueHills AI - AI Solutions",
    description: "BlueHills AI provides cutting-edge AI solutions for businesses.",
    url: "https://bluehillsai.com",
    siteName: "BlueHills AI",
    images: [
      {
        url: "https://bluehillsai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BlueHills AI",
      },
    ],
    type: "website",
  },
  icons: "/favicon.ico", // ✅ Correct path
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
