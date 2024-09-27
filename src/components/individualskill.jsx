import css from "../styles/individualskill.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Individualskills(props) {
  return (
    <>
      <div className={css.skillcontent}>
        <div className={css.skillname}>
          <h4>{props.sname}</h4>
        </div>
        <div className={css.skillprogressbar}>
          <div class="progress">
            <div
              class={`progress-bar w-${props.sprogress}`}
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
