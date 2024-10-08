import { createContext, useContext, useEffect, useState } from "react";
import axois from "axios";
export const Contextstore = createContext({
  projectdetail: [],
  skills: [],
  setprojectdetail: () => {},
  change: 0,
  setchange: () => {},
  setloading: () => {},
  loading: true,
  skillload: true,
  adminbutton: "project",
  setadminbutton: () => {},
  projectdropid: 1,
  setprojectdropid: () => {},
  skilldropid: 1,
  setskilldropid: () => {},
  onsubmitbutton: () => {},
  setskills: () => {},
  onsubmitbuttonskill: () => {},
  errorresponse:0,
  seterroeresponse:()=>{},
});
import React from "react";

function Store({ children }) {
  const [change, setchange] = useState(1);
  const [adminbutton, setadminbutton] = useState("project");
  const [skills, setskills] = useState([]);
  const [projectdropid, setprojectdropid] = useState(1);
  const [skilldropid, setskilldropid] = useState(1);
  const [projectdetail, setprojectdetail] = useState([]);
  const [loading, setloading] = useState(true);
  const [skillload, setskillload] = useState(true);
  const [errorresponse,seterroeresponse]=useState(0);
  const onsubmitbutton = async (obj,pass) => {
    try {
      const responce = await axois.post(
        `https://pavanportfolio.pagekite.me/projects/${pass}`,
        obj
      ).then(n=>(n.data==="ok")?seterroeresponse(1):seterroeresponse(2));
    } catch (error) {
      console.log("error generated");
    }
  };
  useEffect(() => {
    console.log("fetching started");
    fetch("https://pavanportfolio.pagekite.me/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setprojectdetail(data); // Update the state with the fetched data
        setloading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [change]);
  useEffect(() => {
    fetch("https://pavanportfolio.pagekite.me/Skills")
      .then((response) => response.json())
      .then((data) => {
        setskills(data);
        setskillload(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const onsubmitbuttonskill = async (obj, pass) => {
    
    try {
      const response = await axois.post(
        `https://pavanportfolio.pagekite.me/Skills/${pass}`,
        obj
      ).then(n=>(n.data==="ok")?seterroeresponse(1):seterroeresponse(2));
    } catch (error) {
      
    }
  };

  return (
    <Contextstore.Provider
      value={{
        projectdetail,
        skills,
        setprojectdetail,
        setchange,
        setloading,
        loading,
        skillload,
        adminbutton,
        setadminbutton,
        projectdropid,
        setprojectdropid,
        setskilldropid,
        skilldropid,
        onsubmitbutton,
        setskills,
        onsubmitbuttonskill,
        errorresponse,
        seterroeresponse
      }}
    >
      {children}
    </Contextstore.Provider>
  );
}

export default Store;
