import type { Metadata } from "next";

export const metadata: Metadata = {
  // The root layout's title template already appends "| Jeremiah Joseph".
  // Including it here too produced "Career | Jeremiah Joseph | Jeremiah Joseph".
  title: "Career",
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

