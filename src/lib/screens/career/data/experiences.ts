export interface ExperienceItem {
  startDate: string;
  endDate: string;
  position: string;
  employmentType: "full_time" | "contract";
  logo?: string;
  company: string;
  link: string;
  description: string;
  tags: string[];
  certLink?: string;
  certText?: string;
  ongoing?: boolean;
  appStoreLink?: string;
  playStoreLink?: string;
}

export const experiences: ExperienceItem[] = [
  {
    startDate: "September, 2025",
    endDate: "Present",
    position: "Backend Developer",
    employmentType: "full_time",
    company: "GoCreatorsHub",
    link: "#",
    description:
      "\n                Building the backend for a platform that connects creators to businesses. Companies discover creators and view cross-platform social metrics (followers, posts, engagement rates, etc.), then collaborate within the platform. Implementing services with Cloudflare Workers (Wrangler) + Hono, Supabase for auth and PostgreSQL, and a cross-platform scraper API for social data aggregation.",
    tags: [
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Cloudflare Workers",
      "Wrangler",
      "Hono",
      "Scraper API",
    ],
  },
  // {
  //   startDate: "November, 2025",
  //   endDate: "Present",
  //   position: "Mobile Developer",
  //   employmentType: "contract",
  //   logo: "/assets/nexapay-logo.png",
  //   company: "NexaPay",
  //   link: "https://nexapay.ng/",
  //   description:
  //     "\n                Continuing work on the NexaPay mobile application with React Native + Expo, focusing on secure payment experiences, performance, and UI polish.",
  //   tags: ["React Native", "Expo", "TypeScript"],
  // },
  {
    startDate: "October, 2025",
    endDate: "Present",
    position: "Full-Stack Developer",
    employmentType: "contract",
    logo: "/assets/rehoboth-logo.png",
    company: "Rehoboth",
    link: "#",
    description:
      "\n                Developing a marketplace that connects cleaners to customers. Implementing end-to-end booking and secure payments using Stripe, \n                built with React Native + Expo and Firebase.",
    tags: ["React Native", "Expo", "Firebase", "Stripe", "TypeScript"],
    ongoing: true,
    appStoreLink:
      "https://apps.apple.com/ng/app/rehoboth-cleaning-app/id6755183375",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.rehoboth.org",
  },
  {
    startDate: "January, 2025",
    endDate: "October, 2025",
    position: "Software Developer",
    employmentType: "full_time",
    logo: "/assets/peekvibes-logo.png",
    company: "Peekvibes",
    link: "https://peekvibes.com/",
    appStoreLink: "https://apps.apple.com/us/app/peekvibes/id6748236083",
    description:
      "\n                Leading development of a social events platform built with React Native + Expo where users create and join events with real-time commenting and Q&A. \n                Architected WebSocket-based live interactions with a NestJS backend, Azure Kubernetes (AKS), CNPG for database reliability, and MinIO S3 for storage. \n                Added end-to-end monitoring with kube-prometheus stack. Live on the App Store.",
    tags: [
      "React Native",
      "Expo",
      "NestJS",
      "WebSocket",
      "Azure K8s",
      "PostgreSQL",
      "CNPG",
      "MinIO S3",
      "Prometheus",
    ],
  },
  {
    startDate: "February, 2025",
    endDate: "October, 2025",
    position: "Mobile Developer",
    employmentType: "contract",
    company: "BatelFit",
    link: "#",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.batelfit.app",
    appStoreLink: "https://apps.apple.com/ng/app/batel-fit-app/id6751505165",
    description:
      "\n                Building a fitness app with workout tracking and a video player for guided sessions. Using Cloudflare for image delivery and Firebase for backend services. \n                Released on Google Play Store; working toward iOS App Store compliance.",
    tags: ["React Native", "Expo", "Firebase", "Cloudflare", "TypeScript"],
  },
  {
    startDate: "October, 2024",
    endDate: "December, 2024",
    position: "Mobile Developer",
    employmentType: "full_time",
    logo: "/assets/nexapay-logo.png",
    company: "NexaPay",
    link: "#",
    certLink:
      "https://drive.google.com/file/d/19l_gHDbZgRwGVKIOQsjMqTKJImlzihek/view?usp=drive_link",
    certText: "ALX Gig Certificate",
    description:
      "\n                Selected for ALX 'Gig at a Startup' program and placed with NexaPay. Contributed as a React Native developer, \n                delivering core frontend flows and collaborating closely with product/design. Completed the engagement with a certificate from ALX.",
    tags: ["React Native", "Expo", "TypeScript"],
  },
  {
    startDate: "November, 2023",
    endDate: "December, 2024",
    position: "Software Developer (Mobile)",
    employmentType: "full_time",
    logo: "/assets/smarg-logo.png",
    company: "Smarg",
    link: "https://usesmarg.com",
    description:
      "\n                As a full-stack developer at Smarg, I contributed to the\n                development of a fintech app by designing and implementing the\n                core payment feature. I utilized React Native, TamaGUI, and\n                Supabase to create an efficient and scalable codebase. My\n                hands-on experience with database design using Supabase enhanced\n                my expertise in developing robust and efficient databases for\n                complex applications.",
    tags: [
      "TypeScript",
      "JavaScript",
      "Supabase",
      "React Native",
      "RabbitMQ",
      "Zustand",
      "TamaGUI",
    ],
  },
  {
    startDate: "June, 2023",
    endDate: "January, 2024",
    position: "Software Developer (Mobile)",
    employmentType: "full_time",
    logo: "/assets/cotrust-logo.jpeg",
    company: "Cotrust Equity",
    link: "https://cotruste.com",
    description:
      "\n                As part of a team, I successfully developed the MVP for a fintech mobile app within three months by \n                implementing 70% of core functionalities. Git was used to ensure efficient collaboration and version \n                control. Post-launch, I continued to provide support and enhancements to improve the app's performance \n                and user satisfaction. To reduce expenses, I selected a cost-effective KYC verification service that \n                resulted in a ₦130 cost per successful run.",
    tags: [
      "TypeScript",
      "JavaScript",
      "Supabase",
      "React Native",
      "NativeBase",
    ],
  },
  {
    startDate: "March, 2023",
    endDate: "June, 2023",
    position: "Frontend Developer (Internship)",
    employmentType: "full_time",
    logo: "/assets/sentinel-logo.jpeg",
    company: "Sentinel",
    link: "https://usesentinel.app",
    description:
      "\n                As part of the development team at Sentinel, I improved the startup's B2B offerings by creating \n                a responsive landing page using React and Next.js, and integrating Tally Form to effectively \n                collect leads. Collaboration with UI/UX designers was crucial to ensure consistency with \n                brand identity and pixel-perfect execution. To increase the maintainability and scalability \n                of the codebase, I created reusable components for the Sentinel dashboard. By working cross-functionally \n                with product and design teams, I iterated on features to meet business requirements.",
    tags: ["TypeScript", "JavaScript", "Supabase", "React Native", "RabbitMQ"],
  },
  {
    startDate: "June, 2022",
    endDate: "July, 2022",
    position: "Software Developer (Web)",
    employmentType: "full_time",
    logo: "/assets/kolat-logo.png",
    company: "Kolat OAKS Logistics",
    link: "https://www.google.com/search?q=kolatlogistics",
    description:
      "\n                In a time-efficient manner, I developed a mobile-responsive website using React, React-Bootstrap, and Node.js within a month. \n                This project required close collaboration with stakeholders to translate their vision into a visually appealing and user-friendly UI. \n                The website was deployed on Namecheap, including the purchase of a domain name and setting up a business email account for Kolat OAK \n                Logistics. Furthermore, a functional Contact Us form was added to enhance user engagement. My contribution resulted in an estimated \n                60% improvement in their online presence, directly impacting the business's outreach.",
    tags: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "React Bootstrap",
    ],
  },
];
