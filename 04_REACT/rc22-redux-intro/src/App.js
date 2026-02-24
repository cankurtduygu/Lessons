import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './components/counter/Counter';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
