import { useContext, useRef } from "react";
import { Contextstore } from "../store/store";

function ProjectComponent() {
  const contextobj = useContext(Contextstore);
  const projectsobjarray = contextobj.projectdetail;
  const setprojectdetail = contextobj.setprojectdetail;
  const project = projectsobjarray.filter((n) => n.id === 1);
  const title = useRef(null); // Create a ref for the input element
  const str="pavan";
  // const handleEdit = () => {
  //   // Access the input value directly using the ref
  //   console.log(title.current.value); // Logs the current value of the input
  //   // You can now manually handle updating the project title or other logic
  // };

  return (
    <div>
      <input
        type="text"
        defaultValue= {project[0].projectdesc} // Use defaultValue with uncontrolled components
        ref={title} // Attach the ref to the input
      />
      <button >Update Project</button>
    </div>
  );
}
export default ProjectComponent;