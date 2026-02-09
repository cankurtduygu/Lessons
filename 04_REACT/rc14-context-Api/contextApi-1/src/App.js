import "./App.css";
import KullaniciProvider from "./context/KullaniciProvider";
import GosterUsers from "./pages/GosterUsers";

function App() {
  return (

    //! 3-context sayfasinda sarmalladigimiz childenlari bvelli etmek icin , App.js 'den dogan tüm childrenlari context alani actigimiz sayfayla sarmalladik. 
    <KullaniciProvider>
       <GosterUsers />
    </KullaniciProvider>
    
  );
}

export default App;
