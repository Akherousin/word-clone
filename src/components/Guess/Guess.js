import React from 'react';

function Guess({ word }) {
  let letters = [];

  if (word) {
    letters = word.split('');
  }
  return (
    <>
      {word &&
        letters.map((letter, index) => (
          <span className="cell" key={index}>
            {letter}
          </span>
        ))}
      {!word && (
        <>
          {' '}
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>{' '}
        </>
      )}
    </>
  );
}

export default Guess;
