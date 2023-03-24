import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addNewGuess = (word) => {
    const newGuess = { id: crypto.randomUUID(), word: word };

    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <Form addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
