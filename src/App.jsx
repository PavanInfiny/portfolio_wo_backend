
import "./App.css";

import Slide1 from "./components/Slide1"
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import Store from "./store/store";

function App() {

  // const [count, setCount] = useState(0);
  return (
    <div className="pagebg">
      <div className="section">
        <Store>
        <RouterProvider router={Router}/>
        </Store>
      </div>
    </div>
  );
}

export default App;
