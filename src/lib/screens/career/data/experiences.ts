export type EmploymentType =
  | "full_time"
  | "contract"
  | "freelance"
  | "internship";

export const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  full_time: "Full-time",
  contract: "Contract",
  freelance: "Freelance",
  internship: "Internship",
};

export interface ExperienceItem {
  slug: string;
  startDate: string;
  endDate: string;
  position: string;
  employmentType: EmploymentType;
  logo?: string;
  company: string;
  location?: string;
  link: string;
  /** One or two sentences for compact surfaces like the homepage. */
  summary: string;
  description: string;
  tags: string[];
  /** A short, focused stack shown on compact cards. */
  highlightTags?: string[];
  /** Surfaced in the homepage "Selected Work" section. Curated, not chronological. */
  featured?: boolean;
  certLink?: string;
  certText?: string;
  ongoing?: boolean;
  appStoreLink?: string;
  playStoreLink?: string;
  bannerImage?: string;
}

export const experiences: ExperienceItem[] = [
  {
    slug: "gocreatorshub",
    startDate: "September, 2025",
    endDate: "Present",
    position: "Full Stack Engineer",
    employmentType: "full_time",
    company: "GoCreatorsHub",
    location: "Remote",
    link: "https://gocreatorshub.com/",
    summary:
      "Owns the full creator-campaign pipeline for a brand–creator marketplace, from campaign creation through to Stripe Connect payouts and the admin tooling behind them.",
    description:
      "Own the full creator-campaign pipeline for a brand–creator marketplace — campaign creation, creator application, content submission, and payout workflows. Integrated Stripe Connect for creator onboarding, payouts, and transaction tracking, and built the admin-side payout tooling for authorizing, pausing, scheduling, and resolving payouts. Services run on Cloudflare Pages and Workers (Wrangler) with Hono, backed by Supabase for auth and PostgreSQL, plus a cross-platform scraper API that aggregates social metrics across creator accounts.",
    tags: [
      "TypeScript",
      "Stripe Connect",
      "Supabase",
      "PostgreSQL",
      "Cloudflare Workers",
      "Cloudflare Pages",
      "Hono",
      "Scraper API",
    ],
    highlightTags: ["TypeScript", "Stripe Connect", "Supabase", "Cloudflare"],
    featured: true,
  },
  {
    slug: "peekvibes",
    startDate: "January, 2025",
    endDate: "January, 2026",
    position: "Software Engineer",
    employmentType: "contract",
    logo: "/assets/peekvibes-logo.png",
    company: "Peekvibes",
    location: "Remote",
    link: "https://peekvibes.com/",
    appStoreLink: "https://apps.apple.com/us/app/peekvibes/id6748236083",
    summary:
      "Largely owned system design end to end for a real-time social events platform on the iOS App Store, including a media pipeline redesign that more than doubled upload speed.",
    description:
      "Real-time social events platform, live on the iOS App Store. Given business requirements and largely owned system design end to end — service architecture, database design, and service interactions — with weekly reviews against business goals and bugs. Designed location-based event discovery (configurable radius, ~10 miles by default) and a live commenting/Q&A system per event using WebSockets. Built a media processing pipeline on NestJS using FFmpeg for image compression and video conversion to HLS; when upload speed to the server became a bottleneck, redesigned the flow to add client-side compression before upload and move to direct multipart upload to MinIO, with MinIO triggering async processing on the backend — more than doubling upload speed. This is also where I picked up hands-on production experience with Kubernetes, Grafana, Loki, Keycloak, and MinIO.",
    tags: [
      "React Native",
      "Expo",
      "NestJS",
      "WebSocket",
      "PostgreSQL",
      "FFmpeg",
      "HLS",
      "MinIO",
      "Azure Kubernetes (AKS)",
    ],
    highlightTags: ["React Native", "NestJS", "WebSocket", "FFmpeg"],
    featured: true,
  },
  {
    slug: "rehoboth",
    startDate: "October, 2025",
    endDate: "December, 2025",
    position: "Full Stack Engineer",
    employmentType: "freelance",
    logo: "/assets/rehoboth-logo.png",
    company: "Rehoboth",
    location: "Remote",
    link: "#",
    summary:
      "Built the core booking-and-escrow workflow for a React Native marketplace connecting customers to professional cleaners.",
    description:
      "Built the core booking-and-escrow workflow for a React Native/Expo marketplace connecting customers to professional cleaners. Owned service selection, scheduling, in-app payments, and escrow release after job approval. Implemented Supabase authentication.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Escrow Payments",
    ],
    highlightTags: ["React Native", "Expo", "Supabase", "Stripe"],
  },
  {
    slug: "batelfit",
    startDate: "February, 2025",
    endDate: "October, 2025",
    position: "Mobile Engineer",
    employmentType: "freelance",
    company: "BatelFit",
    location: "Remote",
    link: "#",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.batelfit.app",
    appStoreLink: "https://apps.apple.com/ng/app/batel-fit-app/id6751505165",
    summary:
      "Built a fitness app with guided video workouts, fully localized for Hebrew (RTL), with RevenueCat in-app purchases. Live on both stores.",
    description:
      "Built a fitness mobile application with guided video workouts and routines, fully localized for Hebrew (RTL). Integrated RevenueCat for iOS in-app purchases. Live on the App Store and Play Store.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "RevenueCat",
      "RTL Localization",
      "Firebase",
    ],
    highlightTags: ["React Native", "Expo", "RevenueCat", "RTL"],
  },
  {
    slug: "nexapay",
    startDate: "October, 2024",
    endDate: "December, 2024",
    position: "Mobile Developer",
    employmentType: "freelance",
    logo: "/assets/nexapay-logo.png",
    company: "NexaPay",
    location: "Remote",
    link: "#",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.nexapay.app&pcampaignid=web_share",
    certLink:
      "https://drive.google.com/file/d/19l_gHDbZgRwGVKIOQsjMqTKJImlzihek/view?usp=drive_link",
    certText: "ALX Gig Certificate",
    summary:
      "Placed with NexaPay through ALX's 'Gig at a Startup' programme as a React Native developer; the short placement grew into an expanded role.",
    description:
      "Selected for the ALX 'Gig at a Startup' programme and placed with NexaPay as a React Native developer. Delivered core frontend flows, collaborated closely with product and design, and earned an ALX certificate on completion. The short-term placement evolved into a continued, expanded role.",
    tags: ["React Native", "Expo", "TypeScript"],
    highlightTags: ["React Native", "Expo", "TypeScript"],
    featured: true,
  },
  {
    slug: "smarg",
    startDate: "November, 2023",
    endDate: "January, 2025",
    position: "Software Developer",
    employmentType: "full_time",
    logo: "/assets/smarg-logo.png",
    company: "Smarg",
    location: "Ibadan, Oyo State, Nigeria · Remote",
    link: "#",
    summary:
      "Built core payment features for a fintech mobile app and architected the database structure behind the payment flows.",
    description:
      "Built core payment features for a fintech mobile application using React Native and Supabase. Architected the database structure to support payment flows and core functionality. Owned frontend implementation with Tamagui UI components and Supabase backend integration.",
    tags: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Tamagui",
      "Zustand",
      "PostgreSQL",
    ],
    highlightTags: ["React Native", "Supabase", "Tamagui", "TypeScript"],
  },
  {
    slug: "cotrust-equity",
    startDate: "June, 2023",
    endDate: "January, 2024",
    position: "Software Developer",
    employmentType: "contract",
    logo: "/assets/cotrust-logo.jpeg",
    company: "Cotrust Equity (Paypoli)",
    location: "Lagos State, Nigeria · Remote",
    link: "https://cotruste.com",
    summary:
      "Implemented ~70% of a fintech MVP in three months and cut KYC verification cost to roughly ₦130 per verification.",
    description:
      "Implemented ~70% of a fintech MVP within three months, including backend architecture, payment flows, and KYC integration. Evaluated third-party KYC providers and selected a solution that reduced verification costs to approximately ₦130 per verification. Provided ongoing support and enhancements for over two months post-launch. Made cost-engineering tradeoffs under early-stage resource constraints.",
    tags: [
      "React Native",
      "TypeScript",
      "Supabase",
      "NativeBase",
      "KYC Integration",
      "Payments",
    ],
    highlightTags: ["React Native", "Supabase", "Payments", "KYC"],
  },
  {
    slug: "sentinel",
    startDate: "March, 2023",
    endDate: "June, 2023",
    position: "Frontend Developer",
    employmentType: "internship",
    logo: "/assets/sentinel-logo.jpeg",
    company: "Sentinel",
    location: "Ibadan, Oyo State, Nigeria · Remote",
    link: "#",
    summary:
      "Built a responsive B2B landing page and reusable dashboard components for an early-stage startup.",
    description:
      "Designed and implemented a responsive landing page using React and Next.js, integrating Tally Form for lead collection. Developed reusable dashboard components. Collaborated with UI/UX designers on pixel-perfect implementation.",
    tags: ["React.js", "Next.js", "TypeScript", "JavaScript"],
    highlightTags: ["React.js", "Next.js", "TypeScript"],
  },
  {
    slug: "kolat-oaks-logistics",
    startDate: "June, 2022",
    endDate: "July, 2022",
    position: "Software Developer (Web)",
    employmentType: "freelance",
    logo: "/assets/kolat-logo.png",
    company: "Kolat OAKS Logistics",
    location: "Remote",
    link: "https://kolat.onrender.com/",
    summary:
      "Built and deployed a mobile-responsive company website in a month, including domain setup, business email, and a working contact form.",
    description:
      "Developed a mobile-responsive website using React, React-Bootstrap, and Node.js within a month, working closely with stakeholders to translate their vision into the UI. Deployed on Namecheap, including domain purchase and business email setup, and added a functional Contact Us form.",
    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "React Bootstrap",
    ],
    highlightTags: ["React.js", "Node.js", "Express.js"],
  },
];
