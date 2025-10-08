import React, { useContext } from "react";
import Individualcomponent from "./individualprojects";
import css from "../styles/projects.module.css";
import { Contextstore } from "../store/store";
const Projects = () => {
  // let projectdesc={
  //   protitle:title,
  //   prodesc:desc,
  //   proimg:""
  // }
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
            pic={n.img}
            id={n.id}
          ></Individualcomponent>
        ))}
      </div>
    </>
  );
};

export default Projects;
