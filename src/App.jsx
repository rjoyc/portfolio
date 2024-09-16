import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Resume from "./assets/RachelCoprerosResumeWinter2025.pdf";
import ProjectCardNew from "./components/ProjectCardNew";
import Solace from "./assets/solace-cover.png";
import DOZR from "./assets/DOZR-cover.png";
import Projectify from "./assets/projectify-cover-new.png";
import Thrive from "./assets/thrive-cover-new.png";
import CoffeeHouse from "./assets/coffeeHouse-cover-new.png";
import Copywrite from "./components/Copywrite";
import DoodleLanding from "./assets/Me.png";
import DoodleLandingHover from "./assets/Me_hover.png";
import Chevron from "./assets/chevron.png";
import ConnectButton from "./components/ConnectButton";

function App() {
  const [count, setCount] = useState(0);
  const workLink = "/portfolio/";
  const aboutLink =
    "https://racheljoy.notion.site/About-Me-f3e9df011e6f467d95e39073c273dfb9";
  const allProjectsLink =
    "https://racheljoy.notion.site/7da3f6501c0b4c1eb70e12488f9662ab?v=ad38ede752fa438a82c4e61936cf76c4&pvs=4";
  const solaceLink =
  "https://www.figma.com/slides/vxqGQwBc2q74FLrEb0EFqH/Solace%3A-Competitive-Analysis-of-Access-Request-Flows?node-id=5-86&t=NqgzjLiGxUE58bUi-1";
    const dozrLink =
    "https://racheljoy.notion.site/DOZR-0b2fcd720de9494dad7069906193fb9d?pvs=4";
  const projectifyLink =
    "https://racheljoy.notion.site/Projectify-How-might-we-empower-girls-to-break-into-STEM-dc6b76dbcd4747f2b7f1339f01501756";
  const thriveLink =
    "https://racheljoy.notion.site/Thrive-How-might-we-help-students-find-what-self-care-looks-like-for-them-4163f0ba29964e0ca28b88cf56b473ee";
  const coffeeHouseLink =
    "https://racheljoy.notion.site/Coffee-House-How-might-we-increase-satisfaction-for-making-coffee-shop-orders-4a552f58c9dd41c39c08ce1a2c6f40ca";
  const linkedInLink = "https://www.linkedin.com/in/rjcopreros/";
  const emailLink = "mailto:rjoycopreros@gmail.com";
  const githubLink = "https://github.com/rjoyc";
  const copywriteYear = "2023";

  return (
    <div>
      {/* nav bar */}
      <NavBar
        aboutLink={aboutLink}
        workLink={workLink}
        resumeLink={Resume}
      ></NavBar>

      {/* // landing section */}
      <div className="flex flex-col md:flex-row justify-center items-center py-8 px-10 gap-y-4 md:gap-x-16">
        <div className="md:w-1/3">
          <img
            src={DoodleLanding}
            alt="doodle of rachel listening to music"
            className="h-60 m-auto md:w-auto md:h-auto transition hover:animate-wiggle object-contain"
          ></img>
        </div>
        <div className="flex flex-col justify-center gap-y-6 md:w-1/3">
          <div className="flex flex-col gap-y-1 justify-center">
            <h1 className="font-bold text-neutral-800 text-center md:text-left text-4xl md:text-6xl">
              hi, i'm rachel joy
            </h1>
            {/* <h2 className="text-xl text-neutral-800 font-bold text-center md:text-left">
              product designer
            </h2> */}
          </div>
          <div className="flex flex-col gap-y-4">
            <body className="leading-tight text-center md:text-left font-normal text-neutral-800">
              i'm currently studying systems design engineering at UW.
              from coding beginnings to design adventures, i’m ever-evolving 
              to craft delightful user experiences.
            </body>
            <div className="w-fit border-2 border-neutral-800 rounded-lg p-2 pr-3 shadow transition hover:bg-sky-100">
              <body className="leading-tight text-center md:text-left font-normal text-neutral-800">
                ˗ˏˋ seeking winter & summer 2025 internships!
              </body>
            </div>
          </div>
        </div>
      </div>

      {/* // work section */}
      <div className="flex flex-col justify-center items-center py-8 px-4 gap-y-4">
        <h2 className="text-xl text-neutral-800 font-bold text-center">
          my work
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 w-full">
          <ProjectCardNew
            title="Solace"
            howMightWe="Building the foundation for access-request flow"
            cover={Solace}
            link={solaceLink}
            status="Read now!"
            skills={["user research", "competitive analysis"]}
          ></ProjectCardNew>
          <ProjectCardNew
            title="DOZR"
            howMightWe="Designing solutions for a rental equipment marketplace"
            cover={DOZR}
            link={dozrLink}
            status="Coming soon!"
            skills={["ui/ux design", "product thinking"]}
          ></ProjectCardNew>
          <ProjectCardNew
            title="Projectify"
            howMightWe="How might we help girls gain relevant experience in STEM?"
            cover={Projectify}
            link={projectifyLink}
            status="Read now!"
            skills={["ui/ux design", "frontend dev"]}
          ></ProjectCardNew>
          <ProjectCardNew
            title="Thrive"
            howMightWe="How might we help students find what self-care looks like for them?"
            cover={Thrive}
            link={thriveLink}
            status="Read now!"
            skills={["ui/ux design", "designathon"]}
          ></ProjectCardNew>
          {/* <ProjectCardNew
            title="Coffee House"
            howMightWe="How might we increase satisfaction for making coffee shop orders?"
            cover={CoffeeHouse}
            link={coffeeHouseLink}
            status="Read now!"
            skills={["ui/ux design", "team"]}
          ></ProjectCardNew> */}
        </div>
        <div>
          <a
            className="font-semibold text-neutral-800 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={allProjectsLink}
          >
            see all (6)
          </a>
        </div>
      </div>

      {/* connect section */}
      <div className="flex flex-col justify-center items-center py-8 px-10 gap-y-4">
        <h2 className="text-xl text-neutral-800 font-bold text-center">
          let's stay connected
        </h2>

        <div className="flex flex-col w-full md:w-1/2 gap-y-4">
          <ConnectButton
            title="linkedin"
            link={linkedInLink}
            button={Chevron}
          ></ConnectButton>
          <ConnectButton
            title="email"
            link={emailLink}
            button={Chevron}
          ></ConnectButton>
          <ConnectButton
            title="github"
            link={githubLink}
            button={Chevron}
          ></ConnectButton>
        </div>
      </div>

      {/* copywrite section */}
      <div className="p-4">
        <Copywrite year={copywriteYear}></Copywrite>
      </div>
    </div>
  );
}

export default App;
