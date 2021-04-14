/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay () {
        const phrase = this.phrase;
        for(let i = 0; i < phrase.length; i++) {
            const letter = phrase[i];
            const letterBox = document.createElement('li');
            const parentElement = document.querySelector('#phrase ul');
            parentElement.appendChild(letterBox);
            letterBox.textContent = letter;
            
            if(letterBox.textContent !== " ") {
                letterBox.className = `hide letter ${letter}`;
            } else {
                letterBox.className = 'space';
            } 
        };
    }

    checkLetter(letter) {
        const activeGamePhrase = game.activePhrase.phrase;
        
        let phraseCharacters = [];
            for(let i = 0; i < activeGamePhrase.length; i++) {
                let phraseLetter = activeGamePhrase[i];
                phraseCharacters.push(phraseLetter);
            }

            const letterCheck = phraseCharacters.filter(phraseCharacter => phraseCharacter === letter);
            if(letterCheck.length !== 0) {
                return true
            } else {
                return false
            }
    }
    

    // showMatchedLetter() {

    // }
 }