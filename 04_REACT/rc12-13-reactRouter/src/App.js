import "./App.css";

import AppRouter from "./router/AppRouter";

// Toastify kütüphanesini kullanabilmek için yarn add ile ekliyoruz, indexedDB.js ye teşekkür yolu ekliyoruz, App.js ye (bütün projede kullanmak istiyorsak)   <ToastContainer /> etiketini ekliyoruz


function App() {
  return (
    <div>
    <AppRouter />

    

    </div>
  );
}

export default App;
