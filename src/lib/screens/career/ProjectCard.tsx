import prepImagePath from "@/lib/utils/prep-image-path";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiArrowRightUpFill } from "react-icons/ri";
import Tag from "./Tag";

interface IProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubLink?: string;
  link?: string;
  context?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  context,
}: IProjectCardProps) => {
  return (
    <motion.div
      whileInView={{
        scale: [0.8, 1],
        transition: { duration: 0.8 },
      }}
      className="flex flex-col bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition sm:flex-row-reverse sm:gap-x-6"
    >
      <div className="flex-1">
        <div className="group flex gap-x-2 hover:cursor-pointer">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-foreground"
          >
            {title}
          </a>
          <RiArrowRightUpFill size={24} className="hidden group-hover:block" />
        </div>
        {context && (
          <p className="mt-1 font-mono text-xs text-foreground/50">{context}</p>
        )}
        <div className="mt-2">
          <p className="text-sm text-foreground/70 text-justify">
            {description}
          </p>
        </div>
        <div className="my-3">
          <h4 className="font-mono text-sm mb-3">Technologies Used:</h4>
          <motion.div
            whileInView={{
              opacity: [0, 1],
              transition: {
                duration: 0.8,
                staggerChildren: 3,
                delayChildren: 0.5,
              },
            }}
            className="flex flex-wrap gap-x-2 gap-y-2 items-center"
          >
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </motion.div>
        </div>
      </div>
      {image && (
        <motion.div
          whileInView={{
            scale: [0.8, 1],
            transition: {
              mass: 3,
              duration: 0.6,
              repeatType: "reverse",
            },
          }}
          className="sm:min-w-60"
        >
          <Image
            src={prepImagePath(image)}
            width={320}
            height={320}
            className="h-48 w-full object-cover mx-auto rounded-md"
            alt={`${title} made by Jeremiah Joseph (jerrywonderr)`}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
