import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { ImgDiv, MainContainer, HomeImg } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const Home = () => {
  // Edamam'daki mealTypes yerine TheMealDB Category kullanalım
  const mealTypes = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
  ];

  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0]);
  const [food, setFood] = useState(null);

  const getData = async () => {
    if (!query) {
      console.log("please fill the Form");
      return;
    }

    try {
      // 1) önce query ile arama
      const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        query
      )}`;
      const searchRes = await axios.get(searchUrl);
      const meals = searchRes.data.meals || [];

      // 2) seçilen category (meal) ile filtrele
      const filtered = meals.filter((m) => m.strCategory === meal);

      // 3) senin eski yapına benzetmek için { recipe: ... } şekline sokalım
      const hitsLikeEdamam = filtered.map((m) => ({
        recipe: {
          label: m.strMeal,
          image: m.strMealThumb,
          cuisineType: [m.strArea],      // örn: Turkish, Italian...
          mealType: [m.strCategory],     // seçilen kategori
          url: m.strSource || m.strYoutube || "", // kaynak/youtube
          ingredientLines: Array.from({ length: 20 })
            .map((_, i) => m[`strIngredient${i + 1}`])
            .filter(Boolean),
        },
      }));

      setFood(hitsLikeEdamam);
    } catch (err) {
      console.log("REQUEST ERROR:", err?.response?.data || err.message);
      setFood([]);
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />

      {food && food.length > 0 ? (
        <MainContainer>
          {food.map((liste, index) => (
            <RecipeCardComp key={index} recipe={liste.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;