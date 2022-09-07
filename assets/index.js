// I need to track the starting point
// I have questions that need to be stored with data
// 5 questions * 15
var currentQuestionIndex = 0;
var time = questions.length * 2;
var timerID;

var timerEl = document.getElementById("timer");
var beginButton = document.getElementById("begin-button");
var allQuestionEl = document.getElementById("all-questions");
var questionChoicesElement = document.getElementById("question-options");
var feedbackEl = document.getElementById("feedback")

// console.log(currentQuestionIndex, time, timerID);
// console.log(timerEl, beginButton, question);
function endQuiz() {
  clearInterval(timerID);

  var endScreen = document.getElementById("end-screen");
  endScreen.removeAttribute("class");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;

  allQuestionEl.setAttribute("class", "hide");
}

function stopwatch() {
  time--;
  timerEl.textContent = time;
    if(time <= 0){
      endQuiz();
    }
}

// function finishedQuestions() {

// }

function beginQuiz () {
  // alert("starting quiz");
  var homePageEl = document.getElementById("home-page")
  homePageEl.setAttribute("class", "hide");

  allQuestionEl.removeAttribute("class");
  timerID = setInterval(stopwatch,1000)

  timerEl.textContent = time;

  //questions need to pop up now that we have the timer
  var currentQuestion = questions[currentQuestionsIndex];
  var titleEl = document.getElementsByClassName("question-name")
  titleEl.textContent = currentQuestion["title"];
  choiceEl.innerHTML = "";

  for(var index = 0; index < currentQuestion["choices"].length; index++){
    var choice = currentQuestion["choices"][index];
    var choiceElement = document.createElement('button');
    choiceElement.setAttribute("class", "choice");
    choiceElement.setAttribute("value", choice);
    choiceElement.textContent = `${index + 1}. ${choice}`
    questionChoicesElement.appendChild(choiceElement);
  }
}

beginButton.addEventListener("click", beginQuiz);

// beginButton.onclick = beginQuiz