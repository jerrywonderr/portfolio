"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import HeadShot from "@/lib/screens/home/HeadShot";
import KeyAchievements from "@/lib/screens/home/KeyAchievements";
import ProjectCards from "@/lib/screens/home/ProjectCards";
import SkillsSection from "@/lib/screens/home/SkillsSection";
import Socials from "@/lib/screens/home/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <DottedScreen>
      <main>
        <section className="relative max-w-6xl mx-auto px-4 py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl -z-10" />
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-10" />
              <HeadShot />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="text-sm font-mono text-primary/70 uppercase tracking-wider">
                  Senior Engineer
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-foreground">
                Jeremiah Joseph
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Full-Stack Architect
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Building scalable applications and infrastructure. Leading
                development of production systems with expertise in React
                Native, TypeScript, cloud platforms, and distributed systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  href="/career/experience"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primaryForeground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all text-center"
                >
                  View Experience
                </Link>
                <a
                  href="https://drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-primary/30 rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all text-center"
                >
                  Download Resume
                </a>
              </div>
              <Socials />
            </div>
          </div>
        </section>

        <KeyAchievements />

        <SkillsSection />

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Recent Work
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Latest professional engagements and projects
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/career/experience"
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary border border-border rounded-lg hover:border-primary transition-colors"
              >
                View All Experience →
              </Link>
              <Link
                href="/career/projects"
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary border border-border rounded-lg hover:border-primary transition-colors"
              >
                View All Projects →
              </Link>
              <Link
                href="/career/certificates"
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary border border-border rounded-lg hover:border-primary transition-colors"
              >
                Explore Journey →
              </Link>
            </div>
          </div>
          <ProjectCards />
        </section>
      </main>
    </DottedScreen>
  );
}
