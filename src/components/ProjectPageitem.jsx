import React from "react";
import { useContext } from "react";
import { Contextstore } from "../store/store";
import css from "../styles/Projectpageitem.module.css";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import Technology from "./Technology";

function ProjectPageitem(props) {
  console.log(props.id);
  const obj = useContext(Contextstore);
  console.log(obj);
  const obj3 = obj.projectdetail;
  const obj2 = obj3.filter((i) => i.projectid == props.id);

  console.log("printing", obj2);
  window.scrollTo(0, 0);
  return (
    <>
    <div className={css.complete}>
      <div className={css.title}>
        <h1>{obj2[0].projecttitle.toUpperCase()}</h1>
      </div>

      <div className={css.subtitle}>
        <h5>ABSTRACT</h5>
      </div>
      <div className={css.desc}>
        <p>{obj2[0].projectdesc}</p>
      </div>
      <div>
        <div className={css.subtitle}>
          <h5>TECHNOLOGY USED</h5>
        </div>
        <br />
        <Technology></Technology>
      </div>
      <br />
      <div className={css.subtitle}>
        <h5>LINKS</h5>
      </div>
      <div className="center" style={{ marginLeft: "20%", marginTop: "20px",marginRight:"20%" }}>
        <table class="table table-dark table-striped-columns">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">PPT</th>
              <th scope="col">Report</th>
              <th scope="col">Code(Git)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td><a href="">link</a></td>
              <td><a href="">link</a></td>
              <td><a href="">link</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className={css.subtitle}>
        <h5>WORKING</h5>
      </div>
      <br />
      <div className={css.desc}>
        <p>{obj2[0].projectdesc}</p>
      </div>
      <div className={css.subtitle}>
        <h5>IMAGES</h5>
      </div>
      <br />
      <div className={css.photos}></div>
    </div>
    <br />
    <br />
    </>
  );
}

export default ProjectPageitem;
