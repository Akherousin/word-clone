import React from 'react';
import { range } from '../../utils';

function Guess({ word, status }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${status?.[num].status || ''}`}>
          {word ? status?.[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
