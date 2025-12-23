import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Career | Jeremiah Joseph",
  description:
    "Professional experience and contract engagements. Full-stack development roles at GoCreatorsHub, Peekvibes, NexaPay, Smarg, and other leading companies. Expertise in React Native, TypeScript, NestJS, and cloud infrastructure.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

