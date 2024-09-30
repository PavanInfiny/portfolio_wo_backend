import { createContext, useContext, useEffect, useState } from "react";

export const Contextstore = createContext({
  projectdetail: [],
  skills: [],
});
import React from "react";

function Store({ children }) {
  const [skills, setskills] = useState([
    {
      skillid: 1,
      skillname: "java",
      skillPercent: 75,
    },
  ]);
  const [projectdetail, setprojectdetail] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8181/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setprojectdetail(data); // Update the state with the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Contextstore.Provider
      value={{
        projectdetail,
        skills,
      }}
    >
      {children}
    </Contextstore.Provider>
  );
}

export default Store;
