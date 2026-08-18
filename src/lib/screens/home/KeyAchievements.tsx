import { experiences } from "@/lib/screens/career/data/experiences";
import { FaApple, FaGooglePlay } from "react-icons/fa";

/**
 * Every entry here is a link a visitor can click and verify.
 * Deliberately no derived "X+ years" / "100% full-stack" counters.
 */
const shipped = experiences.filter(
  (exp) => exp.appStoreLink || exp.playStoreLink
);

const KeyAchievements = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Shipped and live
          </h2>
          <p className="text-lg text-foreground/70">
            Production apps on the App Store and Google Play
          </p>
        </div>
        {/* Flex + justify-center rather than a fixed grid: the number of shipped
            apps changes as roles come and go, and a grid leaves a lopsided gap
            whenever the count doesn't divide evenly into the column count. */}
        <div className="flex flex-wrap justify-center gap-4">
          {shipped.map((exp) => (
            <div
              key={exp.slug}
              className="flex w-full flex-col rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:w-[280px]"
            >
              <h3 className="mb-1 text-lg font-bold text-foreground">
                {exp.company}
              </h3>
              <p className="mb-4 flex-1 text-sm text-foreground/60">
                {exp.position}
              </p>
              <div className="flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
