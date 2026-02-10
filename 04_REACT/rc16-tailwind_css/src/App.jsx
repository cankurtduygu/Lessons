import './App.css';
import Sizing from './components/Sizing';
import Responsive from './components/Responsive';

function App() {
  return (
    <>
      <div className="bg-gray-800 h-20 min-h-screen text-white">
        {/* <Sizing /> */}
        <Responsive />
      </div>
    </>
  );
}

export default App;
