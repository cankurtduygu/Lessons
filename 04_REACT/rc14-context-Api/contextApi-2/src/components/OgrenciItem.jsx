
// import { useContext } from "react";
import { useStudentContext } from "../App";
import Card from "./Card";
// import { StudentContext } from "../App";

const OgrenciItem = () => {

  //! 3 -(context consumer)

  // const {students, changeColor} = useContext(StudentContext);

  const {students, changeColor} = useStudentContext();


  return (
    <div>
    {students.map((a)=>(
      <div style={{background:a.color, display:"flex", justifyContent:"space-between"}} key={a.id}>
        <div>
          <h3>NAME: {a.name} </h3>
          <h4>EMAIL: {a.email}</h4>
          <h4>AGE: {a.age}</h4>
          Color: 
          <input type="text" value={a.color}
                 onChange={(e)=>changeColor(a.id, e.target.value)} 
                  
                 />
        </div>
        <Card name={a.name} />
      </div>
    ))}
 
         
    
    </div>
  );
};

export default OgrenciItem;
