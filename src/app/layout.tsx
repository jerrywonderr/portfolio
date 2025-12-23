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
    default: "Jeremiah Joseph | Senior Software Engineer",
    template: "%s | Jeremiah Joseph",
  },
  description:
    "Senior Software Engineer specializing in full-stack development, infrastructure architecture, and production-scale applications. Expert in React Native, TypeScript, cloud infrastructure, and distributed systems. 8+ production apps, 3+ years experience.",
  keywords: [
    "Jeremiah Joseph",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Cloud Infrastructure",
    "Backend Developer",
    "Mobile App Developer",
    "Node.js Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Software Architect",
    "Production Systems",
    "Scalable Applications",
  ],
  authors: [{ name: "Jeremiah Joseph" }],
  creator: "Jeremiah Joseph",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jerrywonder.dev",
    siteName: "Jeremiah Joseph - Portfolio",
    title: "Jeremiah Joseph | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack development, infrastructure architecture, and production-scale applications. Expert in React Native, TypeScript, and cloud infrastructure.",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Jeremiah Joseph - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Joseph | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack development, infrastructure architecture, and production-scale applications.",
    images: ["/twitter-image.jpeg"],
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
