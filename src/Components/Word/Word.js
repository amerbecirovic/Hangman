import './Word.css';
import React from 'react';

export function Word(props) {

    const printWord = (word) => {
        let hangmanString = [];
        if(!props.guessedWords.includes(word) && calculateWrongGuesses(props.guessedLetters, props.guessedWords, props.word) < 7) {    
            for(let i = 0; i < word.length; i++) {
                hangmanString[i] = '_'
            }
            for(let i = 0; i < props.guessedLetters.length; i++) {
                for(let j = 0; j < word.length; j++) {
                    if(props.guessedLetters[i] === word[j]) {
                        hangmanString[j] = word[j];
                    }
                }
            }
        }
        else {
            for(let i = 0; i < word.length; i++) {
                hangmanString[i] = word[i];
            }
        }
        return hangmanString;
    }

    const calculateWrongGuesses = (guessedLetters, guessedWords, word) => {
        let totalGuesses = guessedLetters.length + guessedWords.length;
        let numRightGuesses = 0;
        let numWrongGuesses = 0;
        for(let i = 0; i < guessedLetters.length; i++) {
            for(let j = 0; j < word.length; j++) {
                if(guessedLetters[i] === word[j]) {
                    numRightGuesses++;
                }
            }
        }
        numWrongGuesses = totalGuesses - numRightGuesses; 
        return numWrongGuesses;
    }
     
    

    const handleClick = (event) => {
        props.fetchWord();
        props.setGuessedLetters([]);
        props.setGuessedWords([]);
    }

    return (
        <div className="word">
            <br></br>
            <button onClick={handleClick}>Generate New Word</button>
            <h2 className="printedword">{printWord(props.word).map(item => item + ' ')}</h2>
        </div>
    );
}