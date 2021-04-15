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

    removeLife() {
        const lives = document.querySelectorAll('#scoreboard ol li img');
        let activeLives = [];
        let usedLives = [];

        for(let i = 0; i < lives.length; i++) {
            if(lives[i].src === 'file:///Users/jennifer/Desktop/OOPGameShowApp/OOPGameShowApp/images/liveHeart.png') {
                activeLives.push(lives[i]);
            } else {
                usedLives.push(lives[i]);
            }
        }

        if(this.missed === 5 || activeLives.length === 0) {
            //GAME OVER METHOD
            console.log('gameOver');
        } else {
            activeLives[0].src = 'file:///Users/jennifer/Desktop/OOPGameShowApp/OOPGameShowApp/images/lostHeart.png';
            this.missed += 1;
        }
        console.log(this.missed);
    }

    gameOver() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.visibility = 'hidden';

    }
}

    /** 
* Increases the value of the missed property 
* Removes a life from the scoreboard 
* Checks if player has remaining lives and ends game if player is out */ 

// removeLife()`: This method removes a life from the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png` image 
// (found in the `images` folder) and increments the `missed` property. If the player has five missed guesses 
// (i.e they're out of lives), 
// then end the game by calling the `gameOver()` method. 
