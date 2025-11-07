import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

const ProjectBox = () => {
  return (
    <div className="mb-10">
      <div>
        <h4 className="text-2xl mb-3 sm:text-3xl text-foreground">
          My Projects
        </h4>
      </div>
      <div className="flex flex-col gap-y-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
