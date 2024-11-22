import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { PiPhoneCallBold } from "react-icons/pi";
import Typewriter from "typewriter-effect";

interface ISocialLink {
  children: ReactNode;
  link: string;
}
const SocialLink = ({ children, link }: ISocialLink) => {
  return (
    <a
      href={link}
      target="_blank"
      className="hover:scale-110 transition-all duration-200"
    >
      {children}
    </a>
  );
};

const Visuals = () => {
  return (
    <div className="flex flex-col gap-y-2 justify-center align-center">
      <h4 className="text-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`Hello 👋`)
              .pauseFor(2500)
              .changeDeleteSpeed(9)
              .deleteAll()
              .typeString(`Connect with me 😎`)
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{ loop: true, autoStart: true }}
        />
      </h4>
      <div className="flex gap-x-2 mx-auto justify-center align-center">
        <SocialLink link="mailto:josephjeremiah2001@gmail.com">
          <IoMail size={24} />
        </SocialLink>

        <SocialLink link="tel:+2347057570146">
          <PiPhoneCallBold size={24} />
        </SocialLink>

        <SocialLink link="https://linkedin.com/in/jerrywonderr">
          <FaLinkedin size={24} className="" />
        </SocialLink>

        <SocialLink link="https://wa.me/+2347057570146">
          <FaWhatsapp size={24} className="" />
        </SocialLink>

        <SocialLink link="https://github.com/jerrywonderr">
          <FaGithub size={24} className="" />
        </SocialLink>
      </div>
    </div>
  );
};

export default Visuals;
