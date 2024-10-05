import css from "../styles/individualskill.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";
function Individualskills(props) {
  console.log(props.sprogress);
  return (
    <>
      <div className={css.skillcontent}>
        <div className={css.skillname}>
          <h5>{props.sname}  <FaArrowRight /></h5>
        </div>
        <div className={css.skillprogressbar}>
          <div className="progress">
            <div
              className={`progress-bar w-${props.sprogress}`}
            >{`${props.sprogress}%`}</div>
          </div>
        </div>
        <div className={css.notes}>
          <a href="">notes</a>
        </div>
      </div>
    </>
  );
}
export default Individualskills;
