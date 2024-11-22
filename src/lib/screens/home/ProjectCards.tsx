import ProjectCard from "@/lib/components/ProjectCard";
import { motion } from "framer-motion";

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
    <motion.div
      whileInView={{
        opacity: [0, 1],
        transition: { duration: 0.8, staggerChildren: 3, delayChildren: 9 },
      }}
      className="flex flex-col sm:flex-row gap-x-6 gap-y-6 justify-center mb-6"
    >
      {projects.map(({ title, id, imageSrc, description }) => (
        <ProjectCard
          key={id}
          title={title}
          imageSrc={imageSrc}
          description={description}
        />
      ))}
    </motion.div>
  );
};

export default ProjectCards;
