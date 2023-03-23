import React, { useState } from 'react';
import Display from './result-display';
import Keypad from './calc-button';
import calculate from '../logic/calculate';

const Calc = () => {
  const [state, setState] = useState({
    operation: null,
    next: '',
    total: '0',
  });

  const { operation, next, total } = state;
  // events handler section
  const handleClickButton = (buttonName) => {
    const data = calculate(state, buttonName);
    setState(data);
  };

  return (
    <div className="new">
      <Display operation={operation} next={next} total={total} />
      <Keypad onButtonClick={handleClickButton} />
    </div>
  );
};

export default Calc;
