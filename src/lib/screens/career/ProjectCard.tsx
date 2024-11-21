import Image from "next/image";
import { RiArrowRightUpFill } from "react-icons/ri";
import Tag from "./Tag";

interface IProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
}: IProjectCardProps) => {
  return (
    <div className="flex flex-col bg-white dark:bg-cardBackgroundDark  p-4 shadow-md sm:flex-row-reverse sm:gap-x-6">
      <div>
        <div className="group flex gap-x-2 hover:cursor-pointer">
          <a href={link} target="_blank" className="text-xl group-hover">
            {title}
          </a>
          <RiArrowRightUpFill size={24} className="hidden group-hover:block" />
        </div>
        <div>
          <p className="text-sm text-justify">{description}</p>
        </div>
        <div className="my-3">
          <h4 className="font-mono text-sm mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-x-2 gap-y-2 align-middle">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:min-w-60">
        <Image
          src={image}
          width={320}
          height={320}
          className="h-48 w-full object-cover mx-auto"
          alt={`${title} made by Jeremiah Joseph (jerrywonderr)`}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
