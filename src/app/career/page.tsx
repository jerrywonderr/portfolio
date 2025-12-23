"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import ActiveSectionHeader from "@/lib/screens/career/ActiveSectionHeader";
import CertificatesBox from "@/lib/screens/career/CertificatesBox";
import ContractsBox from "@/lib/screens/career/ContractsBox";
import ExperienceBox from "@/lib/screens/career/ExperienceBox";
import ProjectBox from "@/lib/screens/career/ProjectBox";
import ScrollNav from "@/lib/screens/career/ScrollNav";
import prepImagePath from "@/lib/utils/prep-image-path";
import Image from "next/image";

export default function Home() {
  return (
    <DottedScreen>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="md:col-span-1 order-first md:order-first sticky top-0 md:top-20 z-30 h-fit bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <ScrollNav />
        </aside>
        <main className="md:col-span-2 flex flex-col gap-8">
          <ActiveSectionHeader />
          <div id="experiences" className="scroll-mt-24">
            <ExperienceBox />
          </div>
          <Image
            src={prepImagePath("/assets/divider.png")}
            width={320}
            height={32}
            alt="Divider"
            className="w-full h-12 object-cover"
          />
          <div id="contracts" className="scroll-mt-24">
            <ContractsBox />
          </div>
          <div id="projects" className="scroll-mt-24">
            <ProjectBox />
          </div>
          <div id="certificates" className="scroll-mt-24">
            <CertificatesBox />
          </div>
        </main>
      </div>
    </DottedScreen>
  );
}
