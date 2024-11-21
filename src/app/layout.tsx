import type { Metadata } from "next";
import { Cabin_Sketch } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
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
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={` ${geistMono.variable}  ${geistSans.variable} ${cabin.className} antialiased`}
      >
        {children}
        <div className="flex justify-center items-center p-6 bg-black">
          <p className="text-white text-center">
            Designed and developed by Jeremiah Joseph using Next.js and
            TailwindCSS.
          </p>
        </div>
      </body>
    </html>
  );
}
