import "./App.css";
import KullaniciProvider from "./context/KullaniciProvider";
import GosterUsers from "./pages/GosterUsers";


function App() {
  return (
   <KullaniciProvider>
      <GosterUsers/>
   </KullaniciProvider>

    
  );
}

export default App;
