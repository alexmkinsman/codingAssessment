// I need to track the starting point
// I have questions that need to be stored with data
// 5 questions * 15
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;

var timerEl = document.getElementById("timer");
var beginButton = document.getElementById("begin-button");
var allQuestionEl = document.getElementById("all-questions");
var questionOptionsElement = document.getElementById("question-options");
var feedbackEl = document.getElementById("feedback")

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
  timerID = setInterval(stopwatch, 1000);

  timerEl.textContent = time;

  //questions need to pop up now that we have the timer
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementsByClassName("question-name");
  titleEl.textContent = currentQuestion["title"];
  questionOptionsElement.innerHTML = "";

  for(var index = 0; index < currentQuestion["options"].length; index++){
    var choice = currentQuestion["options"][index];
    var choiceElement = document.createElement('button');
    choiceElement.setAttribute("class", "choice");
    choiceElement.setAttribute("value", choice);
    choiceElement.textContent = `${index + 1}. ${choice}`;
    questionOptionsElement.appendChild(choiceElement);
  }
}

function questionTrivia(event){
  var buttonEl = event.target;
  if(!buttonEl.matches(".choice")){
      return
  }

  if(buttonEl.value !== questionOptionsElement[[currentQuestionIndex]["answer"]]){
      time -= 15;
      if(time <= 0){
          time = 0;
      }
      timerEl.textContent = time;
      feedbackEl.textContent = "Wrong"
  } else {
      feedbackEl.textContent = "Correct"
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function(){
      feedbackEl.setAttribute("class", "feedback hide");
  },1000)

  currentQuestionsIndex++;
  if(time <= 0 || currentQuestionIndex === questions.length){
      endQuiz()
  } else {
      receivedQuestions();
  }
}

function endQuiz() {
  clearInterval(timerID);

  var endScreen = document.getElementById("end-screen");
  endScreen.removeAttribute("class");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;

  allQuestionEl.setAttribute("class", "hide");
}

questionOptionsElement.addEventListener("click",questionTrivia);
beginButton.addEventListener("click", beginQuiz);

// beginButton.onclick = beginQuiz