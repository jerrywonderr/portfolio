"use client";

import ThemeToggle from "@/lib/components/ThemeToggle";
import { useEffect, useState } from "react";

const labelById: Record<string, string> = {
  experiences: "Discography",
  projects: "Projects",
  contracts: "Contracts",
  certificates: "Certificates",
};

const ActiveSectionHeader = () => {
  const [active, setActive] = useState<string>("experiences");

  useEffect(() => {
    const sections = ["experiences", "contracts", "projects", "certificates"];
    let ticking = false;
    const offset = 96;

    const updateActive = () => {
      ticking = false;
      const probeY = offset + 80;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          current = id;
          break;
        }
        if (rect.top > probeY) {
          break;
        }
        current = id;
      }
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) current = sections[sections.length - 1];
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
