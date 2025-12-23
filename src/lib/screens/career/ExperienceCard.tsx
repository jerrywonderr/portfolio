import prepImagePath from "@/lib/utils/prep-image-path";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
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
  appStoreLink?: string;
  playStoreLink?: string;
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
  appStoreLink,
  playStoreLink,
}: IExperienceCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative"
    >
      {showDots && (
        <div className="absolute -left-[3.35rem] top-8 flex items-center">
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background shadow-lg" />
          <div className="absolute left-2 h-px w-8 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
      )}
      <div className="relative bg-gradient-to-br from-card to-card/50 border-l-4 border-primary/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/60 hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {(ongoing || endDate === "Present") && (
          <span className="absolute top-4 right-4 text-xs bg-gradient-to-r from-primary to-accent text-primaryForeground rounded-full px-3 py-1.5 font-semibold shadow-md">
            Ongoing
          </span>
        )}
        <div className="relative flex flex-col gap-5">
          {!hideDates && (
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/50 bg-muted px-3 py-1 rounded-full">
                {startDate} → {endDate}
              </span>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                  {position}
                </h3>
                <div className="group/company flex items-center gap-3 flex-wrap">
                  {logo ? (
                    <div className="p-1.5 bg-muted rounded-lg">
                      <Image
                        src={prepImagePath(logo)}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                        alt={`${company} logo`}
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden
                      className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primaryForeground flex items-center justify-center text-sm font-bold shadow-md"
                      title={company}
                    >
                      {company?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {company}
                    <RiArrowRightUpFill
                      size={16}
                      className="opacity-0 group-hover/company:opacity-100 transition-opacity"
                    />
                  </a>
                  {certLink && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={certLink}
                      className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full px-3 py-1.5 hover:from-primary/20 hover:to-accent/20 transition-all font-medium"
                    >
                      {certText || "Certificate"}
                    </a>
                  )}
                </div>
              </div>
            </div>
            {(appStoreLink || playStoreLink) && (
              <div className="flex flex-wrap gap-2">
                {appStoreLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={appStoreLink}
                    className="text-xs bg-gradient-to-r from-foreground to-foreground/90 text-background rounded-lg px-3 py-2 flex items-center gap-2 hover:shadow-lg transition-all font-semibold"
                  >
                    <FaApple size={12} />
                    App Store
                  </a>
                )}
                {playStoreLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={playStoreLink}
                    className="text-xs bg-gradient-to-r from-foreground to-foreground/90 text-background rounded-lg px-3 py-2 flex items-center gap-2 hover:shadow-lg transition-all font-semibold"
                  >
                    <FaGooglePlay size={12} />
                    Play Store
                  </a>
                )}
              </div>
            )}
            <p className="text-base text-foreground/80 leading-relaxed">
              {description.trim()}
            </p>
          </div>
          <div className="mt-4 pt-5 border-t border-border/50">
            <h4 className="font-mono text-xs font-semibold text-foreground/60 mb-3 uppercase tracking-wider">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
