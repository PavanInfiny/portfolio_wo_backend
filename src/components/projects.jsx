import React, { useContext } from "react";
import Individualcomponent from "./individualprojects";
import css from "../styles/projects.module.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { Contextstore } from "../store/store";
const Projects = () => {
  // let projectdesc={
  //   protitle:title,
  //   prodesc:desc,
  //   proimg:""
  // }
  let ary = [1, 2, 3, 4, 5];
  let i = [img1, img2, img3, img3, img2];
 const obj=useContext(Contextstore);
 const obj2=obj.projectdetail;
 
  return (
    <>
      <div id="projects">
        <h1 style={{ marginTop: "40px", textAlign: "center", color: "white" }}>
          Projects
        </h1>
      </div>
      <div className={css.projects}>
        {obj2.map((n) => (
          <Individualcomponent
            title={n.projecttitle}
            desc={n.projectdesc}
            pic={i[0]}
            id={n.id}
          ></Individualcomponent>
        ))}
      </div>
    </>
  );
};

export default Projects;
