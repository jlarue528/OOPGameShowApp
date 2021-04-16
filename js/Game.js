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

    
    handleInteraction(button) {
        button.disabled = true;

        if(this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
                this.gameOver();
                // this.resetGameBoard();
            };
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

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
    
        for(let i = 0; i < lives.length; i++-1) {
            if(lives[i].src === 'file:///Users/jennifer/Desktop/OOPGameShowApp/OOPGameShowApp/images/liveHeart.png') {
                activeLives.push(lives[i]);
            } else {
                usedLives.push(lives[i]);
            }
        }

        if(usedLives.length === 4) {
            this.gameOver();
        } else {
            activeLives[0].src = 'file:///Users/jennifer/Desktop/OOPGameShowApp/OOPGameShowApp/images/lostHeart.png';
            this.missed += 1;
        }
    }

    gameOver(gameWon) {
        gameWon = this.checkForWin();
        const overlay = document.getElementById('overlay');
        overlay.style.visibility = 'visible';
        const title = document.getElementById("game-over-message")
        
        if(gameWon) {
            overlay.classList.remove('start');
            overlay.classList.add('win');
            title.innerHTML = 'YOU WON, CONGRATS!';
            // this.resetGameBoard();
        } else {
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            title.innerHTML = 'Better luck next time, you lost.';
            // this.resetGameBoard();
        }
    }

    // resetGameBoard() {
    //     const phraseElement = document.querySelectorAll("#phrase ul li");
    //         for(let i = 0; i < phraseElement.length; i++) {
    //             let listItem = phraseElement[i];
    //             listItem.parentNode.removeChild(listItem);
    //         }

    //         const buttons = document.querySelectorAll("button");
    //         for(let i = 0; i < buttons.length; i++) {
    //             buttons[i].disabled = false;
    //             buttons[i].className = 'key';
    //         }

    //         const restoredLives = document.querySelectorAll('#scoreboard ol li img')
    //         for(let i = 0; i < restoredLives.length; i++) {
    //             restoredLives[i].src === 'images/liveHeart.png'
    //         }
    // }
}
