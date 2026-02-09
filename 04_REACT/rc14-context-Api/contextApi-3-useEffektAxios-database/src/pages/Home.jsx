import React, { use, useState, useEffect, createContext } from 'react'
import TutorialsList from '../components/TutorialsList'
import axios from 'axios';
import AddTutorial from '../components/AddTutorial';

//!1. asama
export const BilgiContext = createContext();

const Home = () => {

  const [tutorials, setTutorials] = useState([])


  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET-READ işlemi için TutorialsList componentini kullanalım
  const getBilgiler= async()=>{
    //axios ile verileri çekip TutorialsList e göndericez
    const res = await axios.get(url);
    // console.log(res.data);
    setTutorials(res.data);
  }

   //!DELETE-DELETE işlemi
  const deleteTutorial = async(id) => {
    await axios.delete(`${url}${id}/`);
    // silme işleminden sonra verileri tekrar çekelim
    getBilgiler();
  }

  //! POST-CREATE işlemi için AddTutorial componentini kullanalım

  const postTutorial = async (newTutorial) => {
    await axios.post(url, newTutorial);
    // yeni tutorial eklendikten sonra verileri tekrar çekelim
    getBilgiler();
  }

  //! PUT-UPDATE işlemi için EditTutorials componentini kullanalım

  const putTutorial = async (updatedTutorial) => {
    await axios.put(`${url}${updatedTutorial.id}/`, updatedTutorial);
    // güncelleme işleminden sonra verileri tekrar çekelim
    getBilgiler();
  }


  useEffect(() => {
    getBilgiler();
  }, []);


 

  // component render olduğunda verileri çekmek için useEffect kullanıyoruz
  // useEffect(() => {
  //   getBilgiler();
  // }, []); // boş array ile sadece component mount olduğunda çalışır



  return (
    <>
    <AddTutorial postTutorial={postTutorial}/>

    
    <TutorialsList tutorials={tutorials} deleteTutorial={deleteTutorial} putTutorial={putTutorial} />

    </>
  )
}

export default Home