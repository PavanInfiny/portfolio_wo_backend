import React, { useContext, useRef, useState } from "react";
import { Contextstore } from "../store/store";

function Adminprojects(props) {
  const [passwordcorrect,setpasswordcorrect]=useState(true);
  const contextobj = useContext(Contextstore);
  const projectsobjarray = contextobj.projectdetail;
  const setprojectdetail = contextobj.setprojectdetail;
  const setprojectdropid = contextobj.setprojectdropid;
  const onsubmitbutton = contextobj.onsubmitbutton;
  const projectdropid = contextobj.projectdropid;
  const errorresponse=contextobj.errorresponse;
  const messege=["Enter The Password here","Data Updated","Incorrect Password"]
  const project = projectsobjarray.filter((n) => n.id === props.id);
  console.log("propid", props.id);
  console.log("project", project);
  const title = useRef();
  const projectdesc = useRef();
  const ppt = useRef();
  const report = useRef();
  const abstract = useRef();
  const technology = useRef();
  const working = useRef();
  const code = useRef();
  const img = useRef();
  const password = useRef();
  const onsubmithandle = (event) => {
    event.preventDefault();
    // console.log("updated value",title.current.value);
    const obj = {
      id: props.id,
      projecttitle: title.current.value,
      projectdesc: projectdesc.current.value,
      ppt: ppt.current.value,
      report: report.current.value,
      abstract: abstract.current.value,
      technology: technology.current.value,
      working: working.current.value,
      code: code.current.value,
      img: img.current.value,
    };

      projectsobjarray.forEach((n) => {
        console.log("before if");
        if (n.id === props.id) {
          n.projecttitle=obj.projecttitle;
          n.projectdesc=obj.projectdesc;
          n.ppt=obj.ppt;
          n.report=obj.report;
          n.technology=obj.technology;
          n.working=obj.working;
          n.code=obj.code;
          n.img=obj.img;
          n.abstract=obj.abstract;
          
        }
        setpasswordcorrect(true);
      });
      console.log("modified array", projectsobjarray);
      onsubmitbutton(obj,password.current.value);
      setprojectdetail(projectsobjarray);
      // const filtered=projectsobjarray.
      // console.log("filtered", modifiedarray);
      
      console.log(obj);
      console.log("submmitted");
 
  };
  return (
    <>
      <form onSubmit={onsubmithandle}>
        <div className="adminprojects">
          <h4 style={{ textAlign: "center" }}>{props.id}</h4>
          <h4 style={{ textAlign: "center" }}>{project[0].projecttitle}</h4>
          <div>
            {" "}
            <label htmlFor="">Title : </label>{" "}
            <input
              className="adminprojectgeneral"
              type="text"
              // value={project[0].projecttitle}
              defaultValue={project[0].projecttitle}
              key={props.id}
              ref={title}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="">description : </label>{" "}
            <textarea
              defaultValue={project[0].projectdesc}
              className="adminprojectgeneral"
              name=""
              id=""
              rows="3"
              ref={projectdesc}
              key={props.id}
            ></textarea>
          </div>
          <div>
            {" "}
            <label htmlFor="">Abstract : </label>{" "}
            <textarea
              defaultValue={project[0].abstract}
              className="adminprojectgeneral"
              name=""
              id=""
              rows="6"
              key={props.id}
              ref={abstract}
            ></textarea>
          </div>
          <div>
            {" "}
            <label htmlFor="">ppt : </label>{" "}
            <input
              defaultValue={project[0].ppt}
              className="adminprojectgeneral"
              type="text"
              key={props.id}
              ref={ppt}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="">report : </label>{" "}
            <input
              defaultValue={project[0].report}
              className="adminprojectgeneral"
              type="text"
              ref={report}
              key={props.id}
            />
          </div>

          <div>
            {" "}
            <label htmlFor="">Code : </label>{" "}
            <input
              defaultValue={project[0].code}
              className="adminprojectgeneral"
              type="text"
              key={props.id}
              ref={code}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="">Technology : </label>{" "}
            <textarea
              defaultValue={project[0].technology}
              className="adminprojectgeneral"
              name=""
              id=""
              rows="1"
              ref={technology}
              key={props.id}
            ></textarea>
          </div>
          <div>
            {" "}
            <label htmlFor="">Woring : </label>{" "}
            <textarea
              defaultValue={project[0].working}
              className="adminprojectgeneral"
              name=""
              id=""
              rows="6"
              ref={working}
              key={props.id}
            ></textarea>
          </div>
          <div>
            {" "}
            <label htmlFor="">image : </label>{" "}
            <input
              defaultValue={project[0].img}
              className="adminprojectgeneral"
              type="text"
              key={props.id}
              ref={img}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="">Password : </label>{" "}
            {<h6 style={{color:"red"}}>{messege[errorresponse]}</h6>}
            <input
              className="adminprojectgeneral"
              ref={password}
              type="password"
            />
            {/* ref={title} */}
          </div>
          <p id="pid"></p>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Adminprojects;
