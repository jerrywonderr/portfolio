import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Jeremiah Joseph",
  description:
    "Explore Jeremiah Joseph's professional experience, projects, and achievements. Software engineer working across mobile apps, backend services, and cloud infrastructure.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

