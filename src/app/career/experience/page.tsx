"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import ExperienceCard from "@/lib/screens/career/ExperienceCard";
import { ExperienceItem, experiences } from "@/lib/screens/career/data/experiences";
import { useState } from "react";

export default function ExperiencePage() {
  const [filter, setFilter] = useState<"all" | "full_time" | "contract">("all");
  
  const filteredExperiences = experiences.filter((exp) => 
    filter === "all" ? true : exp.employmentType === filter
  );

  return (
    <DottedScreen>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience
          </h1>
          <p className="text-lg text-foreground/70 mb-6">
            Full-time positions and contract engagements
          </p>
          <div className="flex gap-3 flex-wrap">
            {(["all", "full_time", "contract"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primaryForeground shadow-lg"
                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                {f === "all" ? "All" : f === "full_time" ? "Full-Time" : "Contracts"}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 relative ml-4 border-l-2 border-primary/30 pl-8">
          {filteredExperiences.map((exp, idx) => (
            <ExperienceCard key={`exp-${idx}`} {...exp} />
          ))}
        </div>
      </div>
    </DottedScreen>
  );
}
