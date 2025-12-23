import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements & Recognition | Career | Jeremiah Joseph",
  description:
    "A journey of achievements, awards, and recognition including certifications from ALX, Google, leadership awards from University of Ibadan, and competition wins like Cardtonic Upskill Program.",
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

