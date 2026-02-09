import React, { createContext } from 'react'


//! 1- Create Context

export const KullaniciContext = createContext();

const KullaniciProvider = ({children}) => {
  return (
    //! 2- childrenlara gidecek veriler icin Provider (sarmal) yaptik
    <KullaniciContext.Provider value={{}}>
        {children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider