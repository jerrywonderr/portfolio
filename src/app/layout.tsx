import type { Metadata } from "next";
import { Cabin_Sketch } from "next/font/google";
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
  title: "Jeremiah's Portfolio",
  description: "Portfolio for Jeremiah Joseph (jerrywonderr)",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const cabin = Cabin_Sketch({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cabin-sketch",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.variable}  ${geistSans.variable} ${cabin.className} antialiased`}
      >
        {/* <ThemeToggle /> */}
        {children}
        <div className="flex justify-center items-center p-6 bg-primary">
          <p className="text-primaryForeground text-center">
            Designed and developed by Jeremiah Joseph using Next.js and
            TailwindCSS.
          </p>
        </div>
      </body>
    </html>
  );
}
