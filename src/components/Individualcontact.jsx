import css from "../styles/Individualcontact.module.css"
function Individualcontact(props){
  return(
    <>
    <div className={css.indicontact}>
      <a href={`${props.link}`}>{props.ways}</a>
    </div>
    </>
  );
}
export default Individualcontact;