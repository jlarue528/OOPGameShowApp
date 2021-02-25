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
        this.active = null;
    }

    getRandomPhrase () {
        const phrases = this.phrases;

        let randomNumber = Math.floor(Math.random() * phrases.length);
        let randomPhrase = this.phrases[randomNumber];
        return randomPhrase
    }
 }