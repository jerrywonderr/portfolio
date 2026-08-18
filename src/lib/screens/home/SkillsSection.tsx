import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Curated by hand, not derived from every tag in the data files.
 *
 * The last group is deliberately separated: these are tools encountered while
 * shipping production work, not areas of claimed depth. Keep that distinction —
 * it is the difference between a defensible portfolio and an inflated one.
 */
const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Cloudflare Workers",
    ],
  },
  {
    title: "Worked with in production",
    skills: ["Azure Kubernetes", "Grafana", "Loki", "Keycloak", "MinIO"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Tools of the trade
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Full per-role stacks live on the{" "}
            <Link
              href="/career/experience"
              className="text-primary underline underline-offset-4 hover:text-accent"
            >
              experience page
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-6"
            >
              <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground/60">
                {group.title}
              </h3>
              <p className="text-base leading-relaxed text-foreground">
                {group.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
