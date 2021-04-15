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
        let positiveCheck = [];
        let nonMatched = [];
        const activeGamePhrase = game.activePhrase;
        for(let i = 0; i < activeGamePhrase.length; i++) {
            if(activeGamePhrase[i] === letter) {
                positiveCheck.push(activeGamePhrase[i]);
            } else {
                nonMatched.push(activeGamePhrase[i])
            }
        } 

        if(positiveCheck.length !== 0) {
            return true
        } else {
            return false
        }
    }
    

    // showMatchedLetter(letter) {
    //     if(this.checkLetter(letter)) {
    //         const activeGamePhrase = game.activePhrase.phrase;
    //         const letterBox = document.querySelectorAll('#phrase ul li');
    //         for(let i = 0; i < activeGamePhrase.length; i++) {
    //             if(activeGamePhrase[i] === letter) {
    //                 letterBox[i].className = `show letter ${letter}`;
    //             }
    //         }
    //     }
    // }
}
