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

function randomizeArray(arr)
{
    for (let i = arr.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
        console.log('for loop i = :' + i);
        console.log('random index j = :' + j);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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

//let randCard = getRandomCard(firstCardSet.length);
//console.log(firstCardSet[randCard]);
console.log(firstCardSet);
console.log(randomizeArray(firstCardSet));


