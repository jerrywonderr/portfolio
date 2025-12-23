"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import Link from "next/link";
import { FaAward, FaBriefcase, FaLayerGroup } from "react-icons/fa6";

const careerSections = [
  {
    title: "Experience",
    description: "Full-time positions and contract engagements",
    href: "/career/experience",
    icon: FaBriefcase,
  },
  {
    title: "Projects",
    description: "Personal projects and open-source contributions",
    href: "/career/projects",
    icon: FaLayerGroup,
  },
  {
    title: "Certificates",
    description: "Professional certifications and achievements",
    href: "/career/certificates",
    icon: FaAward,
  },
];

export default function CareerPage() {
  return (
    <DottedScreen>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Career
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore my professional experience, projects, and achievements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-foreground/70 text-sm">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DottedScreen>
  );
}
