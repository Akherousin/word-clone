import { useState } from 'react';

function Form() {
  const [guess, setGuess] = useState({ guess: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    setGuess({ guess: '' });
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess.guess}
        minLength="5"
        maxLength="5"
        onChange={(e) =>
          setGuess({ ...guess, guess: e.target.value.toUpperCase() })
        }
      />
    </form>
  );
}

export default Form;
