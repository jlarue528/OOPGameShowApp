/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
        * Creates phrases for use in game
        * @return {array} An array of phrases that could be used in the game
    */
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

    /**
        * Selects random phrase from phrases property
        * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const phrases = this.phrases;
        const randomNumber = Math.floor(Math.random() * phrases.length);
        const randomPhrase = phrases[randomNumber];
        return randomPhrase;
    }

    /**
     *  Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.visibility = 'hidden';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
        * Handles onscreen keyboard button clicks
        * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;

        if(this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
                this.gameOver();
            };
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
        * Checks for winning move
        * @return {boolean} True if game has been won, false if game wasn't won
    */
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

    /**
        * Increases the value of the missed property
        * Removes a life from the scoreboard
        * Checks if player has remaining lives and ends game if player is out
    */
    removeLife = () => {
        const lives = document.querySelectorAll(".tries img");
        let heartsRemaining = this.missed;
        
        lives[heartsRemaining].src = "images/lostHeart.png";
        this.missed++;
        if (this.missed === 5) {
          this.gameOver(false);
        }
    };

    /**
        * Displays game over message
        * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        gameWon = this.checkForWin();
        const overlay = document.getElementById('overlay');
        const title = document.getElementById("game-over-message")
        overlay.style.visibility = 'visible';
        
        if(gameWon) {
            overlay.classList.remove('start');
            overlay.classList.add('win');
            title.innerHTML = 'YOU WON, CONGRATS!';
            this.resetGameBoard();
        } else {
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            title.innerHTML = 'Better luck next time, you lost.';
            this.resetGameBoard();
        }
    }

    /**
        * Resets gameboard by removing previous phrase elements & restores lives 
     */

    resetGameBoard() {
        const phraseElement = document.querySelectorAll("#phrase ul li");
            for(let i = 0; i < phraseElement.length; i++) {
                let listItem = phraseElement[i];
                listItem.parentNode.removeChild(listItem);
            }

            const buttons = document.getElementsByClassName("key");
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
                
                if(buttons[i].classList.contains("chosen")) {
                    buttons[i].classList.remove("chosen")
                } else if (buttons[i].classList.contains("wrong")) {
                    buttons[i].classList.remove("wrong")
                }
            }

            const restoredLives = document.querySelectorAll(".tries img");
            for(let i = 0; i < restoredLives.length; i++) {
                restoredLives[i].src = 'images/liveHeart.png'
            }
    }
}
