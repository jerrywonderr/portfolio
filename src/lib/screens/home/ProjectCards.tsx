import Tag from "@/lib/screens/career/Tag";
import { experiences } from "@/lib/screens/career/data/experiences";
import prepImagePath from "@/lib/utils/prep-image-path";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const parseDate = (dateStr: string): Date => {
  if (dateStr === "Present") {
    return new Date(9999, 11, 31);
  }
  const [month, year] = dateStr.split(", ");
  const monthIndex = new Date(Date.parse(`${month} 1, ${year}`)).getMonth();
  return new Date(parseInt(year), monthIndex, 1);
};

const sortedExperiences = [...experiences].sort((a, b) => {
  const aIsOngoing = a.endDate === "Present" || a.ongoing;
  const bIsOngoing = b.endDate === "Present" || b.ongoing;
  if (aIsOngoing && !bIsOngoing) return -1;
  if (!aIsOngoing && bIsOngoing) return 1;
  if (aIsOngoing && bIsOngoing) {
    return parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime();
  }
  return parseDate(b.endDate).getTime() - parseDate(a.endDate).getTime();
});

// Curated when any role is flagged `featured`; otherwise falls back to
// most-recent-first. Curation matters here — the newest engagement is not
// always the one worth putting in front of a hiring manager.
const featured = experiences.filter((exp) => exp.featured);
const latestExperiences = (
  featured.length > 0 ? featured : sortedExperiences
).slice(0, 3);

const ProjectCards = () => {
  return (
    <div className="mx-auto mb-6 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
      {latestExperiences.map((exp, idx) => (
        <motion.article
          key={exp.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
        >
          <div className="mb-4 flex items-center gap-3">
            {exp.logo ? (
              <div className="rounded-lg bg-muted p-1.5">
                <Image
                  src={prepImagePath(exp.logo)}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                  alt={`${exp.company} logo`}
                />
              </div>
            ) : (
              <div
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-primaryForeground shadow-md"
              >
                {exp.company.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="truncate text-lg font-bold text-foreground">
                {exp.company}
              </h3>
              <p className="truncate text-sm text-foreground/60">
                {exp.position}
              </p>
            </div>
          </div>

          <p className="mb-1 font-mono text-xs text-foreground/50">
            {exp.startDate} → {exp.endDate}
          </p>

          <p className="mb-4 mt-2 flex-1 text-sm leading-relaxed text-foreground/75">
            {exp.summary}
          </p>

          {(exp.appStoreLink || exp.playStoreLink) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {exp.appStoreLink && (
                <a
                  href={exp.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-foreground px-2.5 py-1.5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
                >
                  <FaApple size={11} /> App Store
                </a>
              )}
              {exp.playStoreLink && (
                <a
                  href={exp.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-foreground px-2.5 py-1.5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
                >
                  <FaGooglePlay size={11} /> Play Store
                </a>
              )}
            </div>
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {(exp.highlightTags ?? exp.tags.slice(0, 4)).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <Link
            href={`/career/experience#${exp.slug}`}
            className="mt-auto text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Read more →
          </Link>
        </motion.article>
      ))}
    </div>
  );
};

export default ProjectCards;
