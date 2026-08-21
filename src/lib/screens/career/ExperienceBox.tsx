import ExperienceCard from "./ExperienceCard";
import { ExperienceItem, experiences } from "./data/experiences";

const ExperienceBox = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Experience
        </h2>
        <p className="text-foreground/70 text-sm sm:text-base">
          Full-time positions
        </p>
      </div>
      <div className="flex flex-col gap-8 relative ml-4 border-l-2 border-border pl-8">
        {experiences
          .filter((e: ExperienceItem) => e.employmentType === "full_time")
          .map((exp, idx) => (
            <ExperienceCard key={`ft-${idx}`} {...exp} />
          ))}
      </div>
    </div>
  );
};

export default ExperienceBox;
