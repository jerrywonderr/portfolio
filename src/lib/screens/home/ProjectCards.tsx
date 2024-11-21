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
    imageSrc: "/smarg-app-shot.jpeg",
    description: "November, 2023 - Present",
  },
  {
    id: 2,
    title: "Software Enginner at Cotruste",
    imageSrc: "/cotruste-app-shot.png",
    description: "June, 2023 - January, 2024",
  },
  {
    id: 3,
    title: "Software Engineer at Sentinel",
    imageSrc: "/sentinel-app-shot.png",
    description: "March, 2023 - June, 2023",
  },
];

const ProjectCards = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 justify-center mb-6">
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
