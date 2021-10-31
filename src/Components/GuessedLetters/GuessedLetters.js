import './GuessedLetters.css';
import React, { useState } from 'react';

export function GuessedLetters(props) {
    const [letter, setLetter] = useState('');
    const [word, setWord] = useState('');

    const handleChangeLetter = (e) => {
        setLetter(e.target.value);
    }

    const handleChangeWord = (e) => {
        setWord(e.target.value);
    }

    const handleSubmitWord = (e) => {
        e.preventDefault();
        props.handleSubmitWord(word);
        setWord('');
    }

    const handleSubmitLetter = (e) => {
        e.preventDefault();
        props.handleSubmitLetter(letter);
        setLetter('');
    }

    return (
        <div className="guessedletters">
            <form onSubmit={handleSubmitLetter}>
                <label>Guess a letter:</label>
                <input id="guessletter" type="text" maxLength="1" pattern="[A-Za-z]{1}" onChange={handleChangeLetter} />
                <br></br>
                <input type="submit" value="Submit Letter"></input>
            </form>
            <form onSubmit={handleSubmitWord}>
                <label>Guess the word:</label>
                <input id="guessword" type="text" minLength="3" maxLength="20" onChange={handleChangeWord} />
                <br></br>
                <input type="submit" value="Submit Word"></input>
            </form>
            <h2><u>Guessed Letters</u></h2>
            <h3>{props.guessedLetters.map(elem => elem + ' ')}</h3>
            <h2><u>Guessed Words</u></h2>
            <h3>{props.guessedWords.map(elem => <p>{elem}</p>)}</h3>
        </div>
    );
}