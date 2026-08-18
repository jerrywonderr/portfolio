export interface ProjectItem {
  title: string;
  description: string;
  /** Optional. Omit rather than showing a placeholder or a misleading mockup. */
  image?: string;
  tags: string[];
  githubLink?: string;
  link?: string;
  /** Short honest label, e.g. "Volunteer project" or "Hackathon prototype". */
  context?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Conference Attendance Tracking System",
    context: "Volunteer project · Deployed and used live",
    image: "/assets/spirit-chapel-tracker.png",
    description:
      "Designed and deployed a real-time attendance tracking platform for Spirit Chapel International Church's 4-day conference, enabling QR code-based registration and day-specific attendance verification. Implemented an admin dashboard with real-time analytics to track participant engagement and automatically qualify attendees for gift distribution based on attendance criteria. Built with Next.js for server-side rendering, Supabase for real-time database operations and authentication, and integrated QR code generation and scanning. Handled concurrent attendance scans throughout the event with zero downtime on Vercel.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "TypeScript",
      "QR Codes",
      "Vercel",
      "Real-time Data",
    ],
    link: "https://wrc-attendance-app.vercel.app/",
  },
  {
    title: "Eventra",
    context: "Hackathon prototype · Hedera Web3 Hackathon · Team lead",
    description:
      "Led Team Eventra as team lead in the Hedera Web3 Hackathon, managing a cross-functional team of 6 including a graphics designer, two UI/UX developers, a backend developer, and a frontend developer. Built Eventra, an event management prototype on the Hedera blockchain, with ticket resale, dual payment support (Web3 and Web2), and token incentives for participation. This is a hackathon prototype — the hosted demo is no longer backed by a running database.",
    tags: [
      "Hedera Blockchain",
      "Web3",
      "Team Leadership",
      "Event Management",
      "Blockchain",
      "Smart Contracts",
    ],
    link: "https://eventra-delta.vercel.app/",
  },
];
