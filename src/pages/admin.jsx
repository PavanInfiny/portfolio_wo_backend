import React, { useContext, useState } from "react";
import { Contextstore } from "../store/store";
import Slidebar from "../components/slidebar";
import Adminprojects from "../components/adminprojects";
import Adminskills from "../components/Adminskills";
import Loading from "../components/loading";
function Admin() {
  const contextobj=useContext(Contextstore);
  const projectsobjarray=contextobj.projectdetail;
  // const contextobj = useContext(Contextstore);
  const projectloading = contextobj.loading;
  const Skillloading = contextobj.skillload;
  const adminbutton = contextobj.adminbutton;
  const setprojectdropid=contextobj.setprojectdropid;
  const projectdropid=contextobj.projectdropid;
  const setskilldropid=contextobj.setskilldropid;
  const skilldropid=contextobj.skilldropid;

  const [project,setproject]=useState(projectsobjarray[0]);
  


  
  console.log("console printing" ,projectsobjarray[0]);

  if(projectloading || Skillloading){
  return (
   <>
      <Loading></Loading>
   </>
  )
  }

  return (
    <>
    {/* <Header></Header> */}
      <div class="mai">
        <div class="cla1" id="id1">
        <Slidebar></Slidebar>
        </div>
        <div class="cla1" id="id2">
          {(adminbutton==="project")?<Adminprojects id={projectdropid}></Adminprojects>: <Adminskills id={skilldropid}></Adminskills>}
        </div>
      </div>
    </>
  );
}
export default Admin;
