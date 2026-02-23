import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
const{username}=useContext(RecipeContext)

  
  return (
   
    username==="ali" ? <Outlet/>: <Navigate to="/"/>
  )
}

export default PrivateRouter