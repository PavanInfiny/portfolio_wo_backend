import React from "react";
import Individualcomponent from "./individualcomponent";
import css from "../styles/projects.module.css";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
const Projects = () => {
  // let projectdesc={
  //   protitle:title,
  //   prodesc:desc,
  //   proimg:""
  // }
  let ary=[0,1,2];
  let i=[img1,img2,img3];
  let title = ["FinFriend", "Optipath", "Portifolio"];
  let desc = [
    "This project involved designing an automated water level indicator using Arduino and Bluetooth sensors, enabling real-time monitoring via mobile devices and showcasing IoT skills.",
    "FIN FRIEND is a website for managing expenses and fairly dividing them among groups, built with HTML, CSS, and JavaScript for easy use.",
    "OPTIPATH is a Java web application that visualizes Dijkstras algorithm to find the shortest path between two points on a map.",
    "OPTIPATH is a Java web application that visualizes Dijkstra’s algorithm to find the shortest path between two points on a map."
  ];
  // var pro1=[new projectdesc("projectdesc","This project involved designing an automated water level indicator using Arduino and Bluetooth sensors, enabling real-time monitoring via mobile devices and showcasing IoT skills.",),
  // new projectdesc("FinFriend","FIN FRIEND is a website for managing expenses and fairly dividing them among groups, built with HTML, CSS, and JavaScript for easy use."),
  // new projectdesc("Portifolio","OPTIPATH is a Java web application that visualizes Dijkstra’s algorithm to find the shortest path between two points on a map.")
  // ]
  // pro1.pro

  return (
    <>
      <div>
        <h1 style={{ marginTop: "40px", textAlign: "center", color: "white" }}>
          Projects
        </h1>
      </div>
      <div className={css.projects}>
        {ary.map(n=><Individualcomponent title={title[n]} desc={desc[n]} pic={i[n]}></Individualcomponent>)}
        
      </div>
    </>
  );
};

export default Projects;
