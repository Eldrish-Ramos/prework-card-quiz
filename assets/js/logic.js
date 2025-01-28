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