import Header from "@/lib/components/Header";
import StructuredData from "@/lib/components/StructuredData";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://jerrywonder.dev"
  ),
  title: {
    default: "Jeremiah Joseph | Software Engineer",
    template: "%s | Jeremiah Joseph",
  },
  description:
    "Software engineer building mobile and backend systems. React Native and Expo on the front, NestJS, PostgreSQL and Supabase behind it. Apps live on the App Store and Google Play.",
  keywords: [
    "Jeremiah Joseph",
    "Software Engineer",
    "React Native Developer",
    "Expo Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Mobile App Developer",
    "Node.js Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Supabase",
    "PostgreSQL",
    "Stripe Connect",
  ],
  authors: [{ name: "Jeremiah Joseph" }],
  creator: "Jeremiah Joseph",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jerrywonder.dev",
    siteName: "Jeremiah Joseph - Portfolio",
    title: "Jeremiah Joseph | Software Engineer",
    description:
      "Software engineer building mobile and backend systems. React Native and Expo on the front, NestJS, PostgreSQL and Supabase behind it.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jeremiah Joseph - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Joseph | Software Engineer",
    description:
      "Software engineer building mobile and backend systems. React Native and Expo on the front, NestJS, PostgreSQL and Supabase behind it.",
    images: ["/opengraph-image.png"],
    creator: "@jerrywonderr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <StructuredData />
        <Header />
        {children}
        <footer className="border-t border-border bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 py-6">
            <p className="text-sm text-foreground/70 text-center">
              Designed and developed by Jeremiah Joseph using Next.js and
              TailwindCSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
