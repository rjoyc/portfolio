import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Resume from "./assets/RachelJoyCoprerosResumeWinter2023.pdf";

function App() {
  const [count, setCount] = useState(0);
  const aboutLink = "https://racheljoy.notion.site/About-Me-f3e9df011e6f467d95e39073c273dfb9";
  const workLink = "/";

  return (
    <div>
      <NavBar aboutLink={aboutLink} workLink={workLink} resumeLink={Resume}></NavBar>
      <h1 className="font-bold text-left text-8xl pt-24 pb-2">
        hi, i'm <br></br> rachel joy
      </h1>
      <h2 className="text-4xl font-bold text-left text-zinc-500 pt-3 pb-2">
        a designer & <br></br> developer
      </h2>
      <h1 className="text-left w-96 pt-10 font-semibold text-zinc-500">
        Lörem ipsum vakare kontramusk. Pseudoling kal nidyde för att suska. Byst sesit kron afåvis, kande. Pertik mus, il telera. Ning. Geon hypor för kåning, ost. Krodyssade anade såväl. 
      </h1>
    </div>
  );
}

export default App;
