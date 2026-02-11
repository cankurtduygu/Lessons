import React from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100 text-slate-800">
        <Header />
        <RecipeCard />
      </div>
    </div>
  );
};

export default Home;
