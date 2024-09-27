import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Slide1 from "./components/slide1"
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
function App() {
  // const [count, setCount] = useState(0);
  
  return <>
  <div className="pagebg">
    <div className="section">
  <Header></Header>
  <Slide1></Slide1>
  <Projects></Projects>
  <Skills></Skills>
  <Contact></Contact>
  </div>
  </div>
  </>;
}

export default App;
