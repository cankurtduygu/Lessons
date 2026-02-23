import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeNavbar from "../components/RecipeNavbar";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter"
import About from "../pages/About"
import Details from "../pages/Details";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <RecipeNavbar />
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
