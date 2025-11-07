// Download link rendered as a simple text anchor below
import ExperienceCard from "./ExperienceCard";
import { ExperienceItem, experiences } from "./data/experiences";

const ExperienceBox = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl sm:text-3xl text-foreground">My Discography</h4>
        <a
          href="https://drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link"
          target="_blank"
          className="text-sm sm:text-base text-foreground/70 hover:text-foreground hover:underline"
        >
          Download resume
        </a>
      </div>
      <div className="flex flex-col gap-6 relative ml-4 border-l border-border">
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
