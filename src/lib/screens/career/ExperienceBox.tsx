import { PrimaryButtonLink } from "@/lib/components/Button";
import ExperienceCard from "./ExperienceCard";

const ExperienceBox = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl sm:text-3xl">My Discography</h4>
        <PrimaryButtonLink extraClass="text-xs sm:text-lg">
          Download resume
        </PrimaryButtonLink>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceCard
          startDate="November, 2023"
          endDate="Present"
          position="Software Developer (Mobile)"
          logo="/smarg-logo.png"
          link="https://usesmarg.com"
          company="Smarg"
          description="
                As a full-stack developer at Smarg, I contributed to the
                development of a fintech app by designing and implementing the
                core payment feature. I utilized React Native, TamaGUI, and
                Supabase to create an efficient and scalable codebase. My
                hands-on experience with database design using Supabase enhanced
                my expertise in developing robust and efficient databases for
                complex applications."
          tags={[
            "TypeScript",
            "JavaScript",
            "Supabase",
            "React Native",
            "RabbitMQ",
            "Zustand",
            "TamaGui",
          ]}
        />
        <ExperienceCard
          startDate="June, 2023"
          endDate="January, 2024"
          position="Software Developer (Mobile)"
          logo="/cotrust-logo.jpeg"
          company="Cotrust Equity"
          link="https://cotruste.com"
          description="
                As part of a team, I successfully developed the MVP for a fintech mobile app within three months by 
                implementing 70% of core functionalities. Git was used to ensure efficient collaboration and version 
                control. Post-launch, I continued to provide support and enhancements to improve the app's performance 
                and user satisfaction. To reduce expenses, I selected a cost-effective KYC verification service that 
                resulted in a ₦130 cost per successful run."
          tags={[
            "TypeScript",
            "JavaScript",
            "Supabase",
            "React Native",
            "NativeBase",
          ]}
        />
        <ExperienceCard
          startDate="March, 2023"
          endDate="June, 2023"
          position="Frontend Developer (Internship)"
          logo="/sentinel-logo.jpeg"
          company="Sentinel"
          link="https://usesentinel.app"
          description="
                As part of the development team at Sentinel, I improved the startup's B2B offerings by creating 
                a responsive landing page using React and Next.js, and integrating Tally Form to effectively 
                collect leads. Collaboration with UI/UX designers was crucial to ensure consistency with 
                brand identity and pixel-perfect execution. To increase the maintainability and scalability 
                of the codebase, I created reusable components for the Sentinel dashboard. By working cross-functionally 
                with product and design teams, I iterated on features to meet business requirements."
          tags={[
            "TypeScript",
            "JavaScript",
            "Supabase",
            "React Native",
            "RabbitMQ",
          ]}
        />
        <ExperienceCard
          startDate="June, 2022"
          endDate="July, 2022"
          position="Software Developer (Web)"
          logo="/kolat-logo.png"
          company="Kolat OAKS Logistics"
          link="https://www.google.com/search?q=kolatlogistics"
          description="
                In a time-efficient manner, I developed a mobile-responsive website using React, React-Bootstrap, and Node.js within a month. 
                This project required close collaboration with stakeholders to translate their vision into a visually appealing and user-friendly UI. 
                The website was deployed on Namecheap, including the purchase of a domain name and setting up a business email account for Kolat OAK 
                Logistics. Furthermore, a functional Contact Us form was added to enhance user engagement. My contribution resulted in an estimated 
                60% improvement in their online presence, directly impacting the business's outreach."
          tags={[
            "React.js",
            "JavaScript",
            "Node.js",
            "Express.js",
            "React Bootstrap",
          ]}
        />
      </div>
    </div>
  );
};

export default ExperienceBox;
