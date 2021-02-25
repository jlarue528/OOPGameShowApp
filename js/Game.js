/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            {
                phrase: 'You are simply the best'
            }, 
            {
                phrase: 'Life is a garden, dig it'
            },
            {
                phrase: 'Life is beautiful'
            },
            {
                phrase: 'Believe in yourself'
            },
            {
                phrase: 'Never give up, never surrender'
            }
        ];
        this.activePhrase = null;
    }
    
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
 }