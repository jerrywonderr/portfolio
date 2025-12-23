import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Career | Jeremiah Joseph",
  description:
    "Personal projects and open-source contributions by Jeremiah Joseph. Explore innovative applications built with React Native, Next.js, TypeScript, and modern web technologies.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

