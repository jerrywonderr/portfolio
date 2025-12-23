"use client";
import { useEffect, useState } from "react";
const sections = ["experiences", "contracts", "projects", "certificates"];
export const useActiveSection = () => {
  const [active, setActive] = useState<string>(sections[0]);
  useEffect(() => {
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
  return active;
};
