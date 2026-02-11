import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecipeNavbar from '../components/RecipeNavbar';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <RecipeNavbar />
      <Routes>
        <Route path='/' element={<SignIn />} />  
        <Route path='/app/home' element={<Home />} />  
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter