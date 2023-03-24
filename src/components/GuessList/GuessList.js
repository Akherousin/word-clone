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
        <Guess word={word} key={id} />
      ))}
      {emptyRows.length > 0
        ? emptyRows.map((emptyRow) => <Guess key={emptyRow} />)
        : null}
    </div>
  );
}

export default GuessList;
