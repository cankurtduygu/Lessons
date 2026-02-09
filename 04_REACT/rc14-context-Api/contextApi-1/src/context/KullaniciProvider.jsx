import React, { createContext, useContext, useEffect, useState } from 'react'


//! 1- Create Context

export const KullaniciContext = createContext();

const KullaniciProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        fetch("https://api.github.com/users")
            .then((res)=> res.json())
            .then((data)=> setUsers(data));
    },[])


    const changeWidth = (id, size) => {

        setUsers(users.map((a) => a.id===id ? {...a, width:size} : a))

    }




  return (
    //! 2- childrenlara gidecek veriler icin Provider (sarmal) yaptik
    <KullaniciContext.Provider value={{users, changeWidth}}>
        {children}
    </KullaniciContext.Provider>
  )
}

//?
  export const useKullaniciFunc = () => {
    return useContext(KullaniciContext)
  }

export default KullaniciProvider