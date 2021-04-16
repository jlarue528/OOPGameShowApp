/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //Step 2 Test
//  const phrase = new Phrase();
//  const game = new Game();

// //Step 3 Test
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// //Step 4 Test
// const game = new Game();

// game.phrases.forEach((phrase,index) => {
//     console.log(`Phrase - ${index} - phrase: ${phrase.phrase}`);
// });

//Step 5 Test
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };

// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// //Step 6 test
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// //Step 7
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// Step 8
let game;
const startButton = document.getElementById("btn__reset");
startButton.addEventListener('click', () => {
    game = new Game()
    game.startGame();
});

//Step 10

const keys = document.querySelectorAll("#qwerty .keyrow .key");

for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });
}

// const phraseElement = document.querySelectorAll("#phrase ul li");
// for(let i = 0; i < phraseElement.length; i++) {
//     let listItem = phraseElement[i];
//         listItem.parentNode.removeChild(listItem);
// }

// const buttons = document.querySelectorAll("button");
// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].disabled = false;
//     buttons[i].className = 'key';
// }

// const restoredLives = document.querySelectorAll('#scoreboard ol li img')
// for(let i = 0; i < restoredLives.length; i++) {
//     restoredLives[i].src === 'images/liveHeart.png'
// }


// const overlay = document.getElementById('overlay');
// if(overlay.className !== 'start') {
   
//     startButton.addEventListener('click', () => {
//         const phraseElement = document.querySelectorAll("#phrase ul li");
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
//         game = new Game()
//         game.startGame();
//     });
// }