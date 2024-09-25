import React from "react";
// import * as Images from "../assets";

import css from "../styles/individualcomponent.module.css";
const Individualcomponent = (props) => {

  return (
    <div className={css.individualcomponent}>
      <h3>{props.title}</h3>
      <img src={props.pic} alt="no image" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Individualcomponent;
