import React from 'react';

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, word }) => (
        <p className="guess" key={id}>
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
