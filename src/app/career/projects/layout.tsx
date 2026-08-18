import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Career | Jeremiah Joseph",
  description:
    "Selected work by Jeremiah Joseph outside of employment, including a conference attendance platform built with Next.js and Supabase, and a Hedera hackathon prototype.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

