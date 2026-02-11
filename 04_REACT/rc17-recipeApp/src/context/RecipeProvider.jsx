import React, { createContext } from 'react';

export const RecipeContext = createContext();

const RecipeProvider = ({children}) => {
  return (
    <RecipeContext.Provider value={{}}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
