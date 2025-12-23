import ProjectCard from "@/lib/components/ProjectCard";
import { experiences } from "@/lib/screens/career/data/experiences";

const parseDate = (dateStr: string): Date => {
  if (dateStr === "Present") {
    return new Date(9999, 11, 31);
  }
  const [month, year] = dateStr.split(", ");
  const monthIndex = new Date(Date.parse(`${month} 1, ${year}`)).getMonth();
  return new Date(parseInt(year), monthIndex, 1);
};

const sortedExperiences = [...experiences].sort((a, b) => {
  const aIsOngoing = a.endDate === "Present" || a.ongoing;
  const bIsOngoing = b.endDate === "Present" || b.ongoing;
  if (aIsOngoing && !bIsOngoing) return -1;
  if (!aIsOngoing && bIsOngoing) return 1;
  if (aIsOngoing && bIsOngoing) {
    const startA = parseDate(a.startDate);
    const startB = parseDate(b.startDate);
    return startB.getTime() - startA.getTime();
  }
  const endA = parseDate(a.endDate);
  const endB = parseDate(b.endDate);
  return endB.getTime() - endA.getTime();
});

const latestExperiences = sortedExperiences.slice(0, 3);

const ProjectCards = () => {
  return (
    <div className="mx-auto mb-6 max-w-6xl grid [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))] gap-6 justify-center px-4">
      {latestExperiences.map((exp, idx) => (
        <ProjectCard
          key={`exp-${idx}`}
          title={`${exp.position} at ${exp.company}`}
          imageSrc={exp.bannerImage || exp.logo || "/assets/project-card.jpg"}
          description={`${exp.startDate} - ${exp.endDate}`}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
