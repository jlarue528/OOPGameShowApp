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
        this.activePhrase = this.getRandomPhrase().addPhraseToDisplay();
    }

    
    // handleInteraction() {

    // }

    // checkForWin() {
    //         const activeGamePhraseLength = game.activePhrase.phrase.length;
    //         const letterBox = document.querySelectorAll('#phrase ul li');
    //         let exposedLetter = [];
    //         for(let i = 0; i < letterBox.length; i++) {
    //             if(letterBox[i].className.includes('show letter') || letterBox[i].className.includes('space')) {
    //                 const revealedLetters = exposedLetter.push(letterBox[i]);
    //                 if(revealedLetters.length === activeGamePhraseLength) {
    //                     return true
    //                 } else {
    //                     return false
    //                 }
    //             } 
    //         } 
    //     }
    // }

    // gameOver() {

    }