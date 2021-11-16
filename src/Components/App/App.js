import './App.css';
import React, { useState, useEffect } from 'react';
import { Man } from '../Man/Man';
import { Word } from '../Word/Word';
import { GuessedLetters } from '../GuessedLetters/GuessedLetters';

function App() {

  const [word, setWord] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);

  const fetchWord = () => {
    let wordLengthMin = 3;
    let wordLengthMax;
    if(difficulty === 'easy') {
      wordLengthMax = 5;
    }
    else if(difficulty === 'medium') {
      wordLengthMin = 6;
      wordLengthMax = 8;
    }
    else if(difficulty === 'hard') {
      wordLengthMin = 9;
      wordLengthMax = 20;
    }
    const randomWords = require('random-words');
    let word = randomWords();
    while(word.length < wordLengthMin || word.length > wordLengthMax) {
      word = randomWords();
    }
    setWord(word);
  }

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  }

  const handleSubmitLetter = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
    document.getElementById('guessletter').value='';
  }

  const handleSubmitWord = (word) => {
    setGuessedWords([...guessedWords, word]);
    document.getElementById('guessword').value='';
  }

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div className="App">
      <h1>Hangman</h1>
      <form onChange={handleChangeDifficulty}>
        <label>Select difficulty:</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </form>
      <Man
        guessedLetters={guessedLetters}
        guessedWords={guessedWords}
      />
      <Word 
        word={word} 
        fetchWord={fetchWord}
        guessedLetters={guessedLetters}
        guessedWords={guessedWords} 
        setGuessedLetters={setGuessedLetters}
        setGuessedWords={setGuessedWords}
      />
      <GuessedLetters 
        guessedLetters={guessedLetters} 
        handleSubmitLetter={handleSubmitLetter}
        guessedWords={guessedWords}
        handleSubmitWord={handleSubmitWord}
        word={word}
      />
    </div>
  );
}

export default App;
