import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import CardDetail from "../pages/CardDetail";
import TeacherDetail from "../pages/TeacherDetail";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile
          başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine
          sahip olması gerekir . */}

        <Route path="/Login" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:no" element={<TeacherDetail />} />

        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:name" element={<CardDetail />} />
        

        {/* şifre kontrolü ile girilebilen sayfalar önce PrivateRouter a yönlendirilir, oradan şifreniz doğruysa istenilen sayfaya gidebilirsiniz */}
        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<ContactForm />} />
        </Route>
        <Route path="/paths" element={<Paths />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
