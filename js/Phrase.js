/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        //create one list item for each letter
        //loop through phrase to do this
        let phrase = this.phrase;
        for(let i = 0; i < phrase.length; i++ ) {
            //list item you want to add
            let letterListItem = document.createElement('li'); 
            //where will you add it to - parent element
            let parent = document.querySelector('#phrase ul')
            //create list item for each letter [i]
            parent.appendChild(letterListItem)[i];

            if(phrase[i] === ' ') {
                letterListItem.setAttribute('class', 'space')
            } else {
                letterListItem.setAttribute('class', `Hide Letter ${phrase[i]}`)
            }
            return letterListItem.innerHTML = `${phrase[i]}`
        }    
    }
};