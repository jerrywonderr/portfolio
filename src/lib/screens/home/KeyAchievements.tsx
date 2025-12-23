import { experiences } from "@/lib/screens/career/data/experiences";

const KeyAchievements = () => {
  const appsWithStoreLinks = experiences.filter(
    (exp) => exp.appStoreLink || exp.playStoreLink
  ).length;

  const parseDate = (dateStr: string): Date => {
    if (dateStr === "Present") return new Date();
    const [month, year] = dateStr.split(", ");
    const months: Record<string, number> = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };
    return new Date(parseInt(year), months[month], 1);
  };

  const earliestStartDate = experiences.reduce((earliest, exp) => {
    const start = parseDate(exp.startDate);
    return !earliest || start < earliest ? start : earliest;
  }, null as Date | null);

  const yearsOfExperience = earliestStartDate
    ? Math.floor(
        (new Date().getTime() - earliestStartDate.getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
      )
    : 0;

  const achievements = [
    {
      metric: `${appsWithStoreLinks}+`,
      label: "Production Apps",
      description: "Apps published on App Store and Play Store",
    },
    {
      metric: `${yearsOfExperience}+`,
      label: "Years Experience",
      description: "Building scalable production systems",
    },
    {
      metric: "100%",
      label: "Full-Stack",
      description: "Mobile, web, backend, and infrastructure",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Key Achievements
          </h2>
          <p className="text-foreground/70 text-lg">
            Building products that scale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group relative text-center bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                {achievement.metric}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {achievement.label}
              </h3>
              <p className="text-foreground/70">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
