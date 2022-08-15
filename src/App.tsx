import React, { MouseEventHandler } from 'react'
import './scss/_base.scss';
import Header from './Components/Header/Header';
import { Context } from './Context';

function App() {
  const {state: { cart },dispatch} = React.useContext(Context)


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
