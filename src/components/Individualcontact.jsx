import css from "../styles/Individualcontact.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Individualcontact(props) {
  switch (props.n) {
    case 0: {
      return (
        <>
          <div className={css.indicontact}>
            <a href="abcdpavan0@gmail.com">abcdpavan0@gmail.com</a>
          </div>
        </>
      );
    }
    case 1: {
      return (
        <>
           <div className={css.indicontact}>
            <a style={{color:"white"}}>9972731121</a>
          </div>
        </>
      );
    }

    case 2: {
      return (
        <>
          <div className={css.indicontact}>
            <a href={`${props.link}`}>
              <FaLinkedin style={{ color: "white" }} />
            </a>
          </div>
        </>
      );
    }
    case 3: {
      return (
        <>
          <div className={css.indicontact}>
            <a href={`${props.link}`}>
              <FaGithub style={{ color: "white" }} />
            </a>
          </div>
        </>
      );
    }
  }
}

export default Individualcontact;
