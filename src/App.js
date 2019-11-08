import React from 'react';
import saitama from './saitama.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React App testing Github Actions
        </p>
        <img src={saitama} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
