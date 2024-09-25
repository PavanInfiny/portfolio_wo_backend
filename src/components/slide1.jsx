import css from "../styles/Slide1.module.css"
import image from "../assets/pic.png"
function Slide1(){
  return<>
    <div className={css.slide1}>
      <div className={`${css.complete} ${css.desc}`}>
          <h1 >Pavan Kumar P</h1>
          <br />
          <p>A dedicated engineer with a passion for exploring scientific concepts in detail and a strong aptitude for troubleshooting technical issues. Enthusiastic about understanding complex problems at their core and developing effective solutions.</p>
      </div>
      <div className={css.complete}>
          <img src={image} alt="img not found" />

      </div>
    </div>
  </>
}
export default Slide1;