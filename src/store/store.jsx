import { createContext, useContext, useEffect, useState } from "react";

export const Contextstore = createContext({
  projectdetail: [],
  skills: [],
  setprojectdetail:()=>{},
  change:0,
  setchange:()=>{},
  setloading:()=>{},
  loading:true,

});
import React from "react";

function Store({ children }) {
  const [change,setchange]=useState(1);

  const [skills, setskills] = useState([
    {
      skillid: 1,
      skillname: "java",
      skillPercent: 75,
    },
  ]);
  const [projectdetail, setprojectdetail] = useState([]);
  const[loading,setloading]=useState(true);
  useEffect(() => {
    console.log("fetching started")
    fetch("https://pavanportfolio.pagekite.me/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setprojectdetail(data); // Update the state with the fetched data
        setloading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [change]);


  return (
    <Contextstore.Provider
      value={{
        projectdetail,
        skills,
        setprojectdetail,
        setchange,
        setloading,
        loading,
      }}
    >
      {children}
    </Contextstore.Provider>
  );
}

export default Store;
