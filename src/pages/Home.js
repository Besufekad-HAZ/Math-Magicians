import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbMathSymbols } from 'react-icons/tb';
import { BiBrain } from 'react-icons/bi';

const HomePage = () => (
  <section className="page main-page">
    <h2>Welcome to Math Magicians page!</h2>
    <p>
      Welcome to Math Magicians, where calculations and inspiration come
      together. Using this Online calculator, you can do math calculations with
      ease.
    </p>
    In Addition there are some motivational quotes about Math and Computers to
    keep you inspired while doing your Calculation.
    <p />
    <ul className="button-group">
      <li key={1}>
        <NavLink to="/calculator" className="link-btn">
          Start Calculation
          <span className="symbol-icon">
            <TbMathSymbols />
          </span>
        </NavLink>
      </li>
      <li key={2}>
        <NavLink to="/quote" className="link-btn">
          Read Inspirational Quote
          <span className="quote-icon">
            <BiBrain />
          </span>
        </NavLink>
      </li>
    </ul>
  </section>
);

export default HomePage;
