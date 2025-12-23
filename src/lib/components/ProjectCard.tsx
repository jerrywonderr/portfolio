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
      className="group flex flex-col bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <Image
          src={prepImagePath(imageSrc)}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col p-6 relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-lg font-bold font-geistSans mb-2 text-foreground relative z-10">
          {title}
        </h3>
        <p className="text-sm text-foreground/70 font-mono relative z-10">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
