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
//default hiding the button at the start of the page
goNextBtn.setAttribute('style', "display: none;");

//Variables
let playerScore = 0; 
let secondsLeft = 10;
let timerInterval;
let playerAnswer;
let currentCardIndex = 0;
let loadArray = readfromLocal();

//let testArray = readfromLocal();
//function loadCardData(arrayWithData)
//{
//   cardTermBox.textContent = loadArray[0].term;
//    cardQuestionBox.textContent = loadArray[0].question;
//};

//function setTime() {
    // Sets interval in variable
    //timerInterval = setInterval(function () {
        
        //for(i = 0; i < loadArray.length + 2; i++)
        //{
            //timerInterval = setTimeout(function () {
                //console.log("testing for each second passed" + secondsLeft);
                //secondsLeft--;
                //if (secondsLeft === 0) 
                    //{
                    //clearTimeout(timerInterval);
                    //}
            //}, 1000 * i);
        //}
        // console.log("Running out of time! " + secondsLeft);
        // let currentProgress = progressBar.getAttribute("value");
        // console.log(currentProgress);
        //secondsLeft--;
        // currentProgress = secondsLeft * 10;
        
        // progressBar.setAttribute('value', currentProgress);
        //if (secondsLeft === 0) 
        //{
         //clearInterval(timerInterval);
        // goNextBtn.setAttribute('style', "display: inline-block;");
  //}

//function evaluateAnswer(index, arrayWithData)
//{
    //if(playerAnswer === loadArray[index].answer)
    //{
        //playerScore += 10;
        //console.log("Answer was correct, +10 points!");
        //console.log(arrayWithData[index].answer);
    //}
    //else
    //{
        //console.log("Answer was not correct");
        //console.log(arrayWithData[index].answer);
    //}
    //resetting the player answer to nothing after each evaluation
    //playerAnswer = '';
//}

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
})

loadCardData(currentCardIndex, loadArray);
//setTime();
