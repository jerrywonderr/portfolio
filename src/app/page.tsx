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
      <main itemScope itemType="https://schema.org/Person">
        <section className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-8 pt-20 sm:pb-12 sm:pt-28">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <HeadShot />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4 inline-block">
                <span className="font-mono text-sm uppercase tracking-wider text-primary/70">
                  React Native · NestJS · PostgreSQL
                </span>
              </div>
              <h1
                itemProp="name"
                className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Jeremiah Joseph
              </h1>
              <p
                itemProp="jobTitle"
                className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
              >
                Software Engineer
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70 lg:mx-0">
                I own mobile and backend systems end to end. At GoCreatorsHub
                that&apos;s the full creator-campaign pipeline, from campaign
                creation through to Stripe Connect payouts. Before that I led
                system design for Peekvibes — a real-time social events platform
                on the iOS App Store — where redesigning the media pipeline more
                than doubled upload speed.
              </p>
              <div className="mb-8 flex justify-center lg:justify-start">
                <Link
                  href="/career/experience"
                  className="rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-center font-semibold text-primaryForeground transition-all hover:scale-105 hover:shadow-lg"
                >
                  View Experience
                </Link>
              </div>
              <Socials />
            </div>
          </div>
        </section>

        <KeyAchievements />

        <SkillsSection />

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
              Selected Work
            </h2>
            <p className="mb-8 text-lg text-foreground/70">
              Three engagements worth a closer look
            </p>
          </div>
          <ProjectCards />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/career/experience"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              All Experience →
            </Link>
            <Link
              href="/career/projects"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              Projects →
            </Link>
            <Link
              href="/career/certificates"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              Achievements →
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24">
          <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
              Get in touch
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-foreground/70">
              Open to mobile and backend engineering roles. Email is the fastest
              route.
            </p>
            <div className="mb-6 flex justify-center">
              <a
                href="mailto:josephjeremiah2001@gmail.com"
                className="rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primaryForeground transition-all hover:scale-105 hover:shadow-lg"
              >
                josephjeremiah2001@gmail.com
              </a>
            </div>
            <div className="flex justify-center">
              <Socials />
            </div>
          </div>
        </section>
      </main>
    </DottedScreen>
  );
}
