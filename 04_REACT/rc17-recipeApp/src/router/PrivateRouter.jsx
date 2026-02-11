import React from 'react'
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeProvider';

const PrivateRouter = () => {

  const {username} = useContext(RecipeContext);
  
  return (
    username ==="ali" ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRouter