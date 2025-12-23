import ExperienceCard from "./ExperienceCard";
import { ExperienceItem, experiences } from "./data/experiences";

const ContractsBox = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Contracts & Freelance
        </h2>
        <p className="text-foreground/70 text-sm sm:text-base">
          Contract and consulting engagements
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experiences
          .filter((e: ExperienceItem) => e.employmentType === "contract")
          .map((exp, idx) => (
            <ExperienceCard
              key={`ct-${idx}`}
              {...exp}
              hideDates
              showDots={false}
            />
          ))}
      </div>
    </div>
  );
};

export default ContractsBox;
