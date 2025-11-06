import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa6";
import { certificates } from "./data/certificates";

const CertificatesBox = () => {
  return (
    <div className="mb-6">
      <h4 className="text-2xl mb-3 sm:text-3xl text-foreground flex items-center gap-3">
        Certificates
        <span className="text-xs bg-muted text-foreground border border-border rounded-full px-2 py-0.5">
          {certificates.length}
        </span>
      </h4>
      <motion.ul
        whileInView={{ opacity: [0, 1], transition: { duration: 0.4 } }}
        className="flex flex-col gap-3"
      >
        {certificates.map(({ title, issuer, date, link }, idx) => (
          <li
            key={idx}
            className="bg-card border border-border rounded-lg p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-base text-foreground font-medium">{title}</p>
              <p className="text-sm text-foreground/70 flex items-center gap-2">
                <FaCertificate size={14} /> {issuer} • {date}
              </p>
            </div>
            <a
              href={link}
              target="_blank"
              className="text-sm bg-primary text-primaryForeground rounded-md px-3 py-1 hover:opacity-90"
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
