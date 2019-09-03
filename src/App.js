import React from 'react';
import Thing from './components/hw';
import Btn from './components/button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Thing/>
      <Btn name="nameHere" />
    </div>
  );
}

export default App;
