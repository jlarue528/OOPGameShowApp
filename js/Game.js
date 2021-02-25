/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            {phrase: 'you can do it'}, 
            {phrase: 'do not give up'}, 
            {phrase: 'believe in yourself'}, 
            {phrase: 'you are amazing'}, 
            {phrase: 'love yourself'}
        ];
        this.activePhase = null;
        //this.startGame();
    }

    getRandomPhrase () {
        const phrases = this.phrases;

        let randomNumber = Math.floor(Math.random() * phrases.length);
        let randomPhrase = this.phrases[randomNumber];
        return randomPhrase
    }

    startGame() {
        //hides the start screen overlay
        const overlay = document.getElementById('overlay');
        overlay.style.visibility = 'hidden';

        //calls the `getRandomPhrase()` method to select a Phrase object from the Game
        // object’s array of phrases,
        let randomPhrase = this.getRandomPhrase();
        //returns object
    
        //then adds the phrase to the gameboard by calling the
        //`addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase
        //object. 

        //selected phrase object
        //passing in string to new Phrase 
        let startPhrase = new Phrase(randomPhrase.phrase);
        //returns selected phrase object

        //apply addPhraseToDisplay() to selected phrase object
        return startPhrase.addPhraseToDisplay();
        
        
        //The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
        //  easily accessed throughout the game.
    }
}