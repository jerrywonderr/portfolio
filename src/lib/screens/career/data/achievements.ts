export type AchievementType = "certificate" | "award" | "recognition";

export interface AchievementItem {
  id: string;
  type: AchievementType;
  title: string;
  issuer: string;
  date: string;
  year: number;
  description: string;
  link?: string;
  image?: string;
  category: "learning" | "service" | "competition" | "leadership";
}

export const achievements: AchievementItem[] = [
  {
    id: "cardtonic-macbook",
    type: "award",
    title: "MacBook Air 2022 Winner",
    issuer: "Cardtonic Upskill Program 2.0",
    date: "2024",
    year: 2024,
    description:
      "Recognized as one of 20 outstanding participants among thousands in Cardtonic's Upskill Program 2.0. Awarded a MacBook Air 2022 model for exceptional performance and dedication to learning.",
    category: "competition",
    image: "/assets/cardtonic-macbook-award.jpg",
  },
  {
    id: "academic-director-award",
    type: "award",
    title: "Award of Impact",
    issuer: "University of Ibadan - Department of Mechanical Engineering",
    date: "2023-2024",
    year: 2024,
    description:
      "Served as Academic Director of the Department of Mechanical Engineering during final year. Recognized with an Award of Impact for outstanding service and contribution to the department's academic excellence.",
    category: "leadership",
    image: "/assets/ui-award-of-impact.jpg",
  },
  {
    id: "alx-gig",
    type: "certificate",
    title: "ALX Gig at a Startup",
    issuer: "ALX",
    date: "2024",
    year: 2024,
    description:
      "Completed the ALX 'Gig at a Startup' program, gaining hands-on experience working with a startup team and delivering real-world solutions.",
    image: "/assets/alx-gig-certificate.png",
    category: "learning",
  },
  {
    id: "alx-software-engineering",
    type: "certificate",
    title: "ALX Software Engineering Program",
    issuer: "ALX & Holberton School",
    date: "2023",
    year: 2023,
    description:
      "Completed comprehensive software engineering program covering full-stack development, algorithms, data structures, and system design principles.",
    image: "/assets/alx-software-engineering-certificate.png",
    category: "learning",
  },
  {
    id: "gads-certificate",
    type: "certificate",
    title: "Google Africa Developer Scholarship",
    issuer: "Google & Andela",
    date: "2020",
    year: 2020,
    description:
      "Selected for Google Africa Developer Scholarship program, completing intensive training in mobile and web development technologies.",
    image: "/assets/gads-certificate.png",
    category: "learning",
  },
];
