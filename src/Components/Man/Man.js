import './Man.css';
import React from 'react';

export function Man(props) {
    const renderHangman = (guesses) => {
        let image;
        while(guesses < 2001) {
            switch(guesses) {
                case 0:
                    image = <img src={ require('../../hangman_images/part1.png').default } alt="hangman" />
                    break;
                case 1:
                    image = <img src={ require('../../hangman_images/part2.png').default } alt="hangman" />
                    break;
                case 2:
                    image = <img src={ require('../../hangman_images/part3.png').default } alt="hangman" />
                    break;
                case 3:
                    image = <img src={ require('../../hangman_images/part4.png').default } alt="hangman" />
                    break;
                case 4:
                    image = <img src={ require('../../hangman_images/part5.png').default } alt="hangman" />
                    break;
                case 5:
                    image = <img src={ require('../../hangman_images/part6.png').default } alt="hangman" />
                    break;
                case 6:
                    image = <img src={ require('../../hangman_images/part7.png').default } alt="hangman" />
                    break;
                case 7:
                    image = <img src={ require('../../hangman_images/part8.png').default } alt="hangman" />
                    break;
                case 8:
                    window.location.reload(false);
                    break;
                //win condition
                case 2000:
                    image = <img src={ require('../../hangman_images/youwin.jpeg').default } alt="hangman" />
                    break;
                default:
                    return <img src="" alt="hangman" />
            }
            return image;
        }
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

        //win condition
        for(let z = 0; z < guessedWords.length; z++) {
            if(guessedWords[z] === word) {
                numWrongGuesses = 2000;
            }
        }
        if(numWrongGuesses === 2000) {
            return 2000;
        }
        else {
            numWrongGuesses = totalGuesses - numRightGuesses; 
            return numWrongGuesses;
        }

    }

    return (
        <div className="Man">
            {renderHangman(calculateWrongGuesses(props.guessedLetters, props.guessedWords, props.word))}
        </div>
    );
}