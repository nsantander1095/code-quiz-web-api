// starting state is just 'start'
var state = "start";
// grabbing the individual elements that I need
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var submitScoreBtn = document.querySelector("#end button");
var quizTitle = document.querySelector("#quiz #title");
var questionsEl = document.querySelector("#questions");

// will create an array of questions that are fully built out

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    possibleChoices: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts",
  },
  {
    title: "The condition in an if/else statement is enclosed in:",
    possibleChoices: [
      "quotes",
      "curly braces",
      "parentheses",
      "square brackets",
    ],
    correct: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store:",
    possibleChoices: [
      "numbers and strings",
      "booleans",
      "other arrays",
      "all of the above",
    ],
    correct: "all of the above",
  },
  {
    title:
      "String values must be enclosed within what when being assigned to variables:",
    possibleChoices: ["commas", "curly braces", "quotes", "parentheses"],
    correct: "quotes",
  },
];
var cursor = 0;
// state manager
function displayState() {
  if (state === "start") {
    startEl.style.display = "block";
    quizEl.style.display = "none";
    endEl.style.display = "none";
  }
  if (state === "quiz") {
    startEl.style.display = "none";
    quizEl.style.display = "block";
    endEl.style.display = "none";
    displayQuestion();
  }
  if (state === "end") {
    startEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = "block";
  }
}
// initializer
function init() {
  displayState();
}
// reset function
function reset() {
  state = "start";
  cursor = 0;
  init();
}
// displays the questions in order
function displayQuestion() {
  state = "quiz";
  var question = questions[cursor];
  questionsEl.innerHTML = null;
  quizTitle.textContent = question.title;
  for (answer of question.possibleChoices) {
    var liEl = document.createElement("button");
    liEl.textContent = answer;
    questionsEl.appendChild(liEl);
  }
  return liEl;
//   code below is broken, didnt want to delete all at once so I know what I was trying to do.
//   for (var i = 0; i < questions[cursor].possibleChoices.length; i++) {
//     var choiceButton = document.createElement("button");
//     choiceButton.textContent = questions[cursor].possibleChoices[i];
//     choiceButton.addEventListener("click", function () {
//       checkChoice();
//     });
//     quizEl.append(choiceButton);
//   }
}

function checkChoice(choice) {
  if (choice == questions[cursor].correct.value) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}
// resets the quiz when score is submitted
submitScoreBtn.addEventListener("click", function () {
  reset();
});
// starts quiz, displays first question
startBtn.addEventListener("click", function () {
  displayQuestion();
  displayState();
});

// liEl.addEventListener("click", function(event) {
//     event.preventDefault();
//     var element = event.target;
//     if (element.textContent === questions[cursor].correct) {
//         var index = Array.from(element.parentElement.children).indexOf(element);
//         console.log(index);
//         cursor++;

//         if (cursor >= questions.length) {
//             state = "end";
//             displayState();
//         } else {
//             displayQuestion();
//         }
//     }
// })

// continues to display questions in order
quizTitle.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("h2")) {
    var index = Array.from(element.parentElement.children).indexOf(element);
    console.log(index);
    cursor++;

    if (cursor >= questions.length) {
      state = "end";
      displayState();
    } else {
      displayQuestion();
    }
  }
});
// calling initializer
init();
