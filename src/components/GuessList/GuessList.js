import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessList({ guesses }) {
  const numOfEmptyRows = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const emptyRows = range(0, numOfEmptyRows);

  console.log(emptyRows);

  return (
    <div className="guess-results">
      {guesses.map(({ id, word }) => (
        <p className="guess" key={id}>
          <Guess word={word} />
        </p>
      ))}
      {emptyRows.length > 0
        ? emptyRows.map((emptyRow) => (
            <p className="guess" key={emptyRow}>
              <Guess />
            </p>
          ))
        : null}
    </div>
  );
}

export default GuessList;
