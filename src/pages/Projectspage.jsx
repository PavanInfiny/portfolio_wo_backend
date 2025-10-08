
import Header from "../components/header";
import ProjectPageitem from "../components/ProjectPageitem";
import { useParams } from "react-router-dom";
import Contact from "../components/contact";

function Projectspage() {
  const { id }= useParams();
  return (
  
    <>
      <Header></Header>
      <ProjectPageitem id={id}></ProjectPageitem>
      <div className="complete">
      <Contact></Contact>
      </div>
    </>
  );
}

export default Projectspage;
