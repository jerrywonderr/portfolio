import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

const ProjectBox = () => {
  return (
    <div className="mb-10">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Projects
        </h2>
        <p className="text-foreground/70 text-sm sm:text-base">
          Personal projects and open-source contributions
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
