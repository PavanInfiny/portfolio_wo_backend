import React, { useContext } from "react";
import css from "../styles/Projectpageitem.module.css";
import { Contextstore } from "../store/store";
function Workingpoints(props) {
  const id=props.id;
  const obj = useContext(Contextstore)
  const obj2 = obj.projectdetail.filter((i) => i.id == id);
  const loading=obj.loading;
  const working=obj2[0].working.split("sep");
  if(loading){
    return(<>
      <h1>loading</h1>
    </>);
  }
  return (
    <ul>
      {working.map((point) => (
        
          <div className={css.desc}>
            <li>
            <p>{point}</p>
            </li>
          </div>
     
      ))}
    </ul>
  );
}

export default Workingpoints;
