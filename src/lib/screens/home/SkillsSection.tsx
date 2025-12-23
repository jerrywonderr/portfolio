import { motion } from "framer-motion";
import { experiences } from "@/lib/screens/career/data/experiences";
import { projects } from "@/lib/screens/career/data/projects";
import Tag from "@/lib/screens/career/Tag";

const SkillsSection = () => {
  const allTags = [
    ...experiences.flatMap((exp) => exp.tags),
    ...projects.flatMap((proj) => proj.tags),
  ];
  const uniqueTags = Array.from(new Set(allTags));

  const categories: Record<string, string[]> = {
    "Languages": ["TypeScript", "JavaScript"],
    "Frontend": [
      "React Native",
      "Expo",
      "React.js",
      "React",
      "Next.js",
      "TamaGUI",
      "NativeBase",
      "React Bootstrap",
    ],
    "Backend": [
      "NestJS",
      "Node.js",
      "Express.js",
      "Hono",
      "Cloudflare Workers",
      "Wrangler",
    ],
    "Databases & Storage": [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "CNPG",
      "MinIO S3",
      "Firebase",
    ],
    "Infrastructure & DevOps": [
      "Azure K8s",
      "Kubernetes",
      "Prometheus",
      "RabbitMQ",
      "Cloudflare",
    ],
    "Other": ["WebSocket", "Stripe", "Web3", "Blockchain", "Smart Contracts"],
  };

  const categorizedSkills: Record<string, string[]> = {};
  const uncategorized: string[] = [];

  uniqueTags.forEach((tag) => {
    let found = false;
    for (const [category, skills] of Object.entries(categories)) {
      if (skills.includes(tag)) {
        if (!categorizedSkills[category]) {
          categorizedSkills[category] = [];
        }
        categorizedSkills[category].push(tag);
        found = true;
        break;
      }
    }
    if (!found) {
      uncategorized.push(tag);
    }
  });

  if (uncategorized.length > 0) {
    categorizedSkills["Other"] = [
      ...(categorizedSkills["Other"] || []),
      ...uncategorized,
    ];
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Technologies & Skills
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, production-ready applications
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categorizedSkills).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-bold text-foreground mb-4 font-mono relative z-10">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

