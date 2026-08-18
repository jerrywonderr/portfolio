"use client";

import DottedScreen from "@/lib/components/DottedScreen";
import ExperienceCard from "@/lib/screens/career/ExperienceCard";
import {
  EMPLOYMENT_TYPE_LABELS,
  experiences,
  type EmploymentType,
} from "@/lib/screens/career/data/experiences";
import { useState } from "react";

type Filter = "all" | EmploymentType;

// Only offer a filter for types that actually appear in the data.
const availableTypes = (
  Object.keys(EMPLOYMENT_TYPE_LABELS) as EmploymentType[]
).filter((type) => experiences.some((exp) => exp.employmentType === type));

const filters: Filter[] = ["all", ...availableTypes];

export default function ExperiencePage() {
  const [filter, setFilter] = useState<Filter>("all");

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
            Full-time roles, contracts, and freelance engagements
          </p>
          <div className="flex gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primaryForeground shadow-lg"
                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                {f === "all" ? "All" : EMPLOYMENT_TYPE_LABELS[f]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 relative ml-4 border-l-2 border-primary/30 pl-8">
          {filteredExperiences.map((exp) => (
            <ExperienceCard key={exp.slug} {...exp} />
          ))}
        </div>
      </div>
    </DottedScreen>
  );
}
