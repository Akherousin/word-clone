import React from 'react';

function Guess({ word }) {
  let letters = [];

  if (word) {
    letters = word.split('');
  }
  return (
    <>
      {word && (
        <p className="guess">
          {letters.map((letter, index) => (
            <span className="cell" key={index}>
              {letter}
            </span>
          ))}
        </p>
      )}
      {!word && (
        <>
          <p className="guess">
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
        </>
      )}
    </>
  );
}

export default Guess;
