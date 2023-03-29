import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navigation';
import CalculatorPage from './pages/Calculator';
import QuotePage from './pages/Quote_API';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </>
  );
}

export default App;
