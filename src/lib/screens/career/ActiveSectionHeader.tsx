"use client";

import ThemeToggle from "@/lib/components/ThemeToggle";
import { useActiveSection } from "@/lib/utils/useActiveSection";

const labelById: Record<string, string> = {
  experiences: "Discography",
  projects: "Projects",
  contracts: "Contracts",
  certificates: "Certificates",
};

const ActiveSectionHeader = () => {
  const active = useActiveSection();

  return (
    <div className="hidden md:block sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border mb-2">
      <div className="flex justify-between items-center px-1 py-2">
        <div>
          <h3 className="text-lg text-foreground/70">{labelById[active]}</h3>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ActiveSectionHeader;
