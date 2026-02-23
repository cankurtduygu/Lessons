import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { useNavigate } from 'react-router-dom'

const RecipeCard = () => {


  const {yemekler}=useContext(RecipeContext)
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg-grid-cols-4 gap-8 min-h-screen p-5">
        {yemekler.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="w-100 bg-white dark:bg-gray-800
  shadow-xl rounded-2xl overflow-hidden  transition transform hover:scale-105"
          >
            <img src={recipe.strMealThumb} alt="" />

            <div className='p-4'>
              <p className='text-gray-800 dark:text-white '>{recipe.strMeal}</p>

              <button 
                className='bg-orange-300 py-2 px-4 w-full rounded-xl mt-4'
                onClick={()=>navigate("/details", { state: { recipe } }) }
              
              >Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard