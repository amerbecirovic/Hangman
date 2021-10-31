import './Word.css';
import React, {useState, useEffect} from 'react';


export function Word(props) {

    const generateSpaces = (word) => {
        let spaces = '';
        for(let i = 0; i < word.length; i++) {
            spaces += ' _';
        }
        return spaces;
    }

    const handleClick = (event) => {
        props.fetchWord();
        props.setGuessedLetters([]);
        props.setGuessedWords([]);
    }

    return (
        <div className="word">
            <h2>{generateSpaces(props.word)}</h2>
            <button onClick={handleClick}>Generate New Word</button>
        </div>
    );
}