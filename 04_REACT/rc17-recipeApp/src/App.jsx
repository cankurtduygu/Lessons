import './App.css';
import RecipeProvider from './context/RecipeProvider';
import AppRouter from './router/AppRouter';

function App() {
  return (
   <RecipeProvider>
    <AppRouter />
   </RecipeProvider>
  );
}

export default App;
