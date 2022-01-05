import './GuessedLetters.css';
import React, { useState } from 'react';

export function GuessedLetters(props) {
    const [letter, setLetter] = useState('');
    const [word, setWord] = useState('');

    const handleChangeLetter = (e) => {
        setLetter(e.target.value.toLowerCase());
    }

    const handleChangeWord = (e) => {
        setWord(e.target.value.toLowerCase());
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
                <input id="guessletter" type="text" maxLength="1" pattern="[a-zA-z]{1}" onChange={handleChangeLetter} required />
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
            <form onSubmit={handleSubmitWord}>
                <label>Guess a word:</label>
                <input id="guessword" type="text" minLength="3" maxLength="20" pattern="[a-zA-z]" onChange={handleChangeWord} required />
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
            <h2><u>Guessed Letters</u></h2>
            <h3>{props.guessedLetters.map(elem => elem + ' ')}</h3>
            <h2><u>Guessed Words</u></h2>
            <h3>{props.guessedWords.map(elem => <p>{elem}</p>)}</h3>
        </div>
    );
}