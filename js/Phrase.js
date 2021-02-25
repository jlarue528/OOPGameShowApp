/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor (phrase) {
        this.phrase = phrase;
     }

     addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');

        for(let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = `${this.phrase[i]}`;
            if( this.phrase[i] === ' ') {
                li.className = 'space';
            } else {
                li.className += `hide letter ${this.phrase[i]}`
            }

            ul.appendChild(li);
        }
     }
 }