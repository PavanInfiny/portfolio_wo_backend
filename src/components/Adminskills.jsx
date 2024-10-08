import React, { useContext, useRef, useState } from "react";
import { Contextstore } from "../store/store";

function Adminskills(props) {
  const [passwordcorrect,setpasswordcorrect]=useState(true);
  const contextobj = useContext(Contextstore);
  const skillobjarray = contextobj.skills;
  const setskills = contextobj.setskills;
  const skillload = contextobj.skillload;
  const onsubmitbuttonskill = contextobj.onsubmitbuttonskill;
  const skill = skillobjarray.filter((n) => n.id === props.id);
  const name=useRef();
  const password=useRef();
  const percent=useRef();
  const link=useRef();
  const messege=["Enter The Password here","Data Updated","Incorrect Password"]
  const errorresponse=contextobj.errorresponse;
  const seterroeresponse=contextobj.seterroeresponse;
  const skillsubmitbutton=(e)=>{
    e.preventDefault();
    const obj = {
      id:props.id,
      name:name.current.value,
      percent:percent.current.value,
      link:link.current.value,
    };
    // if (password.current.value === "9972") {
      skillobjarray.forEach((n) => {
        console.log("before if");
        if (n.id === props.id) {
          n.name=obj.name;
          n.percent=obj.percent;
          n.link=obj.link;
                 
        }
        setpasswordcorrect(true);
        console.log(skillobjarray);
      });

      console.log("returned", onsubmitbuttonskill(obj,password.current.value));
      // if(onsubmitbuttonskill(obj,password.current.value)==="ok"){
      //   // alert("submitted");
      // }
      setskills(skillobjarray);  
    // } else {
    //   setpasswordcorrect(false);
    // }
  }
  return (
    <form onSubmit={skillsubmitbutton} className="adminprojects">
      <h4 style={{ textAlign: "center" }}>{props.id}</h4>
      <h4 style={{ textAlign: "center" }}>{skill[0].name}</h4>
      <div className="spacebetween">
        <label htmlFor="">Name : </label>
        {"    "}
        <input type="text" defaultValue={skill[0].name} ref={name} key={props.id}/>
      </div>
      <div className="spacebetween">
        <label htmlFor="">Percentage Progress : </label>
        {"    "}
        <input type="number" defaultValue={skill[0].percent} ref={percent} name="" id="" key={props.id}/>
      </div>
      <div className="spacebetween">
        <label htmlFor="">Notes Link : </label>
        {"    "}
        <input type="text" defaultValue={skill[0].link} name="" id="" ref={link} key={props.id}/>
      </div>
      <div>
            {" "}
         
            {<h6 style={{color:"red"}}>{messege[errorresponse]}</h6>}
            <label htmlFor="">Password : </label>{" "}
            <input
              type="password"
              ref={password}
            />
            {/* ref={title} */}
          </div>
          <p id="pid"></p>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
    </form>
  );
}

export default Adminskills;
