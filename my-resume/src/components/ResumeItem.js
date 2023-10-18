import Nav from "../layout/Nav";
import AboutResCard from "../style/AboutResCard";

function ResumeItem() {
  return (
    <div>
      <Nav />
      <h1> Resume </h1>
      <AboutResCard>
        <div className="">
          <h1> Liam King </h1>
          <h1> BIO </h1>
          <div>
            <p>
              {" "}
              I am driven by the ambition and hope of advancing my career and
              providing for my family. I am passionate about learning new
              skills, exploring new technologies, and solving challenging
              problems. I aim to be more than just good enough as a developer,
              but to be recognized for innovation and quality within the tech
              space. I seek opportunities to network, collaborate, and grow with
              others who share the same enthusiasm and dedication for what they
              do as myself.
            </p>
          </div>
          <div>
            <h1> TECHNICAL SKILLS </h1>
            <h3>CSS</h3>
            <h3>HTML</h3>
            <h3>MAterial UI</h3>
            <h3>Javascript</h3>
            <h3>ReactJS</h3>
            <h3>NextJS</h3>
            <h3>Redux/ Redux-Sagas</h3>
            <h3>ModeJS</h3>
            <h3>VS Code</h3>
            <h3>Postgres SQL</h3>
            <h3>Express</h3>
            <h3>Git</h3>
            <h3>AngularJS</h3>
          </div>
          <h1> EDUCATION </h1>
          <h3>
            {" "}
            <a href="https://www.primeacademy.io/courses/engineering">
              {" "}
              Prime Digital Academy{" "}
            </a>{" "}
          </h3>
          <h4>
            {" "}
            Full-Stack Software Engineering Certification - Graduated 04-26-2023{" "}
          </h4>

          <h1> EXPERIENCE </h1>
          <div>
            <h3>
              {" "}
              <a href="https://storyforge.com/about"> StoryForge </a>{" "}
            </h3>
            <h3> Full-Stack Software Engineer </h3>
            <h3> 9/23 - current </h3>
          </div>
          <div>
            <ul>
              <li>
                Collaborate with junior and senior developers to design and
                implement new features in preparation for the company’s BETA
                release
              </li>
              <li>
                Enhance user experience through the buildout of the frontend
                using ReactJS and NextJS and their various libraries
              </li>
              <li>
                Conduct debugging and problem solving assessments during weekly
                stand-up and code reviews
              </li>
            </ul>
          </div>
          <h1> EXPERIENCE </h1>
          <div>
            <h3>
              {" "}
              <a href="https://storyforge.com/about">
                {" "}
                Prime Digital Academy{" "}
              </a>{" "}
            </h3>
            <h3> Full-Stack Software Engineering Student </h3>
            <h3> 10/22 - 04/23 </h3>
          </div>
          <div>
            <ul>
              <li>
                Gained skills in program engineering with a dedicated focus on
                modern technologies such as JavaScript, ReactJS, NodeJS,
                Express, SQL and API integration
              </li>
              <li>
                Exercised public speaking skills through courses in professional
                development along with real-world client work and project
                presentation
              </li>
              <li>
                Proactively developed strong and healthy peer relationships
                while in collaboration for the completion of various projects
                with an emphasis on nonviolent communication
              </li>
            </ul>
          </div>
        </div>
      </AboutResCard>
    </div>
  );
}

export default ResumeItem;
