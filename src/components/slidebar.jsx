import React, { useContext } from 'react'
import Header from './header';
import { Contextstore } from '../store/store';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

function Slidebar() {
  const contextobj=useContext(Contextstore);
  const seterrorresponse=contextobj.seterroeresponse;
  const adminbutton=contextobj.adminbutton;
  const setadminbutton=contextobj.setadminbutton;
  const projectaryobj=contextobj.projectdetail;
  const dropskillid=contextobj.skilldropid;
  const skillobjary=contextobj.skills;
  const setprojectdropid=contextobj.setprojectdropid;
  const projectdropid=contextobj.projectdropid;
  const setskilldropid=contextobj.setskilldropid;
  const skilldropid=contextobj.skilldropid;

  // const 
  return (
<>
<div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "100%" ,height:"100vh"}}>
   
      <span style={{alignSelf:"center"}} class="fs-4">Admin</span>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link style={{color:"white"}} class="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <hr/>
      <li>
        <a class={`nav-link text-white ${(adminbutton==="project")?"active":null}`} onClick={()=>{setadminbutton("project");seterrorresponse(0)}}>
          Edit Project
        </a>
        {(adminbutton==="project") && projectaryobj.map(n=><button class="nav-link" onClick={()=>{setprojectdropid(n.id);
          seterrorresponse(0); console.log("idchanged")}} style={{color:(projectdropid===n.id)?"red":"grey",marginLeft:"30px"}} aria-current="page">{n.id} : {n.projecttitle}</button>) }
      </li>
      <li>
      <a class={`nav-link text-white ${(adminbutton==="skill")?"active":null}`}
      onClick={()=>{setadminbutton("skill");seterrorresponse(0)}}>
          Edit skills
        </a>
        {(adminbutton==="skill") && skillobjary.map(n=><button class="nav-link" onClick={()=>{setskilldropid(n.id);seterrorresponse(0)}} style={{color:(skilldropid===n.id)?"red":"grey",marginLeft:"30px"}} aria-current="page">{n.id} : {n.name}</button>) }
      </li>
     
    </ul>

    
  </div>

</>
  );
}

export default Slidebar