// Download link rendered as a simple text anchor below
import ExperienceCard from "./ExperienceCard";
import { ExperienceItem, experiences } from "./data/experiences";

const ExperienceBox = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            Full-time positions and key roles
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-foreground/70 hover:text-foreground hover:underline whitespace-nowrap ml-4"
        >
          Download Resume
        </a>
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
