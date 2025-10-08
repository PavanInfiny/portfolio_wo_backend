import Contact from "../components/contact";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Slide1 from "../components/slide1";

function Home() {
  return (
    <>
        <Header></Header>
        <Slide1></Slide1>
        <Projects></Projects>
        <Skills></Skills>
        <br />
        <div className="complete">
        <Contact></Contact>
        </div>
    </>
  );
}
export default Home;