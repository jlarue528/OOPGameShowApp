/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.startGame();
    }

    createPhrases() {
        const phrases = [
           new Phrase('Whoever said orange is the new pink was seriously disturbed'), 
           new Phrase('You must always have faith in people. And, most importantly, you must always have faith in yourself'),
           new Phrase('You Need To Have A Little More Faith In People, You Might Be Surprised'),
           new Phrase('You Hold More Cards Than You Think You Do'),
           new Phrase('believe in yourself')
       ]
       return phrases;
    }

    getRandomPhrase() {
        const phraseLength = this.phrases.length;
        const randomNumber = Math.floor(Math.random() * phraseLength);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    }

    startGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.visibility = 'hidden';

        return this.getRandomPhrase().addPhraseToDisplay();
    }
}