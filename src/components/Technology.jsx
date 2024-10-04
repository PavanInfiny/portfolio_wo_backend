import React, { useContext } from "react";
import { Contextstore } from "../store/store";

function Technology(props) {
  const id = props.id;
  const obj = useContext(Contextstore);
  const obj2 = obj.projectdetail.filter((i) => i.id == id);
  const loading = obj.loading;
  // console.log("technolgy in ", obj2);
  const Tech=obj2[0].technology.split(" ");
  if (loading) {
    return (
      <>
        <h1>djfoisdgofnvson</h1>loading
      </>
    );
  }
  return (
    <div className="center">
      {Tech.map(t=><button type="button" class="btn btn-info technologyused">{t}</button>)}
  
      
    </div>
  );
}

export default Technology;
