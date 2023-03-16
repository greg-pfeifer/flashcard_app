


var cardDisplay = document.querySelector('.card-display');
var startBtn = document.querySelector('#start');
var questionDisplay = document.querySelector('#question-display');
var timerDisplay = document.querySelector('#timer-display');
var answerDisplay = document.querySelector('#answer-display');
var nextBtn = document.querySelector('#next');

var currentCardIndex = 0;
var card;
var count = 5;

function promptUserToRestart() {
  var userChoice = confirm('Would you like to restart?');

  if (userChoice) {
    displayCard();
  } else {
    questionDisplay.innerText = 'Have a great day!';
    answerDisplay.classList.add('hide');
    nextBtn.classList.add('hide');
  }
}
function showAnswer() {
  answerDisplay.innerText = card.answer;
  timerDisplay.classList.add('hide');
  nextBtn.classList.remove('hide');
  answerDisplay.classList.remove('hide');

  currentCardIndex++;

  if (currentCardIndex === cards.length) {
    currentCardIndex = 0;
    nextBtn.classList.add('hide');
    promptUserToRestart();
  }
}

function startTimer() {
  timerDisplay.classList.remove('hide');
  timerDisplay.innerText = '5';
  
  var timer = setInterval(function() {
    count--;
    timerDisplay.innerText = count;
    
    if (!count) {
      clearInterval(timer);
      count = 5;
      showAnswer();
    }
  }, 1000);
}


function displayCard() {
  
  card = cards[currentCardIndex];

  cardDisplay.classList.remove('hide');
  
  questionDisplay.innerText = card.question;

  answerDisplay.classList.add('hide');
  nextBtn.classList.add('hide');  
  startTimer();
}

function startFlashCards() {
  startBtn.classList.add('hide');
  displayCard();
}

startBtn.addEventListener('click', startFlashCards);
nextBtn.addEventListener('click', displayCard);

