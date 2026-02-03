import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

const PrivateRouter = () => {
  return localStorage.getItem("email")==="dyg.cankurt17@gmail.com" && localStorage.getItem("sifre")==="123456" ? <Outlet/> : <Navigate to="/Login"/>
}

// kullanici doğru  isim girdiyse Outlet componenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir

export default PrivateRouter