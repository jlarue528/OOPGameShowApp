/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
    * creates a new instance of the gameboard once the start button is clicked
    * once start button is selected - a new game is started
*/
let game;
const startButton = document.getElementById("btn__reset");
startButton.addEventListener('click', () => {
    game = new Game()
    game.startGame();
});


/**
    * creates event listener for every selectable key on the gameboard
*/
const keys = document.querySelectorAll("#qwerty .keyrow .key");
for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });
}