import './Word.css';
import React, { useState } from 'react';

export function Word(props) {
    
    const [hangmanString, setHangmanString] = useState({});

    const printWord = (word, guessedLetters) => {
        
        if(props.guessedLetters.length === 0 && props.guessedWords.length === 0) {
            let spaces = '';
            for(let i = 0; i < word.length; i++) {
                spaces += ' _';
            }
            return spaces;
        }
        else {
            //find a way to create hangman string
            for(let i = 0; i < props.guessedLetters.length; i++) {
                for(let j = 0; j < word.length; j++) {
                    if(props.guessedLetters[i] === word[j]) {
                        console.log('hit');
                        setHangmanString((hangmanString) => ({...hangmanString, [j]: word[j]}));
                        for(let k = j; k < word.length; k++) {
                            if(props.guessedLetters[j] === word[k]) {
                                //hangmanString[k] = word[k];
                            }
                        }
                        console.log(hangmanString);
                        console.log(props.guessedLetters);
                        props.guessedLetters.splice(i, 1);
                        console.log(props.guessedLetters);
                    }
                }
            }
            
        }
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
            <h2>{printWord(props.word)}</h2>
        </div>
    );
}