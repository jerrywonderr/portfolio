import { motion } from "framer-motion";
import Image from "next/image";
import prepImagePath from "../utils/prep-image-path";

interface IProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard = ({ imageSrc, title, description }: IProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-row-reverse sm:flex-col bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition w-full overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="basis-2/5">
        <Image
          src={prepImagePath(imageSrc)}
          alt={`${title} (jerrywonderr)`}
          width={640}
          height={480}
          className="h-40 sm:h-48 object-cover w-full"
          priority
        />
      </div>
      <div className="flex flex-col p-4 basis-3/5 sm:w-full">
        <h3 className="text-base font-medium font-geistSans mb-2 text-foreground">
          {title}
        </h3>
        <p className="font-light text-sm text-foreground/70 mt-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
