import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const PrivateRouter = () => {
  return localStorage.getItem("email")==="dyg.cankurt17@gmail.com" && localStorage.getItem("sifre")==="12345" ? <Outlet /> : <Navigate to="/login" />

  // kullanici doğru  isim girdiyse Outlet componenti sayesinde istenilen sayfaya git,yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir
}

export default PrivateRouter