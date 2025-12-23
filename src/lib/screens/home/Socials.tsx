import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { PiPhoneCallBold } from "react-icons/pi";

interface ISocialLink {
  children: ReactNode;
  link: string;
  label: string;
}

const SocialLink = ({ children, link, label }: ISocialLink) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200 hover:scale-110"
    >
      {children}
    </a>
  );
};

const Socials = () => {
  return (
    <div className="flex gap-3 justify-center items-center md:justify-start ">
      <SocialLink
        link="mailto:josephjeremiah2001@gmail.com"
        label="Email Jeremiah Joseph"
      >
        <IoMail size={28} />
      </SocialLink>
      <SocialLink link="tel:+2347057570146" label="Call Jeremiah Joseph">
        <PiPhoneCallBold size={28} />
      </SocialLink>
      <SocialLink
        link="https://linkedin.com/in/jerrywonderr"
        label="LinkedIn Profile"
      >
        <FaLinkedin size={28} />
      </SocialLink>
      <SocialLink link="https://wa.me/+2347057570146" label="WhatsApp Contact">
        <FaWhatsapp size={28} />
      </SocialLink>
      <SocialLink link="https://github.com/jerrywonderr" label="GitHub Profile">
        <FaGithub size={28} />
      </SocialLink>
    </div>
  );
};

export default Socials;
