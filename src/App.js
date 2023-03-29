import React from 'react';
import Calc from './component/main-calc';
import ApiQuote from './component/fetch-api';
import './App.css';

function App() {
  return (
    <div className="All">
      <div>
        <Calc />
      </div>
      <div>
        <ApiQuote />
      </div>
    </div>
  );
}

export default App;
