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

//Step 7
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);