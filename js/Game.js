/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const phrases = [
           new Phrase('You can do it'), 
           new Phrase('You got this'),
           new Phrase('Here we go'),
           new Phrase('Do not give up'),
           new Phrase('believe in yourself')
       ]
       return phrases;
    }

    getRandomPhrase() {
        const phrases = this.phrases;
        const randomNumber = Math.floor(Math.random() * phrases.length);
        const randomPhrase = phrases[randomNumber];
        return randomPhrase;
    }

    startGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.visibility = 'hidden';

        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    
    // handleInteraction() {

    // }

    checkForWin() {
            const activeGamePhraseLength = this.activePhrase.phrase.length;
            const letterBox = document.querySelectorAll('#phrase ul li');
            let exposedLetters = [];
            let hiddenLetters = [];
            for(let i = 0; i < letterBox.length; i++) {

                if(letterBox[i].className.startsWith('show') || letterBox[i].className.startsWith('space')) {
                    exposedLetters.push(letterBox[i]);
                } else {
                    hiddenLetters.push(letterBox[i]);
                }
            }
            
            if(exposedLetters.length === activeGamePhraseLength) {
                return true;
            } else {
                return false;
            }
        }
    }