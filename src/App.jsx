import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Resume from "./assets/RachelJoyCoprerosResumeWinter2023.pdf";
import ProjectCard from "./components/ProjectCard";
import Projectify from "./assets/projectify-cover.png";
import Thrive from "./assets/thrive-cover.png";
import CoffeeHouse from "./assets/coffeeHouse-cover.png";
import Asanaban from "./assets/asanaban-cover.png";
import RunAlong from "./assets/runAlong-cover.png";
import InvestmentApp from "./assets/investmentApp-cover.png";
import SlateReport from "./assets/slate-cover.png";
import SlateReportPDF from "./assets/SlateImpactReport.pdf";
import Connect from "./components/Connect";
import Copywrite from "./components/Copywrite";

function App() {
  const [count, setCount] = useState(0);
  const workLink = "/";
  const aboutLink =
    "https://racheljoy.notion.site/About-Me-f3e9df011e6f467d95e39073c273dfb9";
  const projectifyLink =
    "https://racheljoy.notion.site/Projectify-How-might-we-empower-girls-to-break-into-STEM-dc6b76dbcd4747f2b7f1339f01501756";
  const thriveLink =
    "https://www.notion.so/racheljoy/Thrive-How-might-we-help-students-find-what-self-care-looks-like-for-them-4163f0ba29964e0ca28b88cf56b473ee";
  const coffeeHouseLink =
    "https://www.notion.so/racheljoy/Coffee-House-How-might-we-increase-satisfaction-for-making-coffee-shop-orders-4a552f58c9dd41c39c08ce1a2c6f40ca";
  const asanabanLink =
    "https://www.notion.so/racheljoy/Asanaban-How-might-we-help-employees-view-their-Asana-tasks-in-Kanban-c3afd502a0ae45898a52a0a6fcaa4f3d";
  const runAlongLink =
    "https://www.notion.so/racheljoy/Run-Along-How-might-we-help-people-track-their-running-data-all-in-one-place-beb449b7c9ed4123aa25b5e75e01d082";
  const investmentAppLink =
    "https://www.notion.so/racheljoy/Investment-Planner-Dash-How-might-we-help-users-organize-one-time-investments-183cf2abfa3c4ad78150e70905a834a0";
  const linkedInLink = "https://www.linkedin.com/in/rjcopreros/";
  const emailLink = "mailto:rjoycopreros@gmail.com";
  const githubLink = "https://github.com/rjoyc";
  const copywriteYear = "2023";

  return (
    <div>
      <NavBar
        aboutLink={aboutLink}
        workLink={workLink}
        resumeLink={Resume}
      ></NavBar>
      <div className="flex justify-center items-center pt-20">
        <div>
          <img
            src="src\assets\doodle-landing.png"
            alt="doodle of teenager listens to music in headphones and hang loose symbol"
            className="pt-2 pl-5 pr-12 hover:animate-wiggle h-80"
          ></img>
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-left text-8xl pt-30 pb-2">
            hi, i'm <br></br> rachel joy
          </h1>
          <h2 className="text-4xl font-bold text-left text-gray-500 pt-3 pb-2">
            a designer & <br></br> developer
          </h2>
          <h4 className="text-left pt-10 font-normal text-gray-500 w-3/4">
            i'm currently studying systems design engineering at UW. i'm an
            empathetic creator + a curious learner, looking for ways bridge the
            gap between design and development. also, i'm seeking summer 2023
            internships!
          </h4>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center text-gray-500 pt-16 pb-10">
        my work
      </h2>
      <div className="grid grid-cols-2 gap-12">
        <ProjectCard
          title="projectify"
          projectScope="ui/ux design & development"
          cover={Projectify}
          link={projectifyLink}
        ></ProjectCard>
        <ProjectCard
          title="thrive"
          projectScope="ui/ux design, designathon"
          cover={Thrive}
          link={thriveLink}
        ></ProjectCard>
        <ProjectCard
          title="coffee house"
          projectScope="ui/ux design"
          cover={CoffeeHouse}
          link={coffeeHouseLink}
        ></ProjectCard>
        <ProjectCard
          title="asanaban"
          projectScope="ui/ux design & development, redesign"
          cover={Asanaban}
          link={asanabanLink}
        ></ProjectCard>
        <ProjectCard
          title="run along"
          projectScope="ui design"
          cover={RunAlong}
          link={runAlongLink}
        ></ProjectCard>
        <ProjectCard
          title="investment planner"
          projectScope="ui design"
          cover={InvestmentApp}
          link={investmentAppLink}
        ></ProjectCard>
        <ProjectCard
          title="slate church report"
          projectScope="ui design"
          cover={SlateReport}
          link={SlateReportPDF}
        ></ProjectCard>
      </div>
      <Connect
        linkedIn={linkedInLink}
        email={emailLink}
        github={githubLink}
      ></Connect>
      <Copywrite year={copywriteYear}></Copywrite>
    </div>
  );
}

export default App;
