import "./App.css";

import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

// Toastify kütüphanesini kullanabilmek için yarn add ile ekliyoruz, indexedDB.js ye teşekkür yolu ekliyoruz, App.js ye (bütün projede kullanmak istiyorsak)   <ToastContainer /> etiketini ekliyoruz


function App() {
  return (
    <div>
    <AppRouter />
    <ToastContainer />


    

    </div>
  );
}

export default App;
