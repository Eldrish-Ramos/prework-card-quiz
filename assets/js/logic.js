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

function storeToLocal(arrayToStore, object)
{
    arrayToStore.push(object);
    localStorage.setItem('FlashCard', JSON.stringify(arrayToStore));
}

function getRandomCard(max) {
    return Math.floor(Math.random() * max);
    //return num;
  }

//const card1 = createCard("HTML", "Contains most of the informaiton about a webpage", "what does the body element represent", 0);
let card1 = createCard("Card1", "This is card 1", "what does the body element represent?", true);
let card2 = createCard("Card2", "This is card 2", "what does the body element represent", true);
let card3 = createCard("Card3", "This is card 3", "what does the body element represent", true);
let card4 = createCard("Card4", "This is card 4", "what does the body element represent", true);
let card5 = createCard("Card5", "This is card 5", "what does the body element represent", true);
let card6 = createCard("Card6", "This is card 6", "what does the body element represent", true);
let card7 = createCard("Card7", "This is card 7", "what does the body element represent", true);
let card8 = createCard("Card8", "This is card 8", "what does the body element represent", true);

storeToLocal(firstCardSet, card1);
storeToLocal(firstCardSet, card2);
storeToLocal(firstCardSet, card3);
storeToLocal(firstCardSet, card4);
storeToLocal(firstCardSet, card5);
storeToLocal(firstCardSet, card6);
storeToLocal(firstCardSet, card7);
storeToLocal(firstCardSet, card8);

//let randCard = getRandomCard(firstCardSet.length);
//console.log(firstCardSet[randCard]);


//unsure where anything below this line goes, but thought maybe commit it somewheree. Codepen says it is correct --ss

// Function to create a new card object
function createCard(term, description, question, answer) {
    return { term, description, question, answer };
}

// Function to get card details from inputs
function getCardDetails() {
    const term = document.querySelector('#term').value;
    const description = document.querySelector('#description').value;
    const question = document.querySelector('#question').value;
    const answer = document.querySelector('#answer').value;

    if (!term || !description || !question || !answer) {
        alert('Please fill out all card details.');
        return null;
    }

    return createCard(term, description, question, answer === 'true');
}

// Function to add cards to the array
function addCards() {
    const cardSetName = prompt('Enter a name for your card set:');
    if (!cardSetName) {
        alert('Card set name is required.');
        return;
    }

    let cards = [];
    let keepAdding = true;

    while (keepAdding) {
        const newCard = getCardDetails();
        if (newCard) {
            cards.push(newCard);
        }

        keepAdding = confirm('Would you like to add another card?');
    }

    // Save to local storage
    localStorage.setItem(cardSetName, JSON.stringify(cards));
    alert(`Card set "${cardSetName}" saved successfully.`);
}

// Page element functionality
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
