import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Jeremiah Joseph",
  description:
    "Explore Jeremiah Joseph's professional experience, projects, and achievements. Senior Software Engineer with expertise in full-stack development, mobile applications, and cloud infrastructure.",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

