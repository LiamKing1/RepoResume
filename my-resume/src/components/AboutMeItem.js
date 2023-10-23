import styleClass from "../style/Card.module.css";
import AboutResCard from "../style/AboutResCard";

import HeadShot from "./HeadShot.jpg";

function AboutMeItem() {
  return (
    <AboutResCard>
      <img className={styleClass.img} src={HeadShot} alt="Headshot"></img>
      <h1> HEADSHOT </h1>
      <h1> Liam King </h1>
      <span>
        <a
          className={styleClass.actions}
          href="https://www.linkedin.com/in/liam-king-339433157/"
        >
          {" "}
          <button> Connect on LinkedIn </button>
        </a>
      </span>
      {/* <span>
        <a
          className={styleClass.actions}
        //   While useful, id need to install an email validator Api to create another level of security to avoid bots and spammer/scammers.
          href="mailto:william23.king@gmail.com?subject='What is you availabilty like?'&body='I wouldd like to share information about an opprotunity with you'"
        >
          {" "}
          <button> Send Me an Email </button>
        </a>
      </span> */}
      <h3>
        At StoryForge, I build innovative and engaging web applications as a
        software engineer, using React.js, Redux.js, CSS, and other
        technologies. I collaborate with a team of talented and passionate
        developers who share a common vision of creating impactful and
        user-friendly products. We are developing a product that aims increased
        user retention, engagement, and satisfaction, such as a gamified
        learning platform, a social media aggregator, and a personalized content
        generator.
        <br></br>
        <br></br>
        My journey as a developer began in October 2022, when I enrolled in
        Prime Digital Academy, a rigorous and immersive full-stack program that
        taught me the fundamentals of computer engineering technology. I learned
        how to design, develop, test, and deploy web applications using various
        frameworks, tools, and languages, such as JavaScript, Angular, Next.js,
        and SQL. I also gained valuable skills in problem-solving,
        collaboration, and communication, which I apply to my current role and
        projects. I am driven by the ambition and hope of advancing my career
        and providing for my family.
        <br></br>
        <br></br>I am passionate about learning new skills, exploring new
        technologies, and solving challenging problems. I aim to be more than
        just good enough as a developer, but to be recognized for innovation and
        quality within the tech space. I seek opportunities to network,
        collaborate, and grow with others who share the same enthusiasm and
        dedication for what they do.
      </h3>
    </AboutResCard>
  );
}

export default AboutMeItem;
