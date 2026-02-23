import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "",
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || "",
  );

  const [yemekler, setYemekler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");

  const getData = async () => {
  let url = "";
  try {
    setLoading(true);
    setError(false);

    if (query) {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    } else if (mealType) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealType}`;
    } else {
      return; // Eğer query ve mealType boşsa çık
    }

    const { data } = await axios.get(url);
    setYemekler(data.meals || []);
    setLoading(false);
  } catch (err) {
    setError(true);
    setLoading(false);
    console.log(err);
  }
};
  // const veriler = { username, setUsername, password, setPassword };

  return (
    <RecipeContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        setQuery,
        getData,
        yemekler,
        setMealType,
        loading,
        error
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
