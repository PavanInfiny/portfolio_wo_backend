import css from "../styles/slide1.module.css";
import image from "../assets/pic.png";
function Slide1() {
  return (
    <>
      <div id="slide1" className={`d-flex position-relative ${css.slide1}`}>
        <div className={css.complete}>
          <img src={image} className="flex-shrink-0 me-3" alt="..." />
        </div>
        <div className={css.right}>
          <h5 className={`mt-0 ${css.h5tag}`}>PAVAN KUMAR P</h5>
          <p className={` ${css.desc}`}>
            A dedicated engineer with a passion for exploring scientific
            concepts in detail and a strong aptitude for troubleshooting
            technical issues. Enthusiastic about understanding complex problems
            at their core and developing effective solutions.
          </p>
        </div>
      </div>
      {/* <div className={css.slide1} id="home">
        <div className={`${css.complete} ${css.desc}`}>
          <div>
            <h1>Pavan Kumar P</h1>
          </div>
          <div>
            <p>
              A dedicated engineer with a passion for exploring scientific
              concepts in detail and a strong aptitude for troubleshooting
              technical issues. Enthusiastic about understanding complex
              problems at their core and developing effective solutions.
            </p>
          </div>
        </div>
        <div className={css.complete}>
          <img src={image} alt="img not found" />
        </div>
      </div> */}
    </>
  );
}
export default Slide1;
