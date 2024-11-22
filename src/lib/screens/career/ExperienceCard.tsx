import prepImagePath from "@/lib/utils/prep-image-path";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiArrowRightUpFill } from "react-icons/ri";
import Tag from "./Tag";

interface IExperienceCard {
  startDate: string;
  endDate: string;
  position: string;
  logo: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
}

const ExperienceCard = ({
  startDate,
  endDate,
  position,
  logo,
  company,
  description,
  tags,
  link = "#",
}: IExperienceCard) => {
  return (
    <motion.div
      whileInView={{ scale: [0.8, 1], transition: { duration: 0.8 } }}
      className="bg-white dark:bg-cardBackgroundDark  p-4 shadow-md flex flex-col sm:flex-row"
    >
      <div className="sm:min-w-52">
        <div className="text-slate-600 dark:text-gray-400  text-sm">
          {startDate} - {endDate}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-xl">{position}</p>
          </div>
          <div className="group flex gap-x-2 hover:cursor-pointer">
            <Image
              src={prepImagePath(logo)}
              width={12}
              height={12}
              className="h-5 w-5 object-contain rounded-md  bg-red-900"
              alt={`${company}'s logo`}
            />
            <a target="_blank" href={link} className="text-md">
              {company}
            </a>
            <RiArrowRightUpFill
              size={24}
              className="hidden group-hover:block"
            />
          </div>
          <div>
            <p className="text-sm text-justify">{description}</p>
          </div>
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
                beforeChildren: true,
              },
            }}
            className="flex flex-wrap gap-x-2 gap-y-2 align-middle"
          >
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
