import Header from "@/lib/components/Header";
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
  title: "Jeremiah Joseph | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in full-stack development, infrastructure architecture, and production-scale applications. Expert in React Native, TypeScript, cloud infrastructure, and distributed systems.",
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
