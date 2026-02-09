import React, { useContext } from 'react'
import AnaUser from './AnaUser'
import { KullaniciContext } from '../context/KullaniciProvider'

const Isimler = () => {


    //! 4-(context consumer) globalde (mesela App.js de veya actigimiz context alaninda) tanimladigim degerleri buraya cagirdik.
    

    const {users} = useContext(KullaniciContext)

  return (
    <div>
        {users.slice(0,4).map((a)=>(
            <div key={a.id} style={{background:"pink", textAlign:"center"}}>
                <h4>{a.login}</h4>
            </div>
        ))}

        <AnaUser/>
    </div>
  )
}

export default Isimler