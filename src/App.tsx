import React, { MouseEventHandler } from 'react'
import './scss/_base.scss';
import Header from './Components/Header/Header';
import { Context } from './Context';
import HomePage from './Pages/Home/HomePage';

function App() {
  
  return (
    <div className="App">
      <Header />

      <HomePage />
    </div>
  );
}

export default App;
