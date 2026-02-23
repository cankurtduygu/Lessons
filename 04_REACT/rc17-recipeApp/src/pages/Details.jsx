import React, { use } from 'react'
import { useLocation } from 'react-router-dom';
import diet from "../assets/diet.svg"

const Details = () => {

  const {state:{recipe}}=useLocation();

  console.log(recipe)
  

  return (
    <div>
      <div className="min-h-screen p-8 bg-gray-100 text-gray-800 ">
        <header className='flex justify-between items-center'>
          <h1 className='text-3xl'>{recipe.strMeal} </h1>
          <img className='w-20 h-20 mr-6' src={diet} alt="" />
        </header>
      </div>

      <div>
        <section>
          <h2></h2>
        </section>
      </div>
    </div>
  )
}

export default Details