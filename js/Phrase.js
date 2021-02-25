/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phrase = this.phrase;
        //Looping through the letters of the phrase
        for(let i = 0; i < phrase.length; i++ ) {
            //Create new list item
            let letterListItem = document.createElement('li');
            //Select Parent Element
            const parent = document.querySelector('#phrase ul'); 
           
            //conditional statement that evaluates if the letter is ' ' then
            // add a new element and give it the className space
            // All other conditions will create a letter list item with the class
            // hide letter {letter}
            if(phrase[i] === ' ') {
                parent.appendChild(letterListItem)
                letterListItem.className = 'space';
            } else {
                parent.appendChild(letterListItem)
                letterListItem.className = `hide letter ${phrase[i]}`
            }
        }
    }
};