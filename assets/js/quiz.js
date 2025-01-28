//Element Reference Variables
const cardTermBox = document.querySelector('#CARD_TERM');
const cardQuestionBox = document.querySelector('#CARD_QUESTION');
const progressBar = document.querySelector('#TIMED_PROGRESS_BAR')
const trueBtn = document.querySelector('#TRUE_BTN');
const falseBtn = document.querySelector('#FALSE_BTN');
const goNextBtn = document.querySelector('#GO_NEXT_BTN');
const feedbackMsg = document.querySelector('#FEEDBACK_MSG');
const modalMsg = document.querySelector('#MODAL_MESSAGE');
const scoreDisp = document.querySelector('#SCORE_DISPLAY')
const modalConfirmBtn = document.querySelector('#MODAL_CONFIRM');
const HomeBtn = document.querySelector('#nav a:nth-child(2)');
//default hiding the button at the start of the page
goNextBtn.setAttribute('style', "display: none;");

//Variables
let playerScore = 0; 
let secondsLeft = 10;
let timerInterval;
let playerAnswer;
let currentCardIndex = 0;
let loadArray = readfromLocal();

function loadCardData(index, arrayWithData) {
    if (index < arrayWithData.length) {
        cardTermBox.textContent = arrayWithData[index].term;
        cardQuestionBox.textContent = arrayWithData[index].question;
        feedbackMsg.textContent = '';
        secondsLeft = 10;
        progressBar.value = 100;
        setTime();
    } else {
        scoreDisp.textContent = (`You got ${playerScore} points!`);
        modalMsg.show();
        //modalMsg.setAttribute('style', "opacity: 1");
    }
}

function setTime() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        secondsLeft--;
        progressBar.value = (secondsLeft / 10) * 100;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            goNextBtn.setAttribute('style', "display: inline-block;");
        }
    }, 1000);
}

function evaluateAnswer(index, arrayWithData) {
    if (playerAnswer === arrayWithData[index].answer) {
        playerScore += 10;
        console.log("Answer was correct, +10 points!");
        feedbackMsg.textContent = 'Correct!';
        feedbackMsg.style.color = 'green';
    } else {
        console.log("Answer was not correct");
        feedbackMsg.textContent = 'Incorrect!';
        feedbackMsg.style.color = 'red';
    }
    feedbackMsg.classList.add('feedback-large');
    playerAnswer = '';
    goNextBtn.setAttribute('style', "display: inline-block;");
    trueBtn.disabled = true;
    falseBtn.disabled = true;
}

//EVENTS
trueBtn.addEventListener('click', function() {
    console.log("True!");
    clearInterval(timerInterval);
    playerAnswer = true;
    evaluateAnswer(currentCardIndex, loadArray);
});

falseBtn.addEventListener('click', function() {
    console.log("False!");
    clearInterval(timerInterval);
    playerAnswer = false;
    evaluateAnswer(currentCardIndex, loadArray);

});

goNextBtn.addEventListener('click', function () {
    currentCardIndex++;
    loadCardData(currentCardIndex, loadArray);
    
    goNextBtn.setAttribute('style', "display: none;");
    trueBtn.disabled = false;
    falseBtn.disabled = false;
});

modalConfirmBtn.addEventListener('click', function() {
    modalMsg.close();
    location.reload();
});

HomeBtn.addEventListener('click', function() {
    location.assign('index.html');
})

loadCardData(currentCardIndex, loadArray);
//setTime();
