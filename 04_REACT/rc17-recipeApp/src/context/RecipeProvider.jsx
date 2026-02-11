import React, { createContext, useState } from 'react';
import axios from 'axios';

export const RecipeContext = createContext();

const RecipeProvider = ({children}) => {

  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");

  const [yemekler, setYemekler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("")

  const getData = async () => {

    const {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    setYemekler(data.meals);
    console.log(yemekler);

  }

  // getData();

  const veriler = {
    username,
    setUsername,
    password,
    setPassword,
    setQuery,
    getData,
    yemekler
  }

  return (
    <RecipeContext.Provider value={veriler}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
