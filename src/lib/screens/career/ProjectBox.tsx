import ProjectCard from "./ProjectCard";

const ProjectBox = () => {
  return (
    <div className="mb-6">
      <div>
        <h4 className="text-2xl mb-3 sm:text-3xl">My Projects</h4>
      </div>
      <div className="flex flex-col gap-y-6">
        <ProjectCard
          title="Notes API"
          image="/assets/notes-api.png"
          description="Introducing a Node.js-based API that simplifies the management of notes for users. 
          Synonymous with the backend of a note-taking application, users can perform create, read, 
          update, and delete (CRUD) operations on notes. This API serves as an alternative to building 
          a full-fledged backend application, making it an efficient solution for developers. With future 
          plans to niche down to a task manager API, this project is poised to become even more useful for 
          frontend developers. Credit for the inspiration and initial development goes to Uptick Engineering 
          Fellowship, a program that encouraged the creation of this versatile tool."
          tags={[
            "Node.js",
            "Express.js",
            "MySQL",
            "HTML5",
            "CSS3",
            "JavaScript",
          ]}
          link="https://notes-api-xp94.onrender.com/"
        />
        <ProjectCard
          title="Watch Out"
          image="/assets/weather-app.png"
          description="This project is a simple, yet functional web application that provides users with the 
          current weather conditions of their location, as well as the ability to search for weather conditions 
          in other areas. Powered by OpenWeatherMap API and the GeoLocation API, this project delivers accurate 
          and up-to-date weather information to users. Whether you're interested in your own local weather or 
          curious about conditions elsewhere, this app has you covered."
          tags={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "OpenWeatherMap API",
            "Bootstrap",
          ]}
          link="https://weather-app-p2gg.onrender.com/"
        />
        <ProjectCard
          title="Duplicate Remover"
          image="/assets/duplicate-remover.png"
          description="In my journey to join HouswareHQ through Github's octernship program, I designed and 
          developed a duplicate character remover application using React, meeting one of the application 
          requirements. While it was not ultimately accepted, this project served as an opportunity for me 
          to further develop my understanding of React principles and improve my state management skills, 
          leading to more efficient re-rendering of the application. The most challenging aspect of the project 
          was ensuring each unique character had a unique color while maintaining the same color for all duplicate 
          characters. After thoughtful analysis, I successfully achieved this goal."
          tags={["TypeScript", "JavaScript", "React", "Bootstrap"]}
          link="https://jerrywonderr.github.io/simple-word-play/process"
        />
        <ProjectCard
          title="CGPA Calculator"
          image="/assets/cgpa-calculator.png"
          description="Calculating your Cumulative Grade Point Average (CGPA) is now easier than ever with my Angular 
          and TypeScript-based CGPA Calculator. Designed with students in mind, this intuitive tool allows you to quickly 
          and accurately estimate your CGPA by inputting your grades and credit hours. Save valuable time and effort as you 
          monitor your academic progress and ensure you're on track to meet your educational goals. Whether you're a first-year 
          or a graduate student, this CGPA Calculator is your go-to resource for staying on top of your grades and planning your 
          academic future."
          tags={["TypeScript", "JavaScript", "Angular", "MaterialUI"]}
          link="https://jerrywonderr.github.io/cgpa-calc/"
        />
      </div>
    </div>
  );
};

export default ProjectBox;
