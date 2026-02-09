import { createContext, useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import data from "./data"

//! 1- context alani acalim

export const StudentContext = createContext();



function App() {

  const [students, setStudents] = useState(data)

  const changeColor = (id, renk) => {

  setStudents(students.map((a)=> a.id===id ? {...a, color:renk} : a))

}

  return (
    //! 2-Bütün projeye gönderilecek veriler icin actigimiz context alaniyla Home u sarmalladik Provider ettik.
    <StudentContext.Provider value={{students, changeColor}}>
    <Home/>
    </StudentContext.Provider>
     

  );
}

export const useStudentContext= ()=>{
  return useContext(StudentContext)
}

export default App;
