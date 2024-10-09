import css from "../styles/individualskill.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";
function Individualskills(props) {
  console.log(props.sprogress);

  return (
    <>
      <div className={css.skillcontent}>
        <div className={css.skillname}>
          <h5>
            {props.sname} <FaArrowRight />
          </h5>
        </div>
        <div className={css.skillprogressbar}>
          <div className="progress">
            <div
              class="w3-border"
              style={{
                height: "24px",
                width: props.sprogress + "%",
                backgroundColor: "#8e8eff",
                textAlign: "center",
                color: "black",
                fontWeight: "800",
              }}
            >
              {props.sprogress}%
            </div>
          </div>
        </div>
        <div className={css.notes}>
          <a href={props.snotes}>notes</a>
        </div>
      </div>
    </>
  );
}
export default Individualskills;
