import Image from "next/image";

interface IProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imageSrc, title, description }: IProjectCardProps) => {
  return (
    <div className="flex flex-row-reverse sm:flex-col bg-white dark:bg-cardBackgroundDark shadow-md w-full sm:max-w-64">
      <div className="basis-2/5">
        <Image
          src={imageSrc}
          alt={`${title} (jerrywonderr)`}
          width={640}
          height={480}
          className="h-40 sm:h-48 object-cover"
        />
      </div>
      <div className="flex flex-col p-4 basis-3/5 sm:w-full">
        <h3 className="text-md font-medium font-geistSans mb-2">{title}</h3>
        <p className="font-light text-sm text-slate-600 dark:text-gray-400 mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
