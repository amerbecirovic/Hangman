import './Man.css';
import React from 'react';

export function Man(props) {
    const renderHangman = (guesses) => {
        let image;
        while(guesses < 8) {
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
                default:
                    return <img src="" alt="hangman" />
            }
            return image;
        }
    }

    const calculateGuesses = (guessedLetters, guessedWords) => {
        let numGuesses = guessedLetters.length + guessedWords.length;
        return numGuesses;
    }

    return (
        <div className="Man">
            {renderHangman(calculateGuesses(props.guessedLetters, props.guessedWords))}
        </div>
    );
}