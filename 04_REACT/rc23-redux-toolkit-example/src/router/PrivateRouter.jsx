import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

  const {email} = useSelector((state)=>state.yetkiSlice);
  return email ? (<Outlet/>) : (<Navigate to="/login"/>)
}

export default PrivateRouter