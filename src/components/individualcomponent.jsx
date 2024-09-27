import React from "react";
// import * as Images from "../assets";
import "@fontsource/roboto";
import css from "../styles/individualcomponent.module.css";
const Individualcomponent = (props) => {
  return (
    <div className={css.individualcomponent}>
      <h3 className={css.title}>{props.title}</h3>
      <img className={css.image} src={props.pic} alt="no image"/>
      <p className={css.desc}>{props.desc}</p>
    </div>
  );
};

export default Individualcomponent;
