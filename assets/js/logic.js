// Test code for creating cards and displaying them

let firstCardSet = [];

let cardSet = {
    term: "",
    description: "",
    question: "",
    answer: ""
};

function createCard(term, description, question, answer)
{
    cardSet = {};
    cardSet.term = term;
    cardSet.description = description;
    cardSet.question = question;
    cardSet.answer = answer;
    return cardSet;
}

//This function reads any cardset that is stored into local memory - if data returns a parsed array, if no data returns empty array
function readfromLocal(){
    let dataToLoad = localStorage.getItem('FlashCard');
    if(!dataToLoad) return [];
    return JSON.parse(dataToLoad);
}

function storeToLocal(arrayToStore, object){
    arrayToStore.push(object);
    localStorage.setItem('FlashCard', JSON.stringify(arrayToStore));
}

function getRandomCard(max) {
    return Math.floor(Math.random() * max);
    //return num;
  }

//const card1 = createCard("HTML", "Contains most of the informaiton about a webpage", "what does the body element represent", 0);
let card1 = createCard("Card1", "This is card 1", "HTML stands for Hypertext Markup Language?", true);
let card2 = createCard("Card2", "This is card 2", "Every HTML Doc should have a head section with a title inside, and body", true);
let card3 = createCard("Card3", "This is card 3", "The head section of the HTML is viewable on a webpage", false);
let card4 = createCard("Card4", "This is card 4", "H2, H3, and H4, will be larger text than H1", false);
let card5 = createCard("Card5", "This is card 5", "Every webpage closes with /HTML", true);
let card6 = createCard("Card6", "This is card 6", "if you wish a list to be in an order use the tag OL", true);
let card7 = createCard("Card7", "This is card 7", "!DOCTYPE is case sensitive", false);
let card8 = createCard("Card8", "This is card 8", "src= links a file to the HTML", true);

storeToLocal(firstCardSet, card1);
storeToLocal(firstCardSet, card2);
storeToLocal(firstCardSet, card3);
storeToLocal(firstCardSet, card4);
storeToLocal(firstCardSet, card5);
storeToLocal(firstCardSet, card6);
storeToLocal(firstCardSet, card7);
storeToLocal(firstCardSet, card8);

//page functionality
window.onload = function () {
    const resetCardsButton = document.querySelector('#nav a:nth-child(2)');
    const shuffleButton = document.querySelector('#nav a:nth-child(3)');

    if (resetCardsButton) {
        resetCardsButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all cards?')) {
                localStorage.clear();
                alert('All cards have been reset.');
            }
        });
    }

    if (shuffleButton) {
        shuffleButton.addEventListener('click', () => {
            alert('Shuffle functionality is under development.');
        });
    }
};


//let randCard = getRandomCard(firstCardSet.length);
//console.log(firstCardSet[randCard]);


//unsure where anything below this line goes, but thought maybe commit it somewheree. Codepen says it is correct --ss

// Function to create a new card object
//function createCard(term, description, question, answer) {
    //return { term, description, question, answer };
//}

// Function to get card details from inputs
//function getCardDetails() {
    //const term = document.querySelector('#term').value;
    //const description = document.querySelector('#description').value;
    //const question = document.querySelector('#question').value;
    //const answer = document.querySelector('#answer').value;

    //if (!term || !description || !question || !answer) {
        //alert('Please fill out all card details.');
        //return null;
    //}

    //return createCard(term, description, question, answer === 'true');
//}

// Function to add cards to the array
//function addCards() {
    //const cardSetName = prompt('Enter a name for your card set:');
    //if (!cardSetName) {
        //alert('Card set name is required.');
        //return;
    //}

    //let cards = [];
    //let keepAdding = true;

    //while (keepAdding) {
        //const newCard = getCardDetails();
        //if (newCard) {
            //cards.push(newCard);
        //}

        //keepAdding = confirm('Would you like to add another card?');
    //}

    // Save to local storage
    //localStorage.setItem(cardSetName, JSON.stringify(cards));
    //alert(`Card set "${cardSetName}" saved successfully.`);
//}

// Page element functionality
//window.onload = function () {
    //const resetCardsButton = document.querySelector('#nav a:nth-child(2)');
    //const shuffleButton = document.querySelector('#nav a:nth-child(3)');

    //if (resetCardsButton) {
        //resetCardsButton.addEventListener('click', () => {
            //if (confirm('Are you sure you want to reset all cards?')) {
                //localStorage.clear();
                //alert('All cards have been reset.');
            //}
        //});
    //}

    //if (shuffleButton) {
        //shuffleButton.addEventListener('click', () => {
            //alert('Shuffle functionality is under development.');
        //});
    //}
//};
