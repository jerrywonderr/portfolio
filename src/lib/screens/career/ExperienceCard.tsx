import prepImagePath from "@/lib/utils/prep-image-path";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiArrowRightUpFill } from "react-icons/ri";
import Tag from "./Tag";

interface IExperienceCard {
  startDate: string;
  endDate: string;
  position: string;
  logo?: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
  certLink?: string;
  certText?: string;
  hideDates?: boolean;
  showDots?: boolean;
  ongoing?: boolean;
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
  certLink,
  certText,
  hideDates = false,
  showDots = true,
  ongoing = false,
}: IExperienceCard) => {
  return (
    <motion.div
      whileInView={{ scale: [0.98, 1], transition: { duration: 0.3 } }}
      className="relative bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition flex flex-col sm:flex-row ml-6"
    >
      {showDots && (
        <span className="absolute -left-6 top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-card" />
      )}
      {(ongoing || endDate === "Present") && (
        <span className="absolute top-3 right-3 text-xs bg-primary text-primaryForeground rounded-full px-2 py-0.5 font-medium">
          Ongoing
        </span>
      )}
      {!hideDates && (
        <div className="sm:min-w-52">
          <div className="text-foreground/60 text-xs sm:text-sm rounded-full inline-block px-3 py-1">
            {startDate} - {endDate}
          </div>
        </div>
      )}
      <div>
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-xl font-medium text-foreground">{position}</p>
          </div>
          <div className="group flex gap-x-2 hover:cursor-pointer items-center flex-wrap">
            {logo ? (
              <Image
                src={prepImagePath(logo)}
                width={20}
                height={20}
                className="h-6 w-6 object-contain rounded-md"
                alt={`${company}'s logo`}
              />
            ) : (
              <div
                aria-hidden
                className="h-6 w-6 rounded-md bg-primary text-primaryForeground flex items-center justify-center text-xs font-semibold border border-primary/70"
                title={company}
              >
                {company?.[0]?.toUpperCase()}
              </div>
            )}
            <a
              target="_blank"
              href={link}
              className="text-md text-foreground hover:underline"
            >
              {company}
            </a>
            <RiArrowRightUpFill
              size={24}
              className="hidden group-hover:block"
            />
            {certLink && (
              <a
                target="_blank"
                href={certLink}
                className="text-xs bg-muted text-foreground border border-border rounded-full px-2 py-0.5 ml-2 hover:underline"
              >
                {certText || "Certificate"}
              </a>
            )}
          </div>
          <div>
            <p className="text-sm text-foreground/70 text-justify">
              {description}
            </p>
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
