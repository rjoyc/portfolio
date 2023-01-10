import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="font-bold text-left text-8xl pt-2 pb-2">
        hi, i'm <br></br> rachel joy
      </h1>
      <h2 className="text-3xl font-bold text-left text-zinc-500 pt-2 pb-2">
        a designer & <br></br> developer
      </h2>
     
    </div>
  );
}

export default App;
