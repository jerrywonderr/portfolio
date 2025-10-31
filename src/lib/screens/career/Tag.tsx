import { motion } from "framer-motion";

interface ITag {
  children: string;
}

const Tag = ({ children }: ITag) => {
  return (
    <motion.div
      // initial={{ x: "100vw", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 0.8 }}
      whileInView={{
        scale: [0.8, 1],
        opacity: [0, 1],
        transition: { duration: 0.8 },
      }}
      // transition={{ duration: 3 }}
      className="inline-block"
    >
      <p className="text-xs bg-muted text-foreground border border-border rounded-full px-3 py-1">
        {children}
      </p>
    </motion.div>
  );
};

export default Tag;
