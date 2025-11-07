"use client";

import { useEffect, useState } from "react";
import {
  FaAward,
  FaBriefcase,
  FaHandshake,
  FaLayerGroup,
} from "react-icons/fa6";

const sections = [
  { id: "experiences", label: "Discography" },
  { id: "contracts", label: "Contracts" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

const ScrollNav = () => {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    let ticking = false;
    const offset = 96; // tuned to sticky heights

    const updateActive = () => {
      ticking = false;
      const probeY = offset + 80; // require the probe line to pass into the section
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          current = id;
          break;
        }
        if (rect.top > probeY) {
          break; // haven't reached next section yet; keep previous
        }
        current = id; // passed this section's top; keep as candidate
      }
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) current = sections[sections.length - 1].id;
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
    <nav
      aria-label="Page sections"
      className="mb-6 sticky top-0 z-20 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b md:border-b-0 border-border md:top-20"
    >
      {/* Mobile: pill buttons */}
      <ul className="flex gap-2 px-2 py-2 items-center md:hidden overflow-x-auto overscroll-x-contain whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
        {sections.map(({ id, label }) => {
          const Icon =
            id === "experiences"
              ? FaBriefcase
              : id === "projects"
              ? FaLayerGroup
              : id === "contracts"
              ? FaHandshake
              : FaAward;
          const isActive = active === id;
          return (
            <li key={id} className="flex-none snap-start">
              <a
                href={`#${id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-md border transition whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primaryForeground border-primary"
                    : "bg-card text-foreground border-border hover:bg-muted"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-sm border ${
                    isActive
                      ? "bg-primary text-primaryForeground border-primary"
                      : "bg-card border-border"
                  }`}
                >
                  <Icon size={11} />
                </span>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {/* Desktop: glass panel with segmented list & active accent */}
      <div className="hidden md:block px-2 py-3">
        <div className="rounded-xl border border-border bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 shadow-sm">
          <ul className="flex flex-col">
            {sections.map(({ id, label }) => {
              const Icon =
                id === "experiences"
                  ? FaBriefcase
                  : id === "projects"
                  ? FaLayerGroup
                  : id === "contracts"
                  ? FaHandshake
                  : FaAward;
              const isActive = active === id;
              return (
                <li key={id} className="relative">
                  {isActive && (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-primary"
                      aria-hidden
                    />
                  )}
                  <a
                    href={`#${id}`}
                    className={`flex items-center gap-3 px-4 py-3 text-sm transition ${
                      isActive
                        ? "text-foreground font-medium"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-md border ${
                        isActive
                          ? "bg-primary text-primaryForeground border-primary"
                          : "bg-card border-border"
                      }`}
                    >
                      <Icon size={12} />
                    </span>
                    {label}
                  </a>
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-border" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ScrollNav;
