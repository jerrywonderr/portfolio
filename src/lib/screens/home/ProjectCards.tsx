import ProjectCard from "@/lib/components/ProjectCard";

interface IProject {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
}

const projects: IProject[] = [
  {
    id: 1,
    title: "Software Enginner at Smarg",
    imageSrc: "/assets/smarg-app-shot.jpeg",
    description: "November, 2023 - Present",
  },
  {
    id: 2,
    title: "Software Enginner at Cotruste",
    imageSrc: "/assets/cotruste-app-shot.png",
    description: "June, 2023 - January, 2024",
  },
  {
    id: 3,
    title: "Software Engineer at Sentinel",
    imageSrc: "/assets/sentinel-app-shot.png",
    description: "March, 2023 - June, 2023",
  },
];

const ProjectCards = () => {
  return (
    <div className="mx-auto mb-6 max-w-6xl grid [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))] gap-6 justify-center px-4">
      {projects.map(({ title, id, imageSrc, description }) => (
        <ProjectCard
          key={id}
          title={title}
          imageSrc={imageSrc}
          description={description}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
