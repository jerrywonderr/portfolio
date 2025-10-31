import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

interface IButton {
  children: string;
  showIcon?: boolean;
  extraClass?: string;
}

export const PrimaryButton = ({
  children,
  extraClass,
  showIcon = false,
}: IButton) => {
  return (
    <button
      className={`group bg-primary text-primaryForeground px-4 py-3 rounded-md flex align-baseline gap-x-2 hover:opacity-90 transition-all hover:shadow-md hover:scale-110 duration-200 ${extraClass}`}
    >
      {children}
      {showIcon && (
        <FiPlay
          size={20}
          className="group-hover:translate-x-2 transition-all"
        />
      )}
    </button>
  );
};

export const PulsatingPrimaryButton = ({
  children,
  extraClass,
  showIcon = false,
}: IButton) => {
  return (
    <motion.div
      whileInView={{
        scale: [1, 1.3, 1],
        transition: {
          duration: 2,
          stiffness: 30,
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      // whileTap={{
      //   opacity: [1, 0.6, 0.8, 1],
      //   transition: { repeat: Infinity, duration: 5 },
      // }}
      className={`group bg-primary text-primaryForeground px-4 py-3 rounded-md flex align-baseline gap-x-2 ${extraClass}`}
    >
      {children}
      {showIcon && <FiPlay size={20} />}
    </motion.div>
  );
};

export const PrimaryButtonLink = ({
  children,
  extraClass,
  showIcon = false,
}: IButton) => {
  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link"
      className={`group bg-primary text-primaryForeground px-4 py-3 rounded-md flex align-baseline gap-x-2 hover:opacity-90 transition-all hover:shadow-md hover:scale-110 duration-200 ${extraClass}`}
    >
      {children}
      {showIcon && (
        <FiPlay
          size={20}
          className="group-hover:translate-x-2 transition-all"
        />
      )}
    </a>
  );
};
