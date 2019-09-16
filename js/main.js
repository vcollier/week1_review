import People from "./modules/DataObject.js";

// IIFE - immediately invoced function expression
(() => {
    console.log('fired!');
    // grab the bio container and get ready to populate its content
    const bioInfo = document.querySelector('.bio-wrapper').children;

    function showProfData() {
        // change data on the page here

        // this is the label on the button (the name)
        let currentProf = this.textContent;

        // this refers ti the heading tag (the first child of the bio-wrapper div)
        bioInfo[0].textContent = People[currentProf].name;
        // this refers to the paragraph tag (the second child of the bio-wrapper div)
        bioInfo[1].textContent = People[currentProf].role;

        bioInfo[2].src = `images/${People[currentProf].pic}`;
    }

    for (let prof in People) {
        console.log(prof);

        // creat a button for every prof (every entry) in our project
        let teamButton = document.createElement('button');

        //set the button's label (text) to the prof name (the current entry in the object)
        teamButton.textContent = prof;

        // dd some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showProfData);

        // add the button to the top section on our web page
        document.querySelector("#section1").appendChild(teamButton);

    }

    


})();