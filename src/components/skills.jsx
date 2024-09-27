import Individualskills from "./individualskill";
function Skills(){
  let slno=[0,1]
  let skills=["Java","git"];
  let progress=[75,50];
  let notes=[" "," "];
  return (
    <>
    <div id="skills">
        <h1 style={{ marginTop: "40px", textAlign: "center", color: "white"} }>
          Skills
        </h1>

      </div>
      <br />
      <div>
          {slno.map(n=><Individualskills sname={skills[n]} sprogress={progress[n]} snotes={notes[n]} slno={n}></Individualskills>)}
      </div>
    </>
  );
}
//,"C","JavaScript","ReactJs","SpringBoot","Servlets","Hibernate","JDBC"
export default Skills;