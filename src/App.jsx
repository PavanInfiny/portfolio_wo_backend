import { useState } from "react";
import "./App.css";
import Slide1 from "./components/slide1"
import Header from "./components/header";
import Projects from "./components/projects";
function App() {
  // const [count, setCount] = useState(0);
  
  return <>
  <div className="pagebg">
    <div className="section">
  <Header></Header>
  <Slide1></Slide1>
  <Projects></Projects>
  </div>
  </div>
  </>;
}

export default App;
