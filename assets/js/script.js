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
let card1 = createCard("Card1", "This is card 1", "what does the body element represent", 0);
let card2 = createCard("Card2", "This is card 2", "what does the body element represent", 0);
let card3 = createCard("Card3", "This is card 3", "what does the body element represent", 0);
let card4 = createCard("Card4", "This is card 4", "what does the body element represent", 0);
let card5 = createCard("Card5", "This is card 5", "what does the body element represent", 0);
let card6 = createCard("Card6", "This is card 6", "what does the body element represent", 0);
let card7 = createCard("Card7", "This is card 7", "what does the body element represent", 0);
let card8 = createCard("Card8", "This is card 8", "what does the body element represent", 0);

storeToLocal(firstCardSet, card1);
storeToLocal(firstCardSet, card2);
storeToLocal(firstCardSet, card3);
storeToLocal(firstCardSet, card4);
storeToLocal(firstCardSet, card5);
storeToLocal(firstCardSet, card6);
storeToLocal(firstCardSet, card7);
storeToLocal(firstCardSet, card8);

let randCard = getRandomCard(firstCardSet.length);
console.log(firstCardSet[randCard]);


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
    const cardContainer = document.querySelector('.grid');
    const cards = Array.from(cardContainer.children);

    if (resetCardsButton) {
        resetCardsButton.addEventListener('click', () => {
            // Get all card elements
            const cards = cardContainer.querySelectorAll('.s12');
            
            // Reset each cards
            cards.forEach((card, index) => {
                const title = card.querySelector('h5');
                const content = card.querySelector('p');
                
                title.textContent = `Flashcard ${index + 1}`;
                content.textContent = `Content of the flashcard ${index + 1}`;
            });
            
            // Clear and reset localStorage
            localStorage.clear();
            firstCardSet = [];
            
            // puts cards in order
            [card1, card2, card3, card4, card5, card6, card7, card8].forEach((card, index) => {
                card = createCard(`Card${index + 1}`, `This is card ${index + 1}`, "what does the body element represent", 0);
                storeToLocal(firstCardSet, card);
            });
        });
    }

    if (shuffleButton) {
        shuffleButton.addEventListener('click', () => {
            const shuffledCards = shuffleCards(cards);
            // Remove existing cards
            cardContainer.innerHTML = '';
            // Add shuffled cards back
            shuffledCards.forEach(card => cardContainer.appendChild(card));
        });
    }
};
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//card flipping
const cards = document.querySelectorAll('.flip-card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.card').classList.toggle('flipCard');
    });
});
