import React from "react";
import { Link } from "react-router-dom";
// import * as Images from "../assets";
import "@fontsource/roboto";
import css from "../styles/individualprojects.module.css";
const Individualcomponent = (props) => {
  console.log('in the individualprojects ',props.id);
  return (

    <>
      <div className={`card ${css.individualcomponent}`}>
        <h3 className="card-text" style={{ textAlign: "center" ,opacity: "0.7" , textalign: "center",color: "aqua"}}>
          {props.title}
        </h3>
        <img src={props.pic} className="card-img-top" alt="..." />
        <div className={`card-body ${css.descr}`}>
          <p className="card-text textalign">{props.desc}</p>
        </div>
        <div style={{marginBottom:"3%"}} className={css.knowmore}>
          <button type="button" className={`btn btn-primary`}>
            <Link style={{color:"white", textDecoration:"none"}} to={`/projects/${props.id}`}>Know More</Link>
          </button>
        </div>
      </div>
    </>
    // <div className={css.individualcomponent}>
    //   <h3 className={css.title}>{props.title}</h3>
    //   <img className={css.image} src={props.pic} alt="no image"/>
    //   <p className={css.desc}>{props.desc}</p>
    // </div>
  );
};

export default Individualcomponent;
