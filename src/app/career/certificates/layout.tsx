import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | Career | Jeremiah Joseph",
  description:
    "Professional certifications and achievements earned by Jeremiah Joseph. Certifications from ALX, and other leading technology education platforms.",
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

