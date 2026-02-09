import  { createContext, useEffect, useState } from 'react'

export const KullaniciContext = createContext();

const KullaniciProvider = ({children}) => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://api.github.com/users")
      .then((res)=>res.json())
      .then((data)=> setUsers(data))
  }, [])

  const changeWidth = (id, size) => {
    setUsers(prev =>
      prev.map(a => (a.id === id ? { ...a, width: size } : a))
    );
  }

  return (
    <div>

      <KullaniciContext.Provider value={{users, changeWidth}}>
       {children}

      </KullaniciContext.Provider>
    </div>

  )
}


export default KullaniciProvider