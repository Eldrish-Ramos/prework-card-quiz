// Test code for creating cards and displaying them

let firstCardSet = [];

const cardSet = {
    term: "",
    description: "",
    question: "",
    answer: ""
};

function createCard(term, description, question, answer)
{
    cardSet.term = term;
    cardSet.description = description;
    cardSet.question = question;
    cardSet.answer = answer;
    return cardSet;
}

function storeToLocal(object)
{
    firstCardSet.push(object);
    localStorage.setItem('FlashCard', JSON.stringify(firstCardSet));
}

function getRandomCard(max) {
    return Math.floor(Math.random() * max);
    //return num;
  }

//const card1 = createCard("HTML", "Contains most of the informaiton about a webpage", "what does the body element represent", 0);
const card1 = createCard("Card1", "This is card 1", "what does the body element represent", 0);
const card2 = createCard("Card2", "This is card 2", "what does the body element represent", 0);
const card3 = createCard("Card3", "This is card 3", "what does the body element represent", 0);
const card4 = createCard("Card4", "This is card 4", "what does the body element represent", 0);
const card5 = createCard("Card5", "This is card 5", "what does the body element represent", 0);
const card6 = createCard("Card6", "This is card 6", "what does the body element represent", 0);
const card7 = createCard("Card7", "This is card 7", "what does the body element represent", 0);
const card8 = createCard("Card8", "This is card 8", "what does the body element represent", 0);

storeToLocal(card1);
// storeToLocal(card2);
// storeToLocal(card3);
// storeToLocal(card4);
// storeToLocal(card5);
// storeToLocal(card6);
// storeToLocal(card7);
// storeToLocal(card8);



