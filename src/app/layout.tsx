import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * CULTI Re FINE - Root Layout
 *
 * Typography System:
 * - Serif: Playfair Display (Headlines - Elegance & Authority)
 * - Sans: Inter (Body - Clarity & Readability)
 *
 * Fonts are loaded via CSS @import for better resilience and flexibility
 * across different build environments.
 */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D5A54",
};

export const metadata: Metadata = {
  title: {
    default: "CULTI Re FINE | 先進予防医療・美容医療",
    template: "%s | CULTI Re FINE",
  },
  description:
    "完全紹介制のプライベートクリニック。50年以上の歴史を持つ天馬病院グループが提供する、エグゼクティブ向け先進医療。Advanced preventive and aesthetic medicine for global executives.",
  keywords: [
    "予防医療",
    "美容医療",
    "NAD+",
    "幹細胞",
    "HIFU",
    "POTENZA",
    "エグゼクティブ",
    "プライベートクリニック",
    "天馬病院",
    "preventive medicine",
    "aesthetic medicine",
    "luxury clinic",
    "Tokyo",
  ],
  authors: [{ name: "CULTI Re FINE" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US", "zh_CN", "zh_TW"],
    siteName: "CULTI Re FINE",
    title: "CULTI Re FINE | Now Exclusive, Future Standard.",
    description:
      "Advanced preventive and aesthetic medicine for global executives. 完全紹介制のプライベートクリニック。",
  },
  twitter: {
    card: "summary_large_image",
    title: "CULTI Re FINE",
    description: "Now Exclusive, Future Standard.",
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
    <html suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Fonts - Playfair Display (Serif) & Inter (Sans) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
