import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa6";
import { certificates } from "./data/certificates";

const CertificatesBox = () => {
  return (
    <div className="mb-6">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Certificates
        </h2>
        <p className="text-foreground/70 text-sm sm:text-base">
          Professional certifications and achievements
        </p>
      </div>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        {certificates.map(({ title, issuer, date, link }, idx) => (
          <li
            key={idx}
            className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <p className="text-lg text-foreground font-semibold mb-1">{title}</p>
              <p className="text-sm text-foreground/70 flex items-center gap-2">
                <FaCertificate size={14} /> {issuer} • {date}
              </p>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-primary text-primaryForeground rounded-lg px-4 py-2 hover:opacity-90 transition-opacity font-medium"
            >
              View
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CertificatesBox;
