import Person from "./modules/DataObject.js";

// IIFE - immediately invoced function expression
(() => {
    console.log('fired!');
    // grab the bio container and get ready to populate its content
    const bioInfo = document.querySelector('.bio-wrapper').children;

    // this refers ti the heading tag (the first child of the bio-wrapper div)
    bioInfo[0].textContent = Person.name;
    // this refers to the paragraph tag (the second child of the bio-wrapper div)
    bioInfo[1].textContent = Person.role;

    bioInfo[2].src = `images/${Person.pic}`


})();