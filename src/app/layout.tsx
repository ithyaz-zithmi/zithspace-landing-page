import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  title:
    "ZithSpace - One Platform to Plan, Manage, and Grow Your Entire Organization",
  description:
    "Zithspace unifies HRMS, Work, Finance, and Admin into one structured platform—giving your teams complete visibility and control from strategy to execution.",
  keywords: [
    "HRMS",
    "HR Management",
    "Business OS",
    "Project Management",
    "Finance Management",
    "Work Management",
    "Zithspace",
    "Enterprise Software",
  ],
  openGraph: {
    title: "ZithSpace - Unified Business Operating System",
    description:
      "One platform to manage Work, HR, Finance, and Admin. Complete visibility and control from strategy to execution.",
    type: "website",
    siteName: "ZithSpace",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZithSpace - Unified Business Operating System",
    description:
      "One platform to manage Work, HR, Finance, and Admin. Complete visibility and control from strategy to execution.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
