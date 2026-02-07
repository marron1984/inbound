import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1220",
};

export const metadata: Metadata = {
  title: {
    default: "Tashima Clinic — Regenerative Stay",
    template: "%s | Tashima Clinic",
  },
  description:
    "Where science restores what time takes away. A curated fusion of luxury hospitality, precision nutrition, and regenerative medicine in the heart of Osaka.",
  keywords: [
    "regenerative medicine",
    "medical tourism Japan",
    "luxury wellness Osaka",
    "stem cell therapy",
    "NAD+ therapy",
    "longevity",
    "Tashima Clinic",
    "DHP City Development",
    "Kanoya",
    "Japanese omotenashi",
    "anti-aging",
    "wellness retreat Japan",
  ],
  authors: [{ name: "Tashima Clinic" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tashima Clinic — Regenerative Stay",
    title: "Where Science Restores What Time Takes Away",
    description:
      "A curated fusion of luxury hospitality, precision nutrition, and regenerative medicine in the heart of Osaka.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tashima Clinic — Regenerative Stay",
    description: "Where Science Restores What Time Takes Away.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
