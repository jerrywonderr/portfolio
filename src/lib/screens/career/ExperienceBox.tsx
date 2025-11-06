// Download link rendered as a simple text anchor below
import ExperienceCard from "./ExperienceCard";

const ExperienceBox = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl sm:text-3xl text-foreground">My Discography</h4>
        <a
          href="https://drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link"
          target="_blank"
          className="text-sm sm:text-base text-foreground/70 hover:text-foreground hover:underline"
        >
          Download resume
        </a>
      </div>
      <div className="flex flex-col gap-6 relative ml-4 border-l border-border">
        <ExperienceCard
          startDate="January, 2025"
          endDate="Present"
          position="Full-Stack Developer (Contract)"
          logo="/assets/smarg-logo.png"
          company="Peekvibes"
          link="#"
          description="
                Leading development of a social events platform where users create and join events with real-time commenting and Q&A. 
                Architected WebSocket-based live interactions with a NestJS backend, Azure Kubernetes (AKS), CNPG for database reliability, and MinIO S3 for storage. 
                Added end-to-end monitoring with kube-prometheus stack. Live on the App Store."
          tags={[
            "React Native",
            "Expo",
            "NestJS",
            "WebSocket",
            "Azure K8s",
            "PostgreSQL",
            "CNPG",
            "MinIO S3",
            "Prometheus",
          ]}
        />
        <ExperienceCard
          startDate="February, 2025"
          endDate="Present"
          position="Mobile Developer (Contract)"
          logo="/assets/smarg-logo.png"
          company="BatelFit"
          link="#"
          description="
                Building a fitness app with workout tracking and a video player for guided sessions. Using Cloudflare for image delivery and Firebase for backend services. 
                Released on Google Play Store; working toward iOS App Store compliance."
          tags={[
            "React Native",
            "Expo",
            "Firebase",
            "Cloudflare",
            "TypeScript",
          ]}
        />
        <ExperienceCard
          startDate="March, 2025"
          endDate="Present"
          position="Full-Stack Developer (Contract)"
          logo="/assets/smarg-logo.png"
          company="Rehoboth"
          link="#"
          description="
                Developing a marketplace that connects cleaners to customers. Implementing end-to-end booking and secure payments using Stripe, 
                built with React Native + Expo and Firebase."
          tags={["React Native", "Expo", "Firebase", "Stripe", "TypeScript"]}
        />
        <ExperienceCard
          startDate="November, 2024"
          endDate="January, 2025"
          position="Mobile Developer (Contract)"
          logo="/assets/smarg-logo.png"
          company="NexaPay"
          link="#"
          certLink="#"
          certText="ALX Gig Certificate"
          description="
                Selected for ALX 'Gig at a Startup' program and placed with NexaPay. Contributed as a React Native developer, 
                delivering core frontend flows and collaborating closely with product/design. Completed the engagement with a certificate from ALX."
          tags={["React Native", "Expo", "TypeScript"]}
        />
        <ExperienceCard
          startDate="November, 2025"
          endDate="Present"
          position="Mobile Developer (Contract)"
          logo="/assets/smarg-logo.png"
          company="NexaPay"
          link="#"
          description="
                Continuing work on the NexaPay mobile application with React Native + Expo, focusing on secure payment experiences, performance, and UI polish."
          tags={["React Native", "Expo", "TypeScript"]}
        />
        <ExperienceCard
          startDate="November, 2023"
          endDate="Present"
          position="Software Developer (Mobile)"
          logo="/assets/smarg-logo.png"
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
            "TamaGUI",
          ]}
        />
        <ExperienceCard
          startDate="June, 2023"
          endDate="January, 2024"
          position="Software Developer (Mobile)"
          logo="/assets/cotrust-logo.jpeg"
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
          logo="/assets/sentinel-logo.jpeg"
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
          logo="/assets/kolat-logo.png"
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
