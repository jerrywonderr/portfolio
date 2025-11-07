import ExperienceCard from "./ExperienceCard";
import { ExperienceItem, experiences } from "./data/experiences";

const ContractsBox = () => {
  return (
    <div>
      <h4 className="text-2xl sm:text-3xl text-foreground mb-3">
        Contracts & Freelance
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences
          .filter((e: ExperienceItem) => e.employmentType === "contract")
          .map((exp, idx) => (
            <ExperienceCard key={`ct-${idx}`} {...exp} hideDates />
          ))}
      </div>
    </div>
  );
};

export default ContractsBox;
