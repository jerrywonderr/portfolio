"use client";

import { PulsatingPrimaryButton } from "@/lib/components/Button";
import DottedScreen from "@/lib/components/DottedScreen";
import HeadShot from "@/lib/screens/home/HeadShot";
import ProjectCards from "@/lib/screens/home/ProjectCards";
import Socials from "@/lib/screens/home/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <DottedScreen>
      <div className="flex flex-col my-12">
        <div className="flex flex-col gap-3 max-w-3xl mx-auto text-center">
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            Jeremiah Joseph
          </h1>
          <p className="font-mono text-sm sm:text-base text-foreground/70">
            Software Engineer & Tech Leader
          </p>
        </div>
        <div className="flex flex-col gap-8 my-12 justify-center">
          <Socials />
          <HeadShot />
          <div className="mx-auto">
            <Link href="/career">
              <PulsatingPrimaryButton showIcon>
                See Career Highlights
              </PulsatingPrimaryButton>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ProjectCards />
      </div>
    </DottedScreen>
  );
}
