import css from "../styles/individualskill.module.css";

function Individualskills(props) {
  console.log(props.sprogress);

  return (
    <>
    <tr style={{marginTop:"10px",border:"1% black solid"}}>
      <td > {props.sname}
</td>
      <td><div className={`progress`}>
            <div
              class="w3-border"
              style={{
                height: "24px",
                width: props.sprogress + "%",
                backgroundColor: "#8e8eff",
                textAlign: "center",
                color: "black",
                fontWeight: "800",
              }}
            >
              {props.sprogress}%
            </div>
          </div></td>
      <td><div className={css.skillcontent}>
       
        
        <div className={css.notes}>
          <button className="btn btn-primary" href={props.snotes}>Link</button>
        </div>
      </div></td>
    </tr>
      
    </>
  );
}
export default Individualskills;
