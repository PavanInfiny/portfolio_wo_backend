import Individualcontact from "./Individualcontact";
import css from "../styles/contact.module.css"
function Contact() {
  let ind=[0,1,2,3];
  let cont=["abcdpavan0@gmail.com","9972731121","Lindin","GitHub"];
  let link=["","","http://www.linkedin.com/in/pavan-kumar-p-ab7933259","https://github.com/PavanInfiny"]
  return (
    <>
      <div>
        <div>
          <h1
            style={{ marginTop: "40px", textAlign: "center", color: "white" }}
          >
            Contact
          </h1>
          <br />
        </div>
        <div className={css.Contact}>
          {ind.map(n=><Individualcontact ways={cont[n]} link={link[n]}></Individualcontact>)}
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
export default Contact;