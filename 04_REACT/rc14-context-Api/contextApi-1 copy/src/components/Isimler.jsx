import { useContext } from "react";
import { KullaniciContext } from "../context/KullaniciProvider"
import AnaUser from "./AnaUser";

const Isimler = () => {


    const { users } = useContext(KullaniciContext);


  return (
    <div>
        {users.slice(0,4).map((a)=>(
            <div key={a.id} style={{background:"pink",
            textAlign:"center"}}>
                <h4>{a.login}</h4>
            </div>
        ))}
        <AnaUser />
    </div>
  )
}

export default Isimler